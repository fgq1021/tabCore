import * as OSS from "ali-oss";
import * as path from "path";
import * as fs from "fs/promises";
import * as SparkMD5 from "spark-md5";
import * as _ from "lodash";
import sift from "sift";

export default class tabServerController {
  public Model;
  public className;
  protected tab;
  public module;
  public ossClient;
  public aliOss;
  private childrenList = {};
  private updateTimer = {};

  constructor(config) {
    Object.assign(this, config);
    if (config.aliOss && config.aliOss.accessKeyId) {
      this.ossClient = new OSS(config.aliOss);
    }
  }

  putTab(tab, module) {
    this.tab = tab;
    this.module = module;
  }

  async get(id: string): Promise<any> {
    const el = await this.Model.findOne({ _id: id });
    if (el) return JSON.parse(JSON.stringify(el));
    else return Promise.reject({ status: "NOT_FOUND", message: "未找到id为 #" + id + " 的" + this.className });
  }

  eventSync(el, _el?) {
    if (_el) {
      this.unitUpdate(this.className + "-" + el._id);
      console.time("findDifferent");
      const parents = el.parents || [], _parents = _el.parents || [], children = el.children || {},
        _children = _el.children || {};
      const parentAdd = _.difference(parents, _parents), parentDelete = _.difference(_parents, parents),
        parentsDifference = parentAdd.concat(parentDelete), childrenDifference = {};
      for (let i in children) {
        if (_children[i]) {
          // const d = _.difference(children[i], _children[i]).concat(_.difference(_children[i], children[i]));
          // if (d.length)
          //   childrenDifference[i] = d;
          if (JSON.stringify(children[i]) !== JSON.stringify(_children[i]))
            childrenDifference[i] = true;
        } else {
          childrenDifference[i] = true;
        }
      }
      // console.log(childrenDifference);
      for (let i in _children) {
        if (!children[i])
          childrenDifference[i] = true;
      }
      console.timeEnd("findDifferent");
      // console.log(childrenDifference, parentsDifference, el, _el);
      // for (let idString of parentsDifference) {
      //   // 元素触发结构更新时不判断头尾，可能为降低效率
      //   // this.childrenRefresh(idString, el._id);
      //   this.childrenRefresh(idString);
      // }
      for (let idString of parentAdd) {
        this.childrenRefresh(idString, el._id);
      }
      for (let idString of parentDelete) {
        this.childrenRefresh(idString, null, el._id);
      }
      for (let parentString in childrenDifference) {
        this.unitUpdate(this.className + "." + el._id + "." + parentString, {
          type: "fixedChange",
          changeId: el._id
        });
      }
    }
  }

  unitUpdate(id, data?: { changeId: any; type: string }, timer?) {
    const res = { id };
    if (data)
      Object.assign(res, data);
    if (timer) {
      if (this.updateTimer[id]) {
        clearTimeout(this.updateTimer[id]);
      }
      this.updateTimer[id] = setTimeout(() => {
        console.log("推送更新：", timer + "ms(延迟)", id);
        this.tab.socket.to(id).emit("update", res);
        delete this.updateTimer[id];
      }, timer);
    } else {
      console.log("推送更新：", id);
      this.tab.socket.to(id).emit("update", res);
    }
  }

  matchReg(array) {
    for (let i in array) {
      if (typeof array[i] === "string") {
        const reg = array[i].match(/^\/(.+)\/(.?)/);
        if (reg) {
          array[i] = new RegExp(reg[1], reg[2]);
        }
      }
    }
    return array;
  }

  async children(parentString, _filter: object = {}, _sort: object = {}, limit: number = 50, skip: number = 0, user?) {
    const emptyOption = JSON.stringify({}), { id, place, key } = this.tab.parsePlaceString(parentString);
    limit = Number(limit);
    skip = Number(skip);
    if (JSON.stringify(_sort) === emptyOption) {
      const el = await this.module.get(id, user), idList = el.children[place + "." + key] || [],
        notFoundList = [], fixedList = [],
        listOption = { skip, total: 0 },
        { filter = {} } = el[place][key] ? el[place][key] : { filter: {} };
      //获取固定的元素
      if (!skip) {
        for (let i in idList) {
          let { units, id } = this.module.parsePlaceString(idList[i]);
          try {
            fixedList.push(await this.tab[units].get(id, user));
          } catch (e) {
            if (e.status === "NOT_FOUND")
              notFoundList.push(i);
          }
        }
        notFoundList.reverse();
        for (let index of notFoundList) {
          el.children[place + "." + key].splice(index, 1);
        }
        if (notFoundList.length)
          el.save(this.tab.me);
        // @ts-ignore
        listOption.fixed = fixedList.length;
      }
      this.matchReg(_filter);
      Object.assign(filter, _filter);
      const authList = await this.childrenWaiter(id, place, key, filter, _sort, limit, skip, user);
      listOption.skip = authList.skip;
      listOption.total = authList.total;
      return this.tab.makeList(fixedList.concat(authList), listOption);
    } else {
      console.log("获取自定义" + this.className + "Children:", "#" + id, place, key, _filter, _sort, limit, skip);
      return this.childrenFromControllerWithOption(id, place, key, _filter, _sort, limit, skip, user);
    }
  }

