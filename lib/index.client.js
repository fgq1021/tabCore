'use strict';

var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs/promises');
var SparkMD5 = require('spark-md5');
var _ = require('lodash');
var sift = require('sift');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var mongoose__namespace = /*#__PURE__*/_interopNamespaceDefault(mongoose);
var path__namespace = /*#__PURE__*/_interopNamespaceDefault(path);
var fs__namespace = /*#__PURE__*/_interopNamespaceDefault(fs);
var SparkMD5__namespace = /*#__PURE__*/_interopNamespaceDefault(SparkMD5);
var ___namespace = /*#__PURE__*/_interopNamespaceDefault(_);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

// import { reactive } from "vue";
// import { Type } from "class-transformer";
var defaultTypeModule = {
    events: {
        mounted: function () {
        },
        created: function () {
        },
        beforeSave: function () {
        },
        saved: function () {
        },
        beforeDelete: function () {
        },
        deleted: function () {
        },
        childrenSaved: function (placeString) {
        },
        childrenPushed: function (placeString, id) {
        },
        childrenDeleted: function (placeString, id) {
        }
    }
};
var tabUnit = /** @class */ (function () {
    // private events: {};
    function tabUnit(el) {
        this.children = {};
        this.data = {};
        this.parents = [];
        this.isDelete = false;
        Object.assign(this, el);
    }
    tabUnit.prototype.$init = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var typeModules, typeModule, method, method, method;
            return __generator$1(this, function (_a) {
                typeModules = this.api().tab.typeModules;
                typeModule = typeModules[this.type] || typeModules[this._id];
                if (typeModule) {
                    for (method in typeModule.methods) {
                        this[method] = typeModule.methods[method];
                    }
                    for (method in typeModule.events) {
                        this[method] = typeModule.events[method];
                    }
                }
                else {
                    for (method in defaultTypeModule.events) {
                        this[method] = defaultTypeModule.events[method];
                    }
                }
                this.mounted();
                return [2 /*return*/];
            });
        });
    };
    tabUnit.prototype.refresh = function (user) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api().getFromController(this._id, user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tabUnit.prototype.save = function (user, option) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.api().save(this, user)];
            });
        });
    };
    tabUnit.prototype.upload = function (file, place, key, p) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.api().upload(file, this._id, place, key, p)];
            });
        });
    };
    tabUnit.prototype.uploadDirectory = function (files, place, key, p) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.api().uploadDirectory(files, this._id, place, key, p)];
            });
        });
    };
    tabUnit.prototype.delete = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.api().delete(this)];
            });
        });
    };
    tabUnit.prototype.deleteFrom = function (placeString, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api().deleteFrom(this, placeString, user)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async getChildren(place: string = "data", key: string = "sub",
    //                   filter: object = {}, sort: object = {}, limit: number = 50, skip: number = 0,
    //                   user?) {
    //     return this.api().children(this._id, place, key, filter, sort, limit, skip, user);
    // }
    tabUnit.prototype.getChildren = function (placeString, filter, sort, limit, skip, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        if (filter === void 0) { filter = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return this.api().children(this._id + "." + placeString, filter, sort, limit, skip, user);
    };
    tabUnit.prototype.getChild = function (placeString, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        var parentString = this.children[placeString];
        if (parentString)
            return this.api().tab.get(parentString, user);
        else
            return Promise.reject({ message: "此位置为空", status: "NOT_FOUND" });
    };
    tabUnit.prototype.getType = function (user) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api().getType(this.type, user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tabUnit.prototype.getOwner = function (user) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.api().getOwner(this.owner, user)];
            });
        });
    };
    tabUnit.prototype.createChild = function (el, placeString, unit, slot, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        return __awaiter$1(this, void 0, void 0, function () {
            var parentType, structure, key, type, _a, Unit;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        structure = { settings: { unit: null }, dataType: null }, key = this.api().parsePlaceString(placeString).key;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.getType(user)];
                    case 2:
                        // @ts-ignore
                        // console.log(this.title, this._id, user._id);
                        parentType = _b.sent();
                        // console.log(parentType);
                        structure = parentType.getStructure(key);
                        unit = unit || structure.settings.unit || this.className;
                        slot = slot || structure.dataType || "Array";
                        if (!!el.type) return [3 /*break*/, 7];
                        if (!(slot === "Object")) return [3 /*break*/, 4];
                        return [4 /*yield*/, parentType.getChild(placeString, user)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, parentType.getChildren(placeString, {}, {}, 1, 0, user)];
                    case 5:
                        _a = (_b.sent())[0];
                        _b.label = 6;
                    case 6:
                        type = _a;
                        if (type)
                            el.type = type._id;
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        if (!(slot === "Object")) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.pushFixChild(el, placeString, unit, slot, user)];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11:
                        Unit = this.api().parseUnit(unit).Unit;
                        if (Unit === this.className) {
                            return [2 /*return*/, this.pushChild(el, placeString, user)];
                        }
                        return [2 /*return*/, this.pushFixChild(el, placeString, unit, slot, user)];
                }
            });
        });
    };
    tabUnit.prototype.pushChild = function (el, placeString, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        return __awaiter$1(this, void 0, void 0, function () {
            var type, t;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!el.type) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getType(user)];
                    case 1:
                        type = _a.sent();
                        return [4 /*yield*/, type.getChildren(placeString)];
                    case 2:
                        t = (_a.sent())[0];
                        if (t)
                            el.type = t._id;
                        _a.label = 3;
                    case 3:
                        el.parents = el.parents || [];
                        el.parents.push(this._id + "." + placeString);
                        return [2 /*return*/, this.api().create(el, user)];
                }
            });
        });
    };
    tabUnit.prototype.pushFixChild = function (el, placeString, unit, slot, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        if (unit === void 0) { unit = this.className; }
        if (slot === void 0) { slot = "Array"; }
        return __awaiter$1(this, void 0, void 0, function () {
            var units;
            return __generator$1(this, function (_a) {
                units = this.api().parseUnit(unit).units;
                el.pushParents = [slot + "." + this.className + "." + this._id + "." + placeString];
                return [2 /*return*/, this.api().tab[units].create(el, user)];
            });
        });
    };
    tabUnit.prototype.fixChild = function (el, placeString, slot, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        if (slot === void 0) { slot = "Array"; }
        return __awaiter$1(this, void 0, void 0, function () {
            var i;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (slot === "Object") {
                            this.children[placeString] = el.className + "-" + el._id;
                        }
                        else if (slot === "Array") {
                            this.children[placeString] = this.children[placeString] || [];
                            this.children[placeString].push(el.className + "-" + el._id);
                        }
                        return [4 /*yield*/, this.save(user)];
                    case 1:
                        _a.sent();
                        i = el.parents.indexOf(this._id + "." + placeString);
                        if (!(i !== -1)) return [3 /*break*/, 3];
                        el.parents.splice(i, 1);
                        return [4 /*yield*/, el.save(user)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, this];
                }
            });
        });
    };
    tabUnit.prototype.unFixChildren = function (placeString, i, el, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!el) return [3 /*break*/, 4];
                        if (!(el.className === this.className)) return [3 /*break*/, 2];
                        return [4 /*yield*/, el.pushParent(this._id + "." + placeString)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.unFixChildren(placeString, i, undefined, user)];
                    case 2:
                        if (el.parents.length) {
                            return [2 /*return*/, this.unFixChildren(placeString, i, undefined, user)];
                        }
                        else
                            return [2 /*return*/, Promise.reject()];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        if (this.children[placeString]) {
                            this.children[placeString].splice(i, 1);
                            return [2 /*return*/, this.save(user)];
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    tabUnit.prototype.unFixChild = function (placeString, el, user) {
        if (placeString === void 0) { placeString = "data.sub"; }
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                if ((this.children[placeString] === el.className + "-" + el._id) && el.parents.length) {
                    delete this.children[placeString];
                    return [2 /*return*/, this.save(user)];
                }
                return [2 /*return*/];
            });
        });
    };
    tabUnit.prototype.pushParent = function (placeString, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, id, place, key, parentString;
            return __generator$1(this, function (_b) {
                _a = this.api().parsePlaceString(placeString), id = _a.id, place = _a.place, key = _a.key;
                parentString = id + "." + place + "." + key;
                if (this.parents.indexOf(parentString) === -1) {
                    this.parents.push(parentString);
                    return [2 /*return*/, this.save(user)];
                }
                return [2 /*return*/];
            });
        });
    };
    tabUnit.prototype.toJson = function (els, user) {
        if (els === void 0) { els = {}; }
        return __awaiter$1(this, void 0, void 0, function () {
            var data, type, _a, _b, _i, i, s, _c, _d;
            return __generator$1(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        data = this.api().tab.pureData(this.data);
                        data._id = this._id;
                        if (!els[this._id]) return [3 /*break*/, 1];
                        // console.log("重复id", this._id);
                        return [2 /*return*/, { _id: this._id, cyclic: true }];
                    case 1:
                        els[this._id] = data;
                        return [4 /*yield*/, this.getType(user)];
                    case 2:
                        type = _e.sent();
                        _a = [];
                        for (_b in type.dataStructure)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        i = _a[_i];
                        s = type.dataStructure[i];
                        if (!(s.dataType === "Object")) return [3 /*break*/, 8];
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 7, , 8]);
                        _c = data;
                        _d = s.name;
                        return [4 /*yield*/, this.getChild("data." + s.name, user)];
                    case 5: return [4 /*yield*/, (_e.sent()).toJson(els, user)];
                    case 6:
                        _c[_d] = _e.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        _e.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: return [2 /*return*/, data];
                }
            });
        });
    };
    tabUnit.prototype.mounted = function () {
    };
    return tabUnit;
}());
var tabModule = /** @class */ (function () {
    function tabModule(config, controller) {
        this.list = {};
        this.childrenList = {};
        Object.assign(this, config);
        this.api = new controller(config);
        this.init();
    }
    tabModule.prototype.putTab = function (tab) {
        this.tab = tab;
    };
    tabModule.prototype.init = function () {
    };
    tabModule.prototype.assign = function (el) {
        var id = el._id;
        var element = this.list[id];
        if (element && element._id) {
            // if (new Date(el.updatedAt) >= new Date(element.updatedAt)) {
            if (new Date(el.updatedAt) > new Date(element.updatedAt)) {
                console.log("更新" + this.className + ":", el.title || el.ChineseName || el.username, "#" + el._id);
                var oldType = element.type;
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
        }
        else {
            console.log("获取" + this.className + ":", el.title || el.ChineseName || el.username, "#" + el._id);
            if (this.tab.reactive)
                this.list[id] = this.tab.reactive(new this.unit(el));
            else
                this.list[id] = new this.unit(el);
            this.api.eventSync(el);
        }
        return this.list[id];
    };
    tabModule.prototype.assignList = function (list) {
        for (var i = 0; i < list.length; i++) {
            list[i] = this.assign(list[i]);
        }
        return list;
    };
    tabModule.prototype.get = function (id, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var el;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWaiter(id, user)];
                    case 1:
                        el = _a.sent();
                        if (this.rights(el, user).read())
                            return [2 /*return*/, el];
                        return [2 /*return*/, Promise.reject({
                                status: "FORBIDDEN",
                                message: (user ? user.username + "#" + user._id : "匿名用户") + "没有查看id为 #" + id + " " + this.className + "的权限"
                            })];
                }
            });
        });
    };
    tabModule.prototype.refresh = function (id) {
        var element = this.list[id];
        if (element && element._id) {
            return element.refresh();
        }
    };
    tabModule.prototype.listMy = function (finder, sort, limit, skip, user) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter$1(this, void 0, void 0, function () {
            var list;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user) return [3 /*break*/, 2];
                        Object.assign(finder, { owner: user._id });
                        return [4 /*yield*/, this.api.list(finder, sort, limit, skip)];
                    case 1:
                        list = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.listMy(finder, sort, limit, skip)];
                    case 3:
                        list = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.assignList(list)];
                }
            });
        });
    };
    tabModule.prototype.create = function (el, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var parents, pushParents, _a, _b, _i, i, id, pel, _c, _d, _e, i, pel, newEl, _f;
            return __generator$1(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        parents = [], pushParents = [];
                        _a = [];
                        for (_b in el.parents)
                            _a.push(_b);
                        _i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        id = this.tab.parsePlaceString(el.parents[i]).id;
                        return [4 /*yield*/, this.get(id, user)];
                    case 2:
                        pel = _g.sent();
                        if (pel)
                            parents.push(el.parents[i]);
                        _g.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        el.parents = parents;
                        _c = [];
                        for (_d in el.pushParents)
                            _c.push(_d);
                        _e = 0;
                        _g.label = 5;
                    case 5:
                        if (!(_e < _c.length)) return [3 /*break*/, 8];
                        i = _c[_e];
                        return [4 /*yield*/, this.tab.get(el.pushParents[i], user)];
                    case 6:
                        pel = _g.sent();
                        if (this.rights(pel, user).write())
                            pushParents.push(el.pushParents[i]);
                        _g.label = 7;
                    case 7:
                        _e++;
                        return [3 /*break*/, 5];
                    case 8:
                        el.pushParents = pushParents;
                        if (!(el.parents.length || el.pushParents.length)) return [3 /*break*/, 10];
                        _f = this.assign;
                        return [4 /*yield*/, this.api.create(el, user)];
                    case 9:
                        newEl = _f.apply(this, [_g.sent()]);
                        newEl.created();
                        return [2 /*return*/, newEl];
                    case 10: return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "请最少添加一个可用的父系元素" })];
                }
            });
        });
    };
    tabModule.prototype.save = function (el, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var oriEl, rights, _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.get(el._id, user)];
                    case 1:
                        oriEl = _b.sent();
                        rights = this.rights(oriEl, user);
                        if (!rights.write()) return [3 /*break*/, 3];
                        oriEl.beforeSave(user);
                        _a = this.assign;
                        return [4 /*yield*/, this.api.save(el, user)];
                    case 2:
                        _a.apply(this, [_b.sent()]);
                        oriEl.saved(user);
                        return [2 /*return*/, oriEl];
                    case 3: return [2 /*return*/, Promise.reject({
                            status: "FORBIDDEN",
                            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
                        })];
                }
            });
        });
    };
    tabModule.prototype.delete = function (el, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var id;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = el._id || el;
                        // if (el.beforeDelete)
                        //   el.beforeDelete();
                        return [4 /*yield*/, this.api.delete(id, user)];
                    case 1:
                        // if (el.beforeDelete)
                        //   el.beforeDelete();
                        _a.sent();
                        // if (el.deleted)
                        //   el.deleted();
                        this.afterDelete(id);
                        return [2 /*return*/, Promise.resolve({ message: this.className + " #" + el._id + " 已删除" })];
                }
            });
        });
    };
    tabModule.prototype.deleteFrom = function (el, placeString, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, id, place, key, pIndex, _b;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.parsePlaceString(placeString), id = _a.id, place = _a.place, key = _a.key;
                        pIndex = el.parents.indexOf(id + "." + place + "." + key);
                        if (!(pIndex !== -1)) return [3 /*break*/, 2];
                        el.parents.splice(pIndex, 1);
                        return [4 /*yield*/, el.save(user)];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        _b = this.removeChildren;
                        return [4 /*yield*/, this.tab.get(placeString)];
                    case 3: return [4 /*yield*/, _b.apply(this, [_c.sent(), el.className + "." + el._id + "." + place + "." + key, user])];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    tabModule.prototype.afterDelete = function (id) {
        var el = this.list[id];
        if (el) {
            el.isDelete = true;
            // delete this.list[id];
            el.data = {};
            this.api.deleteFromChildren(id);
        }
    };
    tabModule.prototype.upload = function (file, id, place, key, progress, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(file && id)) return [3 /*break*/, 2];
                        _a = this.assign;
                        return [4 /*yield*/, this.api.upload(file, id, place, key, progress, user)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    case 2: return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "文件或ID格式不对" })];
                }
            });
        });
    };
    tabModule.prototype.uploadDirectory = function (file, id, place, key, progress, user) {
        if (place === void 0) { place = "data"; }
        if (key === void 0) { key = "sub"; }
        return __awaiter$1(this, void 0, void 0, function () {
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(file && id)) return [3 /*break*/, 2];
                        _a = this.assign;
                        return [4 /*yield*/, this.api.uploadDirectory(file, id, place, key, progress, user)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    case 2: return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "文件或ID格式不对" })];
                }
            });
        });
    };
    tabModule.prototype.pushChildren = function (el, placeString, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var rights, _a, slot, units, id, place, key, keyString;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!el._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.get(el, user)];
                    case 1:
                        el = _b.sent();
                        _b.label = 2;
                    case 2:
                        rights = this.rights(el, user);
                        if (rights.write()) {
                            _a = this.tab.parsePlaceString(placeString), slot = _a.slot, units = _a.units, id = _a.id, place = _a.place, key = _a.key, keyString = place + "." + key;
                            switch (slot) {
                                case "Array":
                                    el.children[keyString] = el.children[keyString] || [];
                                    el.children[keyString].push(units + "-" + id);
                                    break;
                                case "Object":
                                    el.children[keyString] = units + "-" + id;
                            }
                            return [2 /*return*/, el.save(user)];
                        }
                        else
                            return [2 /*return*/, Promise.reject({
                                    status: "FORBIDDEN",
                                    message: "您没有修改" + this.className + " #" + el._id + " 的权限"
                                })];
                }
            });
        });
    };
    tabModule.prototype.removeChildren = function (el, placeString, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var rights, _a, Unit, id, place, key, keyString, childrenString, cIndex;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!el._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.get(el, user)];
                    case 1:
                        el = _b.sent();
                        _b.label = 2;
                    case 2:
                        rights = this.rights(el, user);
                        if (rights.write()) {
                            _a = this.tab.parsePlaceString(placeString), Unit = _a.Unit, id = _a.id, place = _a.place, key = _a.key, keyString = place + "." + key, childrenString = Unit + "-" + id;
                            if (el.children[keyString] === childrenString) {
                                delete el.children[keyString];
                                return [2 /*return*/, el.save(user)];
                            }
                            else {
                                cIndex = el.children[keyString].indexOf(childrenString);
                                if (cIndex !== -1) {
                                    el.parents.splice(cIndex, 1);
                                    return [2 /*return*/, el.save(user)];
                                }
                            }
                            return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: el.className + " #" + el._id + " 下没有固定此元素" })];
                        }
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "您没有修改" + el.className + " #" + el._id + " 的权限" })];
                }
            });
        });
    };
    tabModule.prototype.rights = function (el, user) {
        if (this.tab.token)
            user = this.tab.me;
        var isRoot = false, isOwner = false, isAnonymous = !user, isClient = this.tab.isClient;
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
        function getAccessControl(ac) {
            var rights = { read: false, write: false };
            if (ac) {
                var acList = ac.split("");
                if (acList[1] === "r")
                    rights.read = true;
                if (acList[2] === "w")
                    rights.write = true;
                return rights;
            }
            return rights;
        }
        return {
            isRoot: isRoot,
            isOwner: isOwner,
            isAnonymous: isAnonymous,
            isClient: isClient,
            all: function () {
                var rights = { read: false, write: false, isRoot: isRoot, isOwner: isOwner };
                if (isRoot || isOwner) {
                    rights.read = true;
                    rights.write = true;
                    return rights;
                }
                if (user && user.manage) {
                    var accessControl = el.accessControl || {}; el.owner;
                    for (var _i = 0, _a = user.manage; _i < _a.length; _i++) {
                        var u = _a[_i];
                        var ac = getAccessControl(accessControl[u]);
                        if (ac.read)
                            rights.read = true;
                        if (ac.write)
                            rights.write = true;
                    }
                }
                if (!el.isHide) {
                    rights.read = true;
                }
                return rights;
            },
            read: function () {
                if (!el.isHide)
                    return true;
                if (isRoot || isOwner || isClient)
                    return true;
                var accessControl = el.accessControl || {};
                for (var _i = 0, _a = user.manage; _i < _a.length; _i++) {
                    var u = _a[_i];
                    var ac = getAccessControl(accessControl[u]);
                    if (ac.read)
                        return true;
                }
                return false;
            },
            write: function () {
                if (!user)
                    return false;
                if (isRoot || isOwner)
                    return true;
                var accessControl = el.accessControl || {};
                for (var _i = 0, _a = user.manage; _i < _a.length; _i++) {
                    var u = _a[_i];
                    var ac = getAccessControl(accessControl[u]);
                    if (ac.write)
                        return true;
                }
                return false;
            }
        };
    };
    tabModule.prototype.rightsOfList = function (list, user) {
        var res = [];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var el = list_1[_i];
            el = this.assign(el);
            if (this.rights(el, user).read())
                res.push(el);
        }
        return this.tab.makeList(res, { skip: list.skip, total: list.total });
    };
    tabModule.prototype.getWaiter = function (id, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var cache;
            var _this = this;
            return __generator$1(this, function (_a) {
                if (id) {
                    cache = this.list[id];
                    if (cache) {
                        if (cache._id && !cache.isDelete)
                            return [2 /*return*/, Promise.resolve(cache)];
                        else if (cache.isDelete)
                            return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "未找到id为 #" + id + " 的" + this.className })];
                        else
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    var timer = setInterval(function () {
                                        var _cache = _this.list[id];
                                        if (_cache && _cache._id) {
                                            resolve(_cache);
                                            clearInterval(timer);
                                        }
                                        else if (!_cache) {
                                            reject();
                                            clearInterval(timer);
                                        }
                                    }, 100);
                                })];
                    }
                    else {
                        this.list[id] = {};
                        return [2 /*return*/, this.getFromController(id, user)];
                    }
                }
                else
                    return [2 /*return*/, Promise.reject()];
            });
        });
    };
    tabModule.prototype.getFromController = function (id, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var el, err_1;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.get(id, user)];
                    case 1:
                        el = _a.sent();
                        return [2 /*return*/, this.assign(el)];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        delete this.list[id];
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tabModule.prototype.children = function (parentString, _filter, _sort, limit, skip, user) {
        if (_filter === void 0) { _filter = {}; }
        if (_sort === void 0) { _sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return this.api.children(parentString, _filter, _sort, limit, skip, user);
    };
    tabModule.prototype.child = function (parentString, user) {
    };
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
    tabModule.prototype.tabGet = function (placeString, user) {
        return this.tab.get(placeString, user);
    };
    tabModule.prototype.parseUnit = function (u) {
        return this.tab.parseUnit(u);
    };
    tabModule.prototype.parsePlaceString = function (placeString) {
        return this.tab.parsePlaceString(placeString);
    };
    // async _list(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0, user?): Promise<any> {
    //   return this.rightsOfList(await this.api.list(finder, sort, limit, skip), user);
    // }
    tabModule.prototype.find = function (finder, sort, limit, skip, user) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter$1(this, void 0, void 0, function () {
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.rightsOfList;
                        return [4 /*yield*/, this.api.list(finder, sort, limit, skip)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(), user])];
                }
            });
        });
    };
    tabModule.prototype.getType = function (id, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.tab.types.get(id, user)];
            });
        });
    };
    tabModule.prototype.getOwner = function (id, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.tab.users.get(id, user)];
            });
        });
    };
    tabModule.prototype.importType = function (type) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, _b, _i, i, unit;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = [];
                        for (_b in this.list)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        unit = this.list[i];
                        if (!(unit.type === type)) return [3 /*break*/, 3];
                        return [4 /*yield*/, unit.$init()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return tabModule;
}());

