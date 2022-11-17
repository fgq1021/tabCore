var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as SparkMD5 from "spark-md5";
var tabClientController = /** @class */ (function () {
    function tabClientController(config, unit) {
        this.childrenList = {};
        Object.assign(this, config);
        if (config.apiUrl)
            this.api = config.apiUrl + unit + "/";
    }
    tabClientController.prototype.putTab = function (tab, module) {
        this.tab = tab;
        this.req = tab.req;
        this.module = module;
    };
    tabClientController.prototype.apiConfig = function (progress) {
        var config = {
            headers: {},
            onUploadProgress: function (progressEvent) {
                if (progress) {
                    var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    progress(percentCompleted);
                }
            }
        };
        if (this.tab.token)
            config.headers = { Authorization: "Bearer " + this.tab.token };
        return config;
    };
    tabClientController.prototype.get = function (id) {
        return this.req.get(this.api + id, this.apiConfig()).then(function (res) { return res.data; });
    };
    tabClientController.prototype.eventSync = function (el, _el) {
        if (_el) {
        }
        else {
            this.watch(this.className + "-" + el._id);
        }
    };
    tabClientController.prototype.watch = function (id) {
        this.tab.socket.emit("watch", { id: id });
    };
    tabClientController.prototype.hotReloadRestart = function () {
        for (var i in this.module.list) {
            this.watch(this.className + "-" + i);
        }
        for (var i in this.childrenList) {
            this.watch(this.className + "." + i);
        }
    };
    tabClientController.prototype.makeList = function (_data) {
        var list = this.tab.makeList(_data.list, _data);
        for (var i = 0; i < list.length; i++) {
            list[i] = this.tab.assign(list[i]);
        }
        return list;
    };
    tabClientController.prototype.children = function (parentString, filter, sort, limit, skip) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        var emptyOption = JSON.stringify({}), _a = this.tab.parsePlaceString(parentString), id = _a.id, place = _a.place, key = _a.key;
        if (JSON.stringify(filter) === emptyOption && JSON.stringify(sort) === emptyOption) {
            return this.childrenWaiter(parentString, limit, skip);
        }
        else {
            return this.req
                .post(this.api + id + "/children/" + place + "/" + key + "?limit=" + limit + "&skip=" + skip, this.apiConfig(), { filter: filter, sort: sort })
                .then(function (res) { return _this.makeList(res.data); });
        }
    };
    tabClientController.prototype.childrenWaiter = function (parentString, limit, skip) {
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this.childrenList[parentString];
                        if (!cache) return [3 /*break*/, 1];
                        if (cache && !cache.waiting)
                            return [2 /*return*/, this.childrenFromCache(parentString, limit, skip)];
                        else
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    var timer = setInterval(function () {
                                        var _cache = _this.childrenList[parentString];
                                        if (_cache && !_cache.waiting) {
                                            resolve(_this.childrenFromCache(parentString, limit, skip));
                                            clearInterval(timer);
                                        }
                                        else if (!_cache) {
                                            reject();
                                            clearInterval(timer);
                                        }
                                    }, 100);
                                })];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.childrenFromController(parentString, limit, skip)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.childrenFromCache(parentString, limit, skip)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tabClientController.prototype.childrenFromCache = function (parentString, limit, skip) {
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                list = this.childrenList[parentString];
                // if ((skip + limit) < list.length || list.length === total) return list.slice(skip, skip + limit);
                if ((skip + limit) < list.length || list.length === list.total)
                    return [2 /*return*/, list];
                else
                    return [2 /*return*/, this.childrenFromController(parentString, limit, skip)];
                return [2 /*return*/];
            });
        });
    };
    tabClientController.prototype.childrenFromController = function (parentString, limit, skip) {
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, place, key, res, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.tab.parsePlaceString(parentString), id = _a.id, place = _a.place, key = _a.key;
                        if (!this.childrenList[parentString]) {
                            this.watch(this.className + "." + parentString);
                            this.childrenList[parentString] = this.tab.reactive([]);
                        }
                        this.childrenList[parentString].waiting = true;
                        return [4 /*yield*/, this.req
                                .get(this.api + id + "/children/" + place + "/" + key + "?limit=" + limit + "&skip=" + skip, this.apiConfig()).then(function (res) { return res.data; })];
                    case 1:
                        res = _b.sent();
                        if (!this.childrenList[parentString].row)
                            this.tab.makeList(this.childrenList[parentString], res);
                        else {
                            this.childrenList[parentString].fixed = res.fixed;
                            this.childrenList[parentString].skip = res.skip;
                            this.childrenList[parentString].total = res.total;
                            this.childrenList[parentString].splice(res.total, 1);
                        }
                        for (i in res.list) {
                            this.childrenList[parentString][Number(i) + skip + (skip ? this.childrenList[parentString].fixed : 0)] = this.tab.assign(res.list[i]);
                        }
                        delete this.childrenList[parentString].waiting;
                        console.log("获取" + this.className + "Children:", "#" + parentString, limit, skip);
                        return [2 /*return*/, this.childrenList[parentString]];
                }
            });
        });
    };
    tabClientController.prototype.deleteFromChildren = function (delId) {
        for (var _i = 0, _a = this.tab.moduleList; _i < _a.length; _i++) {
            var units = _a[_i];
            this.tab[units].api.deleteFromThisChildren(delId);
        }
    };
    tabClientController.prototype.deleteFromThisChildren = function (delId) {
        for (var parentString in this.childrenList) {
            var id = this.tab.parsePlaceString(parentString).id;
            if (id === delId) {
                this.childrenList[parentString].length = 0;
                delete this.childrenList[parentString];
            }
            else {
                for (var i in this.childrenList[parentString]) {
                    if (this.childrenList[parentString][i]._id === delId) {
                        this.childrenList[parentString].splice(i, 1);
                    }
                }
            }
        }
    };
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
    tabClientController.prototype.childrenRefresh = function (parentString, type, changeId) {
        return __awaiter(this, void 0, void 0, function () {
            var children, el, _a, _b, id, place, key, idList, fixedList, _i, idList_1, idString, subEl, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("触发列表更新:", parentString, type, changeId);
                        children = this.childrenList[parentString];
                        if (!children) return [3 /*break*/, 17];
                        el = void 0;
                        _a = type;
                        switch (_a) {
                            case "addFirst": return [3 /*break*/, 1];
                            case "addLast": return [3 /*break*/, 3];
                            case "fixedChange": return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 15];
                    case 1: return [4 /*yield*/, this.module.get(changeId)];
                    case 2:
                        el = _c.sent();
                        children.splice(children.fixed, 0, el);
                        children.skip++;
                        children.total++;
                        return [3 /*break*/, 17];
                    case 3:
                        if (!((children.length - children.fixed) === children.total)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.module.get(changeId)];
                    case 4:
                        el = _c.sent();
                        children.push(el);
                        children.total++;
                        _c.label = 5;
                    case 5: return [3 /*break*/, 17];
                    case 6:
                        _b = this.tab.parsePlaceString(parentString), id = _b.id, place = _b.place, key = _b.key;
                        return [4 /*yield*/, this.module.get(id)];
                    case 7:
                        el = _c.sent();
                        return [4 /*yield*/, el.refresh()];
                    case 8:
                        _c.sent();
                        idList = el.children[place + "." + key], fixedList = [];
                        _i = 0, idList_1 = idList;
                        _c.label = 9;
                    case 9:
                        if (!(_i < idList_1.length)) return [3 /*break*/, 14];
                        idString = idList_1[_i];
                        _c.label = 10;
                    case 10:
                        _c.trys.push([10, 12, , 13]);
                        return [4 /*yield*/, this.tab.get(idString)];
                    case 11:
                        subEl = _c.sent();
                        fixedList.push(subEl);
                        return [3 /*break*/, 13];
                    case 12:
                        e_1 = _c.sent();
                        return [3 /*break*/, 13];
                    case 13:
                        _i++;
                        return [3 /*break*/, 9];
                    case 14:
                        children.splice.apply(children, __spreadArray([0, children.fixed], fixedList, false));
                        children.fixed = fixedList.length;
                        return [3 /*break*/, 17];
                    case 15: return [4 /*yield*/, this.childrenFromController(parentString, children.skip + 1)];
                    case 16:
                        _c.sent();
                        _c.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    tabClientController.prototype.listMy = function (finder, sort, limit, skip) {
        var _this = this;
        return this.req.post(this.api + "listMy", { filter: finder, sort: sort }, this.apiConfig())
            .then(function (res) { return _this.tab.makeList(res.data.list, res.data); });
    };
    tabClientController.prototype.list = function (finder, sort, limit, skip) {
        var _this = this;
        return this.req.post(this.api + "list?limit=" + limit + "&skip=" + skip, {
            filter: finder,
            sort: sort
        }, this.apiConfig())
            .then(function (res) { return _this.tab.makeList(res.data.list, res.data); });
    };
    tabClientController.prototype.create = function (el) {
        return this.req.post(this.api, el, this.apiConfig()).then(function (res) { return res.data; });
    };
    tabClientController.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var el, rights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id)];
                    case 1:
                        el = _a.sent(), rights = this.module.rights(el);
                        if (rights.isOwner || rights.isRoot) {
                            return [2 /*return*/, this.req.delete(this.api + id, this.apiConfig()).then(function (res) { return res.data; })];
                        }
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "您没有删除" + this.className + " #" + el._id + " 的权限" })];
                }
            });
        });
    };
    tabClientController.prototype.save = function (el) {
        return this.req.patch(this.api + el._id, el, this.apiConfig()).then(function (res) { return res.data; });
    };
    tabClientController.prototype.upload = function (file, id, place, key, progress) {
        return __awaiter(this, void 0, void 0, function () {
            var spark, _a, _b, md5, filename, index, suffix, storeAs, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        spark = new SparkMD5.ArrayBuffer();
                        _b = (_a = spark).append;
                        return [4 /*yield*/, file.arrayBuffer()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        md5 = spark.end(), filename = file.name, index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length), storeAs = md5 + "." + suffix;
                        data = new FormData();
                        data.append("file", file, storeAs);
                        return [2 /*return*/, this.req.put(this.api + id + "/file/" + place + "/" + key, data, this.apiConfig(progress)).then(function (res) { return res.data; })];
                }
            });
        });
    };
    tabClientController.prototype.uploadDirectory = function (files, id, place, key, progress) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        return __awaiter(this, void 0, void 0, function () {
            var fileList, _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(files.length < 100)) return [3 /*break*/, 1];
                        return [2 /*return*/, this.uploadDirectoryCtrl(files, id, place, key, progress)];
                    case 1:
                        fileList = [];
                        _loop_1 = function (i) {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        fileList.push(files[i]);
                                        if (!(fileList.length > 99)) return [3 /*break*/, 2];
                                        // console.log(i, fileList.length);
                                        return [4 /*yield*/, this_1.uploadDirectoryCtrl(fileList, id, place, key, function (p) {
                                                var res = i / files.length + (p / 100) * (100 / files.length);
                                                progress(res * 100);
                                            })];
                                    case 1:
                                        // console.log(i, fileList.length);
                                        _b.sent();
                                        fileList = [];
                                        _b.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < files.length)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1(i)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, this.uploadDirectoryCtrl(fileList, id, place, key, function (p) {
                            var finished = Math.floor(files.length / 100) / files.length, res = (p / 100) * (1 - finished) + finished;
                            progress(res * 100);
                        })];
                }
            });
        });
    };
    tabClientController.prototype.uploadDirectoryCtrl = function (files, id, place, key, progress) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        return __awaiter(this, void 0, void 0, function () {
            var data, i;
            return __generator(this, function (_a) {
                data = new FormData();
                for (i = 0; i < files.length; i++) {
                    data.append(files[i].webkitRelativePath, files[i]);
                }
                return [2 /*return*/, this.req.put(this.api + id + "/directory/" + place + "/" + key, data, this.apiConfig(progress)).then(function (res) { return res.data; })];
            });
        });
    };
    return tabClientController;
}());
export { tabClientController };