  async childrenWaiter(id: string, place: string = "data", key: string = "sub",
                       filter: object = {}, sort?, limit: number = 50, skip: number = 0, user?) {
    const childrenId = id + "." + place + "." + key, cache = this.childrenList[childrenId];
    if (cache) {
      if (cache && !cache.waiting)
        return this.childrenFromCache(id, place, key, filter, sort, limit, skip, user);
      else
        return new Promise((resolve, reject) => {
          const timer = setInterval(() => {
            const _cache = this.childrenList[childrenId];
            if (_cache && !_cache.waiting) {
              resolve(this.childrenFromCache(id, place, key, filter, sort, limit, skip, user));
              clearInterval(timer);
            } else if (!_cache) {
              reject();
              clearInterval(timer);
            }
          }, 100);
        });
    } else {
      await this.childrenFromController(id, place, key, sort, limit, skip);
      return this.childrenFromCache(id, place, key, filter, sort, limit, skip, user);
    }
  }

  async childrenFromCache(id: string, place: string = "data", key: string = "sub",
                          filter: object = {}, sort: string = "default", limit: number = 50, skip: number = 0, user?) {
    // console.log("获取缓存" + this.className + "Children:", "#" + id, place, key, limit, skip);
    const { list, total } = this.childrenList[id + "." + place + "." + key];
    this.childrenList[id + "." + place + "." + key].lastRead = new Date();
    const res = [], finder = sift(filter), notFoundList = [];
    let i = 0;
    while ((res.length < (limit + skip)) && (i < total)) {
      let subId = list[i];
      if (!subId) {
        await this.childrenFromController(id, place, key, sort, limit + 50, i);
        subId = list[i];
      }
      try {
        const el = await this.module.get(subId, user);
        if (finder(el))
          res.push(el);
      } catch (e) {
        if (e.status === "NOT_FOUND")
          notFoundList.push(i);
      }
      i++;
    }
    for (let index of notFoundList) {
      this.childrenList[id + "." + place + "." + key].list.splice(index, 1);
    }

    return this.tab.makeList(res, { skip: i, total });
  }

  async childrenFromController(id: string, place: string = "data", key: string = "sub", _sort?, limit: number = 50, skip: number = 0) {
    const el = await this.module.get(id), childrenId = id + "." + place + "." + key, filter = { parents: childrenId },
      //此处为单sort索引，未来改多sort索引时需要改掉此处
      { sort = {} } = el[place][key] ? el[place][key] : { sort: {} };
    this.childrenList[childrenId] = this.childrenList[childrenId] || { list: [] };
    this.childrenList[childrenId].waiting = true;
    this.childrenList[childrenId].sort = sort;
    const list = this.module.assignList(await this.list(filter, sort, limit, skip));
    for (let i in list) {
      this.childrenList[childrenId].list[Number(i) + skip] = list[i]._id;
    }
    this.childrenList[childrenId].total = list.total;
    this.childrenList[childrenId].waiting = false;
    console.log("获取" + this.className + "Children:", "#" + id, place, key, limit, skip);
    return list;
  }

  async lastChildren(id: string, place: string = "data", key: string = "sub", _sort?) {
    const childrenId = id + "." + place + "." + key, children = this.childrenList[childrenId],
      sort = JSON.stringify(children.sort), sorter = { _id: 1 };
    let lastEl;
    if (children.list.length !== children.total) {
      if (sort === JSON.stringify({}) || sort === JSON.stringify({ _id: 1 })) {
        sorter._id = -1;
      } else if (sort === JSON.stringify({ _id: -1 })) {
        sorter._id = 1;
      }
      const list = this.module.assignList(await this.list({ parents: childrenId }, sorter, 1));
      lastEl = list[0];
    } else {
      lastEl = this.module.get(children.list[children.total - 1]);
    }
    return lastEl;
  }