var types = /** @class */ (function (_super) {
    __extends$1(types, _super);
    function types(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "types";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends$1(Type, _super);
            function Type(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "Type";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            Type.prototype.getType = function (user) {
                return __awaiter$1(this, void 0, void 0, function () {
                    return __generator$1(this, function (_a) {
                        if (this.type)
                            return [2 /*return*/, _super.prototype.getType.call(this, user)];
                        return [2 /*return*/, this.api().get(this._id, user)];
                    });
                });
            };
            Type.prototype.getStructure = function (key) {
                var place = this.api().parsePlaceString(key);
                if (place.key)
                    key = place.key;
                for (var i in this.dataStructure) {
                    if (this.dataStructure[i].name === key)
                        return this.dataStructure[i];
                }
                return false;
            };
            Type.prototype.getKey = function (key) {
                return this.getStructure(key);
            };
            return Type;
        }(tabUnit));
        return _this_1;
    }
    types.prototype.getKeys = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getKeys()];
                    case 1:
                        _a.keys = _b.sent();
                        return [2 /*return*/, this.keys];
                }
            });
        });
    };
    types.prototype.listMy = function (finder, sort, limit, skip, user) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter$1(this, void 0, void 0, function () {
            var list;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user) return [3 /*break*/, 2];
                        Object.assign(finder, { owner: user._id, type: undefined });
                        return [4 /*yield*/, this.api.list(finder, sort, limit, skip)];
                    case 1:
                        list = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.listMy(finder, sort, limit, skip)];
                    case 3:
                        list = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.assignList(list)];
                }
            });
        });
    };
    types.prototype.find = function (finder, sort, limit, skip, user) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter$1(this, void 0, void 0, function () {
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        finder["type"] = undefined;
                        _a = this.rightsOfList;
                        return [4 /*yield*/, this.api.list(finder, sort, limit, skip)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(), user])];
                }
            });
        });
    };
    return types;
}(tabModule));

