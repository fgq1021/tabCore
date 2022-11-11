// import { reactive } from "vue";
// import { indexOf } from "lodash";

// import { Type } from "class-transformer";

export const defaultTypeModule = {
    events: {
        mounted() {
        },
        created() {
        },
        beforeSave() {
        },
        saved() {
        },
        beforeDelete() {
        },
        deleted() {
        },
        childrenSaved(placeString) {
        },
        childrenPushed(placeString, id?) {
        },
        childrenDeleted(placeString, id?) {
        }
    }
};

export class tabUnit {
    public className;
    public api;
    public _id: string;
    public children = {};
    public data = {};
    public parents: [string?] = [];
    public createdAt: Date;
    public updatedAt: Date;
    public type;
    public owner;
    public isDelete = false;

    // private events: {};

    constructor(el) {
        Object.assign(this, el);
    }

    async $init() {
        const typeModules = this.api().tab.typeModules;
        const typeModule = typeModules[this.type] || typeModules[this._id];
        if (typeModule) {
            for (let method in typeModule.methods) {
                this[method] = typeModule.methods[method];
            }
            for (let method in typeModule.events) {
                this[method] = typeModule.events[method];
            }

        } else {
            for (let method in defaultTypeModule.events) {
                this[method] = defaultTypeModule.events[method];
            }
        }
        this.mounted();
    }

    async refresh(user?) {
        return await this.api().getFromController(this._id, user);
        ;
    }

    async save(user?, option?) {
        return this.api().save(this, user);
    }

    async upload(file, place, key, p) {
        return this.api().upload(file, this._id, place, key, p);
    }

    async uploadDirectory(files, place, key, p) {
        return this.api().uploadDirectory(files, this._id, place, key, p);
    }

    async delete() {
        return this.api().delete(this);
    }

    async deleteFrom(placeString = "data.sub", user?) {
        await this.api().deleteFrom(this, placeString, user);
    }

    // async getChildren(place: string = "data", key: string = "sub",
    //                   filter: object = {}, sort: object = {}, limit: number = 50, skip: number = 0,
    //                   user?) {
    //     return this.api().children(this._id, place, key, filter, sort, limit, skip, user);
    // }
    getChildren(placeString = "data.sub", filter: object = {}, sort: object = {}, limit: number = 50, skip: number = 0,
                user?) {
        return this.api().children(this._id + "." + placeString, filter, sort, limit, skip, user);
    }

    getChild(placeString = "data.sub", user?) {
        const parentString = this.children[placeString];
        if (parentString)
            return this.api().tab.get(parentString, user);
        else
            return Promise.reject({message: "此位置为空", status: "NOT_FOUND"});
    }

    async getType(user?) {
        return await this.api().getType(this.type, user);
    }

    async getOwner(user?) {
        return this.api().getOwner(this.owner, user);
    }

    async createChild(el, placeString = "data.sub", unit?, slot?, user?) {
        let parentType,
            structure = {settings: {unit: null}, dataType: null}, {key} = this.api().parsePlaceString(placeString);
        try {
            // @ts-ignore
            // console.log(this.title, this._id, user._id);
            parentType = await this.getType(user);
            // console.log(parentType);
            structure = parentType.getStructure(key);
            unit = unit || structure.settings.unit || this.className;
            slot = slot || structure.dataType || "Array";
            if (!el.type) {
                const type = (slot === "Object") ?
                    await parentType.getChild(placeString, user) :
                    (await parentType.getChildren(placeString, {}, {}, 1, 0, user))[0];
                if (type)
                    el.type = type._id;
            }
        } catch (e) {
            // console.log(111111111);
            // console.log(e);
        }


        if (slot === "Object") {
            return await this.pushFixChild(el, placeString, unit, slot, user);
        }
        const {Unit} = this.api().parseUnit(unit);
        if (Unit === this.className) {
            return this.pushChild(el, placeString, user);
        }
        return this.pushFixChild(el, placeString, unit, slot, user);
    }

    async pushChild(el, placeString = "data.sub", user?) {
        if (!el.type) {
            const type = await this.getType(user);
            const [t] = await type.getChildren(placeString);
            if (t)
                el.type = t._id;
        }
        el.parents = el.parents || [];
        el.parents.push(this._id + "." + placeString);
        return this.api().create(el, user);
    }