  // async childrenFromController(id: string, place: string = "data", key: string = "sub", _sort?, limit: number = 50, skip: number = 0) {
  //   const el = await this.module.get(id), childrenId = id + "." + place + "." + key, filter = { parents: childrenId },
  //     //此处为单sort索引，未来改多sort索引时需要改掉此处
  //     { sort = {} } = el[place][key] ? el[place][key] : { sort: {} };
  //   this.childrenList[childrenId] = this.childrenList[childrenId] || { list: [] };
  //   this.childrenList[childrenId].waiting = true;
  //   if (skip === 0)
  //     limit = 100000;
  //   const list = this.module.assignList(await this.list(filter, sort, limit, skip));
  //   if (list.total <= limit && skip === 0) {
  //     this.childrenList[childrenId].fullCache = true;
  //     this.childrenList[childrenId].list = list;
  //   } else {
  //     for (let i in list) {
  //       this.childrenList[childrenId].list[Number(i) + skip] = list[i];
  //     }
  //   }
  //   this.childrenList[childrenId].total = list.total;
  //   this.childrenList[childrenId].waiting = false;
  //   console.log("获取" + this.className + "Children:", "#" + id, place, key, this.childrenList[childrenId].fullCache ? "[cached] " + list.total : "caching-" + limit + "-" + skip);
  //   return list;
  // }

  async childrenRefresh(parentString, addId?, delId?) {
    console.log("childrenRefresh:", parentString);
    const { id, place, key } = this.tab.parsePlaceString(parentString);
    const children = this.childrenList[parentString];
    // console.log(children.total);
    if (children) {
      await this.childrenFromController(id, place, key);
      if (addId) {
        let emitted = false;
        const firstEl = children.list[0];
        if (firstEl && firstEl._id === addId) {
          //触发列表头部添加
          this.unitUpdate(this.className + "." + parentString, { type: "addFirst", changeId: addId });
          emitted = true;
        }

        const lastEl = await this.lastChildren(id, place, key);
        if (lastEl && lastEl._id === addId && !emitted) {
          //触发列表尾部添加
          this.unitUpdate(this.className + "." + parentString, { type: "addLast", changeId: addId });
          emitted = true;
        }

        if (!emitted) {
          this.unitUpdate(this.className + "." + parentString);
        }
        const parent = await this.module.get(id, this.tab.me);
        // if (parent.childrenPushed)
        parent.childrenPushed(parentString, addId);
      } else {
        this.unitUpdate(this.className + "." + parentString);
        if (delId) {
          const parent = await this.module.get(id, this.tab.me);
          // if (parent.childrenDeleted)
          parent.childrenDeleted(parentString, delId);
        }
      }
    }
  }

  deleteFromChildren(id) {

  }

  async childrenFromControllerWithOption(id: string, place: string = "data", key: string = "sub",
                                         _filter: object = {}, _sort: object = {}, limit: number = 50, skip: number = 0,
                                         user) {
    const el = await this.module.get(id, user),
      { filter = {}, sort = {} } = el[place] ? el[place][key] : { filter: {}, sort: {} },
      idList = el.children[place + "." + key] || [], fixedList = [];
    //获取固定的元素
    if (!skip) {
      for (let i in idList) {
        let [unit = this.className, id] = idList[i].split("-");
        fixedList[i] = await this.tab[unit + "s"].get(id, user);
      }
    }
    Object.assign(filter, _filter);
    Object.assign(sort, _sort);
    filter.parents = id + "." + place + "." + key;
    const authList = await this.module.find(filter, sort, limit, skip);
    if (authList.length !== limit)
      limit = authList.length;
    return this.tab.makeList(fixedList.concat(authList), { skip: limit + skip });
  }


  async list(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0): Promise<any> {
    this.matchReg(finder);
    const total = await this.Model.count(finder), listFinder = this.Model.find(finder).sort(sort).skip(skip);
    if (limit > 0) {
      listFinder.limit(limit);
    }
    const list = await listFinder;
    if (list) return this.tab.makeList(this.tab.pureData(list), {
      skip: skip + list.length,
      total,
      filter: finder,
      sort
    });
    else return Promise.reject({ message: "获取列表失败，或您没有查看这些" + this.className + "的权限" });
  }

  async create(el, user?) {
    // console.log(el);
    const rights = this.module.rights(el, user), pushParents = el.pushParents;
    delete el.pushParents;
    const elModel = new this.Model(el);
    if (rights.isAnonymous) {
      delete elModel.owner;
      elModel.accessControl = {};
      return JSON.parse(JSON.stringify(await elModel.save()));
    }
    if (!rights.isRoot)
      elModel.owner = user._id;
    const newEl = await elModel.save();

    for (let idString of newEl.parents) {
      this.childrenRefresh(idString, newEl._id.toString());
    }

    if (pushParents)
      for (let i in pushParents) {
        const { slot, place, key } = this.tab.parsePlaceString(pushParents[i]);
        const pel = await this.tab.get(pushParents[i]);
        await this.module.pushChildren(pel, slot + "." + this.className + "." + newEl._id + "." + place + "." + key, user);
      }
    return JSON.parse(JSON.stringify(newEl));
  }

  writeParse(el, rights, user?) {
    if (rights.isRoot) return el;
    if (rights.isAnonymous || !rights.isOwner) {
      delete el.owner;
      el.accessControl = {};
      return el;
    }
    el.owner = user._id;
    return el;
  }

