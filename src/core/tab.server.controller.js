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
import * as OSS from "ali-oss";
import * as path from "path";
import * as fs from "fs/promises";
import * as SparkMD5 from "spark-md5";
import * as _ from "lodash";
import sift from "sift";
var tabServerController = /** @class */ (function () {
    function tabServerController(config) {
        this.childrenList = {};
        this.updateTimer = {};
        Object.assign(this, config);
        if (config.aliOss && config.aliOss.accessKeyId) {
            this.ossClient = new OSS(config.aliOss);
        }
    }
    tabServerController.prototype.putTab = function (tab, module) {
        this.tab = tab;
        this.module = module;
    };
    tabServerController.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne({ _id: id })];
                    case 1:
                        el = _a.sent();
                        if (el)
                            return [2 /*return*/, JSON.parse(JSON.stringify(el))];
                        else
                            return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "未找到id为 #" + id + " 的" + this.className })];
                        return [2 /*return*/];
                }
            });
        });
    };
    tabServerController.prototype.eventSync = function (el, _el) {
        if (_el) {
            this.unitUpdate(this.className + "-" + el._id);
            console.time("findDifferent");
            var parents = el.parents || [], _parents = _el.parents || [], children = el.children || {}, _children = _el.children || {};
            var parentAdd = _.difference(parents, _parents), parentDelete = _.difference(_parents, parents), parentsDifference = parentAdd.concat(parentDelete), childrenDifference = {};
            for (var i in children) {
                if (_children[i]) {
                    // const d = _.difference(children[i], _children[i]).concat(_.difference(_children[i], children[i]));
                    // if (d.length)
                    //   childrenDifference[i] = d;
                    if (JSON.stringify(children[i]) !== JSON.stringify(_children[i]))
                        childrenDifference[i] = true;
                }
                else {
                    childrenDifference[i] = true;
                }
            }
            // console.log(childrenDifference);
            for (var i in _children) {
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
            for (var _i = 0, parentAdd_1 = parentAdd; _i < parentAdd_1.length; _i++) {
                var idString = parentAdd_1[_i];
                this.childrenRefresh(idString, el._id);
            }
            for (var _a = 0, parentDelete_1 = parentDelete; _a < parentDelete_1.length; _a++) {
                var idString = parentDelete_1[_a];
                this.childrenRefresh(idString, null, el._id);
            }
            for (var parentString in childrenDifference) {
                this.unitUpdate(this.className + "." + el._id + "." + parentString, {
                    type: "fixedChange",
                    changeId: el._id
                });
            }
        }
    };
    tabServerController.prototype.unitUpdate = function (id, data, timer) {
        var _this = this;
        var res = { id: id };
        if (data)
            Object.assign(res, data);
        if (timer) {
            if (this.updateTimer[id]) {
                clearTimeout(this.updateTimer[id]);
            }
            this.updateTimer[id] = setTimeout(function () {
                console.log("推送更新：", timer + "ms(延迟)", id);
                _this.tab.socket.to(id).emit("update", res);
                delete _this.updateTimer[id];
            }, timer);
        }
        else if (this.tab.socket) {
            console.log("推送更新：", id);
            this.tab.socket.to(id).emit("update", res);
        }
    };
    tabServerController.prototype.matchReg = function (array) {
        for (var i in array) {
            if (typeof array[i] === "string") {
                var reg = array[i].match(/^\/(.+)\/(.?)/);
                if (reg) {
                    array[i] = new RegExp(reg[1], reg[2]);
                }
            }
        }
        return array;
    };
    tabServerController.prototype.children = function (parentString, _filter, _sort, limit, skip, user) {
        if (_filter === void 0) { _filter = {}; }
        if (_sort === void 0) { _sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var emptyOption, _a, id, place, key, el, idList, notFoundList, fixedList, listOption, _b, filter, _c, _d, _i, i, _e, units, id_1, _f, _g, e_1, _h, notFoundList_1, index, authList;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        emptyOption = JSON.stringify({}), _a = this.tab.parsePlaceString(parentString), id = _a.id, place = _a.place, key = _a.key;
                        limit = Number(limit);
                        skip = Number(skip);
                        if (!(JSON.stringify(_sort) === emptyOption)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.module.get(id, user)];
                    case 1:
                        el = _j.sent(), idList = el.children[place + "." + key] || [], notFoundList = [], fixedList = [], listOption = { skip: skip, total: 0 }, _b = (el[place][key] ? el[place][key] : { filter: {} }).filter, filter = _b === void 0 ? {} : _b;
                        if (!!skip) return [3 /*break*/, 8];
                        _c = [];
                        for (_d in idList)
                            _c.push(_d);
                        _i = 0;
                        _j.label = 2;
                    case 2:
                        if (!(_i < _c.length)) return [3 /*break*/, 7];
                        i = _c[_i];
                        _e = this.module.parsePlaceString(idList[i]), units = _e.units, id_1 = _e.id;
                        _j.label = 3;
                    case 3:
                        _j.trys.push([3, 5, , 6]);
                        _g = (_f = fixedList).push;
                        return [4 /*yield*/, this.tab[units].get(id_1, user)];
                    case 4:
                        _g.apply(_f, [_j.sent()]);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _j.sent();
                        if (e_1.status === "NOT_FOUND")
                            notFoundList.push(i);
                        return [3 /*break*/, 6];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7:
                        notFoundList.reverse();
                        for (_h = 0, notFoundList_1 = notFoundList; _h < notFoundList_1.length; _h++) {
                            index = notFoundList_1[_h];
                            el.children[place + "." + key].splice(index, 1);
                        }
                        if (notFoundList.length)
                            el.save(this.tab.me);
                        // @ts-ignore
                        listOption.fixed = fixedList.length;
                        _j.label = 8;
                    case 8:
                        this.matchReg(_filter);
                        Object.assign(filter, _filter);
                        return [4 /*yield*/, this.childrenWaiter(id, place, key, filter, _sort, limit, skip, user)];
                    case 9:
                        authList = _j.sent();
                        listOption.skip = authList.skip;
                        listOption.total = authList.total;
                        return [2 /*return*/, this.tab.makeList(fixedList.concat(authList), listOption)];
                    case 10:
                        console.log("获取自定义" + this.className + "Children:", "#" + id, place, key, _filter, _sort, limit, skip);
                        return [2 /*return*/, this.childrenFromControllerWithOption(id, place, key, _filter, _sort, limit, skip, user)];
                }
            });
        });
    };
    tabServerController.prototype.childrenWaiter = function (id, place, key, filter, sort, limit, skip, user) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        if (filter === void 0) { filter = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var childrenId, cache;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        childrenId = id + "." + place + "." + key, cache = this.childrenList[childrenId];
                        if (!cache) return [3 /*break*/, 1];
                        if (cache && !cache.waiting)
                            return [2 /*return*/, this.childrenFromCache(id, place, key, filter, sort, limit, skip, user)];
                        else
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    var timer = setInterval(function () {
                                        var _cache = _this.childrenList[childrenId];
                                        if (_cache && !_cache.waiting) {
                                            resolve(_this.childrenFromCache(id, place, key, filter, sort, limit, skip, user));
                                            clearInterval(timer);
                                        }
                                        else if (!_cache) {
                                            reject();
                                            clearInterval(timer);
                                        }
                                    }, 100);
                                })];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.childrenFromController(id, place, key, sort, limit, skip)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.childrenFromCache(id, place, key, filter, sort, limit, skip, user)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tabServerController.prototype.childrenFromCache = function (id, place, key, filter, sort, limit, skip, user) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        if (filter === void 0) { filter = {}; }
        if (sort === void 0) { sort = "default"; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, list, total, res, finder, notFoundList, i, subId, el, e_2, _i, notFoundList_2, index;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.childrenList[id + "." + place + "." + key], list = _a.list, total = _a.total;
                        this.childrenList[id + "." + place + "." + key].lastRead = new Date();
                        res = [], finder = sift(filter), notFoundList = [];
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!((res.length < (limit + skip)) && (i < total))) return [3 /*break*/, 7];
                        subId = list[i];
                        if (!!subId) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.childrenFromController(id, place, key, sort, limit + 50, i)];
                    case 2:
                        _b.sent();
                        subId = list[i];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.module.get(subId, user)];
                    case 4:
                        el = _b.sent();
                        if (finder(el))
                            res.push(el);
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _b.sent();
                        if (e_2.status === "NOT_FOUND")
                            notFoundList.push(i);
                        return [3 /*break*/, 6];
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7:
                        for (_i = 0, notFoundList_2 = notFoundList; _i < notFoundList_2.length; _i++) {
                            index = notFoundList_2[_i];
                            this.childrenList[id + "." + place + "." + key].list.splice(index, 1);
                        }
                        return [2 /*return*/, this.tab.makeList(res, { skip: i, total: total })];
                }
            });
        });
    };
    tabServerController.prototype.childrenFromController = function (id, place, key, _sort, limit, skip) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var el, childrenId, filter, _a, sort, list, _b, _c, i;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.module.get(id)];
                    case 1:
                        el = _d.sent(), childrenId = id + "." + place + "." + key, filter = { parents: childrenId }, _a = (el[place][key] ? el[place][key] : { sort: {} }).sort, sort = _a === void 0 ? {} : _a;
                        this.childrenList[childrenId] = this.childrenList[childrenId] || { list: [] };
                        this.childrenList[childrenId].waiting = true;
                        this.childrenList[childrenId].sort = sort;
                        _c = (_b = this.module).assignList;
                        return [4 /*yield*/, this.list(filter, sort, limit, skip)];
                    case 2:
                        list = _c.apply(_b, [_d.sent()]);
                        for (i in list) {
                            this.childrenList[childrenId].list[Number(i) + skip] = list[i]._id;
                        }
                        this.childrenList[childrenId].total = list.total;
                        this.childrenList[childrenId].waiting = false;
                        console.log("获取" + this.className + "Children:", "#" + id, place, key, limit, skip);
                        return [2 /*return*/, list];
                }
            });
        });
    };
    tabServerController.prototype.lastChildren = function (id, place, key, _sort) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        return __awaiter(this, void 0, void 0, function () {
            var childrenId, children, sort, sorter, lastEl, list, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        childrenId = id + "." + place + "." + key, children = this.childrenList[childrenId], sort = JSON.stringify(children.sort), sorter = { _id: 1 };
                        if (!(children.list.length !== children.total)) return [3 /*break*/, 2];
                        if (sort === JSON.stringify({}) || sort === JSON.stringify({ _id: 1 })) {
                            sorter._id = -1;
                        }
                        else if (sort === JSON.stringify({ _id: -1 })) {
                            sorter._id = 1;
                        }
                        _b = (_a = this.module).assignList;
                        return [4 /*yield*/, this.list({ parents: childrenId }, sorter, 1)];
                    case 1:
                        list = _b.apply(_a, [_c.sent()]);
                        lastEl = list[0];
                        return [3 /*break*/, 3];
                    case 2:
                        lastEl = this.module.get(children.list[children.total - 1]);
                        _c.label = 3;
                    case 3: return [2 /*return*/, lastEl];
                }
            });
        });
    };
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
    tabServerController.prototype.childrenRefresh = function (parentString, addId, delId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, place, key, children, emitted, firstEl, lastEl, parent_1, parent_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("childrenRefresh:", parentString);
                        _a = this.tab.parsePlaceString(parentString), id = _a.id, place = _a.place, key = _a.key;
                        children = this.childrenList[parentString];
                        if (!children) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.childrenFromController(id, place, key)];
                    case 1:
                        _b.sent();
                        if (!addId) return [3 /*break*/, 4];
                        emitted = false;
                        firstEl = children.list[0];
                        if (firstEl && firstEl._id === addId) {
                            //触发列表头部添加
                            this.unitUpdate(this.className + "." + parentString, { type: "addFirst", changeId: addId });
                            emitted = true;
                        }
                        return [4 /*yield*/, this.lastChildren(id, place, key)];
                    case 2:
                        lastEl = _b.sent();
                        if (lastEl && lastEl._id === addId && !emitted) {
                            //触发列表尾部添加
                            this.unitUpdate(this.className + "." + parentString, { type: "addLast", changeId: addId });
                            emitted = true;
                        }
                        if (!emitted) {
                            this.unitUpdate(this.className + "." + parentString);
                        }
                        return [4 /*yield*/, this.module.get(id, this.tab.me)];
                    case 3:
                        parent_1 = _b.sent();
                        // if (parent.childrenPushed)
                        parent_1.childrenPushed(parentString, addId);
                        return [3 /*break*/, 6];
                    case 4:
                        this.unitUpdate(this.className + "." + parentString);
                        if (!delId) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.module.get(id, this.tab.me)];
                    case 5:
                        parent_2 = _b.sent();
                        // if (parent.childrenDeleted)
                        parent_2.childrenDeleted(parentString, delId);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    tabServerController.prototype.deleteFromChildren = function (id) {
    };
    tabServerController.prototype.childrenFromControllerWithOption = function (id, place, key, _filter, _sort, limit, skip, user) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        if (_filter === void 0) { _filter = {}; }
        if (_sort === void 0) { _sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var el, _a, _b, filter, _c, sort, idList, fixedList, _d, _e, _i, i, _f, _g, unit, id_2, _h, _j, authList;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, this.module.get(id, user)];
                    case 1:
                        el = _k.sent(), _a = el[place] ? el[place][key] : { filter: {}, sort: {} }, _b = _a.filter, filter = _b === void 0 ? {} : _b, _c = _a.sort, sort = _c === void 0 ? {} : _c, idList = el.children[place + "." + key] || [], fixedList = [];
                        if (!!skip) return [3 /*break*/, 5];
                        _d = [];
                        for (_e in idList)
                            _d.push(_e);
                        _i = 0;
                        _k.label = 2;
                    case 2:
                        if (!(_i < _d.length)) return [3 /*break*/, 5];
                        i = _d[_i];
                        _f = idList[i].split("-"), _g = _f[0], unit = _g === void 0 ? this.className : _g, id_2 = _f[1];
                        _h = fixedList;
                        _j = i;
                        return [4 /*yield*/, this.tab[unit + "s"].get(id_2, user)];
                    case 3:
                        _h[_j] = _k.sent();
                        _k.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        Object.assign(filter, _filter);
                        Object.assign(sort, _sort);
                        filter.parents = id + "." + place + "." + key;
                        return [4 /*yield*/, this.module.find(filter, sort, limit, skip)];
                    case 6:
                        authList = _k.sent();
                        if (authList.length !== limit)
                            limit = authList.length;
                        return [2 /*return*/, this.tab.makeList(fixedList.concat(authList), { skip: limit + skip })];
                }
            });
        });
    };
    tabServerController.prototype.list = function (finder, sort, limit, skip) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var total, listFinder, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.matchReg(finder);
                        return [4 /*yield*/, this.Model.count(finder)];
                    case 1:
                        total = _a.sent(), listFinder = this.Model.find(finder).sort(sort).skip(skip);
                        if (limit > 0) {
                            listFinder.limit(limit);
                        }
                        return [4 /*yield*/, listFinder];
                    case 2:
                        list = _a.sent();
                        if (list)
                            return [2 /*return*/, this.tab.makeList(this.tab.pureData(list), {
                                    skip: skip + list.length,
                                    total: total,
                                    filter: finder,
                                    sort: sort
                                })];
                        else
                            return [2 /*return*/, Promise.reject({ message: "获取列表失败，或您没有查看这些" + this.className + "的权限" })];
                        return [2 /*return*/];
                }
            });
        });
    };
    tabServerController.prototype.create = function (el, user) {
        return __awaiter(this, void 0, void 0, function () {
            var rights, pushParents, type, elModel, _a, _b, _c, _d, newEl, _i, _e, idString, _f, _g, _h, i, _j, slot, place, key, pel;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        rights = this.module.rights(el, user), pushParents = el.pushParents;
                        delete el.pushParents;
                        if (!el.type) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tab.types.get(el.type, user)];
                    case 1:
                        type = _k.sent();
                        el.data = el.data || {};
                        el.title = el.title || type.title;
                        Object.assign(el.data, type.data, el.data);
                        _k.label = 2;
                    case 2:
                        elModel = new this.Model(el);
                        elModel.owner = user._id;
                        if (!rights.isAnonymous) return [3 /*break*/, 4];
                        delete elModel.owner;
                        elModel.accessControl = {};
                        _b = (_a = JSON).parse;
                        _d = (_c = JSON).stringify;
                        return [4 /*yield*/, elModel.save()];
                    case 3: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, [_k.sent()])])];
                    case 4: return [4 /*yield*/, elModel.save()];
                    case 5:
                        newEl = _k.sent();
                        for (_i = 0, _e = newEl.parents; _i < _e.length; _i++) {
                            idString = _e[_i];
                            this.childrenRefresh(idString, newEl._id.toString());
                        }
                        if (!pushParents) return [3 /*break*/, 10];
                        _f = [];
                        for (_g in pushParents)
                            _f.push(_g);
                        _h = 0;
                        _k.label = 6;
                    case 6:
                        if (!(_h < _f.length)) return [3 /*break*/, 10];
                        i = _f[_h];
                        _j = this.tab.parsePlaceString(pushParents[i]), slot = _j.slot, place = _j.place, key = _j.key;
                        return [4 /*yield*/, this.tab.get(pushParents[i], user)];
                    case 7:
                        pel = _k.sent();
                        return [4 /*yield*/, this.module.pushChildren(pel, slot + "." + this.className + "." + newEl._id + "." + place + "." + key, user)];
                    case 8:
                        _k.sent();
                        _k.label = 9;
                    case 9:
                        _h++;
                        return [3 /*break*/, 6];
                    case 10: return [2 /*return*/, JSON.parse(JSON.stringify(newEl))];
                }
            });
        });
    };
    tabServerController.prototype.writeParse = function (el, rights, user) {
        if (rights.isRoot)
            return el;
        if (rights.isAnonymous || !rights.isOwner) {
            delete el.owner;
            el.accessControl = {};
            return el;
        }
        el.owner = user._id;
        return el;
    };
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
    tabServerController.prototype.save = function (el, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _el, oldEl, newEl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne({ _id: el._id })];
                    case 1:
                        _el = _a.sent(), oldEl = this.tab.pureData(_el);
                        el = this.writeParse(el, this.module.rights(oldEl, user), user);
                        Object.assign(_el, el);
                        return [4 /*yield*/, _el.save()];
                    case 2:
                        _a.sent();
                        newEl = this.tab.pureData(_el);
                        // console.log(newEl.updatedAt, oldEl.updatedAt);
                        this.eventSync(newEl, oldEl);
                        return [2 /*return*/, newEl];
                }
            });
        });
    };
    tabServerController.prototype.delete = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var el, rights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id)];
                    case 1:
                        el = _a.sent();
                        return [4 /*yield*/, el.refresh()];
                    case 2:
                        _a.sent();
                        rights = this.module.rights(el, user);
                        if (!(rights.isOwner || rights.isRoot)) return [3 /*break*/, 4];
                        // if (el.beforeDelete)
                        el.beforeDelete();
                        return [4 /*yield*/, this.Model.deleteOne({ _id: id })];
                    case 3:
                        _a.sent();
                        // if (el.deleted)
                        el.deleted();
                        this.tab.socket.to(this.className + "-" + id).emit("delete", { id: this.className + "-" + id });
                        return [2 /*return*/, Promise.resolve({ message: this.className + " #" + el._id + " 已删除" })];
                    case 4: return [2 /*return*/, Promise.reject({
                            status: "FORBIDDEN",
                            message: "您没有删除" + this.className + " #" + el._id + " 的权限"
                        })];
                }
            });
        });
    };
    tabServerController.prototype.upload = function (file, id, place, key, p, user) {
        return __awaiter(this, void 0, void 0, function () {
            var el, rights, filename, index, suffix, md5, storeAs, url, spark, result, storePath, data, parentPath, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id)];
                    case 1:
                        el = _a.sent(), rights = this.module.rights(el, user);
                        console.log(el, user, rights);
                        if (!rights.write()) return [3 /*break*/, 11];
                        filename = file.originalname, index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length);
                        md5 = void 0, storeAs = user._id + "/", url = void 0;
                        if (index !== 32) {
                            spark = new SparkMD5.ArrayBuffer();
                            spark.append(file.buffer);
                            md5 = spark.end();
                            storeAs += md5 + "." + suffix;
                        }
                        else {
                            storeAs += filename;
                        }
                        if (!this.ossClient) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.ossClient.put(storeAs, file.buffer)];
                    case 2:
                        result = _a.sent();
                        if (this.aliOss.cdnUrl)
                            url = this.aliOss.cdnUrl + "/" + storeAs;
                        else
                            url = result.url;
                        return [3 /*break*/, 10];
                    case 3:
                        storePath = path.resolve(__dirname, "../../../client/assets/".concat(storeAs)), data = new Uint8Array(file.buffer);
                        parentPath = path.dirname(storePath);
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 8]);
                        return [4 /*yield*/, fs.access(parentPath)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        e_3 = _a.sent();
                        return [4 /*yield*/, fs.mkdir(parentPath, { recursive: true })];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [4 /*yield*/, fs.writeFile(storePath, data)];
                    case 9:
                        _a.sent();
                        url = "/assets/".concat(storeAs);
                        _a.label = 10;
                    case 10:
                        if (url) {
                            if (place || key) {
                                el[place][key] = url;
                                return [2 /*return*/, el.save(user)];
                            }
                            return [2 /*return*/, url];
                        }
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "无法存储该文件，请检查服务器设置" })];
                    case 11: return [2 /*return*/, Promise.reject({
                            status: "FORBIDDEN",
                            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
                        })];
                }
            });
        });
    };
    tabServerController.prototype.uploadDirectory = function (files, id, place, key, p, user) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        return __awaiter(this, void 0, void 0, function () {
            var el, rights, dir, ossUrl, _i, files_1, file, filename, index, storeAs, result, storePath, data, parentPath, e_4, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id, user)];
                    case 1:
                        el = _a.sent(), rights = this.module.rights(el, user);
                        if (!rights.write()) return [3 /*break*/, 13];
                        dir = user._id + "/" + id + "." + place + "." + key + "/";
                        ossUrl = "";
                        _i = 0, files_1 = files;
                        _a.label = 2;
                    case 2:
                        if (!(_i < files_1.length)) return [3 /*break*/, 12];
                        file = files_1[_i];
                        filename = file.fieldname, index = filename.indexOf("/"), storeAs = dir + filename.substring(index + 1, filename.length);
                        if (!this.ossClient) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.ossClient.put(storeAs, file.buffer)];
                    case 3:
                        result = _a.sent();
                        ossUrl = result.url;
                        return [3 /*break*/, 11];
                    case 4:
                        storePath = path.resolve(__dirname, "../../../client/assets/".concat(storeAs)), data = new Uint8Array(file.buffer);
                        parentPath = path.dirname(storePath);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 9]);
                        return [4 /*yield*/, fs.access(parentPath)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        e_4 = _a.sent();
                        return [4 /*yield*/, fs.mkdir(parentPath, { recursive: true })];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [4 /*yield*/, fs.writeFile(storePath, data)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        _i++;
                        return [3 /*break*/, 2];
                    case 12:
                        url = "";
                        if (this.ossClient) {
                            if (this.ossClient.options.cdnUrl)
                                url = this.ossClient.options.cdnUrl + "/" + dir;
                            else {
                                url = ossUrl.split(dir)[0] + dir;
                            }
                        }
                        else {
                            url = "/assets/".concat(dir);
                        }
                        el[place][key] = url;
                        return [2 /*return*/, el.save(user)];
                    case 13: return [2 /*return*/, Promise.reject({
                            status: "FORBIDDEN",
                            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
                        })];
                }
            });
        });
    };
    return tabServerController;
}());
export default tabServerController;