    async pushFixChild(el, placeString = "data.sub", unit = this.className, slot = "Array", user?) {
        const {units} = this.api().parseUnit(unit);
        el.pushParents = [slot + "." + this.className + "." + this._id + "." + placeString];
        return this.api().tab[units].create(el, user);
    }

    async fixChild(el, placeString = "data.sub", slot = "Array", user?) {
        if (slot === "Object") {
            this.children[placeString] = el.className + "-" + el._id;
        } else if (slot === "Array") {
            this.children[placeString] = this.children[placeString] || [];
            this.children[placeString].push(el.className + "-" + el._id);
        }
        await this.save(user);
        const i = el.parents.indexOf(this._id + "." + placeString);
        if (i !== -1) {
            el.parents.splice(i, 1);
            await el.save(user);
        }
        return this;
    }

    async unFixChildren(placeString = "data.sub", i, el?, user?) {
        if (el) {
            if (el.className === this.className) {
                await el.pushParent(this._id + "." + placeString);
                return this.unFixChildren(placeString, i, undefined, user);
            } else if (el.parents.length) {
                return this.unFixChildren(placeString, i, undefined, user);
            } else return Promise.reject();
        } else if (this.children[placeString]) {
            this.children[placeString].splice(i, 1);
            return this.save(user);
        }
    }

    async unFixChild(placeString = "data.sub", el, user?) {
        if ((this.children[placeString] === el.className + "-" + el._id) && el.parents.length) {
            delete this.children[placeString];
            return this.save(user);
        }
    }

    async pushParent(placeString, user?) {
        const {id, place, key} = this.api().parsePlaceString(placeString);
        const parentString = id + "." + place + "." + key;
        if (this.parents.indexOf(parentString) === -1) {
            this.parents.push(parentString);
            return this.save(user);
        }
    }

    async toJson(els = {}, user?) {
        const data = this.api().tab.pureData(this.data);
        data._id = this._id;
        if (els[this._id]) {
            // console.log("重复id", this._id);
            return {_id: this._id, cyclic: true};
        } else {
            els[this._id] = data;
            const type = await this.getType(user);
            for (let i in type.dataStructure) {
                const s = type.dataStructure[i];
                if (s.dataType === "Object") {
                    try {
                        data[s.name] = await (await this.getChild("data." + s.name, user)).toJson(els, user);
                    } catch (e) {
                    }
                }
                // else if (s.dataType === "Array") {
                //   const list = await this.getChildren("data." + s.name, {}, {}, 9999999, 0, user);
                //   data[s.name] = [];
                //   for (let i in list) {
                //     data[s.name][i] = await list[i].toJson(els, user);
                //   }
                // }
            }
            return data;
        }
    }

    mounted() {
    }
}

export class tabModule {
    public className;
    public tab;
    private list = {};
    private childrenList = {};
    public unit;
    public api;

    constructor(config, controller) {
        Object.assign(this, config);
        this.api = new controller(config);
        this.init();
    }

    putTab(tab) {
        this.tab = tab;
    }

    init() {
    }

    assign(el) {
        const id = el._id;
        let element = this.list[id];
        if (element && element._id) {
            // if (new Date(el.updatedAt) >= new Date(element.updatedAt)) {
            if (new Date(el.updatedAt) > new Date(element.updatedAt)) {
                console.log("更新" + this.className + ":", el.title || el.ChineseName || el.username, "#" + el._id);
                const oldType = element.type;
                Object.assign(this.list[id], el);
                if (el.type !== oldType) {
                    this.list[id].$init();
                }
                // this.api.eventSync(el, element);
            }
            // else {
            //   console.log("更新未成功" + this.className + ":", el.title || el.username, "#" + el._id);
            //   console.log(el.updatedAt, element.updatedAt);
            // }
        } else {
            console.log("获取" + this.className + ":", el.title || el.ChineseName || el.username, "#" + el._id);
            if (this.tab.reactive)
                this.list[id] = this.tab.reactive(new this.unit(el));
            else
                this.list[id] = new this.unit(el);
            this.api.eventSync(el);
        }
        return this.list[id];
    }

    assignList(list) {
        for (let i = 0; i < list.length; i++) {
            list[i] = this.assign(list[i]);
        }
        return list;
    }