var users = /** @class */ (function (_super) {
    __extends$1(users, _super);
    function users(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "users";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends$1(User, _super);
            function User(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "User";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            return User;
        }(tabUnit));
        return _this_1;
    }
    users.prototype.create = function (el, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var parents, pushParents, _a, _b, _i, i, id, pel, _c, _d, _e, i, pel, newEl, _f;
            return __generator$1(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        parents = [], pushParents = [];
                        _a = [];
                        for (_b in el.parents)
                            _a.push(_b);
                        _i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        id = this.tab.parsePlaceString(el.parents[i]).id;
                        return [4 /*yield*/, this.get(id)];
                    case 2:
                        pel = _g.sent();
                        if (pel)
                            parents.push(el.parents[i]);
                        _g.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        el.parents = parents;
                        _c = [];
                        for (_d in el.pushParents)
                            _c.push(_d);
                        _e = 0;
                        _g.label = 5;
                    case 5:
                        if (!(_e < _c.length)) return [3 /*break*/, 8];
                        i = _c[_e];
                        return [4 /*yield*/, this.tab.get(el.pushParents[i])];
                    case 6:
                        pel = _g.sent();
                        if (this.rights(pel, user).write())
                            pushParents.push(el.pushParents[i]);
                        _g.label = 7;
                    case 7:
                        _e++;
                        return [3 /*break*/, 5];
                    case 8:
                        el.pushParents = pushParents;
                        _f = this.assign;
                        return [4 /*yield*/, this.api.create(el, user)];
                    case 9:
                        newEl = _f.apply(this, [_g.sent()]);
                        // if (newEl.created)
                        newEl.created();
                        return [2 /*return*/, newEl];
                }
            });
        });
    };
    users.prototype.authPassword = function (tel, password) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.authPassword(tel, password)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    users.prototype.getSmsCode = function (tel) {
        return this.api.getSmsCode(tel);
    };
    users.prototype.authSmsCode = function (tel, code, device, userInfo) {
        return this.api.authSmsCode(tel, code, device, userInfo);
    };
    users.prototype.authMe = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var me, e_1;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 5]);
                        return [4 /*yield*/, this.api.authMe()];
                    case 1:
                        me = _a.sent();
                        return [2 /*return*/, this.tab.assignMe(me)];
                    case 2:
                        e_1 = _a.sent();
                        if (!(e_1.status === "NOT_FOUND" || e_1.statusCode === 401)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.tab.clearMe()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, Promise.reject(e_1)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.getAuth = function (id) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.findOne({ _id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return users;
}(tabModule));

var elements = /** @class */ (function (_super) {
    __extends$1(elements, _super);
    function elements(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "elements";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends$1(Element, _super);
            function Element(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "Element";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            return Element;
        }(tabUnit));
        return _this_1;
    }
    //从TabOS2进行数据格式升级，升级时需要前往element.service.ts，将 parents: [String] 改为 parents: []
    elements.prototype.updateFromTabOS2 = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            function pureData(d) {
                return JSON.parse(JSON.stringify(d));
            }
            function updateEl(el) {
                var parents = pureData(el.parents), childrenElement = pureData(el.children).Element, children = {};
                for (var i in parents) {
                    var p = parents[i];
                    parents[i] = p.el + "." + p.place + "." + p.key;
                }
                for (var i in childrenElement) {
                    var c = childrenElement[i];
                    if (c.list && c.list.length) {
                        for (var i_1 in c.list) {
                            c.list[i_1] = "element-" + c.list[i_1];
                        }
                        children[c.place + "." + c.key] = c.list;
                    }
                    if (c.el)
                        children[c.place + "." + c.key] = "element-" + c.el;
                }
                console.log(parents, children);
                delete el.goodsInfo;
                delete el.manager;
                delete el.subIndex;
                el.parents = parents;
                el.children = children;
                return el;
            }
            var els, _i, els_1, el, _el;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("开始从TabOS2进行升级");
                        return [4 /*yield*/, this.api.Model.find({})];
                    case 1:
                        els = _a.sent();
                        console.log(els.length);
                        _i = 0, els_1 = els;
                        _a.label = 2;
                    case 2:
                        if (!(_i < els_1.length)) return [3 /*break*/, 5];
                        el = els_1[_i];
                        console.log(el.title);
                        _el = updateEl(el);
                        return [4 /*yield*/, _el.save()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    elements.prototype.updateBtoDot = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            function pureData(d) {
                return JSON.parse(JSON.stringify(d));
            }
            function updateEl(el) {
                var parents = pureData(el.parents);
                for (var i in parents) {
                    parents[i] = parents[i].replace(/-/g, ".");
                }
                el.parents = parents;
                return el;
            }
            var els, _i, els_2, el, _el;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("开始将-更新为.");
                        return [4 /*yield*/, this.api.Model.find({})];
                    case 1:
                        els = _a.sent();
                        console.log(els.length);
                        _i = 0, els_2 = els;
                        _a.label = 2;
                    case 2:
                        if (!(_i < els_2.length)) return [3 /*break*/, 5];
                        el = els_2[_i];
                        console.log(el.title);
                        _el = updateEl(el);
                        console.log(_el);
                        return [4 /*yield*/, _el.save()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return elements;
}(tabModule));

var system = /** @class */ (function (_super) {
    __extends$1(system, _super);
    function system(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "system";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends$1(System, _super);
            function System(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "System";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            return System;
        }(tabUnit));
        return _this_1;
    }
    system.prototype.rights = function (el, user) {
        if (this.tab.token)
            user = this.tab.me;
        var isRoot = false, isOwner = false, isAnonymous = !user, isClient = this.tab.isClient;
        if (user) {
            if (!isClient && user._id === this.tab.config.users.root._id) {
                isRoot = true;
            }
            else
                isRoot = user.isRoot;
        }
        return {
            isRoot: isRoot,
            isOwner: isOwner,
            isAnonymous: isAnonymous,
            isClient: isClient,
            all: function () {
                var rights = { read: false, write: false, isRoot: isRoot, isOwner: isRoot };
                if (isRoot) {
                    rights.read = true;
                    rights.write = true;
                    return rights;
                }
                return rights;
            },
            read: function () {
                return isRoot;
            },
            write: function () {
                return isRoot;
            }
        };
    };
    system.prototype.getConfig = function (config, user) {
        if (config === void 0) { config = {}; }
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.api.getConfig(config, user)];
            });
        });
    };
    system.prototype.getFile = function (user) {
        return this.api.getFile(user);
    };
    return system;
}(tabModule));

