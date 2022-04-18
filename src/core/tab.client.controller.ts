import * as SparkMD5 from "spark-md5";
import { reactive } from 'vue'

export class tabClientController {
  public req;
  public apiUrl: string;
  public api: string;
  public module;
  public className;
  protected tab;
  private childrenList = {};

  constructor(config, unit) {
    Object.assign(this, config);
    if (config.apiUrl)
      this.api = config.apiUrl + unit + "/";

  }

  putTab(tab, module) {
    this.tab = tab;
    this.req = tab.req;
    this.module = module;
  }

  apiConfig(progress?) {
    const config = {
      headers: {},
      onUploadProgress: (progressEvent) => {
        if (progress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          progress(percentCompleted);
        }
      }
    };
    if (this.tab.token)
      config.headers = { Authorization: "Bearer " + this.tab.token };
    return config;
  }

  get(id) {
    return this.req.get(this.api + id, this.apiConfig()).then(res => res.data);
  }

  eventSync(el, _el?) {
    if (_el) {
    } else {
      this.watch(this.className + "-" + el._id);
    }
  }

  watch(id) {
    this.tab.socket.emit("watch", { id });
  }

  hotReloadRestart() {
    for (let i in this.module.list) {
      this.watch(this.className + "-" + i);
    }
    for (let i in this.childrenList) {
      this.watch(this.className + "." + i);
    }
  }

  makeList(_data) {
    const list = this.tab.makeList(_data.list, _data);
    for (let i = 0; i < list.length; i++) {
      list[i] = this.tab.assign(list[i]);
    }
    return list;
  }

  children(parentString, filter: object = {}, sort: object = {}, limit: number = 50, skip: number = 0) {
    const emptyOption = JSON.stringify({}), { id, place, key } = this.tab.parsePlaceString(parentString);

    if (JSON.stringify(filter) === emptyOption && JSON.stringify(sort) === emptyOption) {
      return this.childrenWaiter(parentString, limit, skip);
    } else {
      return this.req
        .post(this.api + id + "/children/" + place + "/" + key + "?limit=" + limit + "&skip=" + skip,
          this.apiConfig(), { filter, sort })
        .then(res => this.makeList(res.data));
    }
  }

  async childrenWaiter(parentString, limit: number = 50, skip: number = 0) {
    const cache = this.childrenList[parentString];
    if (cache) {
      if (cache && !cache.waiting)
        return this.childrenFromCache(parentString, limit, skip);
      else
        return new Promise((resolve, reject) => {
          const timer = setInterval(() => {
            const _cache = this.childrenList[parentString];
            if (_cache && !_cache.waiting) {
              resolve(this.childrenFromCache(parentString, limit, skip));
              clearInterval(timer);
            } else if (!_cache) {
              reject();
              clearInterval(timer);
            }
          }, 100);
        });
    } else {
      await this.childrenFromController(parentString, limit, skip);
      return this.childrenFromCache(parentString, limit, skip);
    }
  }

  async childrenFromCache(parentString, limit: number = 50, skip: number = 0) {
    // console.log("获取缓存" + this.className + "Children:", "#" + parentString, limit, skip);

    const list = this.childrenList[parentString];
    // if ((skip + limit) < list.length || list.length === total) return list.slice(skip, skip + limit);
    if ((skip + limit) < list.length || list.length === list.total) return list;
    else return this.childrenFromController(parentString, limit, skip);
  }

  async childrenFromController(parentString, limit: number = 50, skip: number = 0) {
    const { id, place, key } = this.tab.parsePlaceString(parentString);
    if (!this.childrenList[parentString]) {
      this.watch(this.className + "." + parentString);
      this.childrenList[parentString] = reactive([]);
    }

    this.childrenList[parentString].waiting = true;
    let res = await this.req
      .get(this.api + id + "/children/" + place + "/" + key + "?limit=" + limit + "&skip=" + skip, this.apiConfig()).then(res => res.data);

    if (!this.childrenList[parentString].row)
      this.tab.makeList(this.childrenList[parentString], res);
    else {
      this.childrenList[parentString].fixed = res.fixed;
      this.childrenList[parentString].skip = res.skip;
      this.childrenList[parentString].total = res.total;
      this.childrenList[parentString].splice(res.total, 1);
    }

    for (let i in res.list) {
      this.childrenList[parentString][Number(i) + skip + (skip ? this.childrenList[parentString].fixed : 0)] = this.tab.assign(res.list[i]);
    }
    delete this.childrenList[parentString].waiting;
    console.log("获取" + this.className + "Children:", "#" + parentString, limit, skip);
    return this.childrenList[parentString];
  }

  deleteFromChildren(delId) {
    for (let units of this.tab.moduleList) {
      this.tab[units].api.deleteFromThisChildren(delId);
    }
  }

  deleteFromThisChildren(delId) {
    for (let parentString in this.childrenList) {
      const { id } = this.tab.parsePlaceString(parentString);
      if (id === delId) {
        this.childrenList[parentString].length = 0;
        delete this.childrenList[parentString];
      } else {
        for (let i in this.childrenList[parentString]) {
          if (this.childrenList[parentString][i]._id === delId) {
            this.childrenList[parentString].splice(i, 1);
          }
        }
      }
    }
  }