    async get(id: string, user?) {
        const el = await this.getWaiter(id, user);
        if (this.rights(el, user).read()) return el;
        return Promise.reject({
            status: "FORBIDDEN",
            message: (user ? user.username + "#" + user._id : "匿名用户") + "没有查看id为 #" + id + " " + this.className + "的权限"
        });
    }

    refresh(id) {
        let element = this.list[id];
        if (element && element._id) {
            return element.refresh();
        }
    }

    async listMy(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0, user?): Promise<any> {
        let list;
        if (user) {
            Object.assign(finder, {owner: user._id});
            list = await this.api.list(finder, sort, limit, skip);
        } else
            list = await this.api.listMy(finder, sort, limit, skip);
        return this.assignList(list);
    }

    async create(el, user?) {
        // console.log(JSON.stringify(el))
        const parents = [], pushParents = [];
        for (let i in el.parents) {
            const {id} = this.tab.parsePlaceString(el.parents[i]);
            const pel = await this.get(id, user);
            if (pel)
                parents.push(el.parents[i]);
        }
        el.parents = parents;
        for (let i in el.pushParents) {
            const pel = await this.tab.get(el.pushParents[i], user);
            if (this.rights(pel, user).write())
                pushParents.push(el.pushParents[i]);
        }
        el.pushParents = pushParents;
        if (el.parents.length || el.pushParents.length) {
            const newEl = this.assign(await this.api.create(el, user));
            newEl.created();
            return newEl;
        }
        return Promise.reject({status: "FORBIDDEN", message: "请最少添加一个可用的父系元素"});
    }

    async save(el, user?) {
        const oriEl = await this.get(el._id, user);
        const rights = this.rights(oriEl, user);
        if (rights.write()) {
            oriEl.beforeSave(user);
            this.assign(await this.api.save(el, user));
            oriEl.saved(user);
            return oriEl;
        }
        return Promise.reject({
            status: "FORBIDDEN",
            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
        });
    }

    async delete(el, user?) {
        const id = el._id || el;
        // if (el.beforeDelete)
        //   el.beforeDelete();
        await this.api.delete(id, user);
        // if (el.deleted)
        //   el.deleted();
        this.afterDelete(id);
        return Promise.resolve({message: this.className + " #" + el._id + " 已删除"});
    }

    async deleteFrom(el, placeString, user?) {
        const {id, place, key} = this.parsePlaceString(placeString);
        const pIndex = el.parents.indexOf(id + "." + place + "." + key);
        if (pIndex !== -1) {
            el.parents.splice(pIndex, 1);
            await el.save(user);
        } else {
            await this.removeChildren(await this.tab.get(placeString), el.className + "." + el._id + "." + place + "." + key, user);
        }
    }

    afterDelete(id) {
        const el = this.list[id];
        if (el) {
            el.isDelete = true;
            // delete this.list[id];
            el.data = {};
            this.api.deleteFromChildren(id);
        }
    }

    async upload(file, id, place, key, progress?, user?) {
        if (file && id) {
            return this.assign(await this.api.upload(file, id, place, key, progress, user));
        }
        return Promise.reject({status: "FORBIDDEN", message: "文件或ID格式不对"});
    }

    async uploadDirectory(file, id, place = "data", key = "sub", progress?, user?) {
        if (file && id) {
            return this.assign(await this.api.uploadDirectory(file, id, place, key, progress, user));
        }
        return Promise.reject({status: "FORBIDDEN", message: "文件或ID格式不对"});
    }

    async pushChildren(el, placeString, user?) {
        if (!el._id)
            el = await this.get(el, user);
        const rights = this.rights(el, user);
        if (rights.write()) {
            const {slot, units, id, place, key} = this.tab.parsePlaceString(placeString), keyString = place + "." + key;
            switch (slot) {
                case "Array":
                    el.children[keyString] = el.children[keyString] || [];
                    el.children[keyString].push(units + "-" + id);
                    break;
                case "Object":
                    el.children[keyString] = units + "-" + id;
            }
            return el.save(user);
        } else return Promise.reject({
            status: "FORBIDDEN",
            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
        });
    }