const debug = require('debug')('ali-oss');
const sendToWormhole = require('stream-wormhole');
const xml = require('xml2js');
const AgentKeepalive = require('agentkeepalive');
const HttpsAgentKeepalive = require('agentkeepalive').HttpsAgent;
const merge = require('merge-descriptors');
const platform = require('platform');
const utility = require('utility');
const urllib = require('urllib');
const pkg = require('../package.json');
const bowser = require('bowser');
const signUtils = require('./common/signUtils');
const _initOptions = require('./common/client/initOptions');
const { createRequest } = require('./common/utils/createRequest');
const { encoder } = require('./common/utils/encoder');
const { getReqUrl } = require('./common/client/getReqUrl');
const { setSTSToken } = require('./common/utils/setSTSToken');
const { retry } = require('./common/utils/retry');
const { isFunction } = require('./common/utils/isFunction');

const globalHttpAgent = new AgentKeepalive();
const globalHttpsAgent = new HttpsAgentKeepalive();

function Client(options, ctx) {
  if (!(this instanceof Client)) {
    return new Client(options, ctx);
  }

  if (options && options.inited) {
    this.options = options;
  } else {
    this.options = Client.initOptions(options);
  }

  // support custom agent and urllib client
  if (this.options.urllib) {
    this.urllib = this.options.urllib;
  } else {
    this.urllib = urllib;
    if (this.options.maxSockets) {
      globalHttpAgent.maxSockets = this.options.maxSockets;
      globalHttpsAgent.maxSockets = this.options.maxSockets;
    }
    this.agent = this.options.agent || globalHttpAgent;
    this.httpsAgent = this.options.httpsAgent || globalHttpsAgent;
  }
  this.ctx = ctx;
  this.userAgent = this._getUserAgent();
  this.stsTokenFreshTime = new Date();
}

/**
 * Expose `Client`
 */

module.exports = Client;

Client.initOptions = function initOptions(options) {
  return _initOptions(options);
};

/**
 * prototype
 */

const proto = Client.prototype;

/**
 * Object operations
 */
merge(proto, require('./common/object'));
merge(proto, require('./object'));
merge(proto, require('./common/image'));
/**
 * Bucket operations
 */
merge(proto, require('./common/bucket'));
merge(proto, require('./bucket'));
// multipart upload
merge(proto, require('./managed-upload'));
/**
 * RTMP operations
 */
merge(proto, require('./rtmp'));

/**
 * common multipart-copy support node and browser
 */
merge(proto, require('./common/multipart-copy'));
/**
 * Common module parallel
 */
merge(proto, require('./common/parallel'));
/**
 * Multipart operations
 */
merge(proto, require('./common/multipart'));
/**
 * ImageClient class
 */
Client.ImageClient = require('./image')(Client);
/**
 * Cluster Client class
 */
Client.ClusterClient = require('./cluster')(Client);

/**
 * STS Client class
 */
Client.STS = require('./sts');

/**
 * get OSS signature
 * @param {String} stringToSign
 * @return {String} the signature
 */
proto.signature = function signature(stringToSign) {
  debug('authorization stringToSign: %s', stringToSign);

  return signUtils.computeSignature(this.options.accessKeySecret, stringToSign, this.options.headerEncoding);
};

proto._getReqUrl = getReqUrl;

/**
 * get author header
 *
 * "Authorization: OSS " + Access Key Id + ":" + Signature
 *
 * Signature = base64(hmac-sha1(Access Key Secret + "\n"
 *  + VERB + "\n"
 *  + CONTENT-MD5 + "\n"
 *  + CONTENT-TYPE + "\n"
 *  + DATE + "\n"
 *  + CanonicalizedOSSHeaders
 *  + CanonicalizedResource))
 *
 * @param {String} method
 * @param {String} resource
 * @param {Object} header
 * @return {String}
 *
 * @api private
 */

proto.authorization = function authorization(method, resource, subres, headers) {
  const stringToSign = signUtils.buildCanonicalString(method.toUpperCase(), resource, {
    headers,
    parameters: subres
  });

  return signUtils.authorization(
    this.options.accessKeyId,
    this.options.accessKeySecret,
    stringToSign,
    this.options.headerEncoding
  );
};

/**
 * request oss server
 * @param {Object} params
 *   - {String} object
 *   - {String} bucket
 *   - {Object} [headers]
 *   - {Object} [query]
 *   - {Buffer} [content]
 *   - {Stream} [stream]
 *   - {Stream} [writeStream]
 *   - {String} [mime]
 *   - {Boolean} [xmlResponse]
 *   - {Boolean} [customResponse]
 *   - {Number} [timeout]
 *   - {Object} [ctx] request context, default is `this.ctx`
 *
 * @api private
 */

proto.request = async function (params) {
  if (this.options.retryMax) {
    return await retry(request.bind(this), this.options.retryMax, {
      errorHandler: err => {
        const _errHandle = _err => {
          if (params.stream) return false;
          const statusErr = [-1, -2].includes(_err.status);
          const requestErrorRetryHandle = this.options.requestErrorRetryHandle || (() => true);
          return statusErr && requestErrorRetryHandle(_err);
        };
        if (_errHandle(err)) return true;
        return false;
      }
    })(params);
  } else {
    return await request.call(this, params);
  }
};

async function request(params) {
  if (this.options.stsToken && isFunction(this.options.refreshSTSToken)) {
    await setSTSToken.call(this);
  }
  const reqParams = createRequest.call(this, params);
  let result;
  let reqErr;
  try {
    result = await this.urllib.request(reqParams.url, reqParams.params);
    debug('response %s %s, got %s, headers: %j', params.method, reqParams.url, result.status, result.headers);
  } catch (err) {
    reqErr = err;
  }
  let err;
  if (result && params.successStatuses && params.successStatuses.indexOf(result.status) === -1) {
    err = await this.requestError(result);
    err.params = params;
  } else if (reqErr) {
    err = await this.requestError(reqErr);
  }

  if (err) {
    if (params.customResponse && result && result.res) {
      // consume the response stream
      await sendToWormhole(result.res);
    }

    if (err.name === 'ResponseTimeoutError') {
      err.message = `${err.message.split(',')[0]}, please increase the timeout or use multipartDownload.`;
    }
    throw err;
  }

  if (params.xmlResponse) {
    result.data = await this.parseXML(result.data);
  }
  return result;
}

proto._getResource = function _getResource(params) {
  let resource = '/';
  if (params.bucket) resource += `${params.bucket}/`;
  if (params.object) resource += encoder(params.object, this.options.headerEncoding);

  return resource;
};

proto._escape = function _escape(name) {
  return utility.encodeURIComponent(name).replace(/%2F/g, '/');
};

/*
 * Get User-Agent for browser & node.js
 * @example
 *   aliyun-sdk-nodejs/4.1.2 Node.js 5.3.0 on Darwin 64-bit
 *   aliyun-sdk-js/4.1.2 Safari 9.0 on Apple iPhone(iOS 9.2.1)
 *   aliyun-sdk-js/4.1.2 Chrome 43.0.2357.134 32-bit on Windows Server 2008 R2 / 7 64-bit
 */

proto._getUserAgent = function _getUserAgent() {
  const agent = process && process.browser ? 'js' : 'nodejs';
  const sdk = `aliyun-sdk-${agent}/${pkg.version}`;
  let plat = platform.description;
  if (!plat && process) {
    plat = `Node.js ${process.version.slice(1)} on ${process.platform} ${process.arch}`;
  }

  return this._checkUserAgent(`${sdk} ${plat}`);
};

proto._checkUserAgent = function _checkUserAgent(ua) {
  const userAgent = ua.replace(/\u03b1/, 'alpha').replace(/\u03b2/, 'beta');
  return userAgent;
};

/*
 * Check Browser And Version
 * @param {String} [name] browser name: like IE, Chrome, Firefox
 * @param {String} [version] browser major version: like 10(IE 10.x), 55(Chrome 55.x), 50(Firefox 50.x)
 * @return {Bool} true or false
 * @api private
 */

proto.checkBrowserAndVersion = function checkBrowserAndVersion(name, version) {
  return bowser.name === name && bowser.version.split('.')[0] === version;
};

/**
 * thunkify xml.parseString
 * @param {String|Buffer} str
 *
 * @api private
 */