  // async pushChildren(el, placeString, user?) {
  //   if (!el._id)
  //     el = await this.module.get(el, user);
  //   const rights = this.module.rights(el, user);
  //   if (rights.write()) {
  //     const { units, id, place, key } = this.tab.parsePlaceString(placeString), keyString = place + "." + key;
  //     el.children[keyString] = el.children[keyString] || [];
  //     el.children[keyString].push(units + "-" + id);
  //     await el.save(user);
  //     return el;
  //   } else return Promise.reject({ status: "FORBIDDEN", message: "您没有修改" + this.className + " #" + el._id + " 的权限" });
  // }

  async save(el, user?) {
    const _el = await this.Model.findOne({ _id: el._id }), oldEl = this.tab.pureData(_el);
    el = this.writeParse(el, this.module.rights(oldEl, user), user);
    Object.assign(_el, el);
    await _el.save();
    const newEl = this.tab.pureData(_el);
    // console.log(newEl.updatedAt, oldEl.updatedAt);
    this.eventSync(newEl, oldEl);
    return newEl;
  }

  async delete(id, user) {
    const el = await this.module.get(id);
    await el.refresh();
    const rights = this.module.rights(el, user);
    if (rights.isOwner || rights.isRoot) {
      // if (el.beforeDelete)
      el.beforeDelete();
      await this.Model.deleteOne({ _id: id });
      // if (el.deleted)
      el.deleted();
      this.tab.socket.to(this.className + "-" + id).emit("delete", { id: this.className + "-" + id });
      return Promise.resolve({ message: this.className + " #" + el._id + " 已删除" });
    }
    return Promise.reject({ status: "FORBIDDEN", message: "您没有删除" + this.className + " #" + el._id + " 的权限" });
  }

  async upload(file, id, place?: string, key?: string, p?, user?) {
    const el = await this.module.get(id), rights = this.module.rights(el, user);
    // console.log(el, user, rights);
    if (rights.write()) {
      const filename = file.originalname,
        index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length);
      let md5, storeAs = user._id + "/", url;
      if (index !== 32) {
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(file.buffer);
        md5 = spark.end();
        storeAs += md5 + "." + suffix;
      } else {
        storeAs += filename;
      }
      if (this.ossClient) {
        let result = await this.ossClient.put(storeAs, file.buffer);
        if (this.aliOss.cdnUrl)
          url = this.aliOss.cdnUrl + "/" + storeAs;
        else
          url = result.url;
      } else {
        const storePath = path.resolve(__dirname, `../../../client/assets/${storeAs}`),
          data = new Uint8Array(file.buffer);
        const parentPath = path.dirname(storePath);
        try {
          await fs.access(parentPath);
        } catch (e) {
          await fs.mkdir(parentPath, { recursive: true });
        }
        await fs.writeFile(storePath, data);
        url = `/assets/${storeAs}`;
      }
      if (url) {
        if (place || key) {
          el[place][key] = url;
          return el.save(user);
        }
        return url;
      }
      return Promise.reject({ status: "FORBIDDEN", message: "无法存储该文件，请检查服务器设置" });
    } else return Promise.reject({ status: "FORBIDDEN", message: "您没有修改" + this.className + " #" + el._id + " 的权限" });
  }

  async uploadDirectory(files, id, place = "data", key = "sub", p?, user?) {
    const el = await this.module.get(id), rights = this.module.rights(el, user);
    if (rights.write()) {
      const dir = user._id + "/" + id + "." + place + "." + key + "/";
      let ossUrl = "";
      for (let file of files) {

        const filename = file.fieldname, index = filename.indexOf("/"),
          storeAs = dir + filename.substring(index + 1, filename.length);
        // console.log(storeAs)
        if (this.ossClient) {
          let result = await this.ossClient.put(storeAs, file.buffer);
          ossUrl = result.url;
        } else {
          const storePath = path.resolve(__dirname, `../../../client/assets/${storeAs}`),
            data = new Uint8Array(file.buffer);
          const parentPath = path.dirname(storePath);
          try {
            await fs.access(parentPath);
          } catch (e) {
            await fs.mkdir(parentPath, { recursive: true });
          }
          await fs.writeFile(storePath, data);
        }
      }
      let url = "";
      if (this.ossClient) {
        if (this.ossClient.options.cdnUrl)
          url = this.ossClient.options.cdnUrl + "/" + dir;
        else {
          url = ossUrl.split(dir)[0] + dir;
        }
      } else {
        url = `/assets/${dir}`;
      }
      el[place][key] = url;
      return el.save(user);
    } else return Promise.reject({ status: "FORBIDDEN", message: "您没有修改" + this.className + " #" + el._id + " 的权限" });
  }
}