    async removeChildren(el, placeString, user?) {
        if (!el._id)
            el = await this.get(el, user);
        const rights = this.rights(el, user);
        if (rights.write()) {
            const {Unit, id, place, key} = this.tab.parsePlaceString(placeString),
                keyString = place + "." + key, childrenString = Unit + "-" + id;
            if (el.children[keyString] === childrenString) {
                delete el.children[keyString];
                return el.save(user);
            } else {
                const cIndex = el.children[keyString].indexOf(childrenString);
                if (cIndex !== -1) {
                    el.parents.splice(cIndex, 1);
                    return el.save(user);
                }
            }
            return Promise.reject({status: "FORBIDDEN", message: el.className + " #" + el._id + " 下没有固定此元素"});
        }
        return Promise.reject({status: "FORBIDDEN", message: "您没有修改" + el.className + " #" + el._id + " 的权限"});
    }

    rights(el, user?) {
        if (this.tab.token)
            user = this.tab.me;
        let isRoot = false, isOwner = false, isAnonymous = !user, isClient = this.tab.isClient;
        if (user) {
            if (!isClient && user._id === this.tab.config.users.root._id) {
                isRoot = true;
            }
            if (el.owner === user._id) {
                isOwner = true;
            }
            if (el.className === "User" && el._id === user._id) {
                isOwner = true;
            }
        }

        function getAccessControl(ac?: string) {
            const rights = {read: false, write: false};
            if (ac) {
                const acList = ac.split("");
                if (acList[1] === "r") rights.read = true;
                if (acList[2] === "w") rights.write = true;
                return rights;
            }
            return rights;
        }

        return {
            isRoot, isOwner, isAnonymous, isClient,
            all() {
                const rights = {read: false, write: false, isRoot, isOwner};
                if (isRoot || isOwner) {
                    rights.read = true;
                    rights.write = true;
                    return rights;
                }
                if (user && user.manage) {
                    const accessControl = el.accessControl || {}, owner = el.owner;
                    for (let u of user.manage) {
                        const ac = getAccessControl(accessControl[u]);
                        if (ac.read) rights.read = true;
                        if (ac.write) rights.write = true;
                    }
                }
                if (!el.isHide) {
                    rights.read = true;
                }
                return rights;
            },
            read() {
                if (!el.isHide) return true;
                if (isRoot || isOwner || isClient) return true;
                const accessControl = el.accessControl || {};
                for (let u of user.manage) {
                    const ac = getAccessControl(accessControl[u]);
                    if (ac.read) return true;
                }
                return false;
            },
            write() {
                if (!user) return false;
                if (isRoot || isOwner) return true;
                const accessControl = el.accessControl || {};
                for (let u of user.manage) {
                    const ac = getAccessControl(accessControl[u]);
                    if (ac.write) return true;
                }
                return false;
            }
        };
    }

    rightsOfList(list, user) {
        const res = [];
        for (let el of list) {
            el = this.assign(el);
            if (this.rights(el, user).read()) res.push(el);
        }
        return this.tab.makeList(res, {skip: list.skip, total: list.total});
    }

    async getWaiter(id: string, user?) {
        if (id) {
            const cache = this.list[id];
            if (cache) {
                if (cache._id && !cache.isDelete)
                    return Promise.resolve(cache);
                else if (cache.isDelete)
                    return Promise.reject({status: "NOT_FOUND", message: "未找到id为 #" + id + " 的" + this.className});
                else
                    return new Promise((resolve, reject) => {
                        const timer = setInterval(() => {
                            const _cache = this.list[id];
                            if (_cache && _cache._id) {
                                resolve(_cache);
                                clearInterval(timer);
                            } else if (!_cache) {
                                reject();
                                clearInterval(timer);
                            }
                        }, 100);
                    });
            } else {
                this.list[id] = {};
                return this.getFromController(id, user);
            }
        } else return Promise.reject();
    }

    async getFromController(id: string, user?) {
        try {
            let el = await this.api.get(id, user);
            return this.assign(el);
        } catch (err) {
            console.error(err);
            delete this.list[id];
            return Promise.reject(err);
        }
    }

    children(parentString, _filter: object = {}, _sort: object = {}, limit: number = 50, skip: number = 0, user?) {
        return this.api.children(parentString, _filter, _sort, limit, skip, user);
    }

    child(parentString, user?) {

    }