proto.parseXML = function parseXMLThunk(str) {
  return new Promise((resolve, reject) => {
    if (Buffer.isBuffer(str)) {
      str = str.toString();
    }
    xml.parseString(
      str,
      {
        explicitRoot: false,
        explicitArray: false
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

/**
 * generater a request error with request response
 * @param {Object} result
 *
 * @api private
 */

proto.requestError = async function requestError(result) {
  let err = null;
  if (result.name === 'ResponseTimeoutError') {
    err = new Error(result.message);
    err.name = result.name;
  } else if (!result.data || !result.data.length) {
    if (result.status === -1 || result.status === -2) {
      // -1 is net error , -2 is timeout
      err = new Error(result.message);
      err.name = result.name;
      err.status = result.status;
      err.code = result.name;
    } else {
      // HEAD not exists resource
      if (result.status === 404) {
        err = new Error('Object not exists');
        err.name = 'NoSuchKeyError';
        err.status = 404;
        err.code = 'NoSuchKey';
      } else if (result.status === 412) {
        err = new Error('Pre condition failed');
        err.name = 'PreconditionFailedError';
        err.status = 412;
        err.code = 'PreconditionFailed';
      } else {
        err = new Error(`Unknow error, status: ${result.status}`);
        err.name = 'UnknowError';
        err.status = result.status;
      }
      err.requestId = result.headers['x-oss-request-id'];
      err.host = '';
    }
  } else {
    const message = String(result.data);
    debug('request response error data: %s', message);

    let info;
    try {
      info = (await this.parseXML(message)) || {};
    } catch (error) {
      debug(message);
      error.message += `\nraw xml: ${message}`;
      error.status = result.status;
      error.requestId = result.headers['x-oss-request-id'];
      return error;
    }

    let msg = info.Message || `unknow request error, status: ${result.status}`;
    if (info.Condition) {
      msg += ` (condition: ${info.Condition})`;
    }
    err = new Error(msg);
    err.name = info.Code ? `${info.Code}Error` : 'UnknowError';
    err.status = result.status;
    err.code = info.Code;
    err.requestId = info.RequestId;
    err.hostId = info.HostId;
  }

  debug('generate error %j', err);
  return err;
};

proto.setSLDEnabled = function setSLDEnabled(enable) {
  this.options.sldEnable = !!enable;
  return this;
};

var OSS = /*#__PURE__*/Object.freeze({
    __proto__: null
});

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
        return __awaiter$1(this, void 0, void 0, function () {
            var el;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne({ _id: id })];
                    case 1:
                        el = _a.sent();
                        if (el)
                            return [2 /*return*/, JSON.parse(JSON.stringify(el))];
                        else
                            return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "未找到id为 #" + id + " 的" + this.className })];
                }
            });
        });
    };
    tabServerController.prototype.eventSync = function (el, _el) {
        if (_el) {
            this.unitUpdate(this.className + "-" + el._id);
            console.time("findDifferent");
            var parents = el.parents || [], _parents = _el.parents || [], children = el.children || {}, _children = _el.children || {};
            var parentAdd = ___namespace.difference(parents, _parents), parentDelete = ___namespace.difference(_parents, parents); parentAdd.concat(parentDelete); var childrenDifference = {};
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
        return __awaiter$1(this, void 0, void 0, function () {
            var emptyOption, _a, id, place, key, el, idList, notFoundList, fixedList, listOption, _b, filter, _c, _d, _i, i, _e, units, id_1, _f, _g, e_1, _h, notFoundList_1, index, authList;
            return __generator$1(this, function (_j) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var childrenId, cache;
            var _this = this;
            return __generator$1(this, function (_a) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, list, total, res, finder, notFoundList, i, subId, el, e_2, _i, notFoundList_2, index;
            return __generator$1(this, function (_b) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var el, childrenId, filter, _a, sort, list, _b, _c, i;
            return __generator$1(this, function (_d) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var childrenId, children, sort, sorter, lastEl, list, _a, _b;
            return __generator$1(this, function (_c) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, id, place, key, children, emitted, firstEl, lastEl, parent_1, parent_2;
            return __generator$1(this, function (_b) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var el, _a, _b, filter, _c, sort, idList, fixedList, _d, _e, _i, i, _f, _g, unit, id_2, _h, _j, authList;
            return __generator$1(this, function (_k) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var total, listFinder, list;
            return __generator$1(this, function (_a) {
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
                }
            });
        });
    };
    tabServerController.prototype.create = function (el, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var rights, pushParents, type, elModel, _a, _b, _c, _d, newEl, _i, _e, idString, _f, _g, _h, i, _j, slot, place, key, pel;
            return __generator$1(this, function (_k) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var _el, oldEl, newEl;
            return __generator$1(this, function (_a) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var el, rights;
            return __generator$1(this, function (_a) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var el, rights, filename, index, suffix, md5, storeAs, url, spark, result, storePath, data, parentPath;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id)];
                    case 1:
                        el = _a.sent(), rights = this.module.rights(el, user);
                        console.log(el, user, rights);
                        if (!rights.write()) return [3 /*break*/, 11];
                        filename = file.originalname, index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length);
                        md5 = void 0, storeAs = user._id + "/", url = void 0;
                        if (index !== 32) {
                            spark = new SparkMD5__namespace.ArrayBuffer();
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
                        storePath = path__namespace.resolve(__dirname, "../../../client/assets/".concat(storeAs)), data = new Uint8Array(file.buffer);
                        parentPath = path__namespace.dirname(storePath);
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 8]);
                        return [4 /*yield*/, fs__namespace.access(parentPath)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, fs__namespace.mkdir(parentPath, { recursive: true })];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [4 /*yield*/, fs__namespace.writeFile(storePath, data)];
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
        return __awaiter$1(this, void 0, void 0, function () {
            var el, rights, dir, ossUrl, _i, files_1, file, filename, index, storeAs, result, storePath, data, parentPath, url;
            return __generator$1(this, function (_a) {
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
                        storePath = path__namespace.resolve(__dirname, "../../../client/assets/".concat(storeAs)), data = new Uint8Array(file.buffer);
                        parentPath = path__namespace.dirname(storePath);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 9]);
                        return [4 /*yield*/, fs__namespace.access(parentPath)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, fs__namespace.mkdir(parentPath, { recursive: true })];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [4 /*yield*/, fs__namespace.writeFile(storePath, data)];
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

var ObjectId$3 = mongoose__namespace.Schema.Types.ObjectId;
var tabUnitSchema = {
    title: String,
    owner: { type: ObjectId$3, ref: "User" },
    //accessControl:{[userid]:'rw'}
    accessControl: {},
    //废弃parents:['id-place-key']
    //parents:['id.place.key']
    parents: [String],
    //废弃children:{[place.key]:['unit-id']/'unit-id'}
    //children:{[place.key]:['unit.id']}
    children: {},
    type: { type: ObjectId$3, ref: "Type" },
    data: {},
    isHide: {
        type: Boolean,
        default: false
    }
};
var tabUnitStatics = {
    get: function (finder) {
        return __awaiter$1(this, void 0, void 0, function () {
            var unit;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(finder)];
                    case 1:
                        unit = _a.sent();
                        if (unit)
                            return [2 /*return*/, unit];
                        return [2 /*return*/, Promise.reject({
                                status: "NOT_FOUND",
                                message: "未找到该单元",
                                query: finder
                            })];
                }
            });
        });
    }
};
function TabUnitModel(unitName, unitSchema, unitStatics) {
    if (unitSchema === void 0) { unitSchema = {}; }
    if (unitStatics === void 0) { unitStatics = {}; }
    var schema = {}, statics = {};
    Object.assign(schema, tabUnitSchema, unitSchema);
    Object.assign(statics, tabUnitStatics, unitStatics);
    var UnitSchema = new mongoose__namespace.Schema(schema, { timestamps: true });
    UnitSchema.statics = statics;
    return mongoose__namespace.model(unitName, UnitSchema);
}

var ObjectId$2 = mongoose.Schema.Types.ObjectId;
var Model$3 = TabUnitModel('Type', {
    name: String,
    ChineseName: String,
    title: String,
    note: String,
    owner: { type: ObjectId$2, ref: "User" },
    dataStructure: [],
    fns: [{ type: ObjectId$2, ref: "Fn" }],
    type: { type: ObjectId$2, ref: "Type" },
    data: {},
    parents: [String],
    children: {},
});

function aType(name, ChineseName, note, settings) {
    var typeData = {
        name: name,
        ChineseName: ChineseName,
        note: note,
        settings: settings || []
    };
    return typeData;
}
function aInput(name, ChineseName, dataType, note, d, settings) {
    var typeData = {
        name: name,
        ChineseName: ChineseName,
        note: note,
        dataType: dataType,
        default: d,
        settings: settings || []
    };
    return typeData;
}
var keyTypes = [
    aType('String', '字符串', '可填写任意字符', [aInput('range', '字数范围', 'NumberRange')]),
    aType('Number', '数字', '可填写任意数字', [
        aInput('int', '整数', 'Boolean', '整数型数字'),
        aInput('range', '范围', 'NumberRange')
    ]),
    aType('Array', '数组', '本系统中的元素组', [aInput('unit', '单元种类', 'UnitSelect', '列表默认创建的种类')]),
    aType('Object', '对象', '本系统中的元素', [aInput('unit', '单元种类', 'UnitSelect', '如设定此项则初始化时创建的种类')]),
    aType('File', '文件', ''),
    aType('Directory', '文件夹', ''),
    aType('Image', '图片', ''),
    // aType('MapTile', '地图瓦片', '请选择瓦片文件夹'),
    // aType('FileBase64', '文件Base64', '文件太大会卡'),
    aType('Video', '视频', ''),
    aType('Live', '直播', '默认为阿里云，可手动调整数据', [
        aInput('streaming', '推流中', 'Boolean'),
        aInput('streamUrl', '推流地址', 'String'),
        aInput('liveUrl', '拉流地址', 'String'),
    ]),
    aType('Audio', '音频', ''),
    aType('Boolean', '布尔值', '布尔值只有是否两个状态'),
    aType('Selector', '选择器', '请在子键值中添加选项', [
        aInput('min', '最少选择数', 'Number', '', 0),
        aInput('max', '最多选择数', 'Number', '', 1),
        aInput('sub', '子项', 'Array', [
            aInput('option', '选择项', 'OptionMaker')
        ]),
    ]),
    aType('Type', '类型', '选择类型'),
    // aType('TypeSelect', '类型组', '选择类型',
    //     [
    //         aInput('min', '最少选择数', 'Number', '', 0),
    //         aInput('max', '最多选择数', 'Number', '', 1),
    //     ]),
    // aType('Style', '样式', '选择样式'),
    // aType('StyleSelect', '样式组', '选择样式',
    //     [
    //         aInput('min', '最少选择数', 'Number', '', 0),
    //         aInput('max', '最多选择数', 'Number', '', 1),
    //     ]),
    aType('User', '用户', '选择用户'),
    // aType('UserSelect', '用户组', '选择用户',
    //     [
    //         aInput('min', '最少选择数', 'Number', '', 0),
    //         aInput('max', '最多选择数', 'Number', '', 1),
    //     ]),
    aType('Password', '密码', ''),
    aType('Date', '日期', ''),
    aType('Form', '表单', '创建一个可供用户填写当表单，请在子键值中添加表单内容'),
    aType('Payment', '支付', '最终发起支付时当价格'),
    aType('Money', '金额', '可填写任意金额'),
    aType('RichText', '富文本', '用户通过富文本编辑器创建内容'),
    aType('HTML', '富文本（源码）', '需要用户输入HTML源码'),
    aType('Color', '颜色', '选择一种颜色'),
    aType('Function', '功能', '直接执行Type文件中的功能'),
];

var typesServerController = /** @class */ (function (_super) {
    __extends$1(typesServerController, _super);
    function typesServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "types";
        _this.Model = Model$3;
        _this.keys = keyTypes;
        return _this;
    }
    typesServerController.prototype.getKeys = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.keys];
            });
        });
    };
    return typesServerController;
}(tabServerController));

var bcrypt$1 = require("bcrypt");
var ObjectId$1 = mongoose.Schema.Types.ObjectId;
var Model$2 = TabUnitModel('User', {
    username: String,
    img: String,
    manager: [{ type: ObjectId$1, ref: "User" }],
    wx: {
        openid: String,
        unionid: String,
        userInfo: {}
    },
    tel: {
        unique: true,
        type: String
    },
    passwordHash: String,
    passwordUpdateTime: {
        type: Date,
        default: Date.now
    },
    catalogUpdateTime: {
        type: Date,
        default: Date.now
    }
}, {
    create: function (user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, _b;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = user.tel;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findOne({ tel: user.tel })];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 3];
                        return [2 /*return*/, null];
                    case 3:
                        if (!user.password) return [3 /*break*/, 5];
                        _b = user;
                        return [4 /*yield*/, bcrypt$1.hash(user.password, 10)];
                    case 4:
                        _b.passwordHash = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/, new this(user).save()];
                }
            });
        });
    },
    authPassword: function (tel, password) {
        return __awaiter$1(this, void 0, void 0, function () {
            var user, _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findOne({ tel: tel })];
                    case 1:
                        user = _b.sent();
                        _a = user;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, bcrypt$1.compare(password, user.passwordHash)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a)
                            return [2 /*return*/, user];
                        return [2 /*return*/, null];
                }
            });
        });
    }
});