  // async childrenFromController(parentString, limit: number = 50, skip: number = 0) {
  //   const { id, place, key } = this.tab.parsePlaceString(parentString);
  //   if (!this.childrenList[parentString]) {
  //     this.watch(this.className + "." + parentString);
  //     this.childrenList[parentString] = reactive({ list: [] });
  //   }
  //
  //   const children = this.childrenList[parentString];
  //   children.waiting = true;
  //   let list = await this.req
  //     .get(this.api + id + "/children/" + place + "/" + key + "?limit=" + limit + "&skip=" + skip, this.apiConfig()).then(res => this.makeList(res.data));
  //   if (skip === 0) {
  //     children.fixed = Number(list.fixed);
  //     children.list = list;
  //   } else
  //     for (let i in list) {
  //       children.list[Number(i) + skip + children.fixed] = list[i];
  //     }
  //   children.total = Number(list.total);
  //   children.skip = Number(list.skip);
  //   children.waiting = false;
  //   console.log("获取" + this.className + "Children:", "#" + parentString, limit, skip);
  //   return children.list;
  // }

  async childrenRefresh(parentString, type?, changeId?) {
    console.log("触发列表更新:", parentString, type, changeId);
    const children = this.childrenList[parentString];
    if (children) {
      let el;
      switch (type) {
        case "addFirst":
          el = await this.module.get(changeId);
          children.splice(children.fixed, 0, el);
          children.skip++;
          children.total++;
          break;
        case "addLast":
          if ((children.length - children.fixed) === children.total) {
            el = await this.module.get(changeId);
            children.push(el);
            children.total++;
          }
          break;
        case "fixedChange":
          const { id, place, key } = this.tab.parsePlaceString(parentString);
          el = await this.module.get(id);
          await el.refresh();
          const idList = el.children[place + "." + key], fixedList = [];
          for (let idString of idList) {
            try {
              const subEl = await this.tab.get(idString);
              fixedList.push(subEl);
            } catch (e) {

            }
          }
          children.splice(0, children.fixed, ...fixedList);
          children.fixed = fixedList.length;
          break;
        default:
          await this.childrenFromController(parentString, children.skip + 1);
      }
    }
  }

  listMy(finder, sort, limit, skip) {
    return this.req.post(this.api + "listMy", { filter: finder, sort }, this.apiConfig())
      .then(res => this.tab.makeList(res.data.list, res.data));
  }

  list(finder, sort, limit, skip) {
    return this.req.post(this.api + "list?limit=" + limit + "&skip=" + skip, {
      filter: finder,
      sort
    }, this.apiConfig())
      .then(res => this.tab.makeList(res.data.list, res.data));
  }

  create(el) {
    return this.req.post(this.api, el, this.apiConfig()).then(res => res.data);
  }

  async delete(id) {
    const el = await this.module.get(id), rights = this.module.rights(el);
    if (rights.isOwner || rights.isRoot) {
      return this.req.delete(this.api + id, this.apiConfig()).then(res => res.data);
    }
    return Promise.reject({ status: "FORBIDDEN", message: "您没有删除" + this.className + " #" + el._id + " 的权限" });
  }

  save(el) {
    return this.req.patch(this.api + el._id, el, this.apiConfig()).then(res => res.data);
  }

  async upload(file, id, place, key, progress?) {
    const spark = new SparkMD5.ArrayBuffer();
    spark.append(await file.arrayBuffer());
    const md5 = spark.end(), filename = file.name,
      index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length),
      storeAs = md5 + "." + suffix;
    const data = new FormData();
    data.append("file", file, storeAs);
    return this.req.put(this.api + id + "/file/" + place + "/" + key, data, this.apiConfig(progress)).then(res => res.data);
  }

  async uploadDirectory(files, id, place = "data", key = "sub", progress?) {
    if (files.length < 100)
      return this.uploadDirectoryCtrl(files, id, place, key, progress);
    else {
      let fileList = [];
      for (let i = 0; i < files.length; i++) {
        fileList.push(files[i]);
        if (fileList.length > 99) {
          // console.log(i, fileList.length);
          await this.uploadDirectoryCtrl(fileList, id, place, key, p => {
            const res = i / files.length + (p / 100) * (100 / files.length);
            progress(res * 100);
          });
          fileList = [];
        }
      }
      return this.uploadDirectoryCtrl(fileList, id, place, key, p => {
        const finished = Math.floor(files.length / 100) / files.length, res = (p / 100) * (1 - finished) + finished;
        progress(res * 100);
      });
    }
  }

  async uploadDirectoryCtrl(files, id, place = "data", key = "sub", progress?) {
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append(files[i].webkitRelativePath, files[i]);
    }
    return this.req.put(this.api + id + "/directory/" + place + "/" + key, data, this.apiConfig(progress)).then(res => res.data);
  }

}