    // async childrenWaiter(id: string, place: string = "data", key: string = "sub", limit: number = 50, skip: number = 0) {
    //   const childrenId = id + "." + place + "." + key;
    //   const cache = this.childrenList[childrenId];
    //   if (cache) {
    //     if (cache && !cache.waiting)
    //       return this.childrenFromCache(id, place, key, limit, skip);
    //     else
    //       return new Promise((resolve, reject) => {
    //         const timer = setInterval(() => {
    //           const _cache = this.childrenList[childrenId];
    //           if (_cache && !_cache.waiting) {
    //             resolve(this.childrenFromCache(id, place, key, limit, skip));
    //             clearInterval(timer);
    //           } else if (!_cache) {
    //             reject();
    //             clearInterval(timer);
    //           }
    //         }, 100);
    //       });
    //   } else return this.childrenFromController(id, place, key, limit, skip);
    // }
    //
    // async childrenFromCache(id: string, place: string = "data", key: string = "sub", limit: number = 50, skip: number = 0) {
    //   // console.log("获取缓存" + this.className + "Children:", "#" + id, place, key, limit, skip);
    //   const { list, total } = this.childrenList[id + "." + place + "." + key];
    //   if ((skip + limit) < list.length || list.length === total) return list.slice(skip, skip + limit);
    //   else return this.childrenFromController(id, place, key, limit, skip);
    // }
    //
    // async childrenFromController(id: string, place: string = "data", key: string = "sub", limit: number = 50, skip: number = 0) {
    //   const el = await this.get(id), childrenId = id + "." + place + "." + key,
    //     { filter = {}, sort = {} } = el[place][key] ? el[place][key] : { filter: {}, sort: {} };
    //   filter.parents = childrenId;
    //   this.childrenList[childrenId] = this.childrenList[childrenId] || { list: [] };
    //   this.childrenList[childrenId].waiting = true;
    //   const list = await this.api.list(filter, sort, limit, skip);
    //   for (let i in list) {
    //     this.childrenList[childrenId].list[Number(i) + skip] = list[i];
    //   }
    //   this.childrenList[childrenId].total = list.total;
    //   this.childrenList[childrenId].waiting = false;
    //   console.log("获取" + this.className + "Children:", "#" + id, place, key, limit, skip);
    //   return list;
    // }
    //
    // async childrenFromControllerWithOption(id: string, place: string = "data", key: string = "sub",
    //                                        _filter: object = {}, _sort: object = {}, limit: number = 50, skip: number = 0,
    //                                        user) {
    //   const el = await this.get(id, user),
    //     { filter = {}, sort = {} } = el[place] ? el[place][key] : { filter: {}, sort: {} },
    //     idList = el.children[place + "." + key] || [], fixedList = [];
    //   //获取固定的元素
    //   if (!skip) {
    //     for (let i in idList) {
    //       let [unit = this.className, id] = idList[i].split("-");
    //       fixedList[i] = await this.tab[unit + "s"].get(id, user);
    //     }
    //   }
    //   Object.assign(filter, _filter);
    //   Object.assign(sort, _sort);
    //   filter.parents = id + "." + place + "." + key;
    //   const authList = await this._list(filter, sort, limit, skip);
    //   if (authList.length !== limit)
    //     limit = authList.length;
    //   return this.tab.makeList(fixedList.concat(authList), { skip: limit + skip });
    // }

    tabGet(placeString, user?) {
        return this.tab.get(placeString, user);
    }

    parseUnit(u) {
        return this.tab.parseUnit(u);
    }

    parsePlaceString(placeString) {
        return this.tab.parsePlaceString(placeString);
    }

    // async _list(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0, user?): Promise<any> {
    //   return this.rightsOfList(await this.api.list(finder, sort, limit, skip), user);
    // }


    async find(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0, user?): Promise<any> {
        return this.rightsOfList(await this.api.list(finder, sort, limit, skip), user);
    }

    async getType(id, user?) {
        return this.tab.types.get(id, user);
    }

    async getOwner(id, user?) {
        return this.tab.users.get(id, user);
    }

    async importType(type) {
        for (let i in this.list) {
            const unit = this.list[i];
            if (unit.type === type) {
                await unit.$init();
            }
        }
    }
}