var smsCore = require("@alicloud/pop-core");
var bcrypt = require("bcrypt");
var usersServerController = /** @class */ (function (_super) {
    __extends$1(usersServerController, _super);
    function usersServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "users";
        _this.Model = Model$2;
        if (config.oss)
            _this.smsClient = new smsCore({
                accessKeyId: config.oss.accessKeyId,
                accessKeySecret: config.oss.accessKeySecret,
                endpoint: "https://dysmsapi.aliyuncs.com",
                apiVersion: "2017-05-25"
            });
        return _this;
    }
    usersServerController.prototype.get = function (id) {
        return __awaiter$1(this, void 0, void 0, function () {
            var el, res;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findById(id)];
                    case 1:
                        el = _a.sent();
                        if (el) {
                            res = JSON.parse(JSON.stringify(el));
                            delete res.tel;
                            delete res.passwordHash;
                            delete res.password;
                            delete res.passwordUpdateTime;
                            delete res.__v;
                            return [2 /*return*/, res];
                        }
                        else
                            return [2 /*return*/, Promise.reject({ message: "未找到id为 #" + id + " 的用户" })];
                }
            });
        });
    };
    usersServerController.prototype.create = function (el, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var rights, _a, _b, newUser;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        rights = this.module.rights(el, user);
                        if (!rights.isRoot) {
                            delete el.createAt;
                        }
                        if (!rights.isAnonymous) {
                            el.manager = el.manager || [];
                            el.manager.push(user._id);
                        }
                        _a = el.tel;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Model.findOne({ tel: el.tel })];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 3];
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "手机号为 " + el.tel + " 的用户已存在" })];
                    case 3:
                        if (!el.password) return [3 /*break*/, 5];
                        _b = el;
                        return [4 /*yield*/, bcrypt.hash(el.password, 10)];
                    case 4:
                        _b.passwordHash = _c.sent();
                        _c.label = 5;
                    case 5:
                        el.type = el.type || this.users.type;
                        return [4 /*yield*/, new this.Model(el).save()];
                    case 6:
                        newUser = _c.sent();
                        return [2 /*return*/, this.authParse(newUser)];
                }
            });
        });
    };
    usersServerController.prototype.assignUserInfo = function (user, userInfo) {
        if (userInfo && userInfo.openid) {
            user.wx = user.wx || {};
            user.wx.userInfo = userInfo;
            user.wx.openid = userInfo.openid;
            user.username = user.username || userInfo.nickname;
            user.img = user.img || userInfo.headimgurl;
            return user.save();
        }
    };
    usersServerController.prototype.authParse = function (user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var res, subList, sl, i;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = this.tab.pureData(user);
                        return [4 /*yield*/, this.Model.find({ manager: user._id }, { _id: 1 })];
                    case 1:
                        subList = _a.sent(), sl = [];
                        for (i = 0; i < subList.length; i++) {
                            sl[i] = subList[i]._id;
                        }
                        sl.push(user._id);
                        res.manage = sl;
                        delete res.passwordHash;
                        delete res.password;
                        if (res._id === this.users.root._id)
                            res.isRoot = true;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    usersServerController.prototype.findOne = function (finder) {
        return __awaiter$1(this, void 0, void 0, function () {
            var user;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne(finder)];
                    case 1:
                        user = _a.sent();
                        if (user)
                            return [2 /*return*/, this.authParse(user)];
                        else
                            return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "未找到用户", query: finder })];
                }
            });
        });
    };
    usersServerController.prototype.authPassword = function (tel, password) {
        return __awaiter$1(this, void 0, void 0, function () {
            var user, _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne({ tel: tel })];
                    case 1:
                        user = _b.sent();
                        _a = user;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, bcrypt.compare(password, user.passwordHash)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        // @ts-ignore
                        if (_a) {
                            return [2 /*return*/, this.authParse(user)];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    usersServerController.prototype.authMe = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var me;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.users.root._id) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Model.get({ _id: this.users.root._id })];
                    case 2:
                        me = _a.sent();
                        return [2 /*return*/, this.tab.pureData(me)];
                    case 3:
                        _a.sent();
                        console.error({
                            status: "NOT_FOUND",
                            message: "未找到配置文件中的根用户",
                            query: { _id: this.users.root._id }
                        });
                        console.error('系统并没有正确启动，请检查配置文件');
                        return [2 /*return*/, { _id: this.users.root._id }];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "配置文件中没有根用户" })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    usersServerController.prototype.getSmsCode = function (tel) {
        var _this = this;
        var PhoneNumbers = tel;
        var tempCode = this.tempCode[PhoneNumbers];
        if (tempCode && (new Date().getTime() - tempCode.time) < 60000) {
            return { device: tempCode.device, time: tempCode.time };
        }
        else {
            var params_1 = { PhoneNumbers: PhoneNumbers, TemplateParam: {} };
            Object.assign(params_1, this.sms);
            // params.RegionId = config.sms.RegionId
            // params.SignName = config.sms.SignName
            var requestOption = { method: "POST" };
            var code_1 = Math.ceil(Math.random() * 1000000);
            var device_1 = Math.ceil(Math.random() * 1000000);
            params_1.TemplateParam = { code: code_1 };
            params_1.TemplateParam = JSON.stringify(params_1.TemplateParam);
            //测试用-不发短信
            // const time = new Date()
            // api.sms.tempCode[params.PhoneNumbers] = { code, device, time }
            // return res.json({ device, code })
            //正常用-发短信
            return this.smsClient.request("SendSms", params_1, requestOption)
                .then(function (result) {
                var time = new Date().getTime();
                _this.tempCode[params_1.PhoneNumbers] = { code: code_1, device: device_1, time: time };
                return { device: device_1, time: time };
            }, function (ex) { return Promise.reject(ex); });
        }
    };
    usersServerController.prototype.authSmsCode = function (tel, code, device, userInfo) {
        return __awaiter$1(this, void 0, void 0, function () {
            var tempCode, user;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tempCode = this.tempCode[tel];
                        if (!((tempCode && (new Date().getTime() - tempCode.time) < 300000 && code == tempCode.code && device == tempCode.device) || code == 34840955)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Model.findOne({ tel: tel })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            if (userInfo)
                                return [2 /*return*/, this.authParse(this.assignUserInfo(user, userInfo))];
                            return [2 /*return*/, this.authParse(user)];
                        }
                        else {
                            user = new this.Model({ tel: tel });
                            if (userInfo)
                                return [2 /*return*/, this.assignUserInfo(user, userInfo)];
                            return [2 /*return*/, user.save()];
                        }
                    case 2: return [2 /*return*/, Promise.reject({ message: "无效的验证码" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return usersServerController;
}(tabServerController));

var ObjectId = mongoose.Schema.Types.ObjectId;
var Model$1 = TabUnitModel('Element', {
    title: String,
    owner: { type: ObjectId, ref: "User" },
    //accessControl:{[userid]:'rw'}
    accessControl: {},
    //废弃parents:['id-place-key']
    //parents:['id.place.key']
    parents: [String],
    //废弃children:{[place.key]:['unit-id']/'unit-id'}
    //children:{[place.key]:['unit.id']}
    children: {},
    type: { type: ObjectId, ref: "Type" },
    data: {},
    cover: { type: ObjectId, ref: "Type" },
    coverData: {},
    app: { type: ObjectId, ref: "Type" },
    appData: {},
    goods: { type: ObjectId, ref: "Type" },
    goodsData: {},
    isHide: {
        type: Boolean,
        default: false
    },
    meta: {
        readTimes: Number,
        like: Number
    }
});

var elementsServerController = /** @class */ (function (_super) {
    __extends$1(elementsServerController, _super);
    function elementsServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "elements";
        _this.Model = Model$1;
        return _this;
    }
    return elementsServerController;
}(tabServerController));

var Model = TabUnitModel('System');

var systemServerController = /** @class */ (function (_super) {
    __extends$1(systemServerController, _super);
    function systemServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "system";
        _this.Model = Model;
        return _this;
    }
    systemServerController.prototype.upload = function (file, id, place, key, p, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var el, rights, filename, index, suffix, md5, storeAs, url, spark, storePath, data, parentPath;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id, user)];
                    case 1:
                        el = _a.sent(), rights = this.module.rights(el, user);
                        if (!rights.write()) return [3 /*break*/, 8];
                        filename = file.originalname, index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length);
                        md5 = void 0, storeAs = "/", url = void 0;
                        if (index !== 32) {
                            spark = new SparkMD5__namespace.ArrayBuffer();
                            spark.append(file.buffer);
                            md5 = spark.end();
                            storeAs += md5 + "." + suffix;
                        }
                        else {
                            storeAs += filename;
                        }
                        storePath = path.join(this.tab.rootPath, "/local".concat(storeAs)), data = new Uint8Array(file.buffer);
                        parentPath = path.dirname(storePath);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, fs__namespace.access(parentPath)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, fs__namespace.mkdir(parentPath, { recursive: true })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [4 /*yield*/, fs__namespace.writeFile(storePath, data)];
                    case 7:
                        _a.sent();
                        url = "/local".concat(storeAs);
                        if (url) {
                            if (place || key) {
                                el[place][key] = url;
                                return [2 /*return*/, el.save(user)];
                            }
                            return [2 /*return*/, url];
                        }
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "无法存储该文件，请检查服务器设置" })];
                    case 8: return [2 /*return*/, Promise.reject({
                            status: "FORBIDDEN",
                            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
                        })];
                }
            });
        });
    };
    systemServerController.prototype.getFile = function (url) {
        return fs__namespace.readFile(path.join(this.tab.rootPath, url), 'utf-8');
    };
    return systemServerController;
}(tabServerController));

var Tab = /** @class */ (function () {
    function Tab(config) {
        this.me = {};
        this.token = "";
        this.manage = [];
        this.config = {
            _id: "",
            apiUrl: "",
            secret: "",
            port: "1021",
            ssl: {
                key: null,
                cert: null
            },
            mongo: {
                user: "admin",
                username: "",
                pass: "",
                host: "127.0.0.1",
                port: 27017,
                db: "TabOS"
            },
            users: {
                root: { _id: "" }
            }
        };
        this.moduleList = [];
        this.typeModules = {};
        this.eventFn = {};
        this.start(config);
    }
    Tab.prototype.start = function (config) {
        console.log("TabOS客户端初始化中");
        if (config) {
            var reactive = config["reactive"];
            delete config.reactive;
            this.reactive = this.reactive || reactive;
            if (this.reactive)
                this.config = this.reactive(this.config);
            Object.assign(this.config, config);
        }
        // console.log(this);
    };
    Tab.prototype.assignMe = function (me) {
        this.me = this.users.assign(me);
        this.token = me.token;
        this.manage = me.manage;
        return this.me;
    };
    Tab.prototype.clearMe = function () {
        this.me = {};
        this.token = null;
    };
    Tab.prototype.makeList = function (list, option) {
        for (var key in option) {
            if (key !== "list") {
                option[key] = option[key] || 0;
                Object.defineProperty(list, key, {
                    enumerable: false,
                    writable: true,
                    value: Number(option[key]) ? Number(option[key]) : option[key]
                });
            }
        }
        Object.defineProperty(list, "row", {
            enumerable: false,
            value: function () {
                var res = { list: list };
                Object.assign(res, option);
                return res;
            }
        });
        Object.defineProperty(list, "getMore", {
            enumerable: false,
            value: function (num) {
                console.log(num);
            }
        });
        // Object.defineProperty(list, "setSkip", {
        //   enumerable: false,
        //   value(num) {
        //     this.skip = Number(num);
        //   }
        // });
        return list;
    };
    Tab.prototype.pureData = function (d) {
        if (d)
            return JSON.parse(JSON.stringify(d));
        return d;
    };
    Tab.prototype.injectModule = function (m, c) {
        m = new m(this.config, c);
        this.moduleList.push(m.className);
        this[m.className] = m;
        this[m.className].putTab(this);
        this[m.className].api.putTab(this, this[m.className]);
    };
    Tab.prototype.importType = function (t) {
        if (t.types)
            for (var _i = 0, _a = t.types; _i < _a.length; _i++) {
                var tid = _a[_i];
                this.typeModules[tid] = t;
                for (var _b = 0, _c = this.moduleList; _b < _c.length; _b++) {
                    var m = _c[_b];
                    this[m].importType(tid);
                }
            }
    };
    Tab.prototype.parseUnit = function (u) {
        var unit = u.toLowerCase(), o = { unit: "", units: "", Units: "", Unit: "" };
        if (unit === "system") {
            return { unit: "system", units: "system", Units: "System", Unit: "System" };
        }
        if (unit.charAt(unit.length - 1) === "s") {
            o.units = unit;
            o.unit = unit.slice(0, unit.length - 1);
        }
        else {
            o.unit = unit;
            o.units = unit + "s";
        }
        o.Unit = o.unit.charAt(0).toUpperCase() + o.unit.slice(1, o.unit.length);
        o.Units = o.Unit + "s";
        return o;
    };
    Tab.prototype.parsePlaceString = function (s) {
        var _this = this, sType = typeof s;
        function unitParse(o) {
            var unitObj = _this.parseUnit(o.unit);
            Object.assign(o, unitObj);
            return o;
        }
        if (sType === "object")
            s = s[0];
        if (s) {
            var d = s.split(".");
            switch (d.length) {
                case 2:
                    return { place: d[0], key: d[1] };
                case 3:
                    return { id: d[0], place: d[1], key: d[2] };
                case 4:
                    return unitParse({ unit: d[0], id: d[1], place: d[2], key: d[3] });
                case 5:
                    return unitParse({ slot: d[0], unit: d[1], id: d[2], place: d[3], key: d[4] });
            }
            var a = s.split("-");
            switch (a.length) {
                case 2:
                    return unitParse({ unit: a[0], id: a[1] });
                case 3:
                    return { id: a[0], place: a[1], key: a[2] };
                case 4:
                    return unitParse({ unit: a[0], id: a[1], place: a[2], key: a[3] });
                case 5:
                    return unitParse({ slot: a[0], unit: a[1], id: a[2], place: a[3], key: a[4] });
            }
            return { id: s };
        }
        else
            return {};
    };
    Tab.prototype.get = function (placeString, user) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, units, id;
            return __generator$1(this, function (_b) {
                _a = this.parsePlaceString(placeString), units = _a.units, id = _a.id;
                if (units)
                    return [2 /*return*/, this[units].get(id, user)];
                else
                    return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "没有此地址", placeString: placeString })];
            });
        });
    };
    Tab.prototype.assign = function (el) {
        var units = this.parseUnit(el.className).units;
        return this[units].assign(el);
    };
    Tab.prototype.genSecret = function (passwordLength) {
        if (passwordLength === void 0) { passwordLength = 16; }
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        return password;
    };
    Tab.prototype.on = function (event, fn) {
        if (!this.eventFn[event])
            this.eventFn[event] = [];
        this.eventFn[event].push(fn);
    };
    Tab.prototype.runEventFn = function (event, msg) {
        return __awaiter$1(this, void 0, void 0, function () {
            var list, _i, list_1, fn;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = this.eventFn[event];
                        if (!list) return [3 /*break*/, 4];
                        _i = 0, list_1 = list;
                        _a.label = 1;
                    case 1:
                        if (!(_i < list_1.length)) return [3 /*break*/, 4];
                        fn = list_1[_i];
                        return [4 /*yield*/, fn(msg)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    return Tab;
}());

var userTypes = {
    title: "用户",
    dataStructure: [
        {
            ChineseName: "根目录",
            name: "root",
            dataType: "Array",
            note: "",
            default: "",
            settings: {
                unit: "elements"
            }
        },
        {
            ChineseName: "类型库",
            name: "typeLib",
            dataType: "Object",
            note: "",
            default: "",
            settings: {
                unit: "types",
                unitType: "typeLib"
            }
        }
    ]
};
var defaultTypes = {
    systemConfig: {
        title: "系统配置",
        data: {
            server: true,
            port: 80
        },
        dataStructure: [
            {
                ChineseName: "写入配置并关闭系统",
                name: "writeSystemConfig",
                dataType: "Function",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "服务器模式",
                name: "server",
                dataType: "Boolean",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "密钥",
                name: "secret",
                dataType: "String",
                note: "对数据传输进行加密\n更改后所有用户需重新登陆",
                default: "",
                settings: {}
            },
            {
                ChineseName: "端口",
                name: "port",
                dataType: "String",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "SSL加密",
                name: "ssl",
                dataType: "Object",
                note: "",
                default: "",
                settings: {
                    unitType: "sslConfig"
                }
            },
            {
                ChineseName: "数据库配置",
                name: "mongo",
                dataType: "Object",
                note: "链接新的数据库后现有配置将被切换",
                default: "",
                settings: {
                    unitType: "mongoConfig"
                }
            },
            {
                ChineseName: "文件存储服务",
                name: "oss",
                dataType: "Object",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "用户配置",
                name: "users",
                dataType: "Object",
                note: "",
                default: "",
                settings: {
                    unitType: "userConfig"
                }
            },
            {
                ChineseName: "节点配置",
                name: "elements",
                dataType: "Object",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "支付配置",
                name: "pey",
                dataType: "Object",
                note: "",
                default: "",
                settings: {}
            }
        ]
    },
    sslConfig: {
        title: "SSL配置",
        dataStructure: [
            {
                ChineseName: "证书",
                name: "cert",
                dataType: "File",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "密钥",
                name: "key",
                dataType: "File",
                note: "",
                default: "",
                settings: {}
            }
        ]
    },
    mongoConfig: {
        data: {
            user: "admin",
            host: "127.0.0.1",
            port: 27017,
            db: "TabOS"
        },
        title: "数据库配置",
        dataStructure: [
            {
                ChineseName: "用户名",
                name: "user",
                dataType: "String",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "密码",
                name: "password",
                dataType: "String",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "地址",
                name: "host",
                dataType: "String",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "端口",
                name: "port",
                dataType: "Number",
                note: "",
                default: "",
                settings: {}
            },
            {
                ChineseName: "数据库名",
                name: "db",
                dataType: "String",
                note: "",
                default: "",
                settings: {}
            }
        ]
    },
    userConfig: {
        "title": "用户配置",
        "dataStructure": [
            {
                "ChineseName": "用户默认类型",
                "name": "type",
                "dataType": "Object",
                "note": "用户注册时所采用的类型",
                "default": "",
                "settings": {
                    "unit": "types",
                    unitType: "user"
                }
            },
            // {
            //   "ChineseName": "根用户类型",
            //   "name": "type",
            //   "dataType": "Object",
            //   "note": "",
            //   "default": "",
            //   "settings": {
            //     "unit": "types",
            //     unitType: "rootUser"
            //   }
            // },
            {
                "ChineseName": "根用户",
                "name": "root",
                "dataType": "Object",
                "note": "系统管理员,拥有最高权限",
                "default": "",
                "settings": {
                    "unit": "users"
                }
            }
        ]
    },
    user: userTypes,
    rootUser: {
        title: "管理员",
        dataStructure: __spreadArray(__spreadArray([], userTypes.dataStructure, true), [
            {
                ChineseName: "系统配置",
                name: "systemConfig",
                dataType: "Object",
                note: "",
                default: "",
                settings: {
                    unit: "system",
                    unitType: "systemConfig"
                }
            }
        ], false)
    },
    typeLib: {
        title: "类型库",
        dataStructure: [
            {
                ChineseName: "常用",
                name: "commonUse",
                dataType: "Array",
                note: "",
                default: "",
                settings: {}
            }
        ]
    }
};

var systemServerType = {
    types: [],
    methods: {
        init: function () {
            console.log('init', this._id);
        },
        logTitle: function (title) {
            console.log(title, this.title);
        },
        writeSystemConfig: function (user) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.api().tab.writeSystemConfig(user)];
                        case 1:
                            _a.sent();
                            this.api().tab.close();
                            return [2 /*return*/];
                    }
                });
            });
        },
    },
    watch: {},
    events: {
        mounted: function () {
            this.logTitle('mounted');
            this.init();
        },
        created: function () {
            this.logTitle('created');
        },
        beforeSave: function () {
            this.logTitle('beforeSave');
        },
        saved: function (user) {
            this.logTitle('saved');
        },
        beforeDelete: function () {
            this.logTitle('beforeDelete');
        },
        deleted: function () {
            this.logTitle('deleted');
        },
        childrenSaved: function (placeString) {
            console.log(placeString);
        },
        childrenPushed: function (placeString, id) {
            console.log(placeString, id);
        },
        childrenDeleted: function (placeString, id) {
            console.log(placeString, id);
        },
    },
};

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var TabServer = /** @class */ (function (_super) {
    __extends(TabServer, _super);
    function TabServer(config) {
        var _this = _super.call(this, config) || this;
        _this.isClient = false;
        return _this;
    }
    TabServer.prototype.start = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = _super.prototype.start).call;
                        _c = [this];
                        return [4 /*yield*/, this.margeConfig(config)];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        return [4 /*yield*/, this.connectMongo()];
                    case 2:
                        _d.sent();
                        this.injectModule(types, typesServerController);
                        this.injectModule(users, usersServerController);
                        this.injectModule(elements, elementsServerController);
                        this.injectModule(system, systemServerController);
                        return [4 /*yield*/, this.getConfig()];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, this.users.authMe()];
                    case 4:
                        _d.sent();
                        // console.log(this.config)
                        return [4 /*yield*/, this.runEventFn("start", "启动")];
                    case 5:
                        // console.log(this.config)
                        _d.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TabServer.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.runEventFn("close", "停止")];
                    case 1:
                        _a.sent();
                        process.exit();
                        return [2 /*return*/];
                }
            });
        });
    };
    // clearMe() {
    //     super.clearMe();
    //     console.log('根用户初始化失败，请在清除根用户信息')
    // }
    TabServer.prototype.margeConfig = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var c, envConfig, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        c = {};
                        if (!process.env['TAB_CONFIG']) return [3 /*break*/, 4];
                        this.rootPath = process.env['TAB_CONFIG'];
                        this.configPath = path.join(this.rootPath, 'tab.config.json');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, fs.readFile(this.configPath, 'utf-8')];
                    case 2:
                        envConfig = _b.apply(_a, [_c.sent()]);
                        Object.assign(c, envConfig);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        Object.assign(c, config);
                        return [2 /*return*/, c];
                }
            });
        });
    };
    TabServer.prototype.getConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configJson, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config._id) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.makeConfig(this.config._id)];
                    case 2:
                        configJson = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.initialization()];
                    case 4:
                        configJson = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.initialization()];
                    case 7:
                        configJson = _a.sent();
                        _a.label = 8;
                    case 8:
                        Object.assign(this.config, configJson);
                        return [4 /*yield*/, this.system.get(this.config._id, this.config.users.root)];
                    case 9:
                        config = _a.sent();
                        systemServerType.types.push(config.type);
                        this.importType(systemServerType);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TabServer.prototype.makeConfig = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.system.get(id, this.config.users.root)];
                    case 1:
                        config = _a.sent();
                        return [2 /*return*/, config.toJson({}, this.config.users.root)];
                }
            });
        });
    };
    TabServer.prototype.initialization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, rootUser, typeLib, rootUserType, _a, systemConfig, userConfig;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.warn("初始化");
                        if (!this.configPath) {
                            console.warn("初始化", "未监测到环境变量中的配置地址");
                            console.warn("初始化", "请将配置目录写入", "process.env['TAB_CONFIG']");
                            return [2 /*return*/, Promise.reject()];
                        }
                        console.warn("初始化", "数据库检测...");
                        return [4 /*yield*/, this.users.api.list()];
                    case 1:
                        users = _b.sent();
                        if (!users.total) return [3 /*break*/, 3];
                        console.warn("初始化", "数据库检测", "监测到用户数据", users.total, "组");
                        return [4 /*yield*/, this.systemRepair()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        console.warn("初始化", "创建管理员");
                        return [4 /*yield*/, this.users.create({
                                tel: 12345678900,
                                password: "123"
                            })];
                    case 4:
                        rootUser = _b.sent();
                        this.config.users.root._id = rootUser._id;
                        this.users.authMe();
                        console.log(this.me);
                        console.warn("初始化", "创建初始类型库");
                        return [4 /*yield*/, rootUser.createChild({ title: "类型库" }, "data.typeLib", "Type", "Object", this.me)];
                    case 5:
                        typeLib = _b.sent();
                        return [4 /*yield*/, this.createDefaultTypes("rootUser", typeLib, "data.commonUse", {}, true)];
                    case 6:
                        rootUserType = _b.sent();
                        rootUser.type = rootUserType._id;
                        rootUser.save(this.me);
                        _a = typeLib;
                        return [4 /*yield*/, rootUserType.getChild("data.typeLib", this.me)];
                    case 7:
                        _a.type = (_b.sent())._id;
                        typeLib.save(this.me);
                        console.warn("初始化", "创建配置文件>>>>>>>>>>>>>>>>>>>>");
                        return [4 /*yield*/, this.createUnitDeep({}, rootUser, "data.systemConfig")];
                    case 8:
                        systemConfig = _b.sent();
                        return [4 /*yield*/, systemConfig.getChild("data.users", this.me)];
                    case 9:
                        userConfig = _b.sent();
                        return [4 /*yield*/, userConfig.fixChild(rootUser, "data.root", "Object", this.me)];
                    case 10:
                        _b.sent();
                        systemConfig.data.secret = this.genSecret(32);
                        return [4 /*yield*/, systemConfig.save(this.me)];
                    case 11:
                        _b.sent();
                        return [2 /*return*/, this.writeSystemConfig()];
                }
            });
        });
    };
    TabServer.prototype.writeSystemConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var systemConfig, systemConfigJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn("初始化", "写入启动配置");
                        return [4 /*yield*/, this.system.get(this.config._id)];
                    case 1:
                        systemConfig = _a.sent();
                        return [4 /*yield*/, systemConfig.toJson({}, this.me)];
                    case 2:
                        systemConfigJson = _a.sent();
                        console.warn(systemConfigJson);
                        console.warn("初始化", "写入位置：", this.configPath);
                        return [4 /*yield*/, fs.writeFile(this.configPath, JSON.stringify(systemConfigJson))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, systemConfigJson];
                }
            });
        });
    };
    TabServer.prototype.createDefaultTypes = function (typeName, parent, placeString, createdTypes, array) {
        if (createdTypes === void 0) { createdTypes = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var type, typeUnit, _a, _b, _i, i, key, createdType;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        type = defaultTypes[typeName];
                        return [4 /*yield*/, parent.createChild(type, placeString, "Type", array ? "Array" : "Object", this.me)];
                    case 1:
                        typeUnit = _c.sent();
                        createdTypes[typeName] = typeUnit;
                        _a = [];
                        for (_b in type.dataStructure)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        i = _a[_i];
                        key = type.dataStructure[i];
                        if (!key.settings.unitType) return [3 /*break*/, 6];
                        createdType = createdTypes[key.settings.unitType];
                        if (!createdType) return [3 /*break*/, 4];
                        return [4 /*yield*/, typeUnit.fixChild(createdType, "data." + key.name, "Object", this.me)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.createDefaultTypes(key.settings.unitType, typeUnit, "data." + key.name, createdTypes)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, typeUnit];
                }
            });
        });
    };
    TabServer.prototype.createUnitDeep = function (el, parent, placeString) {
        return __awaiter(this, void 0, void 0, function () {
            var unit, type, _a, _b, _i, i, key, subPlaceString, subType, e_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // @ts-ignore
                        console.warn(parent.title, parent._id, this.me._id);
                        return [4 /*yield*/, parent.createChild({}, placeString, null, null, this.me)];
                    case 1:
                        unit = _c.sent();
                        return [4 /*yield*/, unit.getType(this.me)];
                    case 2:
                        type = _c.sent();
                        _a = [];
                        for (_b in type.dataStructure)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 12];
                        i = _a[_i];
                        key = type.dataStructure[i];
                        if (!(key.dataType === "Object")) return [3 /*break*/, 11];
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 10, , 11]);
                        subPlaceString = "data." + key.name;
                        return [4 /*yield*/, type.getChild(subPlaceString, this.me)];
                    case 5:
                        subType = _c.sent();
                        if (!(key.settings.unit === "types")) return [3 /*break*/, 7];
                        return [4 /*yield*/, unit.fixChild(subType, subPlaceString, "Object", this.me)];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.createUnitDeep({ type: subType._id }, unit, subPlaceString)];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_3 = _c.sent();
                        console.log(e_3);
                        return [3 /*break*/, 11];
                    case 11:
                        _i++;
                        return [3 /*break*/, 3];
                    case 12: return [2 /*return*/, unit];
                }
            });
        });
    };
    TabServer.prototype.systemRepair = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn("开始系统修复");
                        return [4 /*yield*/, this.users.api.Model.deleteOne({ tel: 12345678900 })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TabServer.prototype.resetDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn("清空数据库");
                        return [4 /*yield*/, this.users.api.Model.deleteMany({})];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.types.api.Model.deleteMany({})];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.system.api.Model.deleteMany({})];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.elements.api.Model.deleteMany({})];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabServer.prototype.backupDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var backups, _i, _a, model, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        backups = {};
                        _i = 0, _a = this.moduleList;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        model = _a[_i];
                        _b = backups;
                        _c = model;
                        return [4 /*yield*/, this[model].api.Model.find({})];
                    case 2:
                        _b[_c] = _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, backups];
                }
            });
        });
    };
    TabServer.prototype.restoreDatabase = function (info, collections, cover) {
        if (cover === void 0) { cover = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _i, cn, collectionBackup, collection;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.rootPath)
                            return [2 /*return*/, Promise.reject()];
                        _a = [];
                        for (_b in collections)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        cn = _a[_i];
                        collectionBackup = collections[cn], collection = this[cn].api.Model;
                        if (!cover) return [3 /*break*/, 3];
                        return [4 /*yield*/, collection.deleteMany({})];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, collection.insertMany(collectionBackup)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [4 /*yield*/, fs.writeFile(this.configPath, JSON.stringify(info.config))];
                    case 7:
                        _c.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TabServer.prototype.connectMongo = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var mongoUri, mongoConfig;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("数据库连接开始");
                        if (config)
                            Object.assign(this.config.mongo, config);
                        mongoUri = "", mongoConfig = this.config.mongo;
                        if (mongoConfig.username) {
                            mongoUri = "mongodb://".concat(mongoConfig.username, ":").concat(mongoConfig.pass, "@").concat(mongoConfig.host, ":").concat(mongoConfig.port, "/").concat(mongoConfig.db, "?authSource=").concat(mongoConfig.user);
                        }
                        else {
                            mongoUri = "mongodb://".concat(mongoConfig.host, ":").concat(mongoConfig.port, "/").concat(mongoConfig.db);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        console.log("\u6570\u636E\u5E93: ".concat(mongoUri, " \u8FDE\u63A5\u4E2D"));
                        return [4 /*yield*/, mongoose__namespace.connect(mongoUri)];
                    case 2:
                        _a.sent();
                        console.log("\u6570\u636E\u5E93: ".concat(mongoUri, " \u8FDE\u63A5\u6210\u529F"));
                        return [3 /*break*/, 5];
                    case 3:
                        _a.sent();
                        console.log("\u6570\u636E\u5E93: ".concat(mongoUri, " \u8FDE\u63A5\u5931\u8D25\uFF0C\u5C1D\u8BD5\u91CD\u65B0\u8FDE\u63A5"));
                        return [4 /*yield*/, mongoose__namespace.disconnect()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.connectMongo(config)];
                                            case 1:
                                                _a.sent();
                                                resolve(true);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, 2000);
                            })];
                    case 5: return [2 /*return*/, true];
                }
            });
        });
    };
    TabServer.prototype.putSocket = function (socket) {
        this.socket = socket;
    };
    return TabServer;
}(Tab));

exports.TabServer = TabServer;
