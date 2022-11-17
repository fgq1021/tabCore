(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('fs'), require('url'), require('child_process'), require('http'), require('https'), require('events'), require('net'), require('tls'), require('crypto'), require('stream'), require('zlib'), require('util'), require('path'), require('assert'), require('tty')) :
    typeof define === 'function' && define.amd ? define(['exports', 'fs', 'url', 'child_process', 'http', 'https', 'events', 'net', 'tls', 'crypto', 'stream', 'zlib', 'util', 'path', 'assert', 'tty'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tabClient = {}, global.require$$0$1, global.require$$0$2, global.require$$2, global.require$$3, global.require$$4, global.require$$0$3, global.require$$3$1, global.require$$4$1, global.require$$5, global.stream$1, global.zlib$1, global.require$$1, global.require$$1$1, global.require$$4$2, global.require$$0$4));
})(this, (function (exports, require$$0$1, require$$0$2, require$$2, require$$3, require$$4, require$$0$3, require$$3$1, require$$4$1, require$$5, stream$1, zlib$1, require$$1, require$$1$1, require$$4$2, require$$0$4) { 'use strict';

    function _mergeNamespaces(n, m) {
        m.forEach(function (e) {
            e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
                if (k !== 'default' && !(k in n)) {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        });
        return Object.freeze(n);
    }

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

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
            return __awaiter(this, void 0, void 0, function () {
                var typeModules, typeModule, method, method, method;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.api().getFromController(this._id, user)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        tabUnit.prototype.save = function (user, option) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.api().save(this, user)];
                });
            });
        };
        tabUnit.prototype.upload = function (file, place, key, p) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.api().upload(file, this._id, place, key, p)];
                });
            });
        };
        tabUnit.prototype.uploadDirectory = function (files, place, key, p) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.api().uploadDirectory(files, this._id, place, key, p)];
                });
            });
        };
        tabUnit.prototype.delete = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.api().delete(this)];
                });
            });
        };
        tabUnit.prototype.deleteFrom = function (placeString, user) {
            if (placeString === void 0) { placeString = "data.sub"; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.api().getType(this.type, user)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        tabUnit.prototype.getOwner = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.api().getOwner(this.owner, user)];
                });
            });
        };
        tabUnit.prototype.createChild = function (el, placeString, unit, slot, user) {
            if (placeString === void 0) { placeString = "data.sub"; }
            return __awaiter(this, void 0, void 0, function () {
                var parentType, structure, key, type, _a, Unit;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var type, t;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var units;
                return __generator(this, function (_a) {
                    units = this.api().parseUnit(unit).units;
                    el.pushParents = [slot + "." + this.className + "." + this._id + "." + placeString];
                    return [2 /*return*/, this.api().tab[units].create(el, user)];
                });
            });
        };
        tabUnit.prototype.fixChild = function (el, placeString, slot, user) {
            if (placeString === void 0) { placeString = "data.sub"; }
            if (slot === void 0) { slot = "Array"; }
            return __awaiter(this, void 0, void 0, function () {
                var i;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if ((this.children[placeString] === el.className + "-" + el._id) && el.parents.length) {
                        delete this.children[placeString];
                        return [2 /*return*/, this.save(user)];
                    }
                    return [2 /*return*/];
                });
            });
        };
        tabUnit.prototype.pushParent = function (placeString, user) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, id, place, key, parentString;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var data, type, _a, _b, _i, i, s, _c, _d;
                return __generator(this, function (_e) {
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
            return __awaiter(this, void 0, void 0, function () {
                var el;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var parents, pushParents, _a, _b, _i, i, id, pel, _c, _d, _e, i, pel, newEl, _f;
                return __generator(this, function (_g) {
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
            return __awaiter(this, void 0, void 0, function () {
                var oriEl, rights, _a;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _a, id, place, key, pIndex, _b;
                return __generator(this, function (_c) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var rights, _a, slot, units, id, place, key, keyString;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var rights, _a, Unit, id, place, key, keyString, childrenString, cIndex;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var cache;
                var _this = this;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var el, err_1;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tab.types.get(id, user)];
                });
            });
        };
        tabModule.prototype.getOwner = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tab.users.get(id, user)];
                });
            });
        };
        tabModule.prototype.importType = function (type) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, i, unit;
                return __generator(this, function (_c) {
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
        __extends(types, _super);
        function types(config, controller) {
            var _this_1 = _super.call(this, config, controller) || this;
            _this_1.className = "types";
            var _this = _this_1;
            _this_1.unit = /** @class */ (function (_super) {
                __extends(Type, _super);
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
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
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
        __extends(users, _super);
        function users(config, controller) {
            var _this_1 = _super.call(this, config, controller) || this;
            _this_1.className = "users";
            var _this = _this_1;
            _this_1.unit = /** @class */ (function (_super) {
                __extends(User, _super);
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
            return __awaiter(this, void 0, void 0, function () {
                var parents, pushParents, _a, _b, _i, i, id, pel, _c, _d, _e, i, pel, newEl, _f;
                return __generator(this, function (_g) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var me, e_1;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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
        __extends(elements, _super);
        function elements(config, controller) {
            var _this_1 = _super.call(this, config, controller) || this;
            _this_1.className = "elements";
            var _this = _this_1;
            _this_1.unit = /** @class */ (function (_super) {
                __extends(Element, _super);
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
            return __awaiter(this, void 0, void 0, function () {
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
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
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
                return __generator(this, function (_a) {
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
        __extends(system, _super);
        function system(config, controller) {
            var _this_1 = _super.call(this, config, controller) || this;
            _this_1.className = "system";
            var _this = _this_1;
            _this_1.unit = /** @class */ (function (_super) {
                __extends(System, _super);
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
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.api.getConfig(config, user)];
                });
            });
        };
        system.prototype.getFile = function (user) {
            return this.api.getFile(user);
        };
        return system;
    }(tabModule));

    var sparkMd5 = {exports: {}};

    (function (module, exports) {
    	(function (factory) {
    	    {
    	        // Node/CommonJS
    	        module.exports = factory();
    	    }
    	}(function (undefined$1) {

    	    /*
    	     * Fastest md5 implementation around (JKM md5).
    	     * Credits: Joseph Myers
    	     *
    	     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
    	     * @see http://jsperf.com/md5-shootout/7
    	     */

    	    /* this function is much faster,
    	      so if possible we use it. Some IEs
    	      are the only ones I know of that
    	      need the idiotic second function,
    	      generated by an if clause.  */
    	    var hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    	    function md5cycle(x, k) {
    	        var a = x[0],
    	            b = x[1],
    	            c = x[2],
    	            d = x[3];

    	        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    	        a  = (a << 7 | a >>> 25) + b | 0;
    	        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    	        d  = (d << 12 | d >>> 20) + a | 0;
    	        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    	        c  = (c << 17 | c >>> 15) + d | 0;
    	        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    	        b  = (b << 22 | b >>> 10) + c | 0;
    	        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    	        a  = (a << 7 | a >>> 25) + b | 0;
    	        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    	        d  = (d << 12 | d >>> 20) + a | 0;
    	        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    	        c  = (c << 17 | c >>> 15) + d | 0;
    	        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    	        b  = (b << 22 | b >>> 10) + c | 0;
    	        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    	        a  = (a << 7 | a >>> 25) + b | 0;
    	        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    	        d  = (d << 12 | d >>> 20) + a | 0;
    	        c += (d & a | ~d & b) + k[10] - 42063 | 0;
    	        c  = (c << 17 | c >>> 15) + d | 0;
    	        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    	        b  = (b << 22 | b >>> 10) + c | 0;
    	        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    	        a  = (a << 7 | a >>> 25) + b | 0;
    	        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    	        d  = (d << 12 | d >>> 20) + a | 0;
    	        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    	        c  = (c << 17 | c >>> 15) + d | 0;
    	        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    	        b  = (b << 22 | b >>> 10) + c | 0;

    	        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    	        a  = (a << 5 | a >>> 27) + b | 0;
    	        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    	        d  = (d << 9 | d >>> 23) + a | 0;
    	        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    	        c  = (c << 14 | c >>> 18) + d | 0;
    	        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    	        b  = (b << 20 | b >>> 12) + c | 0;
    	        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    	        a  = (a << 5 | a >>> 27) + b | 0;
    	        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    	        d  = (d << 9 | d >>> 23) + a | 0;
    	        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    	        c  = (c << 14 | c >>> 18) + d | 0;
    	        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    	        b  = (b << 20 | b >>> 12) + c | 0;
    	        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    	        a  = (a << 5 | a >>> 27) + b | 0;
    	        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    	        d  = (d << 9 | d >>> 23) + a | 0;
    	        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    	        c  = (c << 14 | c >>> 18) + d | 0;
    	        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    	        b  = (b << 20 | b >>> 12) + c | 0;
    	        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    	        a  = (a << 5 | a >>> 27) + b | 0;
    	        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    	        d  = (d << 9 | d >>> 23) + a | 0;
    	        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    	        c  = (c << 14 | c >>> 18) + d | 0;
    	        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    	        b  = (b << 20 | b >>> 12) + c | 0;

    	        a += (b ^ c ^ d) + k[5] - 378558 | 0;
    	        a  = (a << 4 | a >>> 28) + b | 0;
    	        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    	        d  = (d << 11 | d >>> 21) + a | 0;
    	        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    	        c  = (c << 16 | c >>> 16) + d | 0;
    	        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    	        b  = (b << 23 | b >>> 9) + c | 0;
    	        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    	        a  = (a << 4 | a >>> 28) + b | 0;
    	        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    	        d  = (d << 11 | d >>> 21) + a | 0;
    	        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    	        c  = (c << 16 | c >>> 16) + d | 0;
    	        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    	        b  = (b << 23 | b >>> 9) + c | 0;
    	        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    	        a  = (a << 4 | a >>> 28) + b | 0;
    	        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    	        d  = (d << 11 | d >>> 21) + a | 0;
    	        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    	        c  = (c << 16 | c >>> 16) + d | 0;
    	        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    	        b  = (b << 23 | b >>> 9) + c | 0;
    	        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    	        a  = (a << 4 | a >>> 28) + b | 0;
    	        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    	        d  = (d << 11 | d >>> 21) + a | 0;
    	        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    	        c  = (c << 16 | c >>> 16) + d | 0;
    	        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    	        b  = (b << 23 | b >>> 9) + c | 0;

    	        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    	        a  = (a << 6 | a >>> 26) + b | 0;
    	        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    	        d  = (d << 10 | d >>> 22) + a | 0;
    	        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    	        c  = (c << 15 | c >>> 17) + d | 0;
    	        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    	        b  = (b << 21 |b >>> 11) + c | 0;
    	        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    	        a  = (a << 6 | a >>> 26) + b | 0;
    	        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    	        d  = (d << 10 | d >>> 22) + a | 0;
    	        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    	        c  = (c << 15 | c >>> 17) + d | 0;
    	        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    	        b  = (b << 21 |b >>> 11) + c | 0;
    	        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    	        a  = (a << 6 | a >>> 26) + b | 0;
    	        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    	        d  = (d << 10 | d >>> 22) + a | 0;
    	        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    	        c  = (c << 15 | c >>> 17) + d | 0;
    	        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    	        b  = (b << 21 |b >>> 11) + c | 0;
    	        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    	        a  = (a << 6 | a >>> 26) + b | 0;
    	        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    	        d  = (d << 10 | d >>> 22) + a | 0;
    	        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    	        c  = (c << 15 | c >>> 17) + d | 0;
    	        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    	        b  = (b << 21 | b >>> 11) + c | 0;

    	        x[0] = a + x[0] | 0;
    	        x[1] = b + x[1] | 0;
    	        x[2] = c + x[2] | 0;
    	        x[3] = d + x[3] | 0;
    	    }

    	    function md5blk(s) {
    	        var md5blks = [],
    	            i; /* Andy King said do it this way. */

    	        for (i = 0; i < 64; i += 4) {
    	            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    	        }
    	        return md5blks;
    	    }

    	    function md5blk_array(a) {
    	        var md5blks = [],
    	            i; /* Andy King said do it this way. */

    	        for (i = 0; i < 64; i += 4) {
    	            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    	        }
    	        return md5blks;
    	    }

    	    function md51(s) {
    	        var n = s.length,
    	            state = [1732584193, -271733879, -1732584194, 271733878],
    	            i,
    	            length,
    	            tail,
    	            tmp,
    	            lo,
    	            hi;

    	        for (i = 64; i <= n; i += 64) {
    	            md5cycle(state, md5blk(s.substring(i - 64, i)));
    	        }
    	        s = s.substring(i - 64);
    	        length = s.length;
    	        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    	        for (i = 0; i < length; i += 1) {
    	            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    	        }
    	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    	        if (i > 55) {
    	            md5cycle(state, tail);
    	            for (i = 0; i < 16; i += 1) {
    	                tail[i] = 0;
    	            }
    	        }

    	        // Beware that the final length might not fit in 32 bits so we take care of that
    	        tmp = n * 8;
    	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    	        lo = parseInt(tmp[2], 16);
    	        hi = parseInt(tmp[1], 16) || 0;

    	        tail[14] = lo;
    	        tail[15] = hi;

    	        md5cycle(state, tail);
    	        return state;
    	    }

    	    function md51_array(a) {
    	        var n = a.length,
    	            state = [1732584193, -271733879, -1732584194, 271733878],
    	            i,
    	            length,
    	            tail,
    	            tmp,
    	            lo,
    	            hi;

    	        for (i = 64; i <= n; i += 64) {
    	            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    	        }

    	        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
    	        // containing the last element of the parent array if the sub array specified starts
    	        // beyond the length of the parent array - weird.
    	        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
    	        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

    	        length = a.length;
    	        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    	        for (i = 0; i < length; i += 1) {
    	            tail[i >> 2] |= a[i] << ((i % 4) << 3);
    	        }

    	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    	        if (i > 55) {
    	            md5cycle(state, tail);
    	            for (i = 0; i < 16; i += 1) {
    	                tail[i] = 0;
    	            }
    	        }

    	        // Beware that the final length might not fit in 32 bits so we take care of that
    	        tmp = n * 8;
    	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    	        lo = parseInt(tmp[2], 16);
    	        hi = parseInt(tmp[1], 16) || 0;

    	        tail[14] = lo;
    	        tail[15] = hi;

    	        md5cycle(state, tail);

    	        return state;
    	    }

    	    function rhex(n) {
    	        var s = '',
    	            j;
    	        for (j = 0; j < 4; j += 1) {
    	            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
    	        }
    	        return s;
    	    }

    	    function hex(x) {
    	        var i;
    	        for (i = 0; i < x.length; i += 1) {
    	            x[i] = rhex(x[i]);
    	        }
    	        return x.join('');
    	    }

    	    // In some cases the fast add32 function cannot be used..
    	    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') ;

    	    // ---------------------------------------------------

    	    /**
    	     * ArrayBuffer slice polyfill.
    	     *
    	     * @see https://github.com/ttaubert/node-arraybuffer-slice
    	     */

    	    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    	        (function () {
    	            function clamp(val, length) {
    	                val = (val | 0) || 0;

    	                if (val < 0) {
    	                    return Math.max(val + length, 0);
    	                }

    	                return Math.min(val, length);
    	            }

    	            ArrayBuffer.prototype.slice = function (from, to) {
    	                var length = this.byteLength,
    	                    begin = clamp(from, length),
    	                    end = length,
    	                    num,
    	                    target,
    	                    targetArray,
    	                    sourceArray;

    	                if (to !== undefined$1) {
    	                    end = clamp(to, length);
    	                }

    	                if (begin > end) {
    	                    return new ArrayBuffer(0);
    	                }

    	                num = end - begin;
    	                target = new ArrayBuffer(num);
    	                targetArray = new Uint8Array(target);

    	                sourceArray = new Uint8Array(this, begin, num);
    	                targetArray.set(sourceArray);

    	                return target;
    	            };
    	        })();
    	    }

    	    // ---------------------------------------------------

    	    /**
    	     * Helpers.
    	     */

    	    function toUtf8(str) {
    	        if (/[\u0080-\uFFFF]/.test(str)) {
    	            str = unescape(encodeURIComponent(str));
    	        }

    	        return str;
    	    }

    	    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    	        var length = str.length,
    	           buff = new ArrayBuffer(length),
    	           arr = new Uint8Array(buff),
    	           i;

    	        for (i = 0; i < length; i += 1) {
    	            arr[i] = str.charCodeAt(i);
    	        }

    	        return returnUInt8Array ? arr : buff;
    	    }

    	    function arrayBuffer2Utf8Str(buff) {
    	        return String.fromCharCode.apply(null, new Uint8Array(buff));
    	    }

    	    function concatenateArrayBuffers(first, second, returnUInt8Array) {
    	        var result = new Uint8Array(first.byteLength + second.byteLength);

    	        result.set(new Uint8Array(first));
    	        result.set(new Uint8Array(second), first.byteLength);

    	        return returnUInt8Array ? result : result.buffer;
    	    }

    	    function hexToBinaryString(hex) {
    	        var bytes = [],
    	            length = hex.length,
    	            x;

    	        for (x = 0; x < length - 1; x += 2) {
    	            bytes.push(parseInt(hex.substr(x, 2), 16));
    	        }

    	        return String.fromCharCode.apply(String, bytes);
    	    }

    	    // ---------------------------------------------------

    	    /**
    	     * SparkMD5 OOP implementation.
    	     *
    	     * Use this class to perform an incremental md5, otherwise use the
    	     * static methods instead.
    	     */

    	    function SparkMD5() {
    	        // call reset to init the instance
    	        this.reset();
    	    }

    	    /**
    	     * Appends a string.
    	     * A conversion will be applied if an utf8 string is detected.
    	     *
    	     * @param {String} str The string to be appended
    	     *
    	     * @return {SparkMD5} The instance itself
    	     */
    	    SparkMD5.prototype.append = function (str) {
    	        // Converts the string to utf8 bytes if necessary
    	        // Then append as binary
    	        this.appendBinary(toUtf8(str));

    	        return this;
    	    };

    	    /**
    	     * Appends a binary string.
    	     *
    	     * @param {String} contents The binary string to be appended
    	     *
    	     * @return {SparkMD5} The instance itself
    	     */
    	    SparkMD5.prototype.appendBinary = function (contents) {
    	        this._buff += contents;
    	        this._length += contents.length;

    	        var length = this._buff.length,
    	            i;

    	        for (i = 64; i <= length; i += 64) {
    	            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    	        }

    	        this._buff = this._buff.substring(i - 64);

    	        return this;
    	    };

    	    /**
    	     * Finishes the incremental computation, reseting the internal state and
    	     * returning the result.
    	     *
    	     * @param {Boolean} raw True to get the raw string, false to get the hex string
    	     *
    	     * @return {String} The result
    	     */
    	    SparkMD5.prototype.end = function (raw) {
    	        var buff = this._buff,
    	            length = buff.length,
    	            i,
    	            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	            ret;

    	        for (i = 0; i < length; i += 1) {
    	            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
    	        }

    	        this._finish(tail, length);
    	        ret = hex(this._hash);

    	        if (raw) {
    	            ret = hexToBinaryString(ret);
    	        }

    	        this.reset();

    	        return ret;
    	    };

    	    /**
    	     * Resets the internal state of the computation.
    	     *
    	     * @return {SparkMD5} The instance itself
    	     */
    	    SparkMD5.prototype.reset = function () {
    	        this._buff = '';
    	        this._length = 0;
    	        this._hash = [1732584193, -271733879, -1732584194, 271733878];

    	        return this;
    	    };

    	    /**
    	     * Gets the internal state of the computation.
    	     *
    	     * @return {Object} The state
    	     */
    	    SparkMD5.prototype.getState = function () {
    	        return {
    	            buff: this._buff,
    	            length: this._length,
    	            hash: this._hash.slice()
    	        };
    	    };

    	    /**
    	     * Gets the internal state of the computation.
    	     *
    	     * @param {Object} state The state
    	     *
    	     * @return {SparkMD5} The instance itself
    	     */
    	    SparkMD5.prototype.setState = function (state) {
    	        this._buff = state.buff;
    	        this._length = state.length;
    	        this._hash = state.hash;

    	        return this;
    	    };

    	    /**
    	     * Releases memory used by the incremental buffer and other additional
    	     * resources. If you plan to use the instance again, use reset instead.
    	     */
    	    SparkMD5.prototype.destroy = function () {
    	        delete this._hash;
    	        delete this._buff;
    	        delete this._length;
    	    };

    	    /**
    	     * Finish the final calculation based on the tail.
    	     *
    	     * @param {Array}  tail   The tail (will be modified)
    	     * @param {Number} length The length of the remaining buffer
    	     */
    	    SparkMD5.prototype._finish = function (tail, length) {
    	        var i = length,
    	            tmp,
    	            lo,
    	            hi;

    	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    	        if (i > 55) {
    	            md5cycle(this._hash, tail);
    	            for (i = 0; i < 16; i += 1) {
    	                tail[i] = 0;
    	            }
    	        }

    	        // Do the final computation based on the tail and length
    	        // Beware that the final length may not fit in 32 bits so we take care of that
    	        tmp = this._length * 8;
    	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    	        lo = parseInt(tmp[2], 16);
    	        hi = parseInt(tmp[1], 16) || 0;

    	        tail[14] = lo;
    	        tail[15] = hi;
    	        md5cycle(this._hash, tail);
    	    };

    	    /**
    	     * Performs the md5 hash on a string.
    	     * A conversion will be applied if utf8 string is detected.
    	     *
    	     * @param {String}  str The string
    	     * @param {Boolean} [raw] True to get the raw string, false to get the hex string
    	     *
    	     * @return {String} The result
    	     */
    	    SparkMD5.hash = function (str, raw) {
    	        // Converts the string to utf8 bytes if necessary
    	        // Then compute it using the binary function
    	        return SparkMD5.hashBinary(toUtf8(str), raw);
    	    };

    	    /**
    	     * Performs the md5 hash on a binary string.
    	     *
    	     * @param {String}  content The binary string
    	     * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
    	     *
    	     * @return {String} The result
    	     */
    	    SparkMD5.hashBinary = function (content, raw) {
    	        var hash = md51(content),
    	            ret = hex(hash);

    	        return raw ? hexToBinaryString(ret) : ret;
    	    };

    	    // ---------------------------------------------------

    	    /**
    	     * SparkMD5 OOP implementation for array buffers.
    	     *
    	     * Use this class to perform an incremental md5 ONLY for array buffers.
    	     */
    	    SparkMD5.ArrayBuffer = function () {
    	        // call reset to init the instance
    	        this.reset();
    	    };

    	    /**
    	     * Appends an array buffer.
    	     *
    	     * @param {ArrayBuffer} arr The array to be appended
    	     *
    	     * @return {SparkMD5.ArrayBuffer} The instance itself
    	     */
    	    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    	        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
    	            length = buff.length,
    	            i;

    	        this._length += arr.byteLength;

    	        for (i = 64; i <= length; i += 64) {
    	            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    	        }

    	        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

    	        return this;
    	    };

    	    /**
    	     * Finishes the incremental computation, reseting the internal state and
    	     * returning the result.
    	     *
    	     * @param {Boolean} raw True to get the raw string, false to get the hex string
    	     *
    	     * @return {String} The result
    	     */
    	    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    	        var buff = this._buff,
    	            length = buff.length,
    	            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	            i,
    	            ret;

    	        for (i = 0; i < length; i += 1) {
    	            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
    	        }

    	        this._finish(tail, length);
    	        ret = hex(this._hash);

    	        if (raw) {
    	            ret = hexToBinaryString(ret);
    	        }

    	        this.reset();

    	        return ret;
    	    };

    	    /**
    	     * Resets the internal state of the computation.
    	     *
    	     * @return {SparkMD5.ArrayBuffer} The instance itself
    	     */
    	    SparkMD5.ArrayBuffer.prototype.reset = function () {
    	        this._buff = new Uint8Array(0);
    	        this._length = 0;
    	        this._hash = [1732584193, -271733879, -1732584194, 271733878];

    	        return this;
    	    };

    	    /**
    	     * Gets the internal state of the computation.
    	     *
    	     * @return {Object} The state
    	     */
    	    SparkMD5.ArrayBuffer.prototype.getState = function () {
    	        var state = SparkMD5.prototype.getState.call(this);

    	        // Convert buffer to a string
    	        state.buff = arrayBuffer2Utf8Str(state.buff);

    	        return state;
    	    };

    	    /**
    	     * Gets the internal state of the computation.
    	     *
    	     * @param {Object} state The state
    	     *
    	     * @return {SparkMD5.ArrayBuffer} The instance itself
    	     */
    	    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    	        // Convert string to buffer
    	        state.buff = utf8Str2ArrayBuffer(state.buff, true);

    	        return SparkMD5.prototype.setState.call(this, state);
    	    };

    	    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    	    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    	    /**
    	     * Performs the md5 hash on an array buffer.
    	     *
    	     * @param {ArrayBuffer} arr The array buffer
    	     * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
    	     *
    	     * @return {String} The result
    	     */
    	    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    	        var hash = md51_array(new Uint8Array(arr)),
    	            ret = hex(hash);

    	        return raw ? hexToBinaryString(ret) : ret;
    	    };

    	    return SparkMD5;
    	}));
    } (sparkMd5));

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
            if (_el) ;
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
                var children, el, _a, _b, id, place, key, idList, fixedList, _i, idList_1, idString, subEl;
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
                            _c.sent();
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
                            spark = new sparkMd5.exports.ArrayBuffer();
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

    var typesClientController = /** @class */ (function (_super) {
        __extends(typesClientController, _super);
        function typesClientController(config) {
            var _this = _super.call(this, config, "types") || this;
            _this.className = "types";
            _this.keys = [];
            return _this;
        }
        typesClientController.prototype.getKeys = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.keys.length) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, this.req.get(this.api + "keys").then(function (res) { return res.data; })];
                        case 1:
                            _a.keys = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/, this.keys];
                    }
                });
            });
        };
        return typesClientController;
    }(tabClientController));

    var usersClientController = /** @class */ (function (_super) {
        __extends(usersClientController, _super);
        function usersClientController(config) {
            var _this = _super.call(this, config, "users") || this;
            _this.className = "users";
            if (config.apiUrl)
                _this.authUrl = config.apiUrl + "auth/";
            return _this;
        }
        usersClientController.prototype.create = function (el) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = this.tab).assignMe;
                            return [4 /*yield*/, _super.prototype.create.call(this, el)];
                        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    }
                });
            });
        };
        usersClientController.prototype.authMe = function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.req.get(this.authUrl, this.apiConfig())];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                        case 2:
                            e_1 = _a.sent();
                            return [2 /*return*/, Promise.reject(e_1.response.data)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        usersClientController.prototype.authPassword = function (tel, password) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = this.tab).assignMe;
                            return [4 /*yield*/, this.req.post(this.authUrl + "login", { tel: tel, password: password })];
                        case 1: return [2 /*return*/, _b.apply(_a, [(_c.sent()).data])];
                    }
                });
            });
        };
        return usersClientController;
    }(tabClientController));

    var elementsClientController = /** @class */ (function (_super) {
        __extends(elementsClientController, _super);
        function elementsClientController(config) {
            var _this = _super.call(this, config, "elements") || this;
            _this.className = "elements";
            return _this;
        }
        return elementsClientController;
    }(tabClientController));

    var systemClientController = /** @class */ (function (_super) {
        __extends(systemClientController, _super);
        function systemClientController(config) {
            var _this = _super.call(this, config, "system") || this;
            _this.className = "system";
            return _this;
        }
        systemClientController.prototype.getConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.config) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, this.req.get(this.api + "config").then(function (res) { return res.data; })];
                        case 1:
                            _a.config = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/, this.config];
                    }
                });
            });
        };
        return systemClientController;
    }(tabClientController));

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
            return __awaiter(this, void 0, void 0, function () {
                var _a, units, id;
                return __generator(this, function (_b) {
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
            return __awaiter(this, void 0, void 0, function () {
                var list, _i, list_1, fn;
                return __generator(this, function (_a) {
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

    const PACKET_TYPES = Object.create(null); // no Map = no polyfill
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    const PACKET_TYPES_REVERSE = Object.create(null);
    Object.keys(PACKET_TYPES).forEach(key => {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    const ERROR_PACKET = { type: "error", data: "parser error" };

    const encodePacket = ({ type, data }, supportsBinary, callback) => {
        if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
            const buffer = toBuffer$3(data);
            return callback(encodeBuffer(buffer, supportsBinary));
        }
        // plain string
        return callback(PACKET_TYPES[type] + (data || ""));
    };
    const toBuffer$3 = data => {
        if (Buffer.isBuffer(data)) {
            return data;
        }
        else if (data instanceof ArrayBuffer) {
            return Buffer.from(data);
        }
        else {
            return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
        }
    };
    // only 'message' packets can contain binary, so the type prefix is not needed
    const encodeBuffer = (data, supportsBinary) => {
        return supportsBinary ? data : "b" + data.toString("base64");
    };

    const decodePacket = (encodedPacket, binaryType) => {
        if (typeof encodedPacket !== "string") {
            return {
                type: "message",
                data: mapBinary(encodedPacket, binaryType)
            };
        }
        const type = encodedPacket.charAt(0);
        if (type === "b") {
            const buffer = Buffer.from(encodedPacket.substring(1), "base64");
            return {
                type: "message",
                data: mapBinary(buffer, binaryType)
            };
        }
        if (!PACKET_TYPES_REVERSE[type]) {
            return ERROR_PACKET;
        }
        return encodedPacket.length > 1
            ? {
                type: PACKET_TYPES_REVERSE[type],
                data: encodedPacket.substring(1)
            }
            : {
                type: PACKET_TYPES_REVERSE[type]
            };
    };
    const mapBinary = (data, binaryType) => {
        const isBuffer = Buffer.isBuffer(data);
        switch (binaryType) {
            case "arraybuffer":
                return isBuffer ? toArrayBuffer$2(data) : data;
            case "nodebuffer":
            default:
                return data; // assuming the data is already a Buffer
        }
    };
    const toArrayBuffer$2 = (buffer) => {
        const arrayBuffer = new ArrayBuffer(buffer.length);
        const view = new Uint8Array(arrayBuffer);
        for (let i = 0; i < buffer.length; i++) {
            view[i] = buffer[i];
        }
        return arrayBuffer;
    };

    const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
    const encodePayload = (packets, callback) => {
        // some packets may be added to the array while encoding, so the initial length must be saved
        const length = packets.length;
        const encodedPackets = new Array(length);
        let count = 0;
        packets.forEach((packet, i) => {
            // force base64 encoding for binary packets
            encodePacket(packet, false, encodedPacket => {
                encodedPackets[i] = encodedPacket;
                if (++count === length) {
                    callback(encodedPackets.join(SEPARATOR));
                }
            });
        });
    };
    const decodePayload = (encodedPayload, binaryType) => {
        const encodedPackets = encodedPayload.split(SEPARATOR);
        const packets = [];
        for (let i = 0; i < encodedPackets.length; i++) {
            const decodedPacket = decodePacket(encodedPackets[i], binaryType);
            packets.push(decodedPacket);
            if (decodedPacket.type === "error") {
                break;
            }
        }
        return packets;
    };
    const protocol$1 = 4;

    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */

    function Emitter(obj) {
      if (obj) return mixin(obj);
    }

    /**
     * Mixin the emitter properties.
     *
     * @param {Object} obj
     * @return {Object}
     * @api private
     */

    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }
      return obj;
    }

    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.on =
    Emitter.prototype.addEventListener = function(event, fn){
      this._callbacks = this._callbacks || {};
      (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
        .push(fn);
      return this;
    };

    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.once = function(event, fn){
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }

      on.fn = fn;
      this.on(event, on);
      return this;
    };

    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.off =
    Emitter.prototype.removeListener =
    Emitter.prototype.removeAllListeners =
    Emitter.prototype.removeEventListener = function(event, fn){
      this._callbacks = this._callbacks || {};

      // all
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }

      // specific event
      var callbacks = this._callbacks['$' + event];
      if (!callbacks) return this;

      // remove all handlers
      if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
      }

      // remove specific handler
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      // Remove event specific arrays for event types that no
      // one is subscribed for to avoid memory leak.
      if (callbacks.length === 0) {
        delete this._callbacks['$' + event];
      }

      return this;
    };

    /**
     * Emit `event` with the given args.
     *
     * @param {String} event
     * @param {Mixed} ...
     * @return {Emitter}
     */

    Emitter.prototype.emit = function(event){
      this._callbacks = this._callbacks || {};

      var args = new Array(arguments.length - 1)
        , callbacks = this._callbacks['$' + event];

      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }

      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }

      return this;
    };

    // alias used for reserved events (protected method)
    Emitter.prototype.emitReserved = Emitter.prototype.emit;

    /**
     * Return array of callbacks for `event`.
     *
     * @param {String} event
     * @return {Array}
     * @api public
     */

    Emitter.prototype.listeners = function(event){
      this._callbacks = this._callbacks || {};
      return this._callbacks['$' + event] || [];
    };

    /**
     * Check if this emitter has `event` handlers.
     *
     * @param {String} event
     * @return {Boolean}
     * @api public
     */

    Emitter.prototype.hasListeners = function(event){
      return !! this.listeners(event).length;
    };

    const globalThisShim = global;

    function pick(obj, ...attr) {
        return attr.reduce((acc, k) => {
            if (obj.hasOwnProperty(k)) {
                acc[k] = obj[k];
            }
            return acc;
        }, {});
    }
    // Keep a reference to the real timeout functions so they can be used when overridden
    const NATIVE_SET_TIMEOUT = setTimeout;
    const NATIVE_CLEAR_TIMEOUT = clearTimeout;
    function installTimerFunctions(obj, opts) {
        if (opts.useNativeTimers) {
            obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
            obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
        }
        else {
            obj.setTimeoutFn = setTimeout.bind(globalThisShim);
            obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
        }
    }
    // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
    const BASE64_OVERHEAD = 1.33;
    // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
    function byteLength(obj) {
        if (typeof obj === "string") {
            return utf8Length(obj);
        }
        // arraybuffer or blob
        return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    function utf8Length(str) {
        let c = 0, length = 0;
        for (let i = 0, l = str.length; i < l; i++) {
            c = str.charCodeAt(i);
            if (c < 0x80) {
                length += 1;
            }
            else if (c < 0x800) {
                length += 2;
            }
            else if (c < 0xd800 || c >= 0xe000) {
                length += 3;
            }
            else {
                i++;
                length += 4;
            }
        }
        return length;
    }

    class TransportError extends Error {
        constructor(reason, description, context) {
            super(reason);
            this.description = description;
            this.context = context;
            this.type = "TransportError";
        }
    }
    class Transport extends Emitter {
        /**
         * Transport abstract constructor.
         *
         * @param {Object} options.
         * @api private
         */
        constructor(opts) {
            super();
            this.writable = false;
            installTimerFunctions(this, opts);
            this.opts = opts;
            this.query = opts.query;
            this.readyState = "";
            this.socket = opts.socket;
        }
        /**
         * Emits an error.
         *
         * @param {String} reason
         * @param description
         * @param context - the error context
         * @return {Transport} for chaining
         * @api protected
         */
        onError(reason, description, context) {
            super.emitReserved("error", new TransportError(reason, description, context));
            return this;
        }
        /**
         * Opens the transport.
         *
         * @api public
         */
        open() {
            if ("closed" === this.readyState || "" === this.readyState) {
                this.readyState = "opening";
                this.doOpen();
            }
            return this;
        }
        /**
         * Closes the transport.
         *
         * @api public
         */
        close() {
            if ("opening" === this.readyState || "open" === this.readyState) {
                this.doClose();
                this.onClose();
            }
            return this;
        }
        /**
         * Sends multiple packets.
         *
         * @param {Array} packets
         * @api public
         */
        send(packets) {
            if ("open" === this.readyState) {
                this.write(packets);
            }
        }
        /**
         * Called upon open
         *
         * @api protected
         */
        onOpen() {
            this.readyState = "open";
            this.writable = true;
            super.emitReserved("open");
        }
        /**
         * Called with data.
         *
         * @param {String} data
         * @api protected
         */
        onData(data) {
            const packet = decodePacket(data, this.socket.binaryType);
            this.onPacket(packet);
        }
        /**
         * Called with a decoded packet.
         *
         * @api protected
         */
        onPacket(packet) {
            super.emitReserved("packet", packet);
        }
        /**
         * Called upon close.
         *
         * @api protected
         */
        onClose(details) {
            this.readyState = "closed";
            super.emitReserved("close", details);
        }
    }

    // imported from https://github.com/unshiftio/yeast
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
    let seed = 0, i = 0, prev;
    /**
     * Return a string representing the specified number.
     *
     * @param {Number} num The number to convert.
     * @returns {String} The string representation of the number.
     * @api public
     */
    function encode$3(num) {
        let encoded = '';
        do {
            encoded = alphabet[num % length] + encoded;
            num = Math.floor(num / length);
        } while (num > 0);
        return encoded;
    }
    /**
     * Yeast: A tiny growing id generator.
     *
     * @returns {String} A unique id.
     * @api public
     */
    function yeast() {
        const now = encode$3(+new Date());
        if (now !== prev)
            return seed = 0, prev = now;
        return now + '.' + encode$3(seed++);
    }
    //
    // Map each character to its index.
    //
    for (; i < length; i++)
        map[alphabet[i]] = i;

    // imported from https://github.com/galkn/querystring
    /**
     * Compiles a querystring
     * Returns string representation of the object
     *
     * @param {Object}
     * @api private
     */
    function encode$2(obj) {
        let str = '';
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (str.length)
                    str += '&';
                str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
            }
        }
        return str;
    }
    /**
     * Parses a simple querystring into an object
     *
     * @param {String} qs
     * @api private
     */
    function decode(qs) {
        let qry = {};
        let pairs = qs.split('&');
        for (let i = 0, l = pairs.length; i < l; i++) {
            let pair = pairs[i].split('=');
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
    }

    /**
     * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
     *
     * This can be used with JS designed for browsers to improve reuse of code and
     * allow the use of existing libraries.
     *
     * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
     *
     * @author Dan DeFelippi <dan@driverdan.com>
     * @contributor David Ellis <d.f.ellis@ieee.org>
     * @license MIT
     */

    var fs$1 = require$$0$1;
    var Url = require$$0$2;
    var spawn = require$$2.spawn;

    /**
     * Module exports.
     */

    var XMLHttpRequest_1 = XMLHttpRequest$1;

    // backwards-compat
    XMLHttpRequest$1.XMLHttpRequest = XMLHttpRequest$1;

    /**
     * `XMLHttpRequest` constructor.
     *
     * Supported options for the `opts` object are:
     *
     *  - `agent`: An http.Agent instance; http.globalAgent may be used; if 'undefined', agent usage is disabled
     *
     * @param {Object} opts optional "options" object
     */

    function XMLHttpRequest$1(opts) {

      opts = opts || {};

      /**
       * Private variables
       */
      var self = this;
      var http = require$$3;
      var https = require$$4;

      // Holds http.js objects
      var request;
      var response;

      // Request settings
      var settings = {};

      // Disable header blacklist.
      // Not part of XHR specs.
      var disableHeaderCheck = false;

      // Set some default headers
      var defaultHeaders = {
        "User-Agent": "node-XMLHttpRequest",
        "Accept": "*/*"
      };

      var headers = Object.assign({}, defaultHeaders);

      // These headers are not user setable.
      // The following are allowed but banned in the spec:
      // * user-agent
      var forbiddenRequestHeaders = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "content-transfer-encoding",
        "cookie",
        "cookie2",
        "date",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "via"
      ];

      // These request methods are not allowed
      var forbiddenRequestMethods = [
        "TRACE",
        "TRACK",
        "CONNECT"
      ];

      // Send flag
      var sendFlag = false;
      // Error flag, used when errors occur or abort is called
      var errorFlag = false;
      var abortedFlag = false;

      // Event listeners
      var listeners = {};

      /**
       * Constants
       */

      this.UNSENT = 0;
      this.OPENED = 1;
      this.HEADERS_RECEIVED = 2;
      this.LOADING = 3;
      this.DONE = 4;

      /**
       * Public vars
       */

      // Current state
      this.readyState = this.UNSENT;

      // default ready state change handler in case one is not set or is set late
      this.onreadystatechange = null;

      // Result & response
      this.responseText = "";
      this.responseXML = "";
      this.status = null;
      this.statusText = null;

      /**
       * Private methods
       */

      /**
       * Check if the specified header is allowed.
       *
       * @param string header Header to validate
       * @return boolean False if not allowed, otherwise true
       */
      var isAllowedHttpHeader = function(header) {
        return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
      };

      /**
       * Check if the specified method is allowed.
       *
       * @param string method Request method to validate
       * @return boolean False if not allowed, otherwise true
       */
      var isAllowedHttpMethod = function(method) {
        return (method && forbiddenRequestMethods.indexOf(method) === -1);
      };

      /**
       * Public methods
       */

      /**
       * Open the connection. Currently supports local server requests.
       *
       * @param string method Connection method (eg GET, POST)
       * @param string url URL for the connection.
       * @param boolean async Asynchronous connection. Default is true.
       * @param string user Username for basic authentication (optional)
       * @param string password Password for basic authentication (optional)
       */
      this.open = function(method, url, async, user, password) {
        this.abort();
        errorFlag = false;
        abortedFlag = false;

        // Check for valid request method
        if (!isAllowedHttpMethod(method)) {
          throw new Error("SecurityError: Request method not allowed");
        }

        settings = {
          "method": method,
          "url": url.toString(),
          "async": (typeof async !== "boolean" ? true : async),
          "user": user || null,
          "password": password || null
        };

        setState(this.OPENED);
      };

      /**
       * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
       * This does not conform to the W3C spec.
       *
       * @param boolean state Enable or disable header checking.
       */
      this.setDisableHeaderCheck = function(state) {
        disableHeaderCheck = state;
      };

      /**
       * Sets a header for the request.
       *
       * @param string header Header name
       * @param string value Header value
       * @return boolean Header added
       */
      this.setRequestHeader = function(header, value) {
        if (this.readyState != this.OPENED) {
          throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
        }
        if (!isAllowedHttpHeader(header)) {
          console.warn('Refused to set unsafe header "' + header + '"');
          return false;
        }
        if (sendFlag) {
          throw new Error("INVALID_STATE_ERR: send flag is true");
        }
        headers[header] = value;
        return true;
      };

      /**
       * Gets a header from the server response.
       *
       * @param string header Name of header to get.
       * @return string Text of the header or null if it doesn't exist.
       */
      this.getResponseHeader = function(header) {
        if (typeof header === "string"
          && this.readyState > this.OPENED
          && response.headers[header.toLowerCase()]
          && !errorFlag
        ) {
          return response.headers[header.toLowerCase()];
        }

        return null;
      };

      /**
       * Gets all the response headers.
       *
       * @return string A string with all response headers separated by CR+LF
       */
      this.getAllResponseHeaders = function() {
        if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
          return "";
        }
        var result = "";

        for (var i in response.headers) {
          // Cookie headers are excluded
          if (i !== "set-cookie" && i !== "set-cookie2") {
            result += i + ": " + response.headers[i] + "\r\n";
          }
        }
        return result.substr(0, result.length - 2);
      };

      /**
       * Gets a request header
       *
       * @param string name Name of header to get
       * @return string Returns the request header or empty string if not set
       */
      this.getRequestHeader = function(name) {
        // @TODO Make this case insensitive
        if (typeof name === "string" && headers[name]) {
          return headers[name];
        }

        return "";
      };

      /**
       * Sends the request to the server.
       *
       * @param string data Optional data to send as request body.
       */
      this.send = function(data) {
        if (this.readyState != this.OPENED) {
          throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
        }

        if (sendFlag) {
          throw new Error("INVALID_STATE_ERR: send has already been called");
        }

        var ssl = false, local = false;
        var url = Url.parse(settings.url);
        var host;
        // Determine the server
        switch (url.protocol) {
          case 'https:':
            ssl = true;
            // SSL & non-SSL both need host, no break here.
          case 'http:':
            host = url.hostname;
            break;

          case 'file:':
            local = true;
            break;

          case undefined:
          case '':
            host = "localhost";
            break;

          default:
            throw new Error("Protocol not supported.");
        }

        // Load files off the local filesystem (file://)
        if (local) {
          if (settings.method !== "GET") {
            throw new Error("XMLHttpRequest: Only GET method is supported");
          }

          if (settings.async) {
            fs$1.readFile(unescape(url.pathname), 'utf8', function(error, data) {
              if (error) {
                self.handleError(error, error.errno || -1);
              } else {
                self.status = 200;
                self.responseText = data;
                setState(self.DONE);
              }
            });
          } else {
            try {
              this.responseText = fs$1.readFileSync(unescape(url.pathname), 'utf8');
              this.status = 200;
              setState(self.DONE);
            } catch(e) {
              this.handleError(e, e.errno || -1);
            }
          }

          return;
        }

        // Default to port 80. If accessing localhost on another port be sure
        // to use http://localhost:port/path
        var port = url.port || (ssl ? 443 : 80);
        // Add query string if one is used
        var uri = url.pathname + (url.search ? url.search : '');

        // Set the Host header or the server may reject the request
        headers["Host"] = host;
        if (!((ssl && port === 443) || port === 80)) {
          headers["Host"] += ':' + url.port;
        }

        // Set Basic Auth if necessary
        if (settings.user) {
          if (typeof settings.password == "undefined") {
            settings.password = "";
          }
          var authBuf = new Buffer(settings.user + ":" + settings.password);
          headers["Authorization"] = "Basic " + authBuf.toString("base64");
        }

        // Set content length header
        if (settings.method === "GET" || settings.method === "HEAD") {
          data = null;
        } else if (data) {
          headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

          if (!headers["Content-Type"]) {
            headers["Content-Type"] = "text/plain;charset=UTF-8";
          }
        } else if (settings.method === "POST") {
          // For a post with no data set Content-Length: 0.
          // This is required by buggy servers that don't meet the specs.
          headers["Content-Length"] = 0;
        }

        var agent = opts.agent || false;
        var options = {
          host: host,
          port: port,
          path: uri,
          method: settings.method,
          headers: headers,
          agent: agent
        };

        if (ssl) {
          options.pfx = opts.pfx;
          options.key = opts.key;
          options.passphrase = opts.passphrase;
          options.cert = opts.cert;
          options.ca = opts.ca;
          options.ciphers = opts.ciphers;
          options.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
        }

        // Reset error flag
        errorFlag = false;
        // Handle async requests
        if (settings.async) {
          // Use the proper protocol
          var doRequest = ssl ? https.request : http.request;

          // Request is being sent, set send flag
          sendFlag = true;

          // As per spec, this is called here for historical reasons.
          self.dispatchEvent("readystatechange");

          // Handler for the response
          var responseHandler = function(resp) {
            // Set response var to the response we got back
            // This is so it remains accessable outside this scope
            response = resp;
            // Check for redirect
            // @TODO Prevent looped redirects
            if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
              // Change URL to the redirect location
              settings.url = response.headers.location;
              var url = Url.parse(settings.url);
              // Set host var in case it's used later
              host = url.hostname;
              // Options for the new request
              var newOptions = {
                hostname: url.hostname,
                port: url.port,
                path: url.path,
                method: response.statusCode === 303 ? 'GET' : settings.method,
                headers: headers
              };

              if (ssl) {
                newOptions.pfx = opts.pfx;
                newOptions.key = opts.key;
                newOptions.passphrase = opts.passphrase;
                newOptions.cert = opts.cert;
                newOptions.ca = opts.ca;
                newOptions.ciphers = opts.ciphers;
                newOptions.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
              }

              // Issue the new request
              request = doRequest(newOptions, responseHandler).on('error', errorHandler);
              request.end();
              // @TODO Check if an XHR event needs to be fired here
              return;
            }

            if (response && response.setEncoding) {
              response.setEncoding("utf8");
            }

            setState(self.HEADERS_RECEIVED);
            self.status = response.statusCode;

            response.on('data', function(chunk) {
              // Make sure there's some data
              if (chunk) {
                self.responseText += chunk;
              }
              // Don't emit state changes if the connection has been aborted.
              if (sendFlag) {
                setState(self.LOADING);
              }
            });

            response.on('end', function() {
              if (sendFlag) {
                // The sendFlag needs to be set before setState is called.  Otherwise if we are chaining callbacks
                // there can be a timing issue (the callback is called and a new call is made before the flag is reset).
                sendFlag = false;
                // Discard the 'end' event if the connection has been aborted
                setState(self.DONE);
              }
            });

            response.on('error', function(error) {
              self.handleError(error);
            });
          };

          // Error handler for the request
          var errorHandler = function(error) {
            self.handleError(error);
          };

          // Create the request
          request = doRequest(options, responseHandler).on('error', errorHandler);

          if (opts.autoUnref) {
            request.on('socket', (socket) => {
              socket.unref();
            });
          }

          // Node 0.4 and later won't accept empty data. Make sure it's needed.
          if (data) {
            request.write(data);
          }

          request.end();

          self.dispatchEvent("loadstart");
        } else { // Synchronous
          // Create a temporary file for communication with the other Node process
          var contentFile = ".node-xmlhttprequest-content-" + process.pid;
          var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
          fs$1.writeFileSync(syncFile, "", "utf8");
          // The async request the other Node process executes
          var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
            + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
            + "var options = " + JSON.stringify(options) + ";"
            + "var responseText = '';"
            + "var req = doRequest(options, function(response) {"
            + "response.setEncoding('utf8');"
            + "response.on('data', function(chunk) {"
            + "  responseText += chunk;"
            + "});"
            + "response.on('end', function() {"
            + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');"
            + "fs.unlinkSync('" + syncFile + "');"
            + "});"
            + "response.on('error', function(error) {"
            + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
            + "fs.unlinkSync('" + syncFile + "');"
            + "});"
            + "}).on('error', function(error) {"
            + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
            + "fs.unlinkSync('" + syncFile + "');"
            + "});"
            + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
            + "req.end();";
          // Start the other Node Process, executing this string
          var syncProc = spawn(process.argv[0], ["-e", execString]);
          while(fs$1.existsSync(syncFile)) {
            // Wait while the sync file is empty
          }
          self.responseText = fs$1.readFileSync(contentFile, 'utf8');
          // Kill the child process once the file has data
          syncProc.stdin.end();
          // Remove the temporary file
          fs$1.unlinkSync(contentFile);
          if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
            // If the file returned an error, handle it
            var errorObj = self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, "");
            self.handleError(errorObj, 503);
          } else {
            // If the file returned okay, parse its data and move to the DONE state
            self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
            self.responseText = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1");
            setState(self.DONE);
          }
        }
      };

      /**
       * Called when an error is encountered to deal with it.
       * @param  status  {number}    HTTP status code to use rather than the default (0) for XHR errors.
       */
      this.handleError = function(error, status) {
        this.status = status || 0;
        this.statusText = error;
        this.responseText = error.stack;
        errorFlag = true;
        setState(this.DONE);
      };

      /**
       * Aborts a request.
       */
      this.abort = function() {
        if (request) {
          request.abort();
          request = null;
        }

        headers = Object.assign({}, defaultHeaders);
        this.responseText = "";
        this.responseXML = "";

        errorFlag = abortedFlag = true;
        if (this.readyState !== this.UNSENT
            && (this.readyState !== this.OPENED || sendFlag)
            && this.readyState !== this.DONE) {
          sendFlag = false;
          setState(this.DONE);
        }
        this.readyState = this.UNSENT;
      };

      /**
       * Adds an event listener. Preferred method of binding to events.
       */
      this.addEventListener = function(event, callback) {
        if (!(event in listeners)) {
          listeners[event] = [];
        }
        // Currently allows duplicate callbacks. Should it?
        listeners[event].push(callback);
      };

      /**
       * Remove an event callback that has already been bound.
       * Only works on the matching funciton, cannot be a copy.
       */
      this.removeEventListener = function(event, callback) {
        if (event in listeners) {
          // Filter will return a new array with the callback removed
          listeners[event] = listeners[event].filter(function(ev) {
            return ev !== callback;
          });
        }
      };

      /**
       * Dispatch any events, including both "on" methods and events attached using addEventListener.
       */
      this.dispatchEvent = function(event) {
        if (typeof self["on" + event] === "function") {
          if (this.readyState === this.DONE)
            setImmediate(function() { self["on" + event](); });
          else
            self["on" + event]();
        }
        if (event in listeners) {
          for (let i = 0, len = listeners[event].length; i < len; i++) {
            if (this.readyState === this.DONE)
              setImmediate(function() { listeners[event][i].call(self); });
            else
              listeners[event][i].call(self);
          }
        }
      };

      /**
       * Changes readyState and calls onreadystatechange.
       *
       * @param int state New state
       */
      var setState = function(state) {
        if ((self.readyState === state) || (self.readyState === self.UNSENT && abortedFlag))
          return

        self.readyState = state;

        if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
          self.dispatchEvent("readystatechange");
        }

        if (self.readyState === self.DONE) {
          let fire;

          if (abortedFlag)
            fire = "abort";
          else if (errorFlag)
            fire = "error";
          else
            fire = "load";

          self.dispatchEvent(fire);

          // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
          self.dispatchEvent("loadend");
        }
      };
    }

    var XMLHttpRequestModule = /*#__PURE__*/_mergeNamespaces({
        __proto__: null,
        default: XMLHttpRequest_1
    }, [XMLHttpRequest_1]);

    const XHR = XMLHttpRequest_1 || XMLHttpRequestModule;

    function empty() { }
    const hasXHR2 = (function () {
        const xhr = new XHR({
            xdomain: false
        });
        return null != xhr.responseType;
    })();
    class Polling extends Transport {
        /**
         * XHR Polling constructor.
         *
         * @param {Object} opts
         * @api public
         */
        constructor(opts) {
            super(opts);
            this.polling = false;
            if (typeof location !== "undefined") {
                const isSSL = "https:" === location.protocol;
                let port = location.port;
                // some user agents have empty `location.port`
                if (!port) {
                    port = isSSL ? "443" : "80";
                }
                this.xd =
                    (typeof location !== "undefined" &&
                        opts.hostname !== location.hostname) ||
                        port !== opts.port;
                this.xs = opts.secure !== isSSL;
            }
            /**
             * XHR supports binary
             */
            const forceBase64 = opts && opts.forceBase64;
            this.supportsBinary = hasXHR2 && !forceBase64;
        }
        /**
         * Transport name.
         */
        get name() {
            return "polling";
        }
        /**
         * Opens the socket (triggers polling). We write a PING message to determine
         * when the transport is open.
         *
         * @api private
         */
        doOpen() {
            this.poll();
        }
        /**
         * Pauses polling.
         *
         * @param {Function} callback upon buffers are flushed and transport is paused
         * @api private
         */
        pause(onPause) {
            this.readyState = "pausing";
            const pause = () => {
                this.readyState = "paused";
                onPause();
            };
            if (this.polling || !this.writable) {
                let total = 0;
                if (this.polling) {
                    total++;
                    this.once("pollComplete", function () {
                        --total || pause();
                    });
                }
                if (!this.writable) {
                    total++;
                    this.once("drain", function () {
                        --total || pause();
                    });
                }
            }
            else {
                pause();
            }
        }
        /**
         * Starts polling cycle.
         *
         * @api public
         */
        poll() {
            this.polling = true;
            this.doPoll();
            this.emitReserved("poll");
        }
        /**
         * Overloads onData to detect payloads.
         *
         * @api private
         */
        onData(data) {
            const callback = packet => {
                // if its the first message we consider the transport open
                if ("opening" === this.readyState && packet.type === "open") {
                    this.onOpen();
                }
                // if its a close packet, we close the ongoing requests
                if ("close" === packet.type) {
                    this.onClose({ description: "transport closed by the server" });
                    return false;
                }
                // otherwise bypass onData and handle the message
                this.onPacket(packet);
            };
            // decode payload
            decodePayload(data, this.socket.binaryType).forEach(callback);
            // if an event did not trigger closing
            if ("closed" !== this.readyState) {
                // if we got data we're not polling
                this.polling = false;
                this.emitReserved("pollComplete");
                if ("open" === this.readyState) {
                    this.poll();
                }
            }
        }
        /**
         * For polling, send a close packet.
         *
         * @api private
         */
        doClose() {
            const close = () => {
                this.write([{ type: "close" }]);
            };
            if ("open" === this.readyState) {
                close();
            }
            else {
                // in case we're trying to close while
                // handshaking is in progress (GH-164)
                this.once("open", close);
            }
        }
        /**
         * Writes a packets payload.
         *
         * @param {Array} data packets
         * @param {Function} drain callback
         * @api private
         */
        write(packets) {
            this.writable = false;
            encodePayload(packets, data => {
                this.doWrite(data, () => {
                    this.writable = true;
                    this.emitReserved("drain");
                });
            });
        }
        /**
         * Generates uri for connection.
         *
         * @api private
         */
        uri() {
            let query = this.query || {};
            const schema = this.opts.secure ? "https" : "http";
            let port = "";
            // cache busting is forced
            if (false !== this.opts.timestampRequests) {
                query[this.opts.timestampParam] = yeast();
            }
            if (!this.supportsBinary && !query.sid) {
                query.b64 = 1;
            }
            // avoid port if default for schema
            if (this.opts.port &&
                (("https" === schema && Number(this.opts.port) !== 443) ||
                    ("http" === schema && Number(this.opts.port) !== 80))) {
                port = ":" + this.opts.port;
            }
            const encodedQuery = encode$2(query);
            const ipv6 = this.opts.hostname.indexOf(":") !== -1;
            return (schema +
                "://" +
                (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
                port +
                this.opts.path +
                (encodedQuery.length ? "?" + encodedQuery : ""));
        }
        /**
         * Creates a request.
         *
         * @param {String} method
         * @api private
         */
        request(opts = {}) {
            Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
            return new Request(this.uri(), opts);
        }
        /**
         * Sends data.
         *
         * @param {String} data to send.
         * @param {Function} called upon flush.
         * @api private
         */
        doWrite(data, fn) {
            const req = this.request({
                method: "POST",
                data: data
            });
            req.on("success", fn);
            req.on("error", (xhrStatus, context) => {
                this.onError("xhr post error", xhrStatus, context);
            });
        }
        /**
         * Starts a poll cycle.
         *
         * @api private
         */
        doPoll() {
            const req = this.request();
            req.on("data", this.onData.bind(this));
            req.on("error", (xhrStatus, context) => {
                this.onError("xhr poll error", xhrStatus, context);
            });
            this.pollXhr = req;
        }
    }
    class Request extends Emitter {
        /**
         * Request constructor
         *
         * @param {Object} options
         * @api public
         */
        constructor(uri, opts) {
            super();
            installTimerFunctions(this, opts);
            this.opts = opts;
            this.method = opts.method || "GET";
            this.uri = uri;
            this.async = false !== opts.async;
            this.data = undefined !== opts.data ? opts.data : null;
            this.create();
        }
        /**
         * Creates the XHR object and sends the request.
         *
         * @api private
         */
        create() {
            const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            opts.xdomain = !!this.opts.xd;
            opts.xscheme = !!this.opts.xs;
            const xhr = (this.xhr = new XHR(opts));
            try {
                xhr.open(this.method, this.uri, this.async);
                try {
                    if (this.opts.extraHeaders) {
                        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                        for (let i in this.opts.extraHeaders) {
                            if (this.opts.extraHeaders.hasOwnProperty(i)) {
                                xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                            }
                        }
                    }
                }
                catch (e) { }
                if ("POST" === this.method) {
                    try {
                        xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                    }
                    catch (e) { }
                }
                try {
                    xhr.setRequestHeader("Accept", "*/*");
                }
                catch (e) { }
                // ie6 check
                if ("withCredentials" in xhr) {
                    xhr.withCredentials = this.opts.withCredentials;
                }
                if (this.opts.requestTimeout) {
                    xhr.timeout = this.opts.requestTimeout;
                }
                xhr.onreadystatechange = () => {
                    if (4 !== xhr.readyState)
                        return;
                    if (200 === xhr.status || 1223 === xhr.status) {
                        this.onLoad();
                    }
                    else {
                        // make sure the `error` event handler that's user-set
                        // does not throw in the same tick and gets caught here
                        this.setTimeoutFn(() => {
                            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                        }, 0);
                    }
                };
                xhr.send(this.data);
            }
            catch (e) {
                // Need to defer since .create() is called directly from the constructor
                // and thus the 'error' event can only be only bound *after* this exception
                // occurs.  Therefore, also, we cannot throw here at all.
                this.setTimeoutFn(() => {
                    this.onError(e);
                }, 0);
                return;
            }
            if (typeof document !== "undefined") {
                this.index = Request.requestsCount++;
                Request.requests[this.index] = this;
            }
        }
        /**
         * Called upon error.
         *
         * @api private
         */
        onError(err) {
            this.emitReserved("error", err, this.xhr);
            this.cleanup(true);
        }
        /**
         * Cleans up house.
         *
         * @api private
         */
        cleanup(fromError) {
            if ("undefined" === typeof this.xhr || null === this.xhr) {
                return;
            }
            this.xhr.onreadystatechange = empty;
            if (fromError) {
                try {
                    this.xhr.abort();
                }
                catch (e) { }
            }
            if (typeof document !== "undefined") {
                delete Request.requests[this.index];
            }
            this.xhr = null;
        }
        /**
         * Called upon load.
         *
         * @api private
         */
        onLoad() {
            const data = this.xhr.responseText;
            if (data !== null) {
                this.emitReserved("data", data);
                this.emitReserved("success");
                this.cleanup();
            }
        }
        /**
         * Aborts the request.
         *
         * @api public
         */
        abort() {
            this.cleanup();
        }
    }
    Request.requestsCount = 0;
    Request.requests = {};
    /**
     * Aborts pending requests when unloading the window. This is needed to prevent
     * memory leaks (e.g. when using IE) and to ensure that no spurious error is
     * emitted.
     */
    if (typeof document !== "undefined") {
        // @ts-ignore
        if (typeof attachEvent === "function") {
            // @ts-ignore
            attachEvent("onunload", unloadHandler);
        }
        else if (typeof addEventListener === "function") {
            const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
            addEventListener(terminationEvent, unloadHandler, false);
        }
    }
    function unloadHandler() {
        for (let i in Request.requests) {
            if (Request.requests.hasOwnProperty(i)) {
                Request.requests[i].abort();
            }
        }
    }

    var bufferUtil$1 = {exports: {}};

    var constants = {
      BINARY_TYPES: ['nodebuffer', 'arraybuffer', 'fragments'],
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
      kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
      kListener: Symbol('kListener'),
      kStatusCode: Symbol('status-code'),
      kWebSocket: Symbol('websocket'),
      NOOP: () => {}
    };

    const { EMPTY_BUFFER: EMPTY_BUFFER$3 } = constants;

    /**
     * Merges an array of buffers into a new buffer.
     *
     * @param {Buffer[]} list The array of buffers to concat
     * @param {Number} totalLength The total length of buffers in the list
     * @return {Buffer} The resulting buffer
     * @public
     */
    function concat$1(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER$3;
      if (list.length === 1) return list[0];

      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;

      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }

      if (offset < totalLength) return target.slice(0, offset);

      return target;
    }

    /**
     * Masks a buffer using the given mask.
     *
     * @param {Buffer} source The buffer to mask
     * @param {Buffer} mask The mask to use
     * @param {Buffer} output The buffer where to store the result
     * @param {Number} offset The offset at which to start writing
     * @param {Number} length The number of bytes to mask.
     * @public
     */
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }

    /**
     * Unmasks a buffer using the given mask.
     *
     * @param {Buffer} buffer The buffer to unmask
     * @param {Buffer} mask The mask to use
     * @public
     */
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }

    /**
     * Converts a buffer to an `ArrayBuffer`.
     *
     * @param {Buffer} buf The buffer to convert
     * @return {ArrayBuffer} Converted buffer
     * @public
     */
    function toArrayBuffer$1(buf) {
      if (buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
      }

      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }

    /**
     * Converts `data` to a `Buffer`.
     *
     * @param {*} data The data to convert
     * @return {Buffer} The buffer
     * @throws {TypeError}
     * @public
     */
    function toBuffer$2(data) {
      toBuffer$2.readOnly = true;

      if (Buffer.isBuffer(data)) return data;

      let buf;

      if (data instanceof ArrayBuffer) {
        buf = Buffer.from(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer$2.readOnly = false;
      }

      return buf;
    }

    try {
      const bufferUtil = require('bufferutil');

      bufferUtil$1.exports = {
        concat: concat$1,
        mask(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        },
        toArrayBuffer: toArrayBuffer$1,
        toBuffer: toBuffer$2,
        unmask(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        }
      };
    } catch (e) /* istanbul ignore next */ {
      bufferUtil$1.exports = {
        concat: concat$1,
        mask: _mask,
        toArrayBuffer: toArrayBuffer$1,
        toBuffer: toBuffer$2,
        unmask: _unmask
      };
    }

    const kDone = Symbol('kDone');
    const kRun = Symbol('kRun');

    /**
     * A very simple job queue with adjustable concurrency. Adapted from
     * https://github.com/STRML/async-limiter
     */
    let Limiter$1 = class Limiter {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }

      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }

      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;

        if (this.jobs.length) {
          const job = this.jobs.shift();

          this.pending++;
          job(this[kDone]);
        }
      }
    };

    var limiter = Limiter$1;

    const zlib = zlib$1;

    const bufferUtil = bufferUtil$1.exports;
    const Limiter = limiter;
    const { kStatusCode: kStatusCode$2 } = constants;

    const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
    const kPerMessageDeflate = Symbol('permessage-deflate');
    const kTotalLength = Symbol('total-length');
    const kCallback = Symbol('callback');
    const kBuffers = Symbol('buffers');
    const kError$1 = Symbol('error');

    //
    // We limit zlib concurrency, which prevents severe memory fragmentation
    // as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
    // and https://github.com/websockets/ws/issues/1202
    //
    // Intentionally global; it's the global thread pool that's an issue.
    //
    let zlibLimiter;

    /**
     * permessage-deflate implementation.
     */
    let PerMessageDeflate$4 = class PerMessageDeflate {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       * @param {Boolean} [isServer=false] Create the instance in either server or
       *     client mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold =
          this._options.threshold !== undefined ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;

        this.params = null;

        if (!zlibLimiter) {
          const concurrency =
            this._options.concurrencyLimit !== undefined
              ? this._options.concurrencyLimit
              : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }

      /**
       * @type {String}
       */
      static get extensionName() {
        return 'permessage-deflate';
      }

      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};

        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }

        return params;
      }

      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);

        this.params = this._isServer
          ? this.acceptAsServer(configurations)
          : this.acceptAsClient(configurations);

        return this.params;
      }

      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }

        if (this._deflate) {
          const callback = this._deflate[kCallback];

          this._deflate.close();
          this._deflate = null;

          if (callback) {
            callback(
              new Error(
                'The deflate stream was closed while data was being processed'
              )
            );
          }
        }
      }

      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (
            (opts.serverNoContextTakeover === false &&
              params.server_no_context_takeover) ||
            (params.server_max_window_bits &&
              (opts.serverMaxWindowBits === false ||
                (typeof opts.serverMaxWindowBits === 'number' &&
                  opts.serverMaxWindowBits > params.server_max_window_bits))) ||
            (typeof opts.clientMaxWindowBits === 'number' &&
              !params.client_max_window_bits)
          ) {
            return false;
          }

          return true;
        });

        if (!accepted) {
          throw new Error('None of the extension offers can be accepted');
        }

        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === 'number') {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === 'number') {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (
          accepted.client_max_window_bits === true ||
          opts.clientMaxWindowBits === false
        ) {
          delete accepted.client_max_window_bits;
        }

        return accepted;
      }

      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];

        if (
          this._options.clientNoContextTakeover === false &&
          params.client_no_context_takeover
        ) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }

        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === 'number') {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (
          this._options.clientMaxWindowBits === false ||
          (typeof this._options.clientMaxWindowBits === 'number' &&
            params.client_max_window_bits > this._options.clientMaxWindowBits)
        ) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }

        return params;
      }

      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];

            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }

            value = value[0];

            if (key === 'client_max_window_bits') {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === 'server_max_window_bits') {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (
              key === 'client_no_context_takeover' ||
              key === 'server_no_context_takeover'
            ) {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }

            params[key] = value;
          });
        });

        return configurations;
      }

      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }

      /**
       * Compress data. Concurrency limited.
       *
       * @param {Buffer} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }

      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? 'client' : 'server';

        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits =
            typeof this.params[key] !== 'number'
              ? zlib.Z_DEFAULT_WINDOWBITS
              : this.params[key];

          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on('error', inflateOnError);
          this._inflate.on('data', inflateOnData);
        }

        this._inflate[kCallback] = callback;

        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);

        this._inflate.flush(() => {
          const err = this._inflate[kError$1];

          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }

          const data = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );

          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];

            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }

          callback(null, data);
        });
      }

      /**
       * Compress data.
       *
       * @param {Buffer} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? 'server' : 'client';

        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits =
            typeof this.params[key] !== 'number'
              ? zlib.Z_DEFAULT_WINDOWBITS
              : this.params[key];

          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });

          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];

          this._deflate.on('data', deflateOnData);
        }

        this._deflate[kCallback] = callback;

        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            //
            // The deflate stream was closed while data was being processed.
            //
            return;
          }

          let data = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );

          if (fin) data = data.slice(0, data.length - 4);

          //
          // Ensure that the callback will not be called again in
          // `PerMessageDeflate#cleanup()`.
          //
          this._deflate[kCallback] = null;

          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];

          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }

          callback(null, data);
        });
      }
    };

    var permessageDeflate = PerMessageDeflate$4;

    /**
     * The listener of the `zlib.DeflateRaw` stream `'data'` event.
     *
     * @param {Buffer} chunk A chunk of data
     * @private
     */
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }

    /**
     * The listener of the `zlib.InflateRaw` stream `'data'` event.
     *
     * @param {Buffer} chunk A chunk of data
     * @private
     */
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;

      if (
        this[kPerMessageDeflate]._maxPayload < 1 ||
        this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
      ) {
        this[kBuffers].push(chunk);
        return;
      }

      this[kError$1] = new RangeError('Max payload size exceeded');
      this[kError$1].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
      this[kError$1][kStatusCode$2] = 1009;
      this.removeListener('data', inflateOnData);
      this.reset();
    }

    /**
     * The listener of the `zlib.InflateRaw` stream `'error'` event.
     *
     * @param {Error} err The emitted error
     * @private
     */
    function inflateOnError(err) {
      //
      // There is no need to call `Zlib#close()` as the handle is automatically
      // closed when an error is emitted.
      //
      this[kPerMessageDeflate]._inflate = null;
      err[kStatusCode$2] = 1007;
      this[kCallback](err);
    }

    var validation = {exports: {}};

    //
    // Allowed token characters:
    //
    // '!', '#', '$', '%', '&', ''', '*', '+', '-',
    // '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
    //
    // tokenChars[32] === 0 // ' '
    // tokenChars[33] === 1 // '!'
    // tokenChars[34] === 0 // '"'
    // ...
    //
    // prettier-ignore
    const tokenChars$2 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
      0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
    ];

    /**
     * Checks if a status code is allowed in a close frame.
     *
     * @param {Number} code The status code
     * @return {Boolean} `true` if the status code is valid, else `false`
     * @public
     */
    function isValidStatusCode$2(code) {
      return (
        (code >= 1000 &&
          code <= 1014 &&
          code !== 1004 &&
          code !== 1005 &&
          code !== 1006) ||
        (code >= 3000 && code <= 4999)
      );
    }

    /**
     * Checks if a given buffer contains only correct UTF-8.
     * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
     * Markus Kuhn.
     *
     * @param {Buffer} buf The buffer to check
     * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
     * @public
     */
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;

      while (i < len) {
        if ((buf[i] & 0x80) === 0) {
          // 0xxxxxxx
          i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
          // 110xxxxx 10xxxxxx
          if (
            i + 1 === len ||
            (buf[i + 1] & 0xc0) !== 0x80 ||
            (buf[i] & 0xfe) === 0xc0 // Overlong
          ) {
            return false;
          }

          i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
          // 1110xxxx 10xxxxxx 10xxxxxx
          if (
            i + 2 >= len ||
            (buf[i + 1] & 0xc0) !== 0x80 ||
            (buf[i + 2] & 0xc0) !== 0x80 ||
            (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
            (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
          ) {
            return false;
          }

          i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
          // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
          if (
            i + 3 >= len ||
            (buf[i + 1] & 0xc0) !== 0x80 ||
            (buf[i + 2] & 0xc0) !== 0x80 ||
            (buf[i + 3] & 0xc0) !== 0x80 ||
            (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
            (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
            buf[i] > 0xf4 // > U+10FFFF
          ) {
            return false;
          }

          i += 4;
        } else {
          return false;
        }
      }

      return true;
    }

    try {
      const isValidUTF8 = require('utf-8-validate');

      validation.exports = {
        isValidStatusCode: isValidStatusCode$2,
        isValidUTF8(buf) {
          return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
        },
        tokenChars: tokenChars$2
      };
    } catch (e) /* istanbul ignore next */ {
      validation.exports = {
        isValidStatusCode: isValidStatusCode$2,
        isValidUTF8: _isValidUTF8,
        tokenChars: tokenChars$2
      };
    }

    const { Writable: Writable$1 } = stream$1;

    const PerMessageDeflate$3 = permessageDeflate;
    const {
      BINARY_TYPES: BINARY_TYPES$1,
      EMPTY_BUFFER: EMPTY_BUFFER$2,
      kStatusCode: kStatusCode$1,
      kWebSocket: kWebSocket$2
    } = constants;
    const { concat, toArrayBuffer, unmask } = bufferUtil$1.exports;
    const { isValidStatusCode: isValidStatusCode$1, isValidUTF8 } = validation.exports;

    const GET_INFO = 0;
    const GET_PAYLOAD_LENGTH_16 = 1;
    const GET_PAYLOAD_LENGTH_64 = 2;
    const GET_MASK = 3;
    const GET_DATA = 4;
    const INFLATING = 5;

    /**
     * HyBi Receiver implementation.
     *
     * @extends Writable
     */
    let Receiver$1 = class Receiver extends Writable$1 {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();

        this._binaryType = options.binaryType || BINARY_TYPES$1[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket$2] = undefined;

        this._bufferedBytes = 0;
        this._buffers = [];

        this._compressed = false;
        this._payloadLength = 0;
        this._mask = undefined;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;

        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];

        this._state = GET_INFO;
        this._loop = false;
      }

      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }

      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;

        if (n === this._buffers[0].length) return this._buffers.shift();

        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = buf.slice(n);
          return buf.slice(0, n);
        }

        const dst = Buffer.allocUnsafe(n);

        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;

          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = buf.slice(n);
          }

          n -= buf.length;
        } while (n > 0);

        return dst;
      }

      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        let err;
        this._loop = true;

        do {
          switch (this._state) {
            case GET_INFO:
              err = this.getInfo();
              break;
            case GET_PAYLOAD_LENGTH_16:
              err = this.getPayloadLength16();
              break;
            case GET_PAYLOAD_LENGTH_64:
              err = this.getPayloadLength64();
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              err = this.getData(cb);
              break;
            default:
              // `INFLATING`
              this._loop = false;
              return;
          }
        } while (this._loop);

        cb(err);
      }

      /**
       * Reads the first two bytes of a frame.
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }

        const buf = this.consume(2);

        if ((buf[0] & 0x30) !== 0x00) {
          this._loop = false;
          return error(
            RangeError,
            'RSV2 and RSV3 must be clear',
            true,
            1002,
            'WS_ERR_UNEXPECTED_RSV_2_3'
          );
        }

        const compressed = (buf[0] & 0x40) === 0x40;

        if (compressed && !this._extensions[PerMessageDeflate$3.extensionName]) {
          this._loop = false;
          return error(
            RangeError,
            'RSV1 must be clear',
            true,
            1002,
            'WS_ERR_UNEXPECTED_RSV_1'
          );
        }

        this._fin = (buf[0] & 0x80) === 0x80;
        this._opcode = buf[0] & 0x0f;
        this._payloadLength = buf[1] & 0x7f;

        if (this._opcode === 0x00) {
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              'RSV1 must be clear',
              true,
              1002,
              'WS_ERR_UNEXPECTED_RSV_1'
            );
          }

          if (!this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              'invalid opcode 0',
              true,
              1002,
              'WS_ERR_INVALID_OPCODE'
            );
          }

          this._opcode = this._fragmented;
        } else if (this._opcode === 0x01 || this._opcode === 0x02) {
          if (this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              'WS_ERR_INVALID_OPCODE'
            );
          }

          this._compressed = compressed;
        } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
          if (!this._fin) {
            this._loop = false;
            return error(
              RangeError,
              'FIN must be set',
              true,
              1002,
              'WS_ERR_EXPECTED_FIN'
            );
          }

          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              'RSV1 must be clear',
              true,
              1002,
              'WS_ERR_UNEXPECTED_RSV_1'
            );
          }

          if (this._payloadLength > 0x7d) {
            this._loop = false;
            return error(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
            );
          }
        } else {
          this._loop = false;
          return error(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            'WS_ERR_INVALID_OPCODE'
          );
        }

        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 0x80) === 0x80;

        if (this._isServer) {
          if (!this._masked) {
            this._loop = false;
            return error(
              RangeError,
              'MASK must be set',
              true,
              1002,
              'WS_ERR_EXPECTED_MASK'
            );
          }
        } else if (this._masked) {
          this._loop = false;
          return error(
            RangeError,
            'MASK must be clear',
            true,
            1002,
            'WS_ERR_UNEXPECTED_MASK'
          );
        }

        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else return this.haveLength();
      }

      /**
       * Gets extended payload length (7+16).
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }

        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
      }

      /**
       * Gets extended payload length (7+64).
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }

        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);

        //
        // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
        // if payload length is greater than this number.
        //
        if (num > Math.pow(2, 53 - 32) - 1) {
          this._loop = false;
          return error(
            RangeError,
            'Unsupported WebSocket frame: payload length > 2^53 - 1',
            false,
            1009,
            'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
          );
        }

        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
      }

      /**
       * Payload length has been read.
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      haveLength() {
        if (this._payloadLength && this._opcode < 0x08) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            this._loop = false;
            return error(
              RangeError,
              'Max payload size exceeded',
              false,
              1009,
              'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
            );
          }
        }

        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }

      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }

        this._mask = this.consume(4);
        this._state = GET_DATA;
      }

      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER$2;

        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }

          data = this.consume(this._payloadLength);
          if (this._masked) unmask(data, this._mask);
        }

        if (this._opcode > 0x07) return this.controlMessage(data);

        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }

        if (data.length) {
          //
          // This message is not compressed so its length is the sum of the payload
          // length of all fragments.
          //
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }

        return this.dataMessage();
      }

      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate$3.extensionName];

        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);

          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              return cb(
                error(
                  RangeError,
                  'Max payload size exceeded',
                  false,
                  1009,
                  'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
                )
              );
            }

            this._fragments.push(buf);
          }

          const er = this.dataMessage();
          if (er) return cb(er);

          this.startLoop(cb);
        });
      }

      /**
       * Handles a data message.
       *
       * @return {(Error|undefined)} A possible error
       * @private
       */
      dataMessage() {
        if (this._fin) {
          const messageLength = this._messageLength;
          const fragments = this._fragments;

          this._totalPayloadLength = 0;
          this._messageLength = 0;
          this._fragmented = 0;
          this._fragments = [];

          if (this._opcode === 2) {
            let data;

            if (this._binaryType === 'nodebuffer') {
              data = concat(fragments, messageLength);
            } else if (this._binaryType === 'arraybuffer') {
              data = toArrayBuffer(concat(fragments, messageLength));
            } else {
              data = fragments;
            }

            this.emit('message', data, true);
          } else {
            const buf = concat(fragments, messageLength);

            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              this._loop = false;
              return error(
                Error,
                'invalid UTF-8 sequence',
                true,
                1007,
                'WS_ERR_INVALID_UTF8'
              );
            }

            this.emit('message', buf, false);
          }
        }

        this._state = GET_INFO;
      }

      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data) {
        if (this._opcode === 0x08) {
          this._loop = false;

          if (data.length === 0) {
            this.emit('conclude', 1005, EMPTY_BUFFER$2);
            this.end();
          } else if (data.length === 1) {
            return error(
              RangeError,
              'invalid payload length 1',
              true,
              1002,
              'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
            );
          } else {
            const code = data.readUInt16BE(0);

            if (!isValidStatusCode$1(code)) {
              return error(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                'WS_ERR_INVALID_CLOSE_CODE'
              );
            }

            const buf = data.slice(2);

            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              return error(
                Error,
                'invalid UTF-8 sequence',
                true,
                1007,
                'WS_ERR_INVALID_UTF8'
              );
            }

            this.emit('conclude', code, buf);
            this.end();
          }
        } else if (this._opcode === 0x09) {
          this.emit('ping', data);
        } else {
          this.emit('pong', data);
        }

        this._state = GET_INFO;
      }
    };

    var receiver = Receiver$1;

    /**
     * Builds an error object.
     *
     * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
     * @param {String} message The error message
     * @param {Boolean} prefix Specifies whether or not to add a default prefix to
     *     `message`
     * @param {Number} statusCode The status code
     * @param {String} errorCode The exposed error code
     * @return {(Error|RangeError)} The error
     * @private
     */
    function error(ErrorCtor, message, prefix, statusCode, errorCode) {
      const err = new ErrorCtor(
        prefix ? `Invalid WebSocket frame: ${message}` : message
      );

      Error.captureStackTrace(err, error);
      err.code = errorCode;
      err[kStatusCode$1] = statusCode;
      return err;
    }

    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */
    const { randomFillSync } = require$$5;

    const PerMessageDeflate$2 = permessageDeflate;
    const { EMPTY_BUFFER: EMPTY_BUFFER$1 } = constants;
    const { isValidStatusCode } = validation.exports;
    const { mask: applyMask, toBuffer: toBuffer$1 } = bufferUtil$1.exports;

    const mask = Buffer.alloc(4);

    /**
     * HyBi Sender implementation.
     */
    let Sender$1 = class Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {(net.Socket|tls.Socket)} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       */
      constructor(socket, extensions) {
        this._extensions = extensions || {};
        this._socket = socket;

        this._firstFragment = true;
        this._compress = false;

        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
      }

      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {Buffer} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {Buffer[]} The framed data as a list of `Buffer` instances
       * @public
       */
      static frame(data, options) {
        const merge = options.mask && options.readOnly;
        let offset = options.mask ? 6 : 2;
        let payloadLength = data.length;

        if (data.length >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (data.length > 125) {
          offset += 2;
          payloadLength = 126;
        }

        const target = Buffer.allocUnsafe(merge ? data.length + offset : offset);

        target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
        if (options.rsv1) target[0] |= 0x40;

        target[1] = payloadLength;

        if (payloadLength === 126) {
          target.writeUInt16BE(data.length, 2);
        } else if (payloadLength === 127) {
          target.writeUInt32BE(0, 2);
          target.writeUInt32BE(data.length, 6);
        }

        if (!options.mask) return [target, data];

        randomFillSync(mask, 0, 4);

        target[1] |= 0x80;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];

        if (merge) {
          applyMask(data, mask, target, offset, data.length);
          return [target];
        }

        applyMask(data, mask, data, 0, data.length);
        return [target, data];
      }

      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;

        if (code === undefined) {
          buf = EMPTY_BUFFER$1;
        } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
          throw new TypeError('First argument must be a valid error code number');
        } else if (data === undefined || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);

          if (length > 123) {
            throw new RangeError('The message must not be greater than 123 bytes');
          }

          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);

          if (typeof data === 'string') {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }

        if (this._deflating) {
          this.enqueue([this.doClose, buf, mask, cb]);
        } else {
          this.doClose(buf, mask, cb);
        }
      }

      /**
       * Frames and sends a close message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @private
       */
      doClose(data, mask, cb) {
        this.sendFrame(
          Sender$1.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 0x08,
            mask,
            readOnly: false
          }),
          cb
        );
      }

      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        const buf = toBuffer$1(data);

        if (buf.length > 125) {
          throw new RangeError('The data size must not be greater than 125 bytes');
        }

        if (this._deflating) {
          this.enqueue([this.doPing, buf, mask, toBuffer$1.readOnly, cb]);
        } else {
          this.doPing(buf, mask, toBuffer$1.readOnly, cb);
        }
      }

      /**
       * Frames and sends a ping message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
       * @param {Function} [cb] Callback
       * @private
       */
      doPing(data, mask, readOnly, cb) {
        this.sendFrame(
          Sender$1.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 0x09,
            mask,
            readOnly
          }),
          cb
        );
      }

      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        const buf = toBuffer$1(data);

        if (buf.length > 125) {
          throw new RangeError('The data size must not be greater than 125 bytes');
        }

        if (this._deflating) {
          this.enqueue([this.doPong, buf, mask, toBuffer$1.readOnly, cb]);
        } else {
          this.doPong(buf, mask, toBuffer$1.readOnly, cb);
        }
      }

      /**
       * Frames and sends a pong message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
       * @param {Function} [cb] Callback
       * @private
       */
      doPong(data, mask, readOnly, cb) {
        this.sendFrame(
          Sender$1.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 0x0a,
            mask,
            readOnly
          }),
          cb
        );
      }

      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const buf = toBuffer$1(data);
        const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;

        if (this._firstFragment) {
          this._firstFragment = false;
          if (
            rsv1 &&
            perMessageDeflate &&
            perMessageDeflate.params[
              perMessageDeflate._isServer
                ? 'server_no_context_takeover'
                : 'client_no_context_takeover'
            ]
          ) {
            rsv1 = buf.length >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }

        if (options.fin) this._firstFragment = true;

        if (perMessageDeflate) {
          const opts = {
            fin: options.fin,
            rsv1,
            opcode,
            mask: options.mask,
            readOnly: toBuffer$1.readOnly
          };

          if (this._deflating) {
            this.enqueue([this.dispatch, buf, this._compress, opts, cb]);
          } else {
            this.dispatch(buf, this._compress, opts, cb);
          }
        } else {
          this.sendFrame(
            Sender$1.frame(buf, {
              fin: options.fin,
              rsv1: false,
              opcode,
              mask: options.mask,
              readOnly: toBuffer$1.readOnly
            }),
            cb
          );
        }
      }

      /**
       * Dispatches a data message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(Sender$1.frame(data, options), cb);
          return;
        }

        const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];

        this._bufferedBytes += data.length;
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              'The socket was closed while data was being compressed'
            );

            if (typeof cb === 'function') cb(err);

            for (let i = 0; i < this._queue.length; i++) {
              const callback = this._queue[i][4];

              if (typeof callback === 'function') callback(err);
            }

            return;
          }

          this._bufferedBytes -= data.length;
          this._deflating = false;
          options.readOnly = false;
          this.sendFrame(Sender$1.frame(buf, options), cb);
          this.dequeue();
        });
      }

      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (!this._deflating && this._queue.length) {
          const params = this._queue.shift();

          this._bufferedBytes -= params[1].length;
          Reflect.apply(params[0], this, params.slice(1));
        }
      }

      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[1].length;
        this._queue.push(params);
      }

      /**
       * Sends a frame.
       *
       * @param {Buffer[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };

    var sender = Sender$1;

    const { kForOnEventAttribute: kForOnEventAttribute$1, kListener: kListener$1 } = constants;

    const kCode = Symbol('kCode');
    const kData = Symbol('kData');
    const kError = Symbol('kError');
    const kMessage = Symbol('kMessage');
    const kReason = Symbol('kReason');
    const kTarget = Symbol('kTarget');
    const kType = Symbol('kType');
    const kWasClean = Symbol('kWasClean');

    /**
     * Class representing an event.
     */
    class Event {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }

      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }

      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    }

    Object.defineProperty(Event.prototype, 'target', { enumerable: true });
    Object.defineProperty(Event.prototype, 'type', { enumerable: true });

    /**
     * Class representing a close event.
     *
     * @extends Event
     */
    class CloseEvent extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);

        this[kCode] = options.code === undefined ? 0 : options.code;
        this[kReason] = options.reason === undefined ? '' : options.reason;
        this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
      }

      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }

      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }

      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    }

    Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

    /**
     * Class representing an error event.
     *
     * @extends Event
     */
    class ErrorEvent extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);

        this[kError] = options.error === undefined ? null : options.error;
        this[kMessage] = options.message === undefined ? '' : options.message;
      }

      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }

      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    }

    Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

    /**
     * Class representing a message event.
     *
     * @extends Event
     */
    class MessageEvent extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);

        this[kData] = options.data === undefined ? null : options.data;
      }

      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    }

    Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

    /**
     * This provides methods for emulating the `EventTarget` interface. It's not
     * meant to be used directly.
     *
     * @mixin
     */
    const EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {Function} listener The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, listener, options = {}) {
        let wrapper;

        if (type === 'message') {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent('message', {
              data: isBinary ? data : data.toString()
            });

            event[kTarget] = this;
            listener.call(this, event);
          };
        } else if (type === 'close') {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent('close', {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });

            event[kTarget] = this;
            listener.call(this, event);
          };
        } else if (type === 'error') {
          wrapper = function onError(error) {
            const event = new ErrorEvent('error', {
              error,
              message: error.message
            });

            event[kTarget] = this;
            listener.call(this, event);
          };
        } else if (type === 'open') {
          wrapper = function onOpen() {
            const event = new Event('open');

            event[kTarget] = this;
            listener.call(this, event);
          };
        } else {
          return;
        }

        wrapper[kForOnEventAttribute$1] = !!options[kForOnEventAttribute$1];
        wrapper[kListener$1] = listener;

        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },

      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {Function} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener$1] === handler && !listener[kForOnEventAttribute$1]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };

    var eventTarget = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };

    const { tokenChars: tokenChars$1 } = validation.exports;

    /**
     * Adds an offer to the map of extension offers or a parameter to the map of
     * parameters.
     *
     * @param {Object} dest The map of extension offers or parameters
     * @param {String} name The extension or parameter name
     * @param {(Object|Boolean|String)} elem The extension parameters or the
     *     parameter value
     * @private
     */
    function push(dest, name, elem) {
      if (dest[name] === undefined) dest[name] = [elem];
      else dest[name].push(elem);
    }

    /**
     * Parses the `Sec-WebSocket-Extensions` header into an object.
     *
     * @param {String} header The field value of the header
     * @return {Object} The parsed object
     * @public
     */
    function parse$3(header) {
      const offers = Object.create(null);
      let params = Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;

      for (; i < header.length; i++) {
        code = header.charCodeAt(i);

        if (extensionName === undefined) {
          if (end === -1 && tokenChars$1[code] === 1) {
            if (start === -1) start = i;
          } else if (
            i !== 0 &&
            (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
          ) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }

            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 0x2c) {
              push(offers, name, params);
              params = Object.create(null);
            } else {
              extensionName = name;
            }

            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === undefined) {
          if (end === -1 && tokenChars$1[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 0x20 || code === 0x09) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 0x3b || code === 0x2c) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }

            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 0x2c) {
              push(offers, extensionName, params);
              params = Object.create(null);
              extensionName = undefined;
            }

            start = end = -1;
          } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          //
          // The value of a quoted-string after unescaping must conform to the
          // token ABNF, so only token characters are valid.
          // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
          //
          if (isEscaping) {
            if (tokenChars$1[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars$1[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 0x22 /* '"' */ && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 0x5c /* '\' */) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
            inQuotes = true;
          } else if (end === -1 && tokenChars$1[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
            if (end === -1) end = i;
          } else if (code === 0x3b || code === 0x2c) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }

            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, '');
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 0x2c) {
              push(offers, extensionName, params);
              params = Object.create(null);
              extensionName = undefined;
            }

            paramName = undefined;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }

      if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
        throw new SyntaxError('Unexpected end of input');
      }

      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === undefined) {
        push(offers, token, params);
      } else {
        if (paramName === undefined) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ''));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }

      return offers;
    }

    /**
     * Builds the `Sec-WebSocket-Extensions` header field value.
     *
     * @param {Object} extensions The map of extensions and parameters to format
     * @return {String} A string representing the given object
     * @public
     */
    function format$1(extensions) {
      return Object.keys(extensions)
        .map((extension) => {
          let configurations = extensions[extension];
          if (!Array.isArray(configurations)) configurations = [configurations];
          return configurations
            .map((params) => {
              return [extension]
                .concat(
                  Object.keys(params).map((k) => {
                    let values = params[k];
                    if (!Array.isArray(values)) values = [values];
                    return values
                      .map((v) => (v === true ? k : `${k}=${v}`))
                      .join('; ');
                  })
                )
                .join('; ');
            })
            .join(', ');
        })
        .join(', ');
    }

    var extension$1 = { format: format$1, parse: parse$3 };

    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */

    const EventEmitter$1 = require$$0$3;
    const https$2 = require$$4;
    const http$3 = require$$3;
    const net = require$$3$1;
    const tls = require$$4$1;
    const { randomBytes, createHash: createHash$1 } = require$$5;
    const { URL: URL$2 } = require$$0$2;

    const PerMessageDeflate$1 = permessageDeflate;
    const Receiver = receiver;
    const Sender = sender;
    const {
      BINARY_TYPES,
      EMPTY_BUFFER,
      GUID: GUID$1,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket: kWebSocket$1,
      NOOP
    } = constants;
    const {
      EventTarget: { addEventListener: addEventListener$1, removeEventListener: removeEventListener$1 }
    } = eventTarget;
    const { format, parse: parse$2 } = extension$1;
    const { toBuffer } = bufferUtil$1.exports;

    const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
    const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    const protocolVersions = [8, 13];
    const closeTimeout = 30 * 1000;

    /**
     * Class representing a WebSocket.
     *
     * @extends EventEmitter
     */
    let WebSocket$3 = class WebSocket extends EventEmitter$1 {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();

        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._extensions = {};
        this._protocol = '';
        this._readyState = WebSocket$3.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;

        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;

          if (protocols === undefined) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === 'object' && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }

          initAsClient(this, address, protocols, options);
        } else {
          this._isServer = true;
        }
      }

      /**
       * This deviates from the WHATWG interface since ws doesn't support the
       * required default "blob" type (instead we define a custom "nodebuffer"
       * type).
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }

      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;

        this._binaryType = type;

        //
        // Allow to change `binaryType` on the fly.
        //
        if (this._receiver) this._receiver._binaryType = type;
      }

      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;

        return this._socket._writableState.length + this._sender._bufferedBytes;
      }

      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }

      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }

      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }

      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }

      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }

      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }

      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }

      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }

      /**
       * Set up the socket and the internal resources.
       *
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver({
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });

        this._sender = new Sender(socket, this._extensions);
        this._receiver = receiver;
        this._socket = socket;

        receiver[kWebSocket$1] = this;
        socket[kWebSocket$1] = this;

        receiver.on('conclude', receiverOnConclude);
        receiver.on('drain', receiverOnDrain);
        receiver.on('error', receiverOnError);
        receiver.on('message', receiverOnMessage);
        receiver.on('ping', receiverOnPing);
        receiver.on('pong', receiverOnPong);

        socket.setTimeout(0);
        socket.setNoDelay();

        if (head.length > 0) socket.unshift(head);

        socket.on('close', socketOnClose);
        socket.on('data', socketOnData);
        socket.on('end', socketOnEnd);
        socket.on('error', socketOnError$1);

        this._readyState = WebSocket$3.OPEN;
        this.emit('open');
      }

      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = WebSocket$3.CLOSED;
          this.emit('close', this._closeCode, this._closeMessage);
          return;
        }

        if (this._extensions[PerMessageDeflate$1.extensionName]) {
          this._extensions[PerMessageDeflate$1.extensionName].cleanup();
        }

        this._receiver.removeAllListeners();
        this._readyState = WebSocket$3.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
      }

      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === WebSocket$3.CLOSED) return;
        if (this.readyState === WebSocket$3.CONNECTING) {
          const msg = 'WebSocket was closed before the connection was established';
          return abortHandshake$1(this, this._req, msg);
        }

        if (this.readyState === WebSocket$3.CLOSING) {
          if (
            this._closeFrameSent &&
            (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
          ) {
            this._socket.end();
          }

          return;
        }

        this._readyState = WebSocket$3.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          //
          // This error is handled by the `'error'` listener on the socket. We only
          // want to know if the close frame has been sent here.
          //
          if (err) return;

          this._closeFrameSent = true;

          if (
            this._closeFrameReceived ||
            this._receiver._writableState.errorEmitted
          ) {
            this._socket.end();
          }
        });

        //
        // Specify a timeout for the closing handshake to complete.
        //
        this._closeTimer = setTimeout(
          this._socket.destroy.bind(this._socket),
          closeTimeout
        );
      }

      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === WebSocket$3.CONNECTING) {
          throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }

        if (typeof data === 'function') {
          cb = data;
          data = mask = undefined;
        } else if (typeof mask === 'function') {
          cb = mask;
          mask = undefined;
        }

        if (typeof data === 'number') data = data.toString();

        if (this.readyState !== WebSocket$3.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }

        if (mask === undefined) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }

      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === WebSocket$3.CONNECTING) {
          throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }

        if (typeof data === 'function') {
          cb = data;
          data = mask = undefined;
        } else if (typeof mask === 'function') {
          cb = mask;
          mask = undefined;
        }

        if (typeof data === 'number') data = data.toString();

        if (this.readyState !== WebSocket$3.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }

        if (mask === undefined) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }

      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === WebSocket$3.CONNECTING) {
          throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }

        if (typeof options === 'function') {
          cb = options;
          options = {};
        }

        if (typeof data === 'number') data = data.toString();

        if (this.readyState !== WebSocket$3.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }

        const opts = {
          binary: typeof data !== 'string',
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };

        if (!this._extensions[PerMessageDeflate$1.extensionName]) {
          opts.compress = false;
        }

        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }

      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === WebSocket$3.CLOSED) return;
        if (this.readyState === WebSocket$3.CONNECTING) {
          const msg = 'WebSocket was closed before the connection was established';
          return abortHandshake$1(this, this._req, msg);
        }

        if (this._socket) {
          this._readyState = WebSocket$3.CLOSING;
          this._socket.destroy();
        }
      }
    };

    /**
     * @constant {Number} CONNECTING
     * @memberof WebSocket
     */
    Object.defineProperty(WebSocket$3, 'CONNECTING', {
      enumerable: true,
      value: readyStates.indexOf('CONNECTING')
    });

    /**
     * @constant {Number} CONNECTING
     * @memberof WebSocket.prototype
     */
    Object.defineProperty(WebSocket$3.prototype, 'CONNECTING', {
      enumerable: true,
      value: readyStates.indexOf('CONNECTING')
    });

    /**
     * @constant {Number} OPEN
     * @memberof WebSocket
     */
    Object.defineProperty(WebSocket$3, 'OPEN', {
      enumerable: true,
      value: readyStates.indexOf('OPEN')
    });

    /**
     * @constant {Number} OPEN
     * @memberof WebSocket.prototype
     */
    Object.defineProperty(WebSocket$3.prototype, 'OPEN', {
      enumerable: true,
      value: readyStates.indexOf('OPEN')
    });

    /**
     * @constant {Number} CLOSING
     * @memberof WebSocket
     */
    Object.defineProperty(WebSocket$3, 'CLOSING', {
      enumerable: true,
      value: readyStates.indexOf('CLOSING')
    });

    /**
     * @constant {Number} CLOSING
     * @memberof WebSocket.prototype
     */
    Object.defineProperty(WebSocket$3.prototype, 'CLOSING', {
      enumerable: true,
      value: readyStates.indexOf('CLOSING')
    });

    /**
     * @constant {Number} CLOSED
     * @memberof WebSocket
     */
    Object.defineProperty(WebSocket$3, 'CLOSED', {
      enumerable: true,
      value: readyStates.indexOf('CLOSED')
    });

    /**
     * @constant {Number} CLOSED
     * @memberof WebSocket.prototype
     */
    Object.defineProperty(WebSocket$3.prototype, 'CLOSED', {
      enumerable: true,
      value: readyStates.indexOf('CLOSED')
    });

    [
      'binaryType',
      'bufferedAmount',
      'extensions',
      'protocol',
      'readyState',
      'url'
    ].forEach((property) => {
      Object.defineProperty(WebSocket$3.prototype, property, { enumerable: true });
    });

    //
    // Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
    // See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
    //
    ['open', 'error', 'close', 'message'].forEach((method) => {
      Object.defineProperty(WebSocket$3.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }

          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }

          if (typeof handler !== 'function') return;

          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });

    WebSocket$3.prototype.addEventListener = addEventListener$1;
    WebSocket$3.prototype.removeEventListener = removeEventListener$1;

    var websocket = WebSocket$3;

    /**
     * Initialize a WebSocket client.
     *
     * @param {WebSocket} websocket The client to initialize
     * @param {(String|URL)} address The URL to which to connect
     * @param {Array} protocols The subprotocols
     * @param {Object} [options] Connection options
     * @param {Boolean} [options.followRedirects=false] Whether or not to follow
     *     redirects
     * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
     *     handshake request
     * @param {Number} [options.maxPayload=104857600] The maximum allowed message
     *     size
     * @param {Number} [options.maxRedirects=10] The maximum number of redirects
     *     allowed
     * @param {String} [options.origin] Value of the `Origin` or
     *     `Sec-WebSocket-Origin` header
     * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
     *     permessage-deflate
     * @param {Number} [options.protocolVersion=13] Value of the
     *     `Sec-WebSocket-Version` header
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     * @private
     */
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        createConnection: undefined,
        socketPath: undefined,
        hostname: undefined,
        protocol: undefined,
        timeout: undefined,
        method: undefined,
        host: undefined,
        path: undefined,
        port: undefined
      };

      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} ` +
            `(supported versions: ${protocolVersions.join(', ')})`
        );
      }

      let parsedUrl;

      if (address instanceof URL$2) {
        parsedUrl = address;
        websocket._url = address.href;
      } else {
        try {
          parsedUrl = new URL$2(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }

        websocket._url = address;
      }

      const isSecure = parsedUrl.protocol === 'wss:';
      const isUnixSocket = parsedUrl.protocol === 'ws+unix:';

      if (parsedUrl.protocol !== 'ws:' && !isSecure && !isUnixSocket) {
        throw new SyntaxError(
          'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"'
        );
      }

      if (isUnixSocket && !parsedUrl.pathname) {
        throw new SyntaxError("The URL's pathname is empty");
      }

      if (parsedUrl.hash) {
        throw new SyntaxError('The URL contains a fragment identifier');
      }

      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString('base64');
      const get = isSecure ? https$2.get : http$3.get;
      const protocolSet = new Set();
      let perMessageDeflate;

      opts.createConnection = isSecure ? tlsConnect : netConnect;
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith('[')
        ? parsedUrl.hostname.slice(1, -1)
        : parsedUrl.hostname;
      opts.headers = {
        'Sec-WebSocket-Version': opts.protocolVersion,
        'Sec-WebSocket-Key': key,
        Connection: 'Upgrade',
        Upgrade: 'websocket',
        ...opts.headers
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;

      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate$1(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers['Sec-WebSocket-Extensions'] = format({
          [PerMessageDeflate$1.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (
            typeof protocol !== 'string' ||
            !subprotocolRegex.test(protocol) ||
            protocolSet.has(protocol)
          ) {
            throw new SyntaxError(
              'An invalid or duplicated subprotocol was specified'
            );
          }

          protocolSet.add(protocol);
        }

        opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers['Sec-WebSocket-Origin'] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }

      if (isUnixSocket) {
        const parts = opts.path.split(':');

        opts.socketPath = parts[0];
        opts.path = parts[1];
      }

      let req = (websocket._req = get(opts));

      if (opts.timeout) {
        req.on('timeout', () => {
          abortHandshake$1(websocket, req, 'Opening handshake has timed out');
        });
      }

      req.on('error', (err) => {
        if (req === null || req.aborted) return;

        req = websocket._req = null;
        websocket._readyState = WebSocket$3.CLOSING;
        websocket.emit('error', err);
        websocket.emitClose();
      });

      req.on('response', (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;

        if (
          location &&
          opts.followRedirects &&
          statusCode >= 300 &&
          statusCode < 400
        ) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake$1(websocket, req, 'Maximum redirects exceeded');
            return;
          }

          req.abort();

          const addr = new URL$2(location, address);

          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit('unexpected-response', req, res)) {
          abortHandshake$1(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });

      req.on('upgrade', (res, socket, head) => {
        websocket.emit('upgrade', res);

        //
        // The user may have closed the connection from a listener of the `upgrade`
        // event.
        //
        if (websocket.readyState !== WebSocket$3.CONNECTING) return;

        req = websocket._req = null;

        const digest = createHash$1('sha1')
          .update(key + GUID$1)
          .digest('base64');

        if (res.headers['sec-websocket-accept'] !== digest) {
          abortHandshake$1(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
          return;
        }

        const serverProt = res.headers['sec-websocket-protocol'];
        let protError;

        if (serverProt !== undefined) {
          if (!protocolSet.size) {
            protError = 'Server sent a subprotocol but none was requested';
          } else if (!protocolSet.has(serverProt)) {
            protError = 'Server sent an invalid subprotocol';
          }
        } else if (protocolSet.size) {
          protError = 'Server sent no subprotocol';
        }

        if (protError) {
          abortHandshake$1(websocket, socket, protError);
          return;
        }

        if (serverProt) websocket._protocol = serverProt;

        const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

        if (secWebSocketExtensions !== undefined) {
          if (!perMessageDeflate) {
            const message =
              'Server sent a Sec-WebSocket-Extensions header but no extension ' +
              'was requested';
            abortHandshake$1(websocket, socket, message);
            return;
          }

          let extensions;

          try {
            extensions = parse$2(secWebSocketExtensions);
          } catch (err) {
            const message = 'Invalid Sec-WebSocket-Extensions header';
            abortHandshake$1(websocket, socket, message);
            return;
          }

          const extensionNames = Object.keys(extensions);

          if (
            extensionNames.length !== 1 ||
            extensionNames[0] !== PerMessageDeflate$1.extensionName
          ) {
            const message = 'Server indicated an extension that was not requested';
            abortHandshake$1(websocket, socket, message);
            return;
          }

          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate$1.extensionName]);
          } catch (err) {
            const message = 'Invalid Sec-WebSocket-Extensions header';
            abortHandshake$1(websocket, socket, message);
            return;
          }

          websocket._extensions[PerMessageDeflate$1.extensionName] =
            perMessageDeflate;
        }

        websocket.setSocket(socket, head, {
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
    }

    /**
     * Create a `net.Socket` and initiate a connection.
     *
     * @param {Object} options Connection options
     * @return {net.Socket} The newly created socket used to start the connection
     * @private
     */
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }

    /**
     * Create a `tls.TLSSocket` and initiate a connection.
     *
     * @param {Object} options Connection options
     * @return {tls.TLSSocket} The newly created socket used to start the connection
     * @private
     */
    function tlsConnect(options) {
      options.path = undefined;

      if (!options.servername && options.servername !== '') {
        options.servername = net.isIP(options.host) ? '' : options.host;
      }

      return tls.connect(options);
    }

    /**
     * Abort the handshake and emit an error.
     *
     * @param {WebSocket} websocket The WebSocket instance
     * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
     *     abort or the socket to destroy
     * @param {String} message The error message
     * @private
     */
    function abortHandshake$1(websocket, stream, message) {
      websocket._readyState = WebSocket$3.CLOSING;

      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake$1);

      if (stream.setHeader) {
        stream.abort();

        if (stream.socket && !stream.socket.destroyed) {
          //
          // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
          // called after the request completed. See
          // https://github.com/websockets/ws/issues/1869.
          //
          stream.socket.destroy();
        }

        stream.once('abort', websocket.emitClose.bind(websocket));
        websocket.emit('error', err);
      } else {
        stream.destroy(err);
        stream.once('error', websocket.emit.bind(websocket, 'error'));
        stream.once('close', websocket.emitClose.bind(websocket));
      }
    }

    /**
     * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
     * when the `readyState` attribute is `CLOSING` or `CLOSED`.
     *
     * @param {WebSocket} websocket The WebSocket instance
     * @param {*} [data] The data to send
     * @param {Function} [cb] Callback
     * @private
     */
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = toBuffer(data).length;

        //
        // The `_bufferedAmount` property is used only when the peer is a client and
        // the opening handshake fails. Under these circumstances, in fact, the
        // `setSocket()` method is not called, so the `_socket` and `_sender`
        // properties are set to `null`.
        //
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }

      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} ` +
            `(${readyStates[websocket.readyState]})`
        );
        cb(err);
      }
    }

    /**
     * The listener of the `Receiver` `'conclude'` event.
     *
     * @param {Number} code The status code
     * @param {Buffer} reason The reason for closing
     * @private
     */
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket$1];

      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;

      if (websocket._socket[kWebSocket$1] === undefined) return;

      websocket._socket.removeListener('data', socketOnData);
      process.nextTick(resume, websocket._socket);

      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }

    /**
     * The listener of the `Receiver` `'drain'` event.
     *
     * @private
     */
    function receiverOnDrain() {
      this[kWebSocket$1]._socket.resume();
    }

    /**
     * The listener of the `Receiver` `'error'` event.
     *
     * @param {(RangeError|Error)} err The emitted error
     * @private
     */
    function receiverOnError(err) {
      const websocket = this[kWebSocket$1];

      if (websocket._socket[kWebSocket$1] !== undefined) {
        websocket._socket.removeListener('data', socketOnData);

        //
        // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
        // https://github.com/websockets/ws/issues/1940.
        //
        process.nextTick(resume, websocket._socket);

        websocket.close(err[kStatusCode]);
      }

      websocket.emit('error', err);
    }

    /**
     * The listener of the `Receiver` `'finish'` event.
     *
     * @private
     */
    function receiverOnFinish() {
      this[kWebSocket$1].emitClose();
    }

    /**
     * The listener of the `Receiver` `'message'` event.
     *
     * @param {Buffer|ArrayBuffer|Buffer[])} data The message
     * @param {Boolean} isBinary Specifies whether the message is binary or not
     * @private
     */
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket$1].emit('message', data, isBinary);
    }

    /**
     * The listener of the `Receiver` `'ping'` event.
     *
     * @param {Buffer} data The data included in the ping frame
     * @private
     */
    function receiverOnPing(data) {
      const websocket = this[kWebSocket$1];

      websocket.pong(data, !websocket._isServer, NOOP);
      websocket.emit('ping', data);
    }

    /**
     * The listener of the `Receiver` `'pong'` event.
     *
     * @param {Buffer} data The data included in the pong frame
     * @private
     */
    function receiverOnPong(data) {
      this[kWebSocket$1].emit('pong', data);
    }

    /**
     * Resume a readable stream
     *
     * @param {Readable} stream The readable stream
     * @private
     */
    function resume(stream) {
      stream.resume();
    }

    /**
     * The listener of the `net.Socket` `'close'` event.
     *
     * @private
     */
    function socketOnClose() {
      const websocket = this[kWebSocket$1];

      this.removeListener('close', socketOnClose);
      this.removeListener('data', socketOnData);
      this.removeListener('end', socketOnEnd);

      websocket._readyState = WebSocket$3.CLOSING;

      let chunk;

      //
      // The close frame might not have been received or the `'end'` event emitted,
      // for example, if the socket was destroyed due to an error. Ensure that the
      // `receiver` stream is closed after writing any remaining buffered data to
      // it. If the readable side of the socket is in flowing mode then there is no
      // buffered data as everything has been already written and `readable.read()`
      // will return `null`. If instead, the socket is paused, any possible buffered
      // data will be read as a single chunk.
      //
      if (
        !this._readableState.endEmitted &&
        !websocket._closeFrameReceived &&
        !websocket._receiver._writableState.errorEmitted &&
        (chunk = websocket._socket.read()) !== null
      ) {
        websocket._receiver.write(chunk);
      }

      websocket._receiver.end();

      this[kWebSocket$1] = undefined;

      clearTimeout(websocket._closeTimer);

      if (
        websocket._receiver._writableState.finished ||
        websocket._receiver._writableState.errorEmitted
      ) {
        websocket.emitClose();
      } else {
        websocket._receiver.on('error', receiverOnFinish);
        websocket._receiver.on('finish', receiverOnFinish);
      }
    }

    /**
     * The listener of the `net.Socket` `'data'` event.
     *
     * @param {Buffer} chunk A chunk of data
     * @private
     */
    function socketOnData(chunk) {
      if (!this[kWebSocket$1]._receiver.write(chunk)) {
        this.pause();
      }
    }

    /**
     * The listener of the `net.Socket` `'end'` event.
     *
     * @private
     */
    function socketOnEnd() {
      const websocket = this[kWebSocket$1];

      websocket._readyState = WebSocket$3.CLOSING;
      websocket._receiver.end();
      this.end();
    }

    /**
     * The listener of the `net.Socket` `'error'` event.
     *
     * @private
     */
    function socketOnError$1() {
      const websocket = this[kWebSocket$1];

      this.removeListener('error', socketOnError$1);
      this.on('error', NOOP);

      if (websocket) {
        websocket._readyState = WebSocket$3.CLOSING;
        this.destroy();
      }
    }

    const { Duplex } = stream$1;

    /**
     * Emits the `'close'` event on a stream.
     *
     * @param {Duplex} stream The stream.
     * @private
     */
    function emitClose$1(stream) {
      stream.emit('close');
    }

    /**
     * The listener of the `'end'` event.
     *
     * @private
     */
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }

    /**
     * The listener of the `'error'` event.
     *
     * @param {Error} err The error
     * @private
     */
    function duplexOnError(err) {
      this.removeListener('error', duplexOnError);
      this.destroy();
      if (this.listenerCount('error') === 0) {
        // Do not suppress the throwing behavior.
        this.emit('error', err);
      }
    }

    /**
     * Wraps a `WebSocket` in a duplex stream.
     *
     * @param {WebSocket} ws The `WebSocket` to wrap
     * @param {Object} [options] The options for the `Duplex` constructor
     * @return {Duplex} The duplex stream
     * @public
     */
    function createWebSocketStream(ws, options) {
      let resumeOnReceiverDrain = true;
      let terminateOnDestroy = true;

      function receiverOnDrain() {
        if (resumeOnReceiverDrain) ws._socket.resume();
      }

      if (ws.readyState === ws.CONNECTING) {
        ws.once('open', function open() {
          ws._receiver.removeAllListeners('drain');
          ws._receiver.on('drain', receiverOnDrain);
        });
      } else {
        ws._receiver.removeAllListeners('drain');
        ws._receiver.on('drain', receiverOnDrain);
      }

      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });

      ws.on('message', function message(msg, isBinary) {
        const data =
          !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

        if (!duplex.push(data)) {
          resumeOnReceiverDrain = false;
          ws._socket.pause();
        }
      });

      ws.once('error', function error(err) {
        if (duplex.destroyed) return;

        // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
        //
        // - If the `'error'` event is emitted before the `'open'` event, then
        //   `ws.terminate()` is a noop as no socket is assigned.
        // - Otherwise, the error is re-emitted by the listener of the `'error'`
        //   event of the `Receiver` object. The listener already closes the
        //   connection by calling `ws.close()`. This allows a close frame to be
        //   sent to the other peer. If `ws.terminate()` is called right after this,
        //   then the close frame might not be sent.
        terminateOnDestroy = false;
        duplex.destroy(err);
      });

      ws.once('close', function close() {
        if (duplex.destroyed) return;

        duplex.push(null);
      });

      duplex._destroy = function (err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose$1, duplex);
          return;
        }

        let called = false;

        ws.once('error', function error(err) {
          called = true;
          callback(err);
        });

        ws.once('close', function close() {
          if (!called) callback(err);
          process.nextTick(emitClose$1, duplex);
        });

        if (terminateOnDestroy) ws.terminate();
      };

      duplex._final = function (callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once('open', function open() {
            duplex._final(callback);
          });
          return;
        }

        // If the value of the `_socket` property is `null` it means that `ws` is a
        // client websocket and the handshake failed. In fact, when this happens, a
        // socket is never assigned to the websocket. Wait for the `'error'` event
        // that will be emitted by the websocket.
        if (ws._socket === null) return;

        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once('finish', function finish() {
            // `duplex` is not destroyed here because the `'end'` event will be
            // emitted on `duplex` after this `'finish'` event. The EOF signaling
            // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
            callback();
          });
          ws.close();
        }
      };

      duplex._read = function () {
        if (ws.readyState === ws.OPEN && !resumeOnReceiverDrain) {
          resumeOnReceiverDrain = true;
          if (!ws._receiver._writableState.needDrain) ws._socket.resume();
        }
      };

      duplex._write = function (chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once('open', function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }

        ws.send(chunk, callback);
      };

      duplex.on('end', duplexOnEnd);
      duplex.on('error', duplexOnError);
      return duplex;
    }

    var stream = createWebSocketStream;

    const { tokenChars } = validation.exports;

    /**
     * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
     *
     * @param {String} header The field value of the header
     * @return {Set} The subprotocol names
     * @public
     */
    function parse$1(header) {
      const protocols = new Set();
      let start = -1;
      let end = -1;
      let i = 0;

      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);

        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (
          i !== 0 &&
          (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
        ) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 0x2c /* ',' */) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }

          if (end === -1) end = i;

          const protocol = header.slice(start, end);

          if (protocols.has(protocol)) {
            throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
          }

          protocols.add(protocol);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }

      if (start === -1 || end !== -1) {
        throw new SyntaxError('Unexpected end of input');
      }

      const protocol = header.slice(start, i);

      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }

      protocols.add(protocol);
      return protocols;
    }

    var subprotocol$1 = { parse: parse$1 };

    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */

    const EventEmitter = require$$0$3;
    const http$2 = require$$3;
    const { createHash } = require$$5;

    const extension = extension$1;
    const PerMessageDeflate = permessageDeflate;
    const subprotocol = subprotocol$1;
    const WebSocket$2 = websocket;
    const { GUID, kWebSocket } = constants;

    const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

    const RUNNING = 0;
    const CLOSING = 1;
    const CLOSED = 2;

    /**
     * Class representing a WebSocket server.
     *
     * @extends EventEmitter
     */
    class WebSocketServer extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();

        options = {
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null, // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          ...options
        };

        if (
          (options.port == null && !options.server && !options.noServer) ||
          (options.port != null && (options.server || options.noServer)) ||
          (options.server && options.noServer)
        ) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options ' +
              'must be specified'
          );
        }

        if (options.port != null) {
          this._server = http$2.createServer((req, res) => {
            const body = http$2.STATUS_CODES[426];

            res.writeHead(426, {
              'Content-Length': body.length,
              'Content-Type': 'text/plain'
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }

        if (this._server) {
          const emitConnection = this.emit.bind(this, 'connection');

          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, 'listening'),
            error: this.emit.bind(this, 'error'),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }

        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = new Set();
          this._shouldEmitClose = false;
        }

        this.options = options;
        this._state = RUNNING;
      }

      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }

        if (!this._server) return null;
        return this._server.address();
      }

      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once('close', () => {
              cb(new Error('The server is not running'));
            });
          }

          process.nextTick(emitClose, this);
          return;
        }

        if (cb) this.once('close', cb);

        if (this._state === CLOSING) return;
        this._state = CLOSING;

        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }

          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;

          this._removeListeners();
          this._removeListeners = this._server = null;

          //
          // The HTTP/S server was created internally. Close it, and rely on its
          // `'close'` event.
          //
          server.close(() => {
            emitClose(this);
          });
        }
      }

      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf('?');
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

          if (pathname !== this.options.path) return false;
        }

        return true;
      }

      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on('error', socketOnError);

        const key =
          req.headers['sec-websocket-key'] !== undefined
            ? req.headers['sec-websocket-key']
            : false;
        const version = +req.headers['sec-websocket-version'];

        if (
          req.method !== 'GET' ||
          req.headers.upgrade.toLowerCase() !== 'websocket' ||
          !key ||
          !keyRegex.test(key) ||
          (version !== 8 && version !== 13) ||
          !this.shouldHandle(req)
        ) {
          return abortHandshake(socket, 400);
        }

        const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
        let protocols = new Set();

        if (secWebSocketProtocol !== undefined) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            return abortHandshake(socket, 400);
          }
        }

        const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
        const extensions = {};

        if (
          this.options.perMessageDeflate &&
          secWebSocketExtensions !== undefined
        ) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );

          try {
            const offers = extension.parse(secWebSocketExtensions);

            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            return abortHandshake(socket, 400);
          }
        }

        //
        // Optionally call external client verification handler.
        //
        if (this.options.verifyClient) {
          const info = {
            origin:
              req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };

          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }

              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }

          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }

        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }

      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        //
        // Destroy the socket if the client has already sent a FIN packet.
        //
        if (!socket.readable || !socket.writable) return socket.destroy();

        if (socket[kWebSocket]) {
          throw new Error(
            'server.handleUpgrade() was called more than once with the same ' +
              'socket, possibly due to a misconfiguration'
          );
        }

        if (this._state > RUNNING) return abortHandshake(socket, 503);

        const digest = createHash('sha1')
          .update(key + GUID)
          .digest('base64');

        const headers = [
          'HTTP/1.1 101 Switching Protocols',
          'Upgrade: websocket',
          'Connection: Upgrade',
          `Sec-WebSocket-Accept: ${digest}`
        ];

        const ws = new WebSocket$2(null);

        if (protocols.size) {
          //
          // Optionally call external protocol selection handler.
          //
          const protocol = this.options.handleProtocols
            ? this.options.handleProtocols(protocols, req)
            : protocols.values().next().value;

          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }

        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }

        //
        // Allow external modification/inspection of handshake headers.
        //
        this.emit('headers', headers, req);

        socket.write(headers.concat('\r\n').join('\r\n'));
        socket.removeListener('error', socketOnError);

        ws.setSocket(socket, head, {
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });

        if (this.clients) {
          this.clients.add(ws);
          ws.on('close', () => {
            this.clients.delete(ws);

            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }

        cb(ws, req);
      }
    }

    var websocketServer = WebSocketServer;

    /**
     * Add event listeners on an `EventEmitter` using a map of <event, listener>
     * pairs.
     *
     * @param {EventEmitter} server The event emitter
     * @param {Object.<String, Function>} map The listeners to add
     * @return {Function} A function that will remove the added listeners when
     *     called
     * @private
     */
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);

      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }

    /**
     * Emit a `'close'` event on an `EventEmitter`.
     *
     * @param {EventEmitter} server The event emitter
     * @private
     */
    function emitClose(server) {
      server._state = CLOSED;
      server.emit('close');
    }

    /**
     * Handle premature socket errors.
     *
     * @private
     */
    function socketOnError() {
      this.destroy();
    }

    /**
     * Close the connection when preconditions are not fulfilled.
     *
     * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
     * @param {Number} code The HTTP response status code
     * @param {String} [message] The HTTP response body
     * @param {Object} [headers] Additional HTTP response headers
     * @private
     */
    function abortHandshake(socket, code, message, headers) {
      if (socket.writable) {
        message = message || http$2.STATUS_CODES[code];
        headers = {
          Connection: 'close',
          'Content-Type': 'text/html',
          'Content-Length': Buffer.byteLength(message),
          ...headers
        };

        socket.write(
          `HTTP/1.1 ${code} ${http$2.STATUS_CODES[code]}\r\n` +
            Object.keys(headers)
              .map((h) => `${h}: ${headers[h]}`)
              .join('\r\n') +
            '\r\n\r\n' +
            message
        );
      }

      socket.removeListener('error', socketOnError);
      socket.destroy();
    }

    const WebSocket$1 = websocket;

    WebSocket$1.createWebSocketStream = stream;
    WebSocket$1.Server = websocketServer;
    WebSocket$1.Receiver = receiver;
    WebSocket$1.Sender = sender;

    WebSocket$1.WebSocket = WebSocket$1;
    WebSocket$1.WebSocketServer = WebSocket$1.Server;

    var ws = WebSocket$1;

    const WebSocket = ws;
    const usingBrowserWebSocket = false;
    const defaultBinaryType = "nodebuffer";
    const nextTick = process.nextTick;

    // detect ReactNative environment
    const isReactNative = typeof navigator !== "undefined" &&
        typeof navigator.product === "string" &&
        navigator.product.toLowerCase() === "reactnative";
    class WS extends Transport {
        /**
         * WebSocket transport constructor.
         *
         * @api {Object} connection options
         * @api public
         */
        constructor(opts) {
            super(opts);
            this.supportsBinary = !opts.forceBase64;
        }
        /**
         * Transport name.
         *
         * @api public
         */
        get name() {
            return "websocket";
        }
        /**
         * Opens socket.
         *
         * @api private
         */
        doOpen() {
            if (!this.check()) {
                // let probe timeout
                return;
            }
            const uri = this.uri();
            const protocols = this.opts.protocols;
            // React Native only supports the 'headers' option, and will print a warning if anything else is passed
            const opts = isReactNative
                ? {}
                : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            if (this.opts.extraHeaders) {
                opts.headers = this.opts.extraHeaders;
            }
            try {
                this.ws =
                    usingBrowserWebSocket && !isReactNative
                        ? protocols
                            ? new WebSocket(uri, protocols)
                            : new WebSocket(uri)
                        : new WebSocket(uri, protocols, opts);
            }
            catch (err) {
                return this.emitReserved("error", err);
            }
            this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
            this.addEventListeners();
        }
        /**
         * Adds event listeners to the socket
         *
         * @api private
         */
        addEventListeners() {
            this.ws.onopen = () => {
                if (this.opts.autoUnref) {
                    this.ws._socket.unref();
                }
                this.onOpen();
            };
            this.ws.onclose = closeEvent => this.onClose({
                description: "websocket connection closed",
                context: closeEvent
            });
            this.ws.onmessage = ev => this.onData(ev.data);
            this.ws.onerror = e => this.onError("websocket error", e);
        }
        /**
         * Writes data to socket.
         *
         * @param {Array} array of packets.
         * @api private
         */
        write(packets) {
            this.writable = false;
            // encodePacket efficient as it uses WS framing
            // no need for encodePayload
            for (let i = 0; i < packets.length; i++) {
                const packet = packets[i];
                const lastPacket = i === packets.length - 1;
                encodePacket(packet, this.supportsBinary, data => {
                    // always create a new object (GH-437)
                    const opts = {};
                    {
                        if (packet.options) {
                            opts.compress = packet.options.compress;
                        }
                        if (this.opts.perMessageDeflate) {
                            const len = 
                            // @ts-ignore
                            "string" === typeof data ? Buffer.byteLength(data) : data.length;
                            if (len < this.opts.perMessageDeflate.threshold) {
                                opts.compress = false;
                            }
                        }
                    }
                    // Sometimes the websocket has already been closed but the browser didn't
                    // have a chance of informing us about it yet, in that case send will
                    // throw an error
                    try {
                        if (usingBrowserWebSocket) ;
                        else {
                            this.ws.send(data, opts);
                        }
                    }
                    catch (e) {
                    }
                    if (lastPacket) {
                        // fake drain
                        // defer to next tick to allow Socket to clear writeBuffer
                        nextTick(() => {
                            this.writable = true;
                            this.emitReserved("drain");
                        }, this.setTimeoutFn);
                    }
                });
            }
        }
        /**
         * Closes socket.
         *
         * @api private
         */
        doClose() {
            if (typeof this.ws !== "undefined") {
                this.ws.close();
                this.ws = null;
            }
        }
        /**
         * Generates uri for connection.
         *
         * @api private
         */
        uri() {
            let query = this.query || {};
            const schema = this.opts.secure ? "wss" : "ws";
            let port = "";
            // avoid port if default for schema
            if (this.opts.port &&
                (("wss" === schema && Number(this.opts.port) !== 443) ||
                    ("ws" === schema && Number(this.opts.port) !== 80))) {
                port = ":" + this.opts.port;
            }
            // append timestamp to URI
            if (this.opts.timestampRequests) {
                query[this.opts.timestampParam] = yeast();
            }
            // communicate binary support capabilities
            if (!this.supportsBinary) {
                query.b64 = 1;
            }
            const encodedQuery = encode$2(query);
            const ipv6 = this.opts.hostname.indexOf(":") !== -1;
            return (schema +
                "://" +
                (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
                port +
                this.opts.path +
                (encodedQuery.length ? "?" + encodedQuery : ""));
        }
        /**
         * Feature detection for WebSocket.
         *
         * @return {Boolean} whether this transport is available.
         * @api public
         */
        check() {
            return !!WebSocket;
        }
    }

    const transports = {
        websocket: WS,
        polling: Polling
    };

    // imported from https://github.com/galkn/parseuri
    /**
     * Parses an URI
     *
     * @author Steven Levithan <stevenlevithan.com> (MIT license)
     * @api private
     */
    const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    const parts = [
        'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
    ];
    function parse(str) {
        const src = str, b = str.indexOf('['), e = str.indexOf(']');
        if (b != -1 && e != -1) {
            str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }
        let m = re.exec(str || ''), uri = {}, i = 14;
        while (i--) {
            uri[parts[i]] = m[i] || '';
        }
        if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
            uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
            uri.ipv6uri = true;
        }
        uri.pathNames = pathNames(uri, uri['path']);
        uri.queryKey = queryKey(uri, uri['query']);
        return uri;
    }
    function pathNames(obj, path) {
        const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
        if (path.slice(0, 1) == '/' || path.length === 0) {
            names.splice(0, 1);
        }
        if (path.slice(-1) == '/') {
            names.splice(names.length - 1, 1);
        }
        return names;
    }
    function queryKey(uri, query) {
        const data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
            if ($1) {
                data[$1] = $2;
            }
        });
        return data;
    }

    let Socket$1 = class Socket extends Emitter {
        /**
         * Socket constructor.
         *
         * @param {String|Object} uri or options
         * @param {Object} opts - options
         * @api public
         */
        constructor(uri, opts = {}) {
            super();
            if (uri && "object" === typeof uri) {
                opts = uri;
                uri = null;
            }
            if (uri) {
                uri = parse(uri);
                opts.hostname = uri.host;
                opts.secure = uri.protocol === "https" || uri.protocol === "wss";
                opts.port = uri.port;
                if (uri.query)
                    opts.query = uri.query;
            }
            else if (opts.host) {
                opts.hostname = parse(opts.host).host;
            }
            installTimerFunctions(this, opts);
            this.secure =
                null != opts.secure
                    ? opts.secure
                    : typeof location !== "undefined" && "https:" === location.protocol;
            if (opts.hostname && !opts.port) {
                // if no port is specified manually, use the protocol default
                opts.port = this.secure ? "443" : "80";
            }
            this.hostname =
                opts.hostname ||
                    (typeof location !== "undefined" ? location.hostname : "localhost");
            this.port =
                opts.port ||
                    (typeof location !== "undefined" && location.port
                        ? location.port
                        : this.secure
                            ? "443"
                            : "80");
            this.transports = opts.transports || ["polling", "websocket"];
            this.readyState = "";
            this.writeBuffer = [];
            this.prevBufferLen = 0;
            this.opts = Object.assign({
                path: "/engine.io",
                agent: false,
                withCredentials: false,
                upgrade: true,
                timestampParam: "t",
                rememberUpgrade: false,
                rejectUnauthorized: true,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: true
            }, opts);
            this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
            if (typeof this.opts.query === "string") {
                this.opts.query = decode(this.opts.query);
            }
            // set on handshake
            this.id = null;
            this.upgrades = null;
            this.pingInterval = null;
            this.pingTimeout = null;
            // set on heartbeat
            this.pingTimeoutTimer = null;
            if (typeof addEventListener === "function") {
                if (this.opts.closeOnBeforeunload) {
                    // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                    // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                    // closed/reloaded)
                    this.beforeunloadEventListener = () => {
                        if (this.transport) {
                            // silently close the transport
                            this.transport.removeAllListeners();
                            this.transport.close();
                        }
                    };
                    addEventListener("beforeunload", this.beforeunloadEventListener, false);
                }
                if (this.hostname !== "localhost") {
                    this.offlineEventListener = () => {
                        this.onClose("transport close", {
                            description: "network connection lost"
                        });
                    };
                    addEventListener("offline", this.offlineEventListener, false);
                }
            }
            this.open();
        }
        /**
         * Creates transport of the given type.
         *
         * @param {String} transport name
         * @return {Transport}
         * @api private
         */
        createTransport(name) {
            const query = Object.assign({}, this.opts.query);
            // append engine.io protocol identifier
            query.EIO = protocol$1;
            // transport name
            query.transport = name;
            // session id if we already have one
            if (this.id)
                query.sid = this.id;
            const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
                query,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            });
            return new transports[name](opts);
        }
        /**
         * Initializes transport to use and starts probe.
         *
         * @api private
         */
        open() {
            let transport;
            if (this.opts.rememberUpgrade &&
                Socket$1.priorWebsocketSuccess &&
                this.transports.indexOf("websocket") !== -1) {
                transport = "websocket";
            }
            else if (0 === this.transports.length) {
                // Emit error on next tick so it can be listened to
                this.setTimeoutFn(() => {
                    this.emitReserved("error", "No transports available");
                }, 0);
                return;
            }
            else {
                transport = this.transports[0];
            }
            this.readyState = "opening";
            // Retry with the next transport if the transport is disabled (jsonp: false)
            try {
                transport = this.createTransport(transport);
            }
            catch (e) {
                this.transports.shift();
                this.open();
                return;
            }
            transport.open();
            this.setTransport(transport);
        }
        /**
         * Sets the current transport. Disables the existing one (if any).
         *
         * @api private
         */
        setTransport(transport) {
            if (this.transport) {
                this.transport.removeAllListeners();
            }
            // set up transport
            this.transport = transport;
            // set up transport listeners
            transport
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", reason => this.onClose("transport close", reason));
        }
        /**
         * Probes a transport.
         *
         * @param {String} transport name
         * @api private
         */
        probe(name) {
            let transport = this.createTransport(name);
            let failed = false;
            Socket$1.priorWebsocketSuccess = false;
            const onTransportOpen = () => {
                if (failed)
                    return;
                transport.send([{ type: "ping", data: "probe" }]);
                transport.once("packet", msg => {
                    if (failed)
                        return;
                    if ("pong" === msg.type && "probe" === msg.data) {
                        this.upgrading = true;
                        this.emitReserved("upgrading", transport);
                        if (!transport)
                            return;
                        Socket$1.priorWebsocketSuccess = "websocket" === transport.name;
                        this.transport.pause(() => {
                            if (failed)
                                return;
                            if ("closed" === this.readyState)
                                return;
                            cleanup();
                            this.setTransport(transport);
                            transport.send([{ type: "upgrade" }]);
                            this.emitReserved("upgrade", transport);
                            transport = null;
                            this.upgrading = false;
                            this.flush();
                        });
                    }
                    else {
                        const err = new Error("probe error");
                        // @ts-ignore
                        err.transport = transport.name;
                        this.emitReserved("upgradeError", err);
                    }
                });
            };
            function freezeTransport() {
                if (failed)
                    return;
                // Any callback called by transport should be ignored since now
                failed = true;
                cleanup();
                transport.close();
                transport = null;
            }
            // Handle any error that happens while probing
            const onerror = err => {
                const error = new Error("probe error: " + err);
                // @ts-ignore
                error.transport = transport.name;
                freezeTransport();
                this.emitReserved("upgradeError", error);
            };
            function onTransportClose() {
                onerror("transport closed");
            }
            // When the socket is closed while we're probing
            function onclose() {
                onerror("socket closed");
            }
            // When the socket is upgraded while we're probing
            function onupgrade(to) {
                if (transport && to.name !== transport.name) {
                    freezeTransport();
                }
            }
            // Remove all listeners on the transport and on self
            const cleanup = () => {
                transport.removeListener("open", onTransportOpen);
                transport.removeListener("error", onerror);
                transport.removeListener("close", onTransportClose);
                this.off("close", onclose);
                this.off("upgrading", onupgrade);
            };
            transport.once("open", onTransportOpen);
            transport.once("error", onerror);
            transport.once("close", onTransportClose);
            this.once("close", onclose);
            this.once("upgrading", onupgrade);
            transport.open();
        }
        /**
         * Called when connection is deemed open.
         *
         * @api private
         */
        onOpen() {
            this.readyState = "open";
            Socket$1.priorWebsocketSuccess = "websocket" === this.transport.name;
            this.emitReserved("open");
            this.flush();
            // we check for `readyState` in case an `open`
            // listener already closed the socket
            if ("open" === this.readyState &&
                this.opts.upgrade &&
                this.transport.pause) {
                let i = 0;
                const l = this.upgrades.length;
                for (; i < l; i++) {
                    this.probe(this.upgrades[i]);
                }
            }
        }
        /**
         * Handles a packet.
         *
         * @api private
         */
        onPacket(packet) {
            if ("opening" === this.readyState ||
                "open" === this.readyState ||
                "closing" === this.readyState) {
                this.emitReserved("packet", packet);
                // Socket is live - any packet counts
                this.emitReserved("heartbeat");
                switch (packet.type) {
                    case "open":
                        this.onHandshake(JSON.parse(packet.data));
                        break;
                    case "ping":
                        this.resetPingTimeout();
                        this.sendPacket("pong");
                        this.emitReserved("ping");
                        this.emitReserved("pong");
                        break;
                    case "error":
                        const err = new Error("server error");
                        // @ts-ignore
                        err.code = packet.data;
                        this.onError(err);
                        break;
                    case "message":
                        this.emitReserved("data", packet.data);
                        this.emitReserved("message", packet.data);
                        break;
                }
            }
        }
        /**
         * Called upon handshake completion.
         *
         * @param {Object} data - handshake obj
         * @api private
         */
        onHandshake(data) {
            this.emitReserved("handshake", data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this.upgrades = this.filterUpgrades(data.upgrades);
            this.pingInterval = data.pingInterval;
            this.pingTimeout = data.pingTimeout;
            this.maxPayload = data.maxPayload;
            this.onOpen();
            // In case open handler closes socket
            if ("closed" === this.readyState)
                return;
            this.resetPingTimeout();
        }
        /**
         * Sets and resets ping timeout timer based on server pings.
         *
         * @api private
         */
        resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer);
            this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout);
            if (this.opts.autoUnref) {
                this.pingTimeoutTimer.unref();
            }
        }
        /**
         * Called on `drain` event
         *
         * @api private
         */
        onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen);
            // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`
            this.prevBufferLen = 0;
            if (0 === this.writeBuffer.length) {
                this.emitReserved("drain");
            }
            else {
                this.flush();
            }
        }
        /**
         * Flush write buffers.
         *
         * @api private
         */
        flush() {
            if ("closed" !== this.readyState &&
                this.transport.writable &&
                !this.upgrading &&
                this.writeBuffer.length) {
                const packets = this.getWritablePackets();
                this.transport.send(packets);
                // keep track of current length of writeBuffer
                // splice writeBuffer and callbackBuffer on `drain`
                this.prevBufferLen = packets.length;
                this.emitReserved("flush");
            }
        }
        /**
         * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
         * long-polling)
         *
         * @private
         */
        getWritablePackets() {
            const shouldCheckPayloadSize = this.maxPayload &&
                this.transport.name === "polling" &&
                this.writeBuffer.length > 1;
            if (!shouldCheckPayloadSize) {
                return this.writeBuffer;
            }
            let payloadSize = 1; // first packet type
            for (let i = 0; i < this.writeBuffer.length; i++) {
                const data = this.writeBuffer[i].data;
                if (data) {
                    payloadSize += byteLength(data);
                }
                if (i > 0 && payloadSize > this.maxPayload) {
                    return this.writeBuffer.slice(0, i);
                }
                payloadSize += 2; // separator + packet type
            }
            return this.writeBuffer;
        }
        /**
         * Sends a message.
         *
         * @param {String} message.
         * @param {Function} callback function.
         * @param {Object} options.
         * @return {Socket} for chaining.
         * @api public
         */
        write(msg, options, fn) {
            this.sendPacket("message", msg, options, fn);
            return this;
        }
        send(msg, options, fn) {
            this.sendPacket("message", msg, options, fn);
            return this;
        }
        /**
         * Sends a packet.
         *
         * @param {String} packet type.
         * @param {String} data.
         * @param {Object} options.
         * @param {Function} callback function.
         * @api private
         */
        sendPacket(type, data, options, fn) {
            if ("function" === typeof data) {
                fn = data;
                data = undefined;
            }
            if ("function" === typeof options) {
                fn = options;
                options = null;
            }
            if ("closing" === this.readyState || "closed" === this.readyState) {
                return;
            }
            options = options || {};
            options.compress = false !== options.compress;
            const packet = {
                type: type,
                data: data,
                options: options
            };
            this.emitReserved("packetCreate", packet);
            this.writeBuffer.push(packet);
            if (fn)
                this.once("flush", fn);
            this.flush();
        }
        /**
         * Closes the connection.
         *
         * @api public
         */
        close() {
            const close = () => {
                this.onClose("forced close");
                this.transport.close();
            };
            const cleanupAndClose = () => {
                this.off("upgrade", cleanupAndClose);
                this.off("upgradeError", cleanupAndClose);
                close();
            };
            const waitForUpgrade = () => {
                // wait for upgrade to finish since we can't send packets while pausing a transport
                this.once("upgrade", cleanupAndClose);
                this.once("upgradeError", cleanupAndClose);
            };
            if ("opening" === this.readyState || "open" === this.readyState) {
                this.readyState = "closing";
                if (this.writeBuffer.length) {
                    this.once("drain", () => {
                        if (this.upgrading) {
                            waitForUpgrade();
                        }
                        else {
                            close();
                        }
                    });
                }
                else if (this.upgrading) {
                    waitForUpgrade();
                }
                else {
                    close();
                }
            }
            return this;
        }
        /**
         * Called upon transport error
         *
         * @api private
         */
        onError(err) {
            Socket$1.priorWebsocketSuccess = false;
            this.emitReserved("error", err);
            this.onClose("transport error", err);
        }
        /**
         * Called upon transport close.
         *
         * @api private
         */
        onClose(reason, description) {
            if ("opening" === this.readyState ||
                "open" === this.readyState ||
                "closing" === this.readyState) {
                // clear timers
                this.clearTimeoutFn(this.pingTimeoutTimer);
                // stop event from firing again for transport
                this.transport.removeAllListeners("close");
                // ensure transport won't stay open
                this.transport.close();
                // ignore further transport communication
                this.transport.removeAllListeners();
                if (typeof removeEventListener === "function") {
                    removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                    removeEventListener("offline", this.offlineEventListener, false);
                }
                // set ready state
                this.readyState = "closed";
                // clear session id
                this.id = null;
                // emit close event
                this.emitReserved("close", reason, description);
                // clean buffers after, so users can still
                // grab the buffers on `close` event
                this.writeBuffer = [];
                this.prevBufferLen = 0;
            }
        }
        /**
         * Filters upgrades, returning only those matching client transports.
         *
         * @param {Array} server upgrades
         * @api private
         *
         */
        filterUpgrades(upgrades) {
            const filteredUpgrades = [];
            let i = 0;
            const j = upgrades.length;
            for (; i < j; i++) {
                if (~this.transports.indexOf(upgrades[i]))
                    filteredUpgrades.push(upgrades[i]);
            }
            return filteredUpgrades;
        }
    };
    Socket$1.protocol = protocol$1;

    /**
     * URL parser.
     *
     * @param uri - url
     * @param path - the request path of the connection
     * @param loc - An object meant to mimic window.location.
     *        Defaults to window.location.
     * @public
     */
    function url$1(uri, path = "", loc) {
        let obj = uri;
        // default to window.location
        loc = loc || (typeof location !== "undefined" && location);
        if (null == uri)
            uri = loc.protocol + "//" + loc.host;
        // relative path support
        if (typeof uri === "string") {
            if ("/" === uri.charAt(0)) {
                if ("/" === uri.charAt(1)) {
                    uri = loc.protocol + uri;
                }
                else {
                    uri = loc.host + uri;
                }
            }
            if (!/^(https?|wss?):\/\//.test(uri)) {
                if ("undefined" !== typeof loc) {
                    uri = loc.protocol + "//" + uri;
                }
                else {
                    uri = "https://" + uri;
                }
            }
            // parse
            obj = parse(uri);
        }
        // make sure we treat `localhost:80` and `localhost` equally
        if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) {
                obj.port = "80";
            }
            else if (/^(http|ws)s$/.test(obj.protocol)) {
                obj.port = "443";
            }
        }
        obj.path = obj.path || "/";
        const ipv6 = obj.host.indexOf(":") !== -1;
        const host = ipv6 ? "[" + obj.host + "]" : obj.host;
        // define unique id
        obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
        // define href
        obj.href =
            obj.protocol +
                "://" +
                host +
                (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
    }

    const withNativeArrayBuffer = typeof ArrayBuffer === "function";
    const isView = (obj) => {
        return typeof ArrayBuffer.isView === "function"
            ? ArrayBuffer.isView(obj)
            : obj.buffer instanceof ArrayBuffer;
    };
    const toString$1 = Object.prototype.toString;
    const withNativeBlob = typeof Blob === "function" ||
        (typeof Blob !== "undefined" &&
            toString$1.call(Blob) === "[object BlobConstructor]");
    const withNativeFile = typeof File === "function" ||
        (typeof File !== "undefined" &&
            toString$1.call(File) === "[object FileConstructor]");
    /**
     * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
     *
     * @private
     */
    function isBinary(obj) {
        return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
            (withNativeBlob && obj instanceof Blob) ||
            (withNativeFile && obj instanceof File));
    }
    function hasBinary(obj, toJSON) {
        if (!obj || typeof obj !== "object") {
            return false;
        }
        if (Array.isArray(obj)) {
            for (let i = 0, l = obj.length; i < l; i++) {
                if (hasBinary(obj[i])) {
                    return true;
                }
            }
            return false;
        }
        if (isBinary(obj)) {
            return true;
        }
        if (obj.toJSON &&
            typeof obj.toJSON === "function" &&
            arguments.length === 1) {
            return hasBinary(obj.toJSON(), true);
        }
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
                return true;
            }
        }
        return false;
    }

    /**
     * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
     *
     * @param {Object} packet - socket.io event packet
     * @return {Object} with deconstructed packet and list of buffers
     * @public
     */
    function deconstructPacket(packet) {
        const buffers = [];
        const packetData = packet.data;
        const pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length; // number of binary 'attachments'
        return { packet: pack, buffers: buffers };
    }
    function _deconstructPacket(data, buffers) {
        if (!data)
            return data;
        if (isBinary(data)) {
            const placeholder = { _placeholder: true, num: buffers.length };
            buffers.push(data);
            return placeholder;
        }
        else if (Array.isArray(data)) {
            const newData = new Array(data.length);
            for (let i = 0; i < data.length; i++) {
                newData[i] = _deconstructPacket(data[i], buffers);
            }
            return newData;
        }
        else if (typeof data === "object" && !(data instanceof Date)) {
            const newData = {};
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    newData[key] = _deconstructPacket(data[key], buffers);
                }
            }
            return newData;
        }
        return data;
    }
    /**
     * Reconstructs a binary packet from its placeholder packet and buffers
     *
     * @param {Object} packet - event packet with placeholders
     * @param {Array} buffers - binary buffers to put in placeholder positions
     * @return {Object} reconstructed packet
     * @public
     */
    function reconstructPacket(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        packet.attachments = undefined; // no longer useful
        return packet;
    }
    function _reconstructPacket(data, buffers) {
        if (!data)
            return data;
        if (data && data._placeholder === true) {
            const isIndexValid = typeof data.num === "number" &&
                data.num >= 0 &&
                data.num < buffers.length;
            if (isIndexValid) {
                return buffers[data.num]; // appropriate buffer (should be natural order anyway)
            }
            else {
                throw new Error("illegal attachments");
            }
        }
        else if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                data[i] = _reconstructPacket(data[i], buffers);
            }
        }
        else if (typeof data === "object") {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    data[key] = _reconstructPacket(data[key], buffers);
                }
            }
        }
        return data;
    }

    /**
     * Protocol version.
     *
     * @public
     */
    const protocol = 5;
    var PacketType;
    (function (PacketType) {
        PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
        PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType[PacketType["EVENT"] = 2] = "EVENT";
        PacketType[PacketType["ACK"] = 3] = "ACK";
        PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType || (PacketType = {}));
    /**
     * A socket.io Encoder instance
     */
    class Encoder {
        /**
         * Encoder constructor
         *
         * @param {function} replacer - custom replacer to pass down to JSON.parse
         */
        constructor(replacer) {
            this.replacer = replacer;
        }
        /**
         * Encode a packet as a single string if non-binary, or as a
         * buffer sequence, depending on packet type.
         *
         * @param {Object} obj - packet object
         */
        encode(obj) {
            if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
                if (hasBinary(obj)) {
                    obj.type =
                        obj.type === PacketType.EVENT
                            ? PacketType.BINARY_EVENT
                            : PacketType.BINARY_ACK;
                    return this.encodeAsBinary(obj);
                }
            }
            return [this.encodeAsString(obj)];
        }
        /**
         * Encode packet as string.
         */
        encodeAsString(obj) {
            // first is type
            let str = "" + obj.type;
            // attachments if we have them
            if (obj.type === PacketType.BINARY_EVENT ||
                obj.type === PacketType.BINARY_ACK) {
                str += obj.attachments + "-";
            }
            // if we have a namespace other than `/`
            // we append it followed by a comma `,`
            if (obj.nsp && "/" !== obj.nsp) {
                str += obj.nsp + ",";
            }
            // immediately followed by the id
            if (null != obj.id) {
                str += obj.id;
            }
            // json data
            if (null != obj.data) {
                str += JSON.stringify(obj.data, this.replacer);
            }
            return str;
        }
        /**
         * Encode packet as 'buffer sequence' by removing blobs, and
         * deconstructing packet into object with placeholders and
         * a list of buffers.
         */
        encodeAsBinary(obj) {
            const deconstruction = deconstructPacket(obj);
            const pack = this.encodeAsString(deconstruction.packet);
            const buffers = deconstruction.buffers;
            buffers.unshift(pack); // add packet info to beginning of data list
            return buffers; // write all the buffers
        }
    }
    /**
     * A socket.io Decoder instance
     *
     * @return {Object} decoder
     */
    class Decoder extends Emitter {
        /**
         * Decoder constructor
         *
         * @param {function} reviver - custom reviver to pass down to JSON.stringify
         */
        constructor(reviver) {
            super();
            this.reviver = reviver;
        }
        /**
         * Decodes an encoded packet string into packet JSON.
         *
         * @param {String} obj - encoded packet
         */
        add(obj) {
            let packet;
            if (typeof obj === "string") {
                if (this.reconstructor) {
                    throw new Error("got plaintext data when reconstructing a packet");
                }
                packet = this.decodeString(obj);
                if (packet.type === PacketType.BINARY_EVENT ||
                    packet.type === PacketType.BINARY_ACK) {
                    // binary packet's json
                    this.reconstructor = new BinaryReconstructor(packet);
                    // no attachments, labeled binary but no binary data to follow
                    if (packet.attachments === 0) {
                        super.emitReserved("decoded", packet);
                    }
                }
                else {
                    // non-binary full packet
                    super.emitReserved("decoded", packet);
                }
            }
            else if (isBinary(obj) || obj.base64) {
                // raw binary data
                if (!this.reconstructor) {
                    throw new Error("got binary data when not reconstructing a packet");
                }
                else {
                    packet = this.reconstructor.takeBinaryData(obj);
                    if (packet) {
                        // received final buffer
                        this.reconstructor = null;
                        super.emitReserved("decoded", packet);
                    }
                }
            }
            else {
                throw new Error("Unknown type: " + obj);
            }
        }
        /**
         * Decode a packet String (JSON data)
         *
         * @param {String} str
         * @return {Object} packet
         */
        decodeString(str) {
            let i = 0;
            // look up type
            const p = {
                type: Number(str.charAt(0)),
            };
            if (PacketType[p.type] === undefined) {
                throw new Error("unknown packet type " + p.type);
            }
            // look up attachments if type binary
            if (p.type === PacketType.BINARY_EVENT ||
                p.type === PacketType.BINARY_ACK) {
                const start = i + 1;
                while (str.charAt(++i) !== "-" && i != str.length) { }
                const buf = str.substring(start, i);
                if (buf != Number(buf) || str.charAt(i) !== "-") {
                    throw new Error("Illegal attachments");
                }
                p.attachments = Number(buf);
            }
            // look up namespace (if any)
            if ("/" === str.charAt(i + 1)) {
                const start = i + 1;
                while (++i) {
                    const c = str.charAt(i);
                    if ("," === c)
                        break;
                    if (i === str.length)
                        break;
                }
                p.nsp = str.substring(start, i);
            }
            else {
                p.nsp = "/";
            }
            // look up id
            const next = str.charAt(i + 1);
            if ("" !== next && Number(next) == next) {
                const start = i + 1;
                while (++i) {
                    const c = str.charAt(i);
                    if (null == c || Number(c) != c) {
                        --i;
                        break;
                    }
                    if (i === str.length)
                        break;
                }
                p.id = Number(str.substring(start, i + 1));
            }
            // look up json data
            if (str.charAt(++i)) {
                const payload = this.tryParse(str.substr(i));
                if (Decoder.isPayloadValid(p.type, payload)) {
                    p.data = payload;
                }
                else {
                    throw new Error("invalid payload");
                }
            }
            return p;
        }
        tryParse(str) {
            try {
                return JSON.parse(str, this.reviver);
            }
            catch (e) {
                return false;
            }
        }
        static isPayloadValid(type, payload) {
            switch (type) {
                case PacketType.CONNECT:
                    return typeof payload === "object";
                case PacketType.DISCONNECT:
                    return payload === undefined;
                case PacketType.CONNECT_ERROR:
                    return typeof payload === "string" || typeof payload === "object";
                case PacketType.EVENT:
                case PacketType.BINARY_EVENT:
                    return Array.isArray(payload) && payload.length > 0;
                case PacketType.ACK:
                case PacketType.BINARY_ACK:
                    return Array.isArray(payload);
            }
        }
        /**
         * Deallocates a parser's resources
         */
        destroy() {
            if (this.reconstructor) {
                this.reconstructor.finishedReconstruction();
            }
        }
    }
    /**
     * A manager of a binary event's 'buffer sequence'. Should
     * be constructed whenever a packet of type BINARY_EVENT is
     * decoded.
     *
     * @param {Object} packet
     * @return {BinaryReconstructor} initialized reconstructor
     */
    class BinaryReconstructor {
        constructor(packet) {
            this.packet = packet;
            this.buffers = [];
            this.reconPack = packet;
        }
        /**
         * Method to be called when binary data received from connection
         * after a BINARY_EVENT packet.
         *
         * @param {Buffer | ArrayBuffer} binData - the raw binary data received
         * @return {null | Object} returns null if more binary data is expected or
         *   a reconstructed packet object if all buffers have been received.
         */
        takeBinaryData(binData) {
            this.buffers.push(binData);
            if (this.buffers.length === this.reconPack.attachments) {
                // done with buffer list
                const packet = reconstructPacket(this.reconPack, this.buffers);
                this.finishedReconstruction();
                return packet;
            }
            return null;
        }
        /**
         * Cleans up binary packet reconstruction variables.
         */
        finishedReconstruction() {
            this.reconPack = null;
            this.buffers = [];
        }
    }

    var parser = /*#__PURE__*/Object.freeze({
        __proto__: null,
        protocol: protocol,
        get PacketType () { return PacketType; },
        Encoder: Encoder,
        Decoder: Decoder
    });

    function on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
            obj.off(ev, fn);
        };
    }

    /**
     * Internal events.
     * These events can't be emitted by the user.
     */
    const RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1,
    });
    /**
     * A Socket is the fundamental class for interacting with the server.
     *
     * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log("connected");
     * });
     *
     * // send an event to the server
     * socket.emit("foo", "bar");
     *
     * socket.on("foobar", () => {
     *   // an event was received from the server
     * });
     *
     * // upon disconnection
     * socket.on("disconnect", (reason) => {
     *   console.log(`disconnected due to ${reason}`);
     * });
     */
    class Socket extends Emitter {
        /**
         * `Socket` constructor.
         */
        constructor(io, nsp, opts) {
            super();
            /**
             * Whether the socket is currently connected to the server.
             *
             * @example
             * const socket = io();
             *
             * socket.on("connect", () => {
             *   console.log(socket.connected); // true
             * });
             *
             * socket.on("disconnect", () => {
             *   console.log(socket.connected); // false
             * });
             */
            this.connected = false;
            /**
             * Buffer for packets received before the CONNECT packet
             */
            this.receiveBuffer = [];
            /**
             * Buffer for packets that will be sent once the socket is connected
             */
            this.sendBuffer = [];
            this.ids = 0;
            this.acks = {};
            this.flags = {};
            this.io = io;
            this.nsp = nsp;
            if (opts && opts.auth) {
                this.auth = opts.auth;
            }
            if (this.io._autoConnect)
                this.open();
        }
        /**
         * Whether the socket is currently disconnected
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.disconnected); // false
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.disconnected); // true
         * });
         */
        get disconnected() {
            return !this.connected;
        }
        /**
         * Subscribe to open, close and packet events
         *
         * @private
         */
        subEvents() {
            if (this.subs)
                return;
            const io = this.io;
            this.subs = [
                on(io, "open", this.onopen.bind(this)),
                on(io, "packet", this.onpacket.bind(this)),
                on(io, "error", this.onerror.bind(this)),
                on(io, "close", this.onclose.bind(this)),
            ];
        }
        /**
         * Whether the Socket will try to reconnect when its Manager connects or reconnects.
         *
         * @example
         * const socket = io();
         *
         * console.log(socket.active); // true
         *
         * socket.on("disconnect", (reason) => {
         *   if (reason === "io server disconnect") {
         *     // the disconnection was initiated by the server, you need to manually reconnect
         *     console.log(socket.active); // false
         *   }
         *   // else the socket will automatically try to reconnect
         *   console.log(socket.active); // true
         * });
         */
        get active() {
            return !!this.subs;
        }
        /**
         * "Opens" the socket.
         *
         * @example
         * const socket = io({
         *   autoConnect: false
         * });
         *
         * socket.connect();
         */
        connect() {
            if (this.connected)
                return this;
            this.subEvents();
            if (!this.io["_reconnecting"])
                this.io.open(); // ensure open
            if ("open" === this.io._readyState)
                this.onopen();
            return this;
        }
        /**
         * Alias for {@link connect()}.
         */
        open() {
            return this.connect();
        }
        /**
         * Sends a `message` event.
         *
         * This method mimics the WebSocket.send() method.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
         *
         * @example
         * socket.send("hello");
         *
         * // this is equivalent to
         * socket.emit("message", "hello");
         *
         * @return self
         */
        send(...args) {
            args.unshift("message");
            this.emit.apply(this, args);
            return this;
        }
        /**
         * Override `emit`.
         * If the event is in `events`, it's emitted normally.
         *
         * @example
         * socket.emit("hello", "world");
         *
         * // all serializable datastructures are supported (no need to call JSON.stringify)
         * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
         *
         * // with an acknowledgement from the server
         * socket.emit("hello", "world", (val) => {
         *   // ...
         * });
         *
         * @return self
         */
        emit(ev, ...args) {
            if (RESERVED_EVENTS.hasOwnProperty(ev)) {
                throw new Error('"' + ev.toString() + '" is a reserved event name');
            }
            args.unshift(ev);
            const packet = {
                type: PacketType.EVENT,
                data: args,
            };
            packet.options = {};
            packet.options.compress = this.flags.compress !== false;
            // event ack callback
            if ("function" === typeof args[args.length - 1]) {
                const id = this.ids++;
                const ack = args.pop();
                this._registerAckCallback(id, ack);
                packet.id = id;
            }
            const isTransportWritable = this.io.engine &&
                this.io.engine.transport &&
                this.io.engine.transport.writable;
            const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
            if (discardPacket) ;
            else if (this.connected) {
                this.notifyOutgoingListeners(packet);
                this.packet(packet);
            }
            else {
                this.sendBuffer.push(packet);
            }
            this.flags = {};
            return this;
        }
        /**
         * @private
         */
        _registerAckCallback(id, ack) {
            const timeout = this.flags.timeout;
            if (timeout === undefined) {
                this.acks[id] = ack;
                return;
            }
            // @ts-ignore
            const timer = this.io.setTimeoutFn(() => {
                delete this.acks[id];
                for (let i = 0; i < this.sendBuffer.length; i++) {
                    if (this.sendBuffer[i].id === id) {
                        this.sendBuffer.splice(i, 1);
                    }
                }
                ack.call(this, new Error("operation has timed out"));
            }, timeout);
            this.acks[id] = (...args) => {
                // @ts-ignore
                this.io.clearTimeoutFn(timer);
                ack.apply(this, [null, ...args]);
            };
        }
        /**
         * Sends a packet.
         *
         * @param packet
         * @private
         */
        packet(packet) {
            packet.nsp = this.nsp;
            this.io._packet(packet);
        }
        /**
         * Called upon engine `open`.
         *
         * @private
         */
        onopen() {
            if (typeof this.auth == "function") {
                this.auth((data) => {
                    this.packet({ type: PacketType.CONNECT, data });
                });
            }
            else {
                this.packet({ type: PacketType.CONNECT, data: this.auth });
            }
        }
        /**
         * Called upon engine or manager `error`.
         *
         * @param err
         * @private
         */
        onerror(err) {
            if (!this.connected) {
                this.emitReserved("connect_error", err);
            }
        }
        /**
         * Called upon engine `close`.
         *
         * @param reason
         * @param description
         * @private
         */
        onclose(reason, description) {
            this.connected = false;
            delete this.id;
            this.emitReserved("disconnect", reason, description);
        }
        /**
         * Called with socket packet.
         *
         * @param packet
         * @private
         */
        onpacket(packet) {
            const sameNamespace = packet.nsp === this.nsp;
            if (!sameNamespace)
                return;
            switch (packet.type) {
                case PacketType.CONNECT:
                    if (packet.data && packet.data.sid) {
                        const id = packet.data.sid;
                        this.onconnect(id);
                    }
                    else {
                        this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    }
                    break;
                case PacketType.EVENT:
                case PacketType.BINARY_EVENT:
                    this.onevent(packet);
                    break;
                case PacketType.ACK:
                case PacketType.BINARY_ACK:
                    this.onack(packet);
                    break;
                case PacketType.DISCONNECT:
                    this.ondisconnect();
                    break;
                case PacketType.CONNECT_ERROR:
                    this.destroy();
                    const err = new Error(packet.data.message);
                    // @ts-ignore
                    err.data = packet.data.data;
                    this.emitReserved("connect_error", err);
                    break;
            }
        }
        /**
         * Called upon a server event.
         *
         * @param packet
         * @private
         */
        onevent(packet) {
            const args = packet.data || [];
            if (null != packet.id) {
                args.push(this.ack(packet.id));
            }
            if (this.connected) {
                this.emitEvent(args);
            }
            else {
                this.receiveBuffer.push(Object.freeze(args));
            }
        }
        emitEvent(args) {
            if (this._anyListeners && this._anyListeners.length) {
                const listeners = this._anyListeners.slice();
                for (const listener of listeners) {
                    listener.apply(this, args);
                }
            }
            super.emit.apply(this, args);
        }
        /**
         * Produces an ack callback to emit with an event.
         *
         * @private
         */
        ack(id) {
            const self = this;
            let sent = false;
            return function (...args) {
                // prevent double callbacks
                if (sent)
                    return;
                sent = true;
                self.packet({
                    type: PacketType.ACK,
                    id: id,
                    data: args,
                });
            };
        }
        /**
         * Called upon a server acknowlegement.
         *
         * @param packet
         * @private
         */
        onack(packet) {
            const ack = this.acks[packet.id];
            if ("function" === typeof ack) {
                ack.apply(this, packet.data);
                delete this.acks[packet.id];
            }
        }
        /**
         * Called upon server connect.
         *
         * @private
         */
        onconnect(id) {
            this.id = id;
            this.connected = true;
            this.emitBuffered();
            this.emitReserved("connect");
        }
        /**
         * Emit buffered events (received and emitted).
         *
         * @private
         */
        emitBuffered() {
            this.receiveBuffer.forEach((args) => this.emitEvent(args));
            this.receiveBuffer = [];
            this.sendBuffer.forEach((packet) => {
                this.notifyOutgoingListeners(packet);
                this.packet(packet);
            });
            this.sendBuffer = [];
        }
        /**
         * Called upon server disconnect.
         *
         * @private
         */
        ondisconnect() {
            this.destroy();
            this.onclose("io server disconnect");
        }
        /**
         * Called upon forced client/server side disconnections,
         * this method ensures the manager stops tracking us and
         * that reconnections don't get triggered for this.
         *
         * @private
         */
        destroy() {
            if (this.subs) {
                // clean subscriptions to avoid reconnections
                this.subs.forEach((subDestroy) => subDestroy());
                this.subs = undefined;
            }
            this.io["_destroy"](this);
        }
        /**
         * Disconnects the socket manually. In that case, the socket will not try to reconnect.
         *
         * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
         *
         * @example
         * const socket = io();
         *
         * socket.on("disconnect", (reason) => {
         *   // console.log(reason); prints "io client disconnect"
         * });
         *
         * socket.disconnect();
         *
         * @return self
         */
        disconnect() {
            if (this.connected) {
                this.packet({ type: PacketType.DISCONNECT });
            }
            // remove socket from pool
            this.destroy();
            if (this.connected) {
                // fire events
                this.onclose("io client disconnect");
            }
            return this;
        }
        /**
         * Alias for {@link disconnect()}.
         *
         * @return self
         */
        close() {
            return this.disconnect();
        }
        /**
         * Sets the compress flag.
         *
         * @example
         * socket.compress(false).emit("hello");
         *
         * @param compress - if `true`, compresses the sending data
         * @return self
         */
        compress(compress) {
            this.flags.compress = compress;
            return this;
        }
        /**
         * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
         * ready to send messages.
         *
         * @example
         * socket.volatile.emit("hello"); // the server may or may not receive it
         *
         * @returns self
         */
        get volatile() {
            this.flags.volatile = true;
            return this;
        }
        /**
         * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
         * given number of milliseconds have elapsed without an acknowledgement from the server:
         *
         * @example
         * socket.timeout(5000).emit("my-event", (err) => {
         *   if (err) {
         *     // the server did not acknowledge the event in the given delay
         *   }
         * });
         *
         * @returns self
         */
        timeout(timeout) {
            this.flags.timeout = timeout;
            return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback.
         *
         * @example
         * socket.onAny((event, ...args) => {
         *   console.log(`got ${event}`);
         * });
         *
         * @param listener
         */
        onAny(listener) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.push(listener);
            return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback. The listener is added to the beginning of the listeners array.
         *
         * @example
         * socket.prependAny((event, ...args) => {
         *   console.log(`got event ${event}`);
         * });
         *
         * @param listener
         */
        prependAny(listener) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.unshift(listener);
            return this;
        }
        /**
         * Removes the listener that will be fired when any event is emitted.
         *
         * @example
         * const catchAllListener = (event, ...args) => {
         *   console.log(`got event ${event}`);
         * }
         *
         * socket.onAny(catchAllListener);
         *
         * // remove a specific listener
         * socket.offAny(catchAllListener);
         *
         * // or remove all listeners
         * socket.offAny();
         *
         * @param listener
         */
        offAny(listener) {
            if (!this._anyListeners) {
                return this;
            }
            if (listener) {
                const listeners = this._anyListeners;
                for (let i = 0; i < listeners.length; i++) {
                    if (listener === listeners[i]) {
                        listeners.splice(i, 1);
                        return this;
                    }
                }
            }
            else {
                this._anyListeners = [];
            }
            return this;
        }
        /**
         * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
         * e.g. to remove listeners.
         */
        listenersAny() {
            return this._anyListeners || [];
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback.
         *
         * Note: acknowledgements sent to the server are not included.
         *
         * @example
         * socket.onAnyOutgoing((event, ...args) => {
         *   console.log(`sent event ${event}`);
         * });
         *
         * @param listener
         */
        onAnyOutgoing(listener) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.push(listener);
            return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback. The listener is added to the beginning of the listeners array.
         *
         * Note: acknowledgements sent to the server are not included.
         *
         * @example
         * socket.prependAnyOutgoing((event, ...args) => {
         *   console.log(`sent event ${event}`);
         * });
         *
         * @param listener
         */
        prependAnyOutgoing(listener) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.unshift(listener);
            return this;
        }
        /**
         * Removes the listener that will be fired when any event is emitted.
         *
         * @example
         * const catchAllListener = (event, ...args) => {
         *   console.log(`sent event ${event}`);
         * }
         *
         * socket.onAnyOutgoing(catchAllListener);
         *
         * // remove a specific listener
         * socket.offAnyOutgoing(catchAllListener);
         *
         * // or remove all listeners
         * socket.offAnyOutgoing();
         *
         * @param [listener] - the catch-all listener (optional)
         */
        offAnyOutgoing(listener) {
            if (!this._anyOutgoingListeners) {
                return this;
            }
            if (listener) {
                const listeners = this._anyOutgoingListeners;
                for (let i = 0; i < listeners.length; i++) {
                    if (listener === listeners[i]) {
                        listeners.splice(i, 1);
                        return this;
                    }
                }
            }
            else {
                this._anyOutgoingListeners = [];
            }
            return this;
        }
        /**
         * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
         * e.g. to remove listeners.
         */
        listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
        }
        /**
         * Notify the listeners for each packet sent
         *
         * @param packet
         *
         * @private
         */
        notifyOutgoingListeners(packet) {
            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                const listeners = this._anyOutgoingListeners.slice();
                for (const listener of listeners) {
                    listener.apply(this, packet.data);
                }
            }
        }
    }

    /**
     * Initialize backoff timer with `opts`.
     *
     * - `min` initial timeout in milliseconds [100]
     * - `max` max timeout [10000]
     * - `jitter` [0]
     * - `factor` [2]
     *
     * @param {Object} opts
     * @api public
     */
    function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
    }
    /**
     * Return the backoff duration.
     *
     * @return {Number}
     * @api public
     */
    Backoff.prototype.duration = function () {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var rand = Math.random();
            var deviation = Math.floor(rand * this.jitter * ms);
            ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
    };
    /**
     * Reset the number of attempts.
     *
     * @api public
     */
    Backoff.prototype.reset = function () {
        this.attempts = 0;
    };
    /**
     * Set the minimum duration
     *
     * @api public
     */
    Backoff.prototype.setMin = function (min) {
        this.ms = min;
    };
    /**
     * Set the maximum duration
     *
     * @api public
     */
    Backoff.prototype.setMax = function (max) {
        this.max = max;
    };
    /**
     * Set the jitter
     *
     * @api public
     */
    Backoff.prototype.setJitter = function (jitter) {
        this.jitter = jitter;
    };

    class Manager extends Emitter {
        constructor(uri, opts) {
            var _a;
            super();
            this.nsps = {};
            this.subs = [];
            if (uri && "object" === typeof uri) {
                opts = uri;
                uri = undefined;
            }
            opts = opts || {};
            opts.path = opts.path || "/socket.io";
            this.opts = opts;
            installTimerFunctions(this, opts);
            this.reconnection(opts.reconnection !== false);
            this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
            this.reconnectionDelay(opts.reconnectionDelay || 1000);
            this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
            this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
            this.backoff = new Backoff({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
            });
            this.timeout(null == opts.timeout ? 20000 : opts.timeout);
            this._readyState = "closed";
            this.uri = uri;
            const _parser = opts.parser || parser;
            this.encoder = new _parser.Encoder();
            this.decoder = new _parser.Decoder();
            this._autoConnect = opts.autoConnect !== false;
            if (this._autoConnect)
                this.open();
        }
        reconnection(v) {
            if (!arguments.length)
                return this._reconnection;
            this._reconnection = !!v;
            return this;
        }
        reconnectionAttempts(v) {
            if (v === undefined)
                return this._reconnectionAttempts;
            this._reconnectionAttempts = v;
            return this;
        }
        reconnectionDelay(v) {
            var _a;
            if (v === undefined)
                return this._reconnectionDelay;
            this._reconnectionDelay = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
            return this;
        }
        randomizationFactor(v) {
            var _a;
            if (v === undefined)
                return this._randomizationFactor;
            this._randomizationFactor = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
            return this;
        }
        reconnectionDelayMax(v) {
            var _a;
            if (v === undefined)
                return this._reconnectionDelayMax;
            this._reconnectionDelayMax = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
            return this;
        }
        timeout(v) {
            if (!arguments.length)
                return this._timeout;
            this._timeout = v;
            return this;
        }
        /**
         * Starts trying to reconnect if reconnection is enabled and we have not
         * started reconnecting yet
         *
         * @private
         */
        maybeReconnectOnOpen() {
            // Only try to reconnect if it's the first time we're connecting
            if (!this._reconnecting &&
                this._reconnection &&
                this.backoff.attempts === 0) {
                // keeps reconnection from firing twice for the same reconnection loop
                this.reconnect();
            }
        }
        /**
         * Sets the current transport `socket`.
         *
         * @param {Function} fn - optional, callback
         * @return self
         * @public
         */
        open(fn) {
            if (~this._readyState.indexOf("open"))
                return this;
            this.engine = new Socket$1(this.uri, this.opts);
            const socket = this.engine;
            const self = this;
            this._readyState = "opening";
            this.skipReconnect = false;
            // emit `open`
            const openSubDestroy = on(socket, "open", function () {
                self.onopen();
                fn && fn();
            });
            // emit `error`
            const errorSub = on(socket, "error", (err) => {
                self.cleanup();
                self._readyState = "closed";
                this.emitReserved("error", err);
                if (fn) {
                    fn(err);
                }
                else {
                    // Only do this if there is no fn to handle the error
                    self.maybeReconnectOnOpen();
                }
            });
            if (false !== this._timeout) {
                const timeout = this._timeout;
                if (timeout === 0) {
                    openSubDestroy(); // prevents a race condition with the 'open' event
                }
                // set timer
                const timer = this.setTimeoutFn(() => {
                    openSubDestroy();
                    socket.close();
                    // @ts-ignore
                    socket.emit("error", new Error("timeout"));
                }, timeout);
                if (this.opts.autoUnref) {
                    timer.unref();
                }
                this.subs.push(function subDestroy() {
                    clearTimeout(timer);
                });
            }
            this.subs.push(openSubDestroy);
            this.subs.push(errorSub);
            return this;
        }
        /**
         * Alias for open()
         *
         * @return self
         * @public
         */
        connect(fn) {
            return this.open(fn);
        }
        /**
         * Called upon transport open.
         *
         * @private
         */
        onopen() {
            // clear old subs
            this.cleanup();
            // mark as open
            this._readyState = "open";
            this.emitReserved("open");
            // add new subs
            const socket = this.engine;
            this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        /**
         * Called upon a ping.
         *
         * @private
         */
        onping() {
            this.emitReserved("ping");
        }
        /**
         * Called with data.
         *
         * @private
         */
        ondata(data) {
            try {
                this.decoder.add(data);
            }
            catch (e) {
                this.onclose("parse error", e);
            }
        }
        /**
         * Called when parser fully decodes a packet.
         *
         * @private
         */
        ondecoded(packet) {
            // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
            nextTick(() => {
                this.emitReserved("packet", packet);
            }, this.setTimeoutFn);
        }
        /**
         * Called upon socket error.
         *
         * @private
         */
        onerror(err) {
            this.emitReserved("error", err);
        }
        /**
         * Creates a new socket for the given `nsp`.
         *
         * @return {Socket}
         * @public
         */
        socket(nsp, opts) {
            let socket = this.nsps[nsp];
            if (!socket) {
                socket = new Socket(this, nsp, opts);
                this.nsps[nsp] = socket;
            }
            return socket;
        }
        /**
         * Called upon a socket close.
         *
         * @param socket
         * @private
         */
        _destroy(socket) {
            const nsps = Object.keys(this.nsps);
            for (const nsp of nsps) {
                const socket = this.nsps[nsp];
                if (socket.active) {
                    return;
                }
            }
            this._close();
        }
        /**
         * Writes a packet.
         *
         * @param packet
         * @private
         */
        _packet(packet) {
            const encodedPackets = this.encoder.encode(packet);
            for (let i = 0; i < encodedPackets.length; i++) {
                this.engine.write(encodedPackets[i], packet.options);
            }
        }
        /**
         * Clean up transport subscriptions and packet buffer.
         *
         * @private
         */
        cleanup() {
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs.length = 0;
            this.decoder.destroy();
        }
        /**
         * Close the current socket.
         *
         * @private
         */
        _close() {
            this.skipReconnect = true;
            this._reconnecting = false;
            this.onclose("forced close");
            if (this.engine)
                this.engine.close();
        }
        /**
         * Alias for close()
         *
         * @private
         */
        disconnect() {
            return this._close();
        }
        /**
         * Called upon engine close.
         *
         * @private
         */
        onclose(reason, description) {
            this.cleanup();
            this.backoff.reset();
            this._readyState = "closed";
            this.emitReserved("close", reason, description);
            if (this._reconnection && !this.skipReconnect) {
                this.reconnect();
            }
        }
        /**
         * Attempt a reconnection.
         *
         * @private
         */
        reconnect() {
            if (this._reconnecting || this.skipReconnect)
                return this;
            const self = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) {
                this.backoff.reset();
                this.emitReserved("reconnect_failed");
                this._reconnecting = false;
            }
            else {
                const delay = this.backoff.duration();
                this._reconnecting = true;
                const timer = this.setTimeoutFn(() => {
                    if (self.skipReconnect)
                        return;
                    this.emitReserved("reconnect_attempt", self.backoff.attempts);
                    // check again for the case socket closed in above events
                    if (self.skipReconnect)
                        return;
                    self.open((err) => {
                        if (err) {
                            self._reconnecting = false;
                            self.reconnect();
                            this.emitReserved("reconnect_error", err);
                        }
                        else {
                            self.onreconnect();
                        }
                    });
                }, delay);
                if (this.opts.autoUnref) {
                    timer.unref();
                }
                this.subs.push(function subDestroy() {
                    clearTimeout(timer);
                });
            }
        }
        /**
         * Called upon successful reconnect.
         *
         * @private
         */
        onreconnect() {
            const attempt = this.backoff.attempts;
            this._reconnecting = false;
            this.backoff.reset();
            this.emitReserved("reconnect", attempt);
        }
    }

    /**
     * Managers cache.
     */
    const cache = {};
    function lookup(uri, opts) {
        if (typeof uri === "object") {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        const parsed = url$1(uri, opts.path || "/socket.io");
        const source = parsed.source;
        const id = parsed.id;
        const path = parsed.path;
        const sameNamespace = cache[id] && path in cache[id]["nsps"];
        const newConnection = opts.forceNew ||
            opts["force new connection"] ||
            false === opts.multiplex ||
            sameNamespace;
        let io;
        if (newConnection) {
            io = new Manager(source, opts);
        }
        else {
            if (!cache[id]) {
                cache[id] = new Manager(source, opts);
            }
            io = cache[id];
        }
        if (parsed.query && !opts.query) {
            opts.query = parsed.queryKey;
        }
        return io.socket(parsed.path, opts);
    }
    // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
    // namespace (e.g. `io.connect(...)`), for backward compatibility
    Object.assign(lookup, {
        Manager,
        Socket,
        io: lookup,
        connect: lookup,
    });

    // NOTE: this list must be up-to-date with browsers listed in
    // test/acceptance/useragentstrings.yml
    const BROWSER_ALIASES_MAP = {
      'Amazon Silk': 'amazon_silk',
      'Android Browser': 'android',
      Bada: 'bada',
      BlackBerry: 'blackberry',
      Chrome: 'chrome',
      Chromium: 'chromium',
      Electron: 'electron',
      Epiphany: 'epiphany',
      Firefox: 'firefox',
      Focus: 'focus',
      Generic: 'generic',
      'Google Search': 'google_search',
      Googlebot: 'googlebot',
      'Internet Explorer': 'ie',
      'K-Meleon': 'k_meleon',
      Maxthon: 'maxthon',
      'Microsoft Edge': 'edge',
      'MZ Browser': 'mz',
      'NAVER Whale Browser': 'naver',
      Opera: 'opera',
      'Opera Coast': 'opera_coast',
      PhantomJS: 'phantomjs',
      Puffin: 'puffin',
      QupZilla: 'qupzilla',
      QQ: 'qq',
      QQLite: 'qqlite',
      Safari: 'safari',
      Sailfish: 'sailfish',
      'Samsung Internet for Android': 'samsung_internet',
      SeaMonkey: 'seamonkey',
      Sleipnir: 'sleipnir',
      Swing: 'swing',
      Tizen: 'tizen',
      'UC Browser': 'uc',
      Vivaldi: 'vivaldi',
      'WebOS Browser': 'webos',
      WeChat: 'wechat',
      'Yandex Browser': 'yandex',
      Roku: 'roku',
    };

    const BROWSER_MAP = {
      amazon_silk: 'Amazon Silk',
      android: 'Android Browser',
      bada: 'Bada',
      blackberry: 'BlackBerry',
      chrome: 'Chrome',
      chromium: 'Chromium',
      electron: 'Electron',
      epiphany: 'Epiphany',
      firefox: 'Firefox',
      focus: 'Focus',
      generic: 'Generic',
      googlebot: 'Googlebot',
      google_search: 'Google Search',
      ie: 'Internet Explorer',
      k_meleon: 'K-Meleon',
      maxthon: 'Maxthon',
      edge: 'Microsoft Edge',
      mz: 'MZ Browser',
      naver: 'NAVER Whale Browser',
      opera: 'Opera',
      opera_coast: 'Opera Coast',
      phantomjs: 'PhantomJS',
      puffin: 'Puffin',
      qupzilla: 'QupZilla',
      qq: 'QQ Browser',
      qqlite: 'QQ Browser Lite',
      safari: 'Safari',
      sailfish: 'Sailfish',
      samsung_internet: 'Samsung Internet for Android',
      seamonkey: 'SeaMonkey',
      sleipnir: 'Sleipnir',
      swing: 'Swing',
      tizen: 'Tizen',
      uc: 'UC Browser',
      vivaldi: 'Vivaldi',
      webos: 'WebOS Browser',
      wechat: 'WeChat',
      yandex: 'Yandex Browser',
    };

    const PLATFORMS_MAP = {
      tablet: 'tablet',
      mobile: 'mobile',
      desktop: 'desktop',
      tv: 'tv',
    };

    const OS_MAP = {
      WindowsPhone: 'Windows Phone',
      Windows: 'Windows',
      MacOS: 'macOS',
      iOS: 'iOS',
      Android: 'Android',
      WebOS: 'WebOS',
      BlackBerry: 'BlackBerry',
      Bada: 'Bada',
      Tizen: 'Tizen',
      Linux: 'Linux',
      ChromeOS: 'Chrome OS',
      PlayStation4: 'PlayStation 4',
      Roku: 'Roku',
    };

    const ENGINE_MAP = {
      EdgeHTML: 'EdgeHTML',
      Blink: 'Blink',
      Trident: 'Trident',
      Presto: 'Presto',
      Gecko: 'Gecko',
      WebKit: 'WebKit',
    };

    class Utils {
      /**
       * Get first matched item for a string
       * @param {RegExp} regexp
       * @param {String} ua
       * @return {Array|{index: number, input: string}|*|boolean|string}
       */
      static getFirstMatch(regexp, ua) {
        const match = ua.match(regexp);
        return (match && match.length > 0 && match[1]) || '';
      }

      /**
       * Get second matched item for a string
       * @param regexp
       * @param {String} ua
       * @return {Array|{index: number, input: string}|*|boolean|string}
       */
      static getSecondMatch(regexp, ua) {
        const match = ua.match(regexp);
        return (match && match.length > 1 && match[2]) || '';
      }

      /**
       * Match a regexp and return a constant or undefined
       * @param {RegExp} regexp
       * @param {String} ua
       * @param {*} _const Any const that will be returned if regexp matches the string
       * @return {*}
       */
      static matchAndReturnConst(regexp, ua, _const) {
        if (regexp.test(ua)) {
          return _const;
        }
        return void (0);
      }

      static getWindowsVersionName(version) {
        switch (version) {
          case 'NT': return 'NT';
          case 'XP': return 'XP';
          case 'NT 5.0': return '2000';
          case 'NT 5.1': return 'XP';
          case 'NT 5.2': return '2003';
          case 'NT 6.0': return 'Vista';
          case 'NT 6.1': return '7';
          case 'NT 6.2': return '8';
          case 'NT 6.3': return '8.1';
          case 'NT 10.0': return '10';
          default: return undefined;
        }
      }

      /**
       * Get macOS version name
       *    10.5 - Leopard
       *    10.6 - Snow Leopard
       *    10.7 - Lion
       *    10.8 - Mountain Lion
       *    10.9 - Mavericks
       *    10.10 - Yosemite
       *    10.11 - El Capitan
       *    10.12 - Sierra
       *    10.13 - High Sierra
       *    10.14 - Mojave
       *    10.15 - Catalina
       *
       * @example
       *   getMacOSVersionName("10.14") // 'Mojave'
       *
       * @param  {string} version
       * @return {string} versionName
       */
      static getMacOSVersionName(version) {
        const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);
        v.push(0);
        if (v[0] !== 10) return undefined;
        switch (v[1]) {
          case 5: return 'Leopard';
          case 6: return 'Snow Leopard';
          case 7: return 'Lion';
          case 8: return 'Mountain Lion';
          case 9: return 'Mavericks';
          case 10: return 'Yosemite';
          case 11: return 'El Capitan';
          case 12: return 'Sierra';
          case 13: return 'High Sierra';
          case 14: return 'Mojave';
          case 15: return 'Catalina';
          default: return undefined;
        }
      }

      /**
       * Get Android version name
       *    1.5 - Cupcake
       *    1.6 - Donut
       *    2.0 - Eclair
       *    2.1 - Eclair
       *    2.2 - Froyo
       *    2.x - Gingerbread
       *    3.x - Honeycomb
       *    4.0 - Ice Cream Sandwich
       *    4.1 - Jelly Bean
       *    4.4 - KitKat
       *    5.x - Lollipop
       *    6.x - Marshmallow
       *    7.x - Nougat
       *    8.x - Oreo
       *    9.x - Pie
       *
       * @example
       *   getAndroidVersionName("7.0") // 'Nougat'
       *
       * @param  {string} version
       * @return {string} versionName
       */
      static getAndroidVersionName(version) {
        const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);
        v.push(0);
        if (v[0] === 1 && v[1] < 5) return undefined;
        if (v[0] === 1 && v[1] < 6) return 'Cupcake';
        if (v[0] === 1 && v[1] >= 6) return 'Donut';
        if (v[0] === 2 && v[1] < 2) return 'Eclair';
        if (v[0] === 2 && v[1] === 2) return 'Froyo';
        if (v[0] === 2 && v[1] > 2) return 'Gingerbread';
        if (v[0] === 3) return 'Honeycomb';
        if (v[0] === 4 && v[1] < 1) return 'Ice Cream Sandwich';
        if (v[0] === 4 && v[1] < 4) return 'Jelly Bean';
        if (v[0] === 4 && v[1] >= 4) return 'KitKat';
        if (v[0] === 5) return 'Lollipop';
        if (v[0] === 6) return 'Marshmallow';
        if (v[0] === 7) return 'Nougat';
        if (v[0] === 8) return 'Oreo';
        if (v[0] === 9) return 'Pie';
        return undefined;
      }

      /**
       * Get version precisions count
       *
       * @example
       *   getVersionPrecision("1.10.3") // 3
       *
       * @param  {string} version
       * @return {number}
       */
      static getVersionPrecision(version) {
        return version.split('.').length;
      }

      /**
       * Calculate browser version weight
       *
       * @example
       *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
       *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
       *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
       *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
       *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
       *
       * @param {String} versionA versions versions to compare
       * @param {String} versionB versions versions to compare
       * @param {boolean} [isLoose] enable loose comparison
       * @return {Number} comparison result: -1 when versionA is lower,
       * 1 when versionA is bigger, 0 when both equal
       */
      /* eslint consistent-return: 1 */
      static compareVersions(versionA, versionB, isLoose = false) {
        // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
        const versionAPrecision = Utils.getVersionPrecision(versionA);
        const versionBPrecision = Utils.getVersionPrecision(versionB);

        let precision = Math.max(versionAPrecision, versionBPrecision);
        let lastPrecision = 0;

        const chunks = Utils.map([versionA, versionB], (version) => {
          const delta = precision - Utils.getVersionPrecision(version);

          // 2) "9" -> "9.0" (for precision = 2)
          const _version = version + new Array(delta + 1).join('.0');

          // 3) "9.0" -> ["000000000"", "000000009"]
          return Utils.map(_version.split('.'), chunk => new Array(20 - chunk.length).join('0') + chunk).reverse();
        });

        // adjust precision for loose comparison
        if (isLoose) {
          lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
        }

        // iterate in reverse order by reversed chunks array
        precision -= 1;
        while (precision >= lastPrecision) {
          // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
          if (chunks[0][precision] > chunks[1][precision]) {
            return 1;
          }

          if (chunks[0][precision] === chunks[1][precision]) {
            if (precision === lastPrecision) {
              // all version chunks are same
              return 0;
            }

            precision -= 1;
          } else if (chunks[0][precision] < chunks[1][precision]) {
            return -1;
          }
        }

        return undefined;
      }

      /**
       * Array::map polyfill
       *
       * @param  {Array} arr
       * @param  {Function} iterator
       * @return {Array}
       */
      static map(arr, iterator) {
        const result = [];
        let i;
        if (Array.prototype.map) {
          return Array.prototype.map.call(arr, iterator);
        }
        for (i = 0; i < arr.length; i += 1) {
          result.push(iterator(arr[i]));
        }
        return result;
      }

      /**
       * Array::find polyfill
       *
       * @param  {Array} arr
       * @param  {Function} predicate
       * @return {Array}
       */
      static find(arr, predicate) {
        let i;
        let l;
        if (Array.prototype.find) {
          return Array.prototype.find.call(arr, predicate);
        }
        for (i = 0, l = arr.length; i < l; i += 1) {
          const value = arr[i];
          if (predicate(value, i)) {
            return value;
          }
        }
        return undefined;
      }

      /**
       * Object::assign polyfill
       *
       * @param  {Object} obj
       * @param  {Object} ...objs
       * @return {Object}
       */
      static assign(obj, ...assigners) {
        const result = obj;
        let i;
        let l;
        if (Object.assign) {
          return Object.assign(obj, ...assigners);
        }
        for (i = 0, l = assigners.length; i < l; i += 1) {
          const assigner = assigners[i];
          if (typeof assigner === 'object' && assigner !== null) {
            const keys = Object.keys(assigner);
            keys.forEach((key) => {
              result[key] = assigner[key];
            });
          }
        }
        return obj;
      }

      /**
       * Get short version/alias for a browser name
       *
       * @example
       *   getBrowserAlias('Microsoft Edge') // edge
       *
       * @param  {string} browserName
       * @return {string}
       */
      static getBrowserAlias(browserName) {
        return BROWSER_ALIASES_MAP[browserName];
      }

      /**
       * Get short version/alias for a browser name
       *
       * @example
       *   getBrowserAlias('edge') // Microsoft Edge
       *
       * @param  {string} browserAlias
       * @return {string}
       */
      static getBrowserTypeByAlias(browserAlias) {
        return BROWSER_MAP[browserAlias] || '';
      }
    }

    /**
     * Browsers' descriptors
     *
     * The idea of descriptors is simple. You should know about them two simple things:
     * 1. Every descriptor has a method or property called `test` and a `describe` method.
     * 2. Order of descriptors is important.
     *
     * More details:
     * 1. Method or property `test` serves as a way to detect whether the UA string
     * matches some certain browser or not. The `describe` method helps to make a result
     * object with params that show some browser-specific things: name, version, etc.
     * 2. Order of descriptors is important because a Parser goes through them one by one
     * in course. For example, if you insert Chrome's descriptor as the first one,
     * more then a half of browsers will be described as Chrome, because they will pass
     * the Chrome descriptor's test.
     *
     * Descriptor's `test` could be a property with an array of RegExps, where every RegExp
     * will be applied to a UA string to test it whether it matches or not.
     * If a descriptor has two or more regexps in the `test` array it tests them one by one
     * with a logical sum operation. Parser stops if it has found any RegExp that matches the UA.
     *
     * Or `test` could be a method. In that case it gets a Parser instance and should
     * return true/false to get the Parser know if this browser descriptor matches the UA or not.
     */

    const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;

    const browsersList = [
      /* Googlebot */
      {
        test: [/googlebot/i],
        describe(ua) {
          const browser = {
            name: 'Googlebot',
          };
          const version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },

      /* Opera < 13.0 */
      {
        test: [/opera/i],
        describe(ua) {
          const browser = {
            name: 'Opera',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },

      /* Opera > 13.0 */
      {
        test: [/opr\/|opios/i],
        describe(ua) {
          const browser = {
            name: 'Opera',
          };
          const version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/SamsungBrowser/i],
        describe(ua) {
          const browser = {
            name: 'Samsung Internet for Android',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/Whale/i],
        describe(ua) {
          const browser = {
            name: 'NAVER Whale Browser',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/MZBrowser/i],
        describe(ua) {
          const browser = {
            name: 'MZ Browser',
          };
          const version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/focus/i],
        describe(ua) {
          const browser = {
            name: 'Focus',
          };
          const version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/swing/i],
        describe(ua) {
          const browser = {
            name: 'Swing',
          };
          const version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/coast/i],
        describe(ua) {
          const browser = {
            name: 'Opera Coast',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/opt\/\d+(?:.?_?\d+)+/i],
        describe(ua) {
          const browser = {
            name: 'Opera Touch',
          };
          const version = Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/yabrowser/i],
        describe(ua) {
          const browser = {
            name: 'Yandex Browser',
          };
          const version = Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/ucbrowser/i],
        describe(ua) {
          const browser = {
            name: 'UC Browser',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/Maxthon|mxios/i],
        describe(ua) {
          const browser = {
            name: 'Maxthon',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/epiphany/i],
        describe(ua) {
          const browser = {
            name: 'Epiphany',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/puffin/i],
        describe(ua) {
          const browser = {
            name: 'Puffin',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/sleipnir/i],
        describe(ua) {
          const browser = {
            name: 'Sleipnir',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/k-meleon/i],
        describe(ua) {
          const browser = {
            name: 'K-Meleon',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/micromessenger/i],
        describe(ua) {
          const browser = {
            name: 'WeChat',
          };
          const version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/qqbrowser/i],
        describe(ua) {
          const browser = {
            name: (/qqbrowserlite/i).test(ua) ? 'QQ Browser Lite' : 'QQ Browser',
          };
          const version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/msie|trident/i],
        describe(ua) {
          const browser = {
            name: 'Internet Explorer',
          };
          const version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/\sedg\//i],
        describe(ua) {
          const browser = {
            name: 'Microsoft Edge',
          };

          const version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/edg([ea]|ios)/i],
        describe(ua) {
          const browser = {
            name: 'Microsoft Edge',
          };

          const version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/vivaldi/i],
        describe(ua) {
          const browser = {
            name: 'Vivaldi',
          };
          const version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/seamonkey/i],
        describe(ua) {
          const browser = {
            name: 'SeaMonkey',
          };
          const version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/sailfish/i],
        describe(ua) {
          const browser = {
            name: 'Sailfish',
          };

          const version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/silk/i],
        describe(ua) {
          const browser = {
            name: 'Amazon Silk',
          };
          const version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/phantom/i],
        describe(ua) {
          const browser = {
            name: 'PhantomJS',
          };
          const version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/slimerjs/i],
        describe(ua) {
          const browser = {
            name: 'SlimerJS',
          };
          const version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(ua) {
          const browser = {
            name: 'BlackBerry',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/(web|hpw)[o0]s/i],
        describe(ua) {
          const browser = {
            name: 'WebOS Browser',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/bada/i],
        describe(ua) {
          const browser = {
            name: 'Bada',
          };
          const version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/tizen/i],
        describe(ua) {
          const browser = {
            name: 'Tizen',
          };
          const version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/qupzilla/i],
        describe(ua) {
          const browser = {
            name: 'QupZilla',
          };
          const version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/firefox|iceweasel|fxios/i],
        describe(ua) {
          const browser = {
            name: 'Firefox',
          };
          const version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/electron/i],
        describe(ua) {
          const browser = {
            name: 'Electron',
          };
          const version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/MiuiBrowser/i],
        describe(ua) {
          const browser = {
            name: 'Miui',
          };
          const version = Utils.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/chromium/i],
        describe(ua) {
          const browser = {
            name: 'Chromium',
          };
          const version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/chrome|crios|crmo/i],
        describe(ua) {
          const browser = {
            name: 'Chrome',
          };
          const version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },
      {
        test: [/GSA/i],
        describe(ua) {
          const browser = {
            name: 'Google Search',
          };
          const version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },

      /* Android Browser */
      {
        test(parser) {
          const notLikeAndroid = !parser.test(/like android/i);
          const butAndroid = parser.test(/android/i);
          return notLikeAndroid && butAndroid;
        },
        describe(ua) {
          const browser = {
            name: 'Android Browser',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },

      /* PlayStation 4 */
      {
        test: [/playstation 4/i],
        describe(ua) {
          const browser = {
            name: 'PlayStation 4',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },

      /* Safari */
      {
        test: [/safari|applewebkit/i],
        describe(ua) {
          const browser = {
            name: 'Safari',
          };
          const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

          if (version) {
            browser.version = version;
          }

          return browser;
        },
      },

      /* Something else */
      {
        test: [/.*/i],
        describe(ua) {
          /* Here we try to make sure that there are explicit details about the device
           * in order to decide what regexp exactly we want to apply
           * (as there is a specific decision based on that conclusion)
           */
          const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
          const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
          const hasDeviceSpec = ua.search('\\(') !== -1;
          const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
          return {
            name: Utils.getFirstMatch(regexp, ua),
            version: Utils.getSecondMatch(regexp, ua),
          };
        },
      },
    ];

    var osParsersList = [
      /* Roku */
      {
        test: [/Roku\/DVP/],
        describe(ua) {
          const version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
          return {
            name: OS_MAP.Roku,
            version,
          };
        },
      },

      /* Windows Phone */
      {
        test: [/windows phone/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
          return {
            name: OS_MAP.WindowsPhone,
            version,
          };
        },
      },

      /* Windows */
      {
        test: [/windows /i],
        describe(ua) {
          const version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
          const versionName = Utils.getWindowsVersionName(version);

          return {
            name: OS_MAP.Windows,
            version,
            versionName,
          };
        },
      },

      /* Firefox on iPad */
      {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe(ua) {
          const result = {
            name: OS_MAP.iOS,
          };
          const version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
          if (version) {
            result.version = version;
          }
          return result;
        },
      },

      /* macOS */
      {
        test: [/macintosh/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
          const versionName = Utils.getMacOSVersionName(version);

          const os = {
            name: OS_MAP.MacOS,
            version,
          };
          if (versionName) {
            os.versionName = versionName;
          }
          return os;
        },
      },

      /* iOS */
      {
        test: [/(ipod|iphone|ipad)/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.');

          return {
            name: OS_MAP.iOS,
            version,
          };
        },
      },

      /* Android */
      {
        test(parser) {
          const notLikeAndroid = !parser.test(/like android/i);
          const butAndroid = parser.test(/android/i);
          return notLikeAndroid && butAndroid;
        },
        describe(ua) {
          const version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
          const versionName = Utils.getAndroidVersionName(version);
          const os = {
            name: OS_MAP.Android,
            version,
          };
          if (versionName) {
            os.versionName = versionName;
          }
          return os;
        },
      },

      /* WebOS */
      {
        test: [/(web|hpw)[o0]s/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
          const os = {
            name: OS_MAP.WebOS,
          };

          if (version && version.length) {
            os.version = version;
          }
          return os;
        },
      },

      /* BlackBerry */
      {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua)
            || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua)
            || Utils.getFirstMatch(/\bbb(\d+)/i, ua);

          return {
            name: OS_MAP.BlackBerry,
            version,
          };
        },
      },

      /* Bada */
      {
        test: [/bada/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);

          return {
            name: OS_MAP.Bada,
            version,
          };
        },
      },

      /* Tizen */
      {
        test: [/tizen/i],
        describe(ua) {
          const version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);

          return {
            name: OS_MAP.Tizen,
            version,
          };
        },
      },

      /* Linux */
      {
        test: [/linux/i],
        describe() {
          return {
            name: OS_MAP.Linux,
          };
        },
      },

      /* Chrome OS */
      {
        test: [/CrOS/],
        describe() {
          return {
            name: OS_MAP.ChromeOS,
          };
        },
      },

      /* Playstation 4 */
      {
        test: [/PlayStation 4/],
        describe(ua) {
          const version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
          return {
            name: OS_MAP.PlayStation4,
            version,
          };
        },
      },
    ];

    /*
     * Tablets go first since usually they have more specific
     * signs to detect.
     */

    var platformParsersList = [
      /* Googlebot */
      {
        test: [/googlebot/i],
        describe() {
          return {
            type: 'bot',
            vendor: 'Google',
          };
        },
      },

      /* Huawei */
      {
        test: [/huawei/i],
        describe(ua) {
          const model = Utils.getFirstMatch(/(can-l01)/i, ua) && 'Nova';
          const platform = {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Huawei',
          };
          if (model) {
            platform.model = model;
          }
          return platform;
        },
      },

      /* Nexus Tablet */
      {
        test: [/nexus\s*(?:7|8|9|10).*/i],
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Nexus',
          };
        },
      },

      /* iPad */
      {
        test: [/ipad/i],
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Apple',
            model: 'iPad',
          };
        },
      },

      /* Firefox on iPad */
      {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Apple',
            model: 'iPad',
          };
        },
      },

      /* Amazon Kindle Fire */
      {
        test: [/kftt build/i],
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Amazon',
            model: 'Kindle Fire HD 7',
          };
        },
      },

      /* Another Amazon Tablet with Silk */
      {
        test: [/silk/i],
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Amazon',
          };
        },
      },

      /* Tablet */
      {
        test: [/tablet(?! pc)/i],
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
          };
        },
      },

      /* iPod/iPhone */
      {
        test(parser) {
          const iDevice = parser.test(/ipod|iphone/i);
          const likeIDevice = parser.test(/like (ipod|iphone)/i);
          return iDevice && !likeIDevice;
        },
        describe(ua) {
          const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Apple',
            model,
          };
        },
      },

      /* Nexus Mobile */
      {
        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
        describe() {
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Nexus',
          };
        },
      },

      /* Mobile */
      {
        test: [/[^-]mobi/i],
        describe() {
          return {
            type: PLATFORMS_MAP.mobile,
          };
        },
      },

      /* BlackBerry */
      {
        test(parser) {
          return parser.getBrowserName(true) === 'blackberry';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'BlackBerry',
          };
        },
      },

      /* Bada */
      {
        test(parser) {
          return parser.getBrowserName(true) === 'bada';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.mobile,
          };
        },
      },

      /* Windows Phone */
      {
        test(parser) {
          return parser.getBrowserName() === 'windows phone';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Microsoft',
          };
        },
      },

      /* Android Tablet */
      {
        test(parser) {
          const osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);
          return parser.getOSName(true) === 'android' && (osMajorVersion >= 3);
        },
        describe() {
          return {
            type: PLATFORMS_MAP.tablet,
          };
        },
      },

      /* Android Mobile */
      {
        test(parser) {
          return parser.getOSName(true) === 'android';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.mobile,
          };
        },
      },

      /* desktop */
      {
        test(parser) {
          return parser.getOSName(true) === 'macos';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.desktop,
            vendor: 'Apple',
          };
        },
      },

      /* Windows */
      {
        test(parser) {
          return parser.getOSName(true) === 'windows';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.desktop,
          };
        },
      },

      /* Linux */
      {
        test(parser) {
          return parser.getOSName(true) === 'linux';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.desktop,
          };
        },
      },

      /* PlayStation 4 */
      {
        test(parser) {
          return parser.getOSName(true) === 'playstation 4';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.tv,
          };
        },
      },

      /* Roku */
      {
        test(parser) {
          return parser.getOSName(true) === 'roku';
        },
        describe() {
          return {
            type: PLATFORMS_MAP.tv,
          };
        },
      },
    ];

    /*
     * More specific goes first
     */
    var enginesParsersList = [
      /* EdgeHTML */
      {
        test(parser) {
          return parser.getBrowserName(true) === 'microsoft edge';
        },
        describe(ua) {
          const isBlinkBased = /\sedg\//i.test(ua);

          // return blink if it's blink-based one
          if (isBlinkBased) {
            return {
              name: ENGINE_MAP.Blink,
            };
          }

          // otherwise match the version and return EdgeHTML
          const version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);

          return {
            name: ENGINE_MAP.EdgeHTML,
            version,
          };
        },
      },

      /* Trident */
      {
        test: [/trident/i],
        describe(ua) {
          const engine = {
            name: ENGINE_MAP.Trident,
          };

          const version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            engine.version = version;
          }

          return engine;
        },
      },

      /* Presto */
      {
        test(parser) {
          return parser.test(/presto/i);
        },
        describe(ua) {
          const engine = {
            name: ENGINE_MAP.Presto,
          };

          const version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            engine.version = version;
          }

          return engine;
        },
      },

      /* Gecko */
      {
        test(parser) {
          const isGecko = parser.test(/gecko/i);
          const likeGecko = parser.test(/like gecko/i);
          return isGecko && !likeGecko;
        },
        describe(ua) {
          const engine = {
            name: ENGINE_MAP.Gecko,
          };

          const version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            engine.version = version;
          }

          return engine;
        },
      },

      /* Blink */
      {
        test: [/(apple)?webkit\/537\.36/i],
        describe() {
          return {
            name: ENGINE_MAP.Blink,
          };
        },
      },

      /* WebKit */
      {
        test: [/(apple)?webkit/i],
        describe(ua) {
          const engine = {
            name: ENGINE_MAP.WebKit,
          };

          const version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);

          if (version) {
            engine.version = version;
          }

          return engine;
        },
      },
    ];

    /**
     * The main class that arranges the whole parsing process.
     */
    class Parser {
      /**
       * Create instance of Parser
       *
       * @param {String} UA User-Agent string
       * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
       * improvements if you need to make a more particular parsing
       * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
       *
       * @throw {Error} in case of empty UA String
       *
       * @constructor
       */
      constructor(UA, skipParsing = false) {
        if (UA === void (0) || UA === null || UA === '') {
          throw new Error("UserAgent parameter can't be empty");
        }

        this._ua = UA;

        /**
         * @typedef ParsedResult
         * @property {Object} browser
         * @property {String|undefined} [browser.name]
         * Browser name, like `"Chrome"` or `"Internet Explorer"`
         * @property {String|undefined} [browser.version] Browser version as a String `"12.01.45334.10"`
         * @property {Object} os
         * @property {String|undefined} [os.name] OS name, like `"Windows"` or `"macOS"`
         * @property {String|undefined} [os.version] OS version, like `"NT 5.1"` or `"10.11.1"`
         * @property {String|undefined} [os.versionName] OS name, like `"XP"` or `"High Sierra"`
         * @property {Object} platform
         * @property {String|undefined} [platform.type]
         * platform type, can be either `"desktop"`, `"tablet"` or `"mobile"`
         * @property {String|undefined} [platform.vendor] Vendor of the device,
         * like `"Apple"` or `"Samsung"`
         * @property {String|undefined} [platform.model] Device model,
         * like `"iPhone"` or `"Kindle Fire HD 7"`
         * @property {Object} engine
         * @property {String|undefined} [engine.name]
         * Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`
         * @property {String|undefined} [engine.version] String version of the engine
         */
        this.parsedResult = {};

        if (skipParsing !== true) {
          this.parse();
        }
      }

      /**
       * Get UserAgent string of current Parser instance
       * @return {String} User-Agent String of the current <Parser> object
       *
       * @public
       */
      getUA() {
        return this._ua;
      }

      /**
       * Test a UA string for a regexp
       * @param {RegExp} regex
       * @return {Boolean}
       */
      test(regex) {
        return regex.test(this._ua);
      }

      /**
       * Get parsed browser object
       * @return {Object}
       */
      parseBrowser() {
        this.parsedResult.browser = {};

        const browserDescriptor = Utils.find(browsersList, (_browser) => {
          if (typeof _browser.test === 'function') {
            return _browser.test(this);
          }

          if (_browser.test instanceof Array) {
            return _browser.test.some(condition => this.test(condition));
          }

          throw new Error("Browser's test function is not valid");
        });

        if (browserDescriptor) {
          this.parsedResult.browser = browserDescriptor.describe(this.getUA());
        }

        return this.parsedResult.browser;
      }

      /**
       * Get parsed browser object
       * @return {Object}
       *
       * @public
       */
      getBrowser() {
        if (this.parsedResult.browser) {
          return this.parsedResult.browser;
        }

        return this.parseBrowser();
      }

      /**
       * Get browser's name
       * @return {String} Browser's name or an empty string
       *
       * @public
       */
      getBrowserName(toLowerCase) {
        if (toLowerCase) {
          return String(this.getBrowser().name).toLowerCase() || '';
        }
        return this.getBrowser().name || '';
      }


      /**
       * Get browser's version
       * @return {String} version of browser
       *
       * @public
       */
      getBrowserVersion() {
        return this.getBrowser().version;
      }

      /**
       * Get OS
       * @return {Object}
       *
       * @example
       * this.getOS();
       * {
       *   name: 'macOS',
       *   version: '10.11.12'
       * }
       */
      getOS() {
        if (this.parsedResult.os) {
          return this.parsedResult.os;
        }

        return this.parseOS();
      }

      /**
       * Parse OS and save it to this.parsedResult.os
       * @return {*|{}}
       */
      parseOS() {
        this.parsedResult.os = {};

        const os = Utils.find(osParsersList, (_os) => {
          if (typeof _os.test === 'function') {
            return _os.test(this);
          }

          if (_os.test instanceof Array) {
            return _os.test.some(condition => this.test(condition));
          }

          throw new Error("Browser's test function is not valid");
        });

        if (os) {
          this.parsedResult.os = os.describe(this.getUA());
        }

        return this.parsedResult.os;
      }

      /**
       * Get OS name
       * @param {Boolean} [toLowerCase] return lower-cased value
       * @return {String} name of the OS — macOS, Windows, Linux, etc.
       */
      getOSName(toLowerCase) {
        const { name } = this.getOS();

        if (toLowerCase) {
          return String(name).toLowerCase() || '';
        }

        return name || '';
      }

      /**
       * Get OS version
       * @return {String} full version with dots ('10.11.12', '5.6', etc)
       */
      getOSVersion() {
        return this.getOS().version;
      }

      /**
       * Get parsed platform
       * @return {{}}
       */
      getPlatform() {
        if (this.parsedResult.platform) {
          return this.parsedResult.platform;
        }

        return this.parsePlatform();
      }

      /**
       * Get platform name
       * @param {Boolean} [toLowerCase=false]
       * @return {*}
       */
      getPlatformType(toLowerCase = false) {
        const { type } = this.getPlatform();

        if (toLowerCase) {
          return String(type).toLowerCase() || '';
        }

        return type || '';
      }

      /**
       * Get parsed platform
       * @return {{}}
       */
      parsePlatform() {
        this.parsedResult.platform = {};

        const platform = Utils.find(platformParsersList, (_platform) => {
          if (typeof _platform.test === 'function') {
            return _platform.test(this);
          }

          if (_platform.test instanceof Array) {
            return _platform.test.some(condition => this.test(condition));
          }

          throw new Error("Browser's test function is not valid");
        });

        if (platform) {
          this.parsedResult.platform = platform.describe(this.getUA());
        }

        return this.parsedResult.platform;
      }

      /**
       * Get parsed engine
       * @return {{}}
       */
      getEngine() {
        if (this.parsedResult.engine) {
          return this.parsedResult.engine;
        }

        return this.parseEngine();
      }

      /**
       * Get engines's name
       * @return {String} Engines's name or an empty string
       *
       * @public
       */
      getEngineName(toLowerCase) {
        if (toLowerCase) {
          return String(this.getEngine().name).toLowerCase() || '';
        }
        return this.getEngine().name || '';
      }

      /**
       * Get parsed platform
       * @return {{}}
       */
      parseEngine() {
        this.parsedResult.engine = {};

        const engine = Utils.find(enginesParsersList, (_engine) => {
          if (typeof _engine.test === 'function') {
            return _engine.test(this);
          }

          if (_engine.test instanceof Array) {
            return _engine.test.some(condition => this.test(condition));
          }

          throw new Error("Browser's test function is not valid");
        });

        if (engine) {
          this.parsedResult.engine = engine.describe(this.getUA());
        }

        return this.parsedResult.engine;
      }

      /**
       * Parse full information about the browser
       * @returns {Parser}
       */
      parse() {
        this.parseBrowser();
        this.parseOS();
        this.parsePlatform();
        this.parseEngine();

        return this;
      }

      /**
       * Get parsed result
       * @return {ParsedResult}
       */
      getResult() {
        return Utils.assign({}, this.parsedResult);
      }

      /**
       * Check if parsed browser matches certain conditions
       *
       * @param {Object} checkTree It's one or two layered object,
       * which can include a platform or an OS on the first layer
       * and should have browsers specs on the bottom-laying layer
       *
       * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
       * Returns `undefined` when the browser is no described in the checkTree object.
       *
       * @example
       * const browser = Bowser.getParser(window.navigator.userAgent);
       * if (browser.satisfies({chrome: '>118.01.1322' }))
       * // or with os
       * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
       * // or with platforms
       * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
       */
      satisfies(checkTree) {
        const platformsAndOSes = {};
        let platformsAndOSCounter = 0;
        const browsers = {};
        let browsersCounter = 0;

        const allDefinitions = Object.keys(checkTree);

        allDefinitions.forEach((key) => {
          const currentDefinition = checkTree[key];
          if (typeof currentDefinition === 'string') {
            browsers[key] = currentDefinition;
            browsersCounter += 1;
          } else if (typeof currentDefinition === 'object') {
            platformsAndOSes[key] = currentDefinition;
            platformsAndOSCounter += 1;
          }
        });

        if (platformsAndOSCounter > 0) {
          const platformsAndOSNames = Object.keys(platformsAndOSes);
          const OSMatchingDefinition = Utils.find(platformsAndOSNames, name => (this.isOS(name)));

          if (OSMatchingDefinition) {
            const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);

            if (osResult !== void 0) {
              return osResult;
            }
          }

          const platformMatchingDefinition = Utils.find(
            platformsAndOSNames,
            name => (this.isPlatform(name)),
          );
          if (platformMatchingDefinition) {
            const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);

            if (platformResult !== void 0) {
              return platformResult;
            }
          }
        }

        if (browsersCounter > 0) {
          const browserNames = Object.keys(browsers);
          const matchingDefinition = Utils.find(browserNames, name => (this.isBrowser(name, true)));

          if (matchingDefinition !== void 0) {
            return this.compareVersion(browsers[matchingDefinition]);
          }
        }

        return undefined;
      }

      /**
       * Check if the browser name equals the passed string
       * @param browserName The string to compare with the browser name
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {boolean}
       */
      isBrowser(browserName, includingAlias = false) {
        const defaultBrowserName = this.getBrowserName().toLowerCase();
        let browserNameLower = browserName.toLowerCase();
        const alias = Utils.getBrowserTypeByAlias(browserNameLower);

        if (includingAlias && alias) {
          browserNameLower = alias.toLowerCase();
        }
        return browserNameLower === defaultBrowserName;
      }

      compareVersion(version) {
        let expectedResults = [0];
        let comparableVersion = version;
        let isLoose = false;

        const currentBrowserVersion = this.getBrowserVersion();

        if (typeof currentBrowserVersion !== 'string') {
          return void 0;
        }

        if (version[0] === '>' || version[0] === '<') {
          comparableVersion = version.substr(1);
          if (version[1] === '=') {
            isLoose = true;
            comparableVersion = version.substr(2);
          } else {
            expectedResults = [];
          }
          if (version[0] === '>') {
            expectedResults.push(1);
          } else {
            expectedResults.push(-1);
          }
        } else if (version[0] === '=') {
          comparableVersion = version.substr(1);
        } else if (version[0] === '~') {
          isLoose = true;
          comparableVersion = version.substr(1);
        }

        return expectedResults.indexOf(
          Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose),
        ) > -1;
      }

      isOS(osName) {
        return this.getOSName(true) === String(osName).toLowerCase();
      }

      isPlatform(platformType) {
        return this.getPlatformType(true) === String(platformType).toLowerCase();
      }

      isEngine(engineName) {
        return this.getEngineName(true) === String(engineName).toLowerCase();
      }

      /**
       * Is anything? Check if the browser is called "anything",
       * the OS called "anything" or the platform called "anything"
       * @param {String} anything
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {Boolean}
       */
      is(anything, includingAlias = false) {
        return this.isBrowser(anything, includingAlias) || this.isOS(anything)
          || this.isPlatform(anything);
      }

      /**
       * Check if any of the given values satisfies this.is(anything)
       * @param {String[]} anythings
       * @returns {Boolean}
       */
      some(anythings = []) {
        return anythings.some(anything => this.is(anything));
      }
    }

    /*!
     * Bowser - a browser detector
     * https://github.com/lancedikson/bowser
     * MIT License | (c) Dustin Diaz 2012-2015
     * MIT License | (c) Denis Demchenko 2015-2019
     */

    /**
     * Bowser class.
     * Keep it simple as much as it can be.
     * It's supposed to work with collections of {@link Parser} instances
     * rather then solve one-instance problems.
     * All the one-instance stuff is located in Parser class.
     *
     * @class
     * @classdesc Bowser is a static object, that provides an API to the Parsers
     * @hideconstructor
     */
    class Bowser {
      /**
       * Creates a {@link Parser} instance
       *
       * @param {String} UA UserAgent string
       * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
       * explicitly. Same as `skipParsing` for {@link Parser}.
       * @returns {Parser}
       * @throws {Error} when UA is not a String
       *
       * @example
       * const parser = Bowser.getParser(window.navigator.userAgent);
       * const result = parser.getResult();
       */
      static getParser(UA, skipParsing = false) {
        if (typeof UA !== 'string') {
          throw new Error('UserAgent should be a string');
        }
        return new Parser(UA, skipParsing);
      }

      /**
       * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
       *
       * @param UA
       * @return {ParsedResult}
       *
       * @example
       * const result = Bowser.parse(window.navigator.userAgent);
       */
      static parse(UA) {
        return (new Parser(UA)).getResult();
      }

      static get BROWSER_MAP() {
        return BROWSER_MAP;
      }

      static get ENGINE_MAP() {
        return ENGINE_MAP;
      }

      static get OS_MAP() {
        return OS_MAP;
      }

      static get PLATFORMS_MAP() {
        return PLATFORMS_MAP;
      }
    }

    function bind(fn, thisArg) {
      return function wrap() {
        return fn.apply(thisArg, arguments);
      };
    }

    // utils is a library of generic helper functions non-specific to axios

    const {toString} = Object.prototype;
    const {getPrototypeOf} = Object;

    const kindOf = (cache => thing => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));

    const kindOfTest = (type) => {
      type = type.toLowerCase();
      return (thing) => kindOf(thing) === type
    };

    const typeOfTest = type => thing => typeof thing === type;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     *
     * @returns {boolean} True if value is an Array, otherwise false
     */
    const {isArray} = Array;

    /**
     * Determine if a value is undefined
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    const isUndefined = typeOfTest('undefined');

    /**
     * Determine if a value is a Buffer
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer$1(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    const isArrayBuffer = kindOfTest('ArrayBuffer');


    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      let result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a String, otherwise false
     */
    const isString$1 = typeOfTest('string');

    /**
     * Determine if a value is a Function
     *
     * @param {*} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    const isFunction$1 = typeOfTest('function');

    /**
     * Determine if a value is a Number
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Number, otherwise false
     */
    const isNumber = typeOfTest('number');

    /**
     * Determine if a value is an Object
     *
     * @param {*} thing The value to test
     *
     * @returns {boolean} True if value is an Object, otherwise false
     */
    const isObject = (thing) => thing !== null && typeof thing === 'object';

    /**
     * Determine if a value is a Boolean
     *
     * @param {*} thing The value to test
     * @returns {boolean} True if value is a Boolean, otherwise false
     */
    const isBoolean = thing => thing === true || thing === false;

    /**
     * Determine if a value is a plain Object
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a plain Object, otherwise false
     */
    const isPlainObject = (val) => {
      if (kindOf(val) !== 'object') {
        return false;
      }

      const prototype = getPrototypeOf(val);
      return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
    };

    /**
     * Determine if a value is a Date
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Date, otherwise false
     */
    const isDate = kindOfTest('Date');

    /**
     * Determine if a value is a File
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a File, otherwise false
     */
    const isFile = kindOfTest('File');

    /**
     * Determine if a value is a Blob
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    const isBlob = kindOfTest('Blob');

    /**
     * Determine if a value is a FileList
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a File, otherwise false
     */
    const isFileList = kindOfTest('FileList');

    /**
     * Determine if a value is a Stream
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    const isStream = (val) => isObject(val) && isFunction$1(val.pipe);

    /**
     * Determine if a value is a FormData
     *
     * @param {*} thing The value to test
     *
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    const isFormData = (thing) => {
      const pattern = '[object FormData]';
      return thing && (
        (typeof FormData === 'function' && thing instanceof FormData) ||
        toString.call(thing) === pattern ||
        (isFunction$1(thing.toString) && thing.toString() === pattern)
      );
    };

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    const isURLSearchParams = kindOfTest('URLSearchParams');

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     *
     * @returns {String} The String freed of excess whitespace
     */
    const trim = (str) => str.trim ?
      str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     *
     * @param {Boolean} [allOwnKeys = false]
     * @returns {void}
     */
    function forEach(obj, fn, {allOwnKeys = false} = {}) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      let i;
      let l;

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;

        for (i = 0; i < len; i++) {
          key = keys[i];
          fn.call(null, obj[key], key, obj);
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     *
     * @returns {Object} Result of all merge properties
     */
    function merge(/* obj1, obj2, obj3, ... */) {
      const result = {};
      const assignValue = (val, key) => {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      };

      for (let i = 0, l = arguments.length; i < l; i++) {
        arguments[i] && forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     *
     * @param {Boolean} [allOwnKeys]
     * @returns {Object} The resulting value of object a
     */
    const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
      forEach(b, (val, key) => {
        if (thisArg && isFunction$1(val)) {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      }, {allOwnKeys});
      return a;
    };

    /**
     * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
     *
     * @param {string} content with BOM
     *
     * @returns {string} content value without BOM
     */
    const stripBOM = (content) => {
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return content;
    };

    /**
     * Inherit the prototype methods from one constructor into another
     * @param {function} constructor
     * @param {function} superConstructor
     * @param {object} [props]
     * @param {object} [descriptors]
     *
     * @returns {void}
     */
    const inherits = (constructor, superConstructor, props, descriptors) => {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors);
      constructor.prototype.constructor = constructor;
      Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
      });
      props && Object.assign(constructor.prototype, props);
    };

    /**
     * Resolve object with deep prototype chain to a flat object
     * @param {Object} sourceObj source object
     * @param {Object} [destObj]
     * @param {Function|Boolean} [filter]
     * @param {Function} [propFilter]
     *
     * @returns {Object}
     */
    const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
      let props;
      let i;
      let prop;
      const merged = {};

      destObj = destObj || {};
      // eslint-disable-next-line no-eq-null,eqeqeq
      if (sourceObj == null) return destObj;

      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

      return destObj;
    };

    /**
     * Determines whether a string ends with the characters of a specified string
     *
     * @param {String} str
     * @param {String} searchString
     * @param {Number} [position= 0]
     *
     * @returns {boolean}
     */
    const endsWith = (str, searchString, position) => {
      str = String(str);
      if (position === undefined || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      const lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };


    /**
     * Returns new array from array like object or null if failed
     *
     * @param {*} [thing]
     *
     * @returns {?Array}
     */
    const toArray = (thing) => {
      if (!thing) return null;
      if (isArray(thing)) return thing;
      let i = thing.length;
      if (!isNumber(i)) return null;
      const arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    };

    /**
     * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
     * thing passed in is an instance of Uint8Array
     *
     * @param {TypedArray}
     *
     * @returns {Array}
     */
    // eslint-disable-next-line func-names
    const isTypedArray = (TypedArray => {
      // eslint-disable-next-line func-names
      return thing => {
        return TypedArray && thing instanceof TypedArray;
      };
    })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

    /**
     * For each entry in the object, call the function with the key and value.
     *
     * @param {Object<any, any>} obj - The object to iterate over.
     * @param {Function} fn - The function to call for each entry.
     *
     * @returns {void}
     */
    const forEachEntry = (obj, fn) => {
      const generator = obj && obj[Symbol.iterator];

      const iterator = generator.call(obj);

      let result;

      while ((result = iterator.next()) && !result.done) {
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
      }
    };

    /**
     * It takes a regular expression and a string, and returns an array of all the matches
     *
     * @param {string} regExp - The regular expression to match against.
     * @param {string} str - The string to search.
     *
     * @returns {Array<boolean>}
     */
    const matchAll = (regExp, str) => {
      let matches;
      const arr = [];

      while ((matches = regExp.exec(str)) !== null) {
        arr.push(matches);
      }

      return arr;
    };

    /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
    const isHTMLForm = kindOfTest('HTMLFormElement');

    const toCamelCase = str => {
      return str.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,
        function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        }
      );
    };

    /* Creating a function that will check if an object has a property. */
    const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

    /**
     * Determine if a value is a RegExp object
     *
     * @param {*} val The value to test
     *
     * @returns {boolean} True if value is a RegExp object, otherwise false
     */
    const isRegExp = kindOfTest('RegExp');

    const reduceDescriptors = (obj, reducer) => {
      const descriptors = Object.getOwnPropertyDescriptors(obj);
      const reducedDescriptors = {};

      forEach(descriptors, (descriptor, name) => {
        if (reducer(descriptor, name, obj) !== false) {
          reducedDescriptors[name] = descriptor;
        }
      });

      Object.defineProperties(obj, reducedDescriptors);
    };

    /**
     * Makes all methods read-only
     * @param {Object} obj
     */

    const freezeMethods = (obj) => {
      reduceDescriptors(obj, (descriptor, name) => {
        const value = obj[name];

        if (!isFunction$1(value)) return;

        descriptor.enumerable = false;

        if ('writable' in descriptor) {
          descriptor.writable = false;
          return;
        }

        if (!descriptor.set) {
          descriptor.set = () => {
            throw Error('Can not read-only method \'' + name + '\'');
          };
        }
      });
    };

    const toObjectSet = (arrayOrString, delimiter) => {
      const obj = {};

      const define = (arr) => {
        arr.forEach(value => {
          obj[value] = true;
        });
      };

      isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

      return obj;
    };

    const noop$1 = () => {};

    const toFiniteNumber = (value, defaultValue) => {
      value = +value;
      return Number.isFinite(value) ? value : defaultValue;
    };

    var utils = {
      isArray,
      isArrayBuffer,
      isBuffer: isBuffer$1,
      isFormData,
      isArrayBufferView,
      isString: isString$1,
      isNumber,
      isBoolean,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isRegExp,
      isFunction: isFunction$1,
      isStream,
      isURLSearchParams,
      isTypedArray,
      isFileList,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      forEachEntry,
      matchAll,
      isHTMLForm,
      hasOwnProperty,
      hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
      reduceDescriptors,
      freezeMethods,
      toObjectSet,
      toCamelCase,
      noop: noop$1,
      toFiniteNumber
    };

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */
    function AxiosError(message, code, config, request, response) {
      Error.call(this);

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = (new Error()).stack;
      }

      this.message = message;
      this.name = 'AxiosError';
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      response && (this.response = response);
    }

    utils.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      }
    });

    const prototype$1 = AxiosError.prototype;
    const descriptors = {};

    [
      'ERR_BAD_OPTION_VALUE',
      'ERR_BAD_OPTION',
      'ECONNABORTED',
      'ETIMEDOUT',
      'ERR_NETWORK',
      'ERR_FR_TOO_MANY_REDIRECTS',
      'ERR_DEPRECATED',
      'ERR_BAD_RESPONSE',
      'ERR_BAD_REQUEST',
      'ERR_CANCELED',
      'ERR_NOT_SUPPORT',
      'ERR_INVALID_URL'
    // eslint-disable-next-line func-names
    ].forEach(code => {
      descriptors[code] = {value: code};
    });

    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

    // eslint-disable-next-line func-names
    AxiosError.from = (error, code, config, request, response, customProps) => {
      const axiosError = Object.create(prototype$1);

      utils.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
      }, prop => {
        return prop !== 'isAxiosError';
      });

      AxiosError.call(axiosError, error.message, code, config, request, response);

      axiosError.cause = error;

      axiosError.name = error.name;

      customProps && Object.assign(axiosError, customProps);

      return axiosError;
    };

    var Stream$2 = stream$1.Stream;
    var util$2 = require$$1;

    var delayed_stream = DelayedStream$1;
    function DelayedStream$1() {
      this.source = null;
      this.dataSize = 0;
      this.maxDataSize = 1024 * 1024;
      this.pauseStream = true;

      this._maxDataSizeExceeded = false;
      this._released = false;
      this._bufferedEvents = [];
    }
    util$2.inherits(DelayedStream$1, Stream$2);

    DelayedStream$1.create = function(source, options) {
      var delayedStream = new this();

      options = options || {};
      for (var option in options) {
        delayedStream[option] = options[option];
      }

      delayedStream.source = source;

      var realEmit = source.emit;
      source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
      };

      source.on('error', function() {});
      if (delayedStream.pauseStream) {
        source.pause();
      }

      return delayedStream;
    };

    Object.defineProperty(DelayedStream$1.prototype, 'readable', {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.source.readable;
      }
    });

    DelayedStream$1.prototype.setEncoding = function() {
      return this.source.setEncoding.apply(this.source, arguments);
    };

    DelayedStream$1.prototype.resume = function() {
      if (!this._released) {
        this.release();
      }

      this.source.resume();
    };

    DelayedStream$1.prototype.pause = function() {
      this.source.pause();
    };

    DelayedStream$1.prototype.release = function() {
      this._released = true;

      this._bufferedEvents.forEach(function(args) {
        this.emit.apply(this, args);
      }.bind(this));
      this._bufferedEvents = [];
    };

    DelayedStream$1.prototype.pipe = function() {
      var r = Stream$2.prototype.pipe.apply(this, arguments);
      this.resume();
      return r;
    };

    DelayedStream$1.prototype._handleEmit = function(args) {
      if (this._released) {
        this.emit.apply(this, args);
        return;
      }

      if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
      }

      this._bufferedEvents.push(args);
    };

    DelayedStream$1.prototype._checkIfMaxDataSizeExceeded = function() {
      if (this._maxDataSizeExceeded) {
        return;
      }

      if (this.dataSize <= this.maxDataSize) {
        return;
      }

      this._maxDataSizeExceeded = true;
      var message =
        'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
      this.emit('error', new Error(message));
    };

    var util$1 = require$$1;
    var Stream$1 = stream$1.Stream;
    var DelayedStream = delayed_stream;

    var combined_stream = CombinedStream$1;
    function CombinedStream$1() {
      this.writable = false;
      this.readable = true;
      this.dataSize = 0;
      this.maxDataSize = 2 * 1024 * 1024;
      this.pauseStreams = true;

      this._released = false;
      this._streams = [];
      this._currentStream = null;
      this._insideLoop = false;
      this._pendingNext = false;
    }
    util$1.inherits(CombinedStream$1, Stream$1);

    CombinedStream$1.create = function(options) {
      var combinedStream = new this();

      options = options || {};
      for (var option in options) {
        combinedStream[option] = options[option];
      }

      return combinedStream;
    };

    CombinedStream$1.isStreamLike = function(stream) {
      return (typeof stream !== 'function')
        && (typeof stream !== 'string')
        && (typeof stream !== 'boolean')
        && (typeof stream !== 'number')
        && (!Buffer.isBuffer(stream));
    };

    CombinedStream$1.prototype.append = function(stream) {
      var isStreamLike = CombinedStream$1.isStreamLike(stream);

      if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
          var newStream = DelayedStream.create(stream, {
            maxDataSize: Infinity,
            pauseStream: this.pauseStreams,
          });
          stream.on('data', this._checkDataSize.bind(this));
          stream = newStream;
        }

        this._handleErrors(stream);

        if (this.pauseStreams) {
          stream.pause();
        }
      }

      this._streams.push(stream);
      return this;
    };

    CombinedStream$1.prototype.pipe = function(dest, options) {
      Stream$1.prototype.pipe.call(this, dest, options);
      this.resume();
      return dest;
    };

    CombinedStream$1.prototype._getNext = function() {
      this._currentStream = null;

      if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
      }

      this._insideLoop = true;
      try {
        do {
          this._pendingNext = false;
          this._realGetNext();
        } while (this._pendingNext);
      } finally {
        this._insideLoop = false;
      }
    };

    CombinedStream$1.prototype._realGetNext = function() {
      var stream = this._streams.shift();


      if (typeof stream == 'undefined') {
        this.end();
        return;
      }

      if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
      }

      var getStream = stream;
      getStream(function(stream) {
        var isStreamLike = CombinedStream$1.isStreamLike(stream);
        if (isStreamLike) {
          stream.on('data', this._checkDataSize.bind(this));
          this._handleErrors(stream);
        }

        this._pipeNext(stream);
      }.bind(this));
    };

    CombinedStream$1.prototype._pipeNext = function(stream) {
      this._currentStream = stream;

      var isStreamLike = CombinedStream$1.isStreamLike(stream);
      if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {end: false});
        return;
      }

      var value = stream;
      this.write(value);
      this._getNext();
    };

    CombinedStream$1.prototype._handleErrors = function(stream) {
      var self = this;
      stream.on('error', function(err) {
        self._emitError(err);
      });
    };

    CombinedStream$1.prototype.write = function(data) {
      this.emit('data', data);
    };

    CombinedStream$1.prototype.pause = function() {
      if (!this.pauseStreams) {
        return;
      }

      if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
      this.emit('pause');
    };

    CombinedStream$1.prototype.resume = function() {
      if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
      }

      if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
      this.emit('resume');
    };

    CombinedStream$1.prototype.end = function() {
      this._reset();
      this.emit('end');
    };

    CombinedStream$1.prototype.destroy = function() {
      this._reset();
      this.emit('close');
    };

    CombinedStream$1.prototype._reset = function() {
      this.writable = false;
      this._streams = [];
      this._currentStream = null;
    };

    CombinedStream$1.prototype._checkDataSize = function() {
      this._updateDataSize();
      if (this.dataSize <= this.maxDataSize) {
        return;
      }

      var message =
        'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
      this._emitError(new Error(message));
    };

    CombinedStream$1.prototype._updateDataSize = function() {
      this.dataSize = 0;

      var self = this;
      this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
          return;
        }

        self.dataSize += stream.dataSize;
      });

      if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
      }
    };

    CombinedStream$1.prototype._emitError = function(err) {
      this._reset();
      this.emit('error', err);
    };

    var mimeTypes = {};

    var mimeDb = {exports: {}};

    var require$$0 = {
    	"application/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"application/3gpdash-qoe-report+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/3gpp-ims+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/3gpphal+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/3gpphalforms+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/a2l": {
    	source: "iana"
    },
    	"application/ace+cbor": {
    	source: "iana"
    },
    	"application/activemessage": {
    	source: "iana"
    },
    	"application/activity+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-costmap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-costmapfilter+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-directory+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointcost+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointcostparams+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointprop+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointpropparams+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-error+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-networkmap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-networkmapfilter+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-updatestreamcontrol+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-updatestreamparams+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/aml": {
    	source: "iana"
    },
    	"application/andrew-inset": {
    	source: "iana",
    	extensions: [
    		"ez"
    	]
    },
    	"application/applefile": {
    	source: "iana"
    },
    	"application/applixware": {
    	source: "apache",
    	extensions: [
    		"aw"
    	]
    },
    	"application/at+jwt": {
    	source: "iana"
    },
    	"application/atf": {
    	source: "iana"
    },
    	"application/atfx": {
    	source: "iana"
    },
    	"application/atom+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atom"
    	]
    },
    	"application/atomcat+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atomcat"
    	]
    },
    	"application/atomdeleted+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atomdeleted"
    	]
    },
    	"application/atomicmail": {
    	source: "iana"
    },
    	"application/atomsvc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atomsvc"
    	]
    },
    	"application/atsc-dwd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dwd"
    	]
    },
    	"application/atsc-dynamic-event-message": {
    	source: "iana"
    },
    	"application/atsc-held+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"held"
    	]
    },
    	"application/atsc-rdt+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/atsc-rsat+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rsat"
    	]
    },
    	"application/atxml": {
    	source: "iana"
    },
    	"application/auth-policy+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/bacnet-xdd+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/batch-smtp": {
    	source: "iana"
    },
    	"application/bdoc": {
    	compressible: false,
    	extensions: [
    		"bdoc"
    	]
    },
    	"application/beep+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/calendar+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/calendar+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xcs"
    	]
    },
    	"application/call-completion": {
    	source: "iana"
    },
    	"application/cals-1840": {
    	source: "iana"
    },
    	"application/captive+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/cbor": {
    	source: "iana"
    },
    	"application/cbor-seq": {
    	source: "iana"
    },
    	"application/cccex": {
    	source: "iana"
    },
    	"application/ccmp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ccxml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ccxml"
    	]
    },
    	"application/cdfx+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"cdfx"
    	]
    },
    	"application/cdmi-capability": {
    	source: "iana",
    	extensions: [
    		"cdmia"
    	]
    },
    	"application/cdmi-container": {
    	source: "iana",
    	extensions: [
    		"cdmic"
    	]
    },
    	"application/cdmi-domain": {
    	source: "iana",
    	extensions: [
    		"cdmid"
    	]
    },
    	"application/cdmi-object": {
    	source: "iana",
    	extensions: [
    		"cdmio"
    	]
    },
    	"application/cdmi-queue": {
    	source: "iana",
    	extensions: [
    		"cdmiq"
    	]
    },
    	"application/cdni": {
    	source: "iana"
    },
    	"application/cea": {
    	source: "iana"
    },
    	"application/cea-2018+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cellml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cfw": {
    	source: "iana"
    },
    	"application/city+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/clr": {
    	source: "iana"
    },
    	"application/clue+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/clue_info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cms": {
    	source: "iana"
    },
    	"application/cnrp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/coap-group+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/coap-payload": {
    	source: "iana"
    },
    	"application/commonground": {
    	source: "iana"
    },
    	"application/conference-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cose": {
    	source: "iana"
    },
    	"application/cose-key": {
    	source: "iana"
    },
    	"application/cose-key-set": {
    	source: "iana"
    },
    	"application/cpl+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"cpl"
    	]
    },
    	"application/csrattrs": {
    	source: "iana"
    },
    	"application/csta+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cstadata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/csvm+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/cu-seeme": {
    	source: "apache",
    	extensions: [
    		"cu"
    	]
    },
    	"application/cwt": {
    	source: "iana"
    },
    	"application/cybercash": {
    	source: "iana"
    },
    	"application/dart": {
    	compressible: true
    },
    	"application/dash+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mpd"
    	]
    },
    	"application/dash-patch+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mpp"
    	]
    },
    	"application/dashdelta": {
    	source: "iana"
    },
    	"application/davmount+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"davmount"
    	]
    },
    	"application/dca-rft": {
    	source: "iana"
    },
    	"application/dcd": {
    	source: "iana"
    },
    	"application/dec-dx": {
    	source: "iana"
    },
    	"application/dialog-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/dicom": {
    	source: "iana"
    },
    	"application/dicom+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/dicom+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/dii": {
    	source: "iana"
    },
    	"application/dit": {
    	source: "iana"
    },
    	"application/dns": {
    	source: "iana"
    },
    	"application/dns+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/dns-message": {
    	source: "iana"
    },
    	"application/docbook+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"dbk"
    	]
    },
    	"application/dots+cbor": {
    	source: "iana"
    },
    	"application/dskpp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/dssc+der": {
    	source: "iana",
    	extensions: [
    		"dssc"
    	]
    },
    	"application/dssc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xdssc"
    	]
    },
    	"application/dvcs": {
    	source: "iana"
    },
    	"application/ecmascript": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"es",
    		"ecma"
    	]
    },
    	"application/edi-consent": {
    	source: "iana"
    },
    	"application/edi-x12": {
    	source: "iana",
    	compressible: false
    },
    	"application/edifact": {
    	source: "iana",
    	compressible: false
    },
    	"application/efi": {
    	source: "iana"
    },
    	"application/elm+json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/elm+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.cap+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/emergencycalldata.comment+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.control+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.deviceinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.ecall.msd": {
    	source: "iana"
    },
    	"application/emergencycalldata.providerinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.serviceinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.subscriberinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.veds+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emma+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"emma"
    	]
    },
    	"application/emotionml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"emotionml"
    	]
    },
    	"application/encaprtp": {
    	source: "iana"
    },
    	"application/epp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/epub+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"epub"
    	]
    },
    	"application/eshop": {
    	source: "iana"
    },
    	"application/exi": {
    	source: "iana",
    	extensions: [
    		"exi"
    	]
    },
    	"application/expect-ct-report+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/express": {
    	source: "iana",
    	extensions: [
    		"exp"
    	]
    },
    	"application/fastinfoset": {
    	source: "iana"
    },
    	"application/fastsoap": {
    	source: "iana"
    },
    	"application/fdt+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"fdt"
    	]
    },
    	"application/fhir+json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/fhir+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/fido.trusted-apps+json": {
    	compressible: true
    },
    	"application/fits": {
    	source: "iana"
    },
    	"application/flexfec": {
    	source: "iana"
    },
    	"application/font-sfnt": {
    	source: "iana"
    },
    	"application/font-tdpfr": {
    	source: "iana",
    	extensions: [
    		"pfr"
    	]
    },
    	"application/font-woff": {
    	source: "iana",
    	compressible: false
    },
    	"application/framework-attributes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/geo+json": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"geojson"
    	]
    },
    	"application/geo+json-seq": {
    	source: "iana"
    },
    	"application/geopackage+sqlite3": {
    	source: "iana"
    },
    	"application/geoxacml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/gltf-buffer": {
    	source: "iana"
    },
    	"application/gml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"gml"
    	]
    },
    	"application/gpx+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"gpx"
    	]
    },
    	"application/gxf": {
    	source: "apache",
    	extensions: [
    		"gxf"
    	]
    },
    	"application/gzip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"gz"
    	]
    },
    	"application/h224": {
    	source: "iana"
    },
    	"application/held+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/hjson": {
    	extensions: [
    		"hjson"
    	]
    },
    	"application/http": {
    	source: "iana"
    },
    	"application/hyperstudio": {
    	source: "iana",
    	extensions: [
    		"stk"
    	]
    },
    	"application/ibe-key-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ibe-pkg-reply+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ibe-pp-data": {
    	source: "iana"
    },
    	"application/iges": {
    	source: "iana"
    },
    	"application/im-iscomposing+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/index": {
    	source: "iana"
    },
    	"application/index.cmd": {
    	source: "iana"
    },
    	"application/index.obj": {
    	source: "iana"
    },
    	"application/index.response": {
    	source: "iana"
    },
    	"application/index.vnd": {
    	source: "iana"
    },
    	"application/inkml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ink",
    		"inkml"
    	]
    },
    	"application/iotp": {
    	source: "iana"
    },
    	"application/ipfix": {
    	source: "iana",
    	extensions: [
    		"ipfix"
    	]
    },
    	"application/ipp": {
    	source: "iana"
    },
    	"application/isup": {
    	source: "iana"
    },
    	"application/its+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"its"
    	]
    },
    	"application/java-archive": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"jar",
    		"war",
    		"ear"
    	]
    },
    	"application/java-serialized-object": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"ser"
    	]
    },
    	"application/java-vm": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"class"
    	]
    },
    	"application/javascript": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"js",
    		"mjs"
    	]
    },
    	"application/jf2feed+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jose": {
    	source: "iana"
    },
    	"application/jose+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jrd+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jscalendar+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"json",
    		"map"
    	]
    },
    	"application/json-patch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/json-seq": {
    	source: "iana"
    },
    	"application/json5": {
    	extensions: [
    		"json5"
    	]
    },
    	"application/jsonml+json": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"jsonml"
    	]
    },
    	"application/jwk+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jwk-set+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jwt": {
    	source: "iana"
    },
    	"application/kpml-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/kpml-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ld+json": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"jsonld"
    	]
    },
    	"application/lgr+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lgr"
    	]
    },
    	"application/link-format": {
    	source: "iana"
    },
    	"application/load-control+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/lost+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lostxml"
    	]
    },
    	"application/lostsync+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/lpf+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/lxf": {
    	source: "iana"
    },
    	"application/mac-binhex40": {
    	source: "iana",
    	extensions: [
    		"hqx"
    	]
    },
    	"application/mac-compactpro": {
    	source: "apache",
    	extensions: [
    		"cpt"
    	]
    },
    	"application/macwriteii": {
    	source: "iana"
    },
    	"application/mads+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mads"
    	]
    },
    	"application/manifest+json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"webmanifest"
    	]
    },
    	"application/marc": {
    	source: "iana",
    	extensions: [
    		"mrc"
    	]
    },
    	"application/marcxml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mrcx"
    	]
    },
    	"application/mathematica": {
    	source: "iana",
    	extensions: [
    		"ma",
    		"nb",
    		"mb"
    	]
    },
    	"application/mathml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mathml"
    	]
    },
    	"application/mathml-content+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mathml-presentation+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-associated-procedure-description+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-deregister+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-envelope+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-msk+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-msk-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-protection-description+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-reception-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-register+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-register-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-schedule+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-user-service-description+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbox": {
    	source: "iana",
    	extensions: [
    		"mbox"
    	]
    },
    	"application/media-policy-dataset+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mpf"
    	]
    },
    	"application/media_control+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mediaservercontrol+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mscml"
    	]
    },
    	"application/merge-patch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/metalink+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"metalink"
    	]
    },
    	"application/metalink4+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"meta4"
    	]
    },
    	"application/mets+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mets"
    	]
    },
    	"application/mf4": {
    	source: "iana"
    },
    	"application/mikey": {
    	source: "iana"
    },
    	"application/mipc": {
    	source: "iana"
    },
    	"application/missing-blocks+cbor-seq": {
    	source: "iana"
    },
    	"application/mmt-aei+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"maei"
    	]
    },
    	"application/mmt-usd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"musd"
    	]
    },
    	"application/mods+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mods"
    	]
    },
    	"application/moss-keys": {
    	source: "iana"
    },
    	"application/moss-signature": {
    	source: "iana"
    },
    	"application/mosskey-data": {
    	source: "iana"
    },
    	"application/mosskey-request": {
    	source: "iana"
    },
    	"application/mp21": {
    	source: "iana",
    	extensions: [
    		"m21",
    		"mp21"
    	]
    },
    	"application/mp4": {
    	source: "iana",
    	extensions: [
    		"mp4s",
    		"m4p"
    	]
    },
    	"application/mpeg4-generic": {
    	source: "iana"
    },
    	"application/mpeg4-iod": {
    	source: "iana"
    },
    	"application/mpeg4-iod-xmt": {
    	source: "iana"
    },
    	"application/mrb-consumer+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mrb-publish+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/msc-ivr+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/msc-mixer+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/msword": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"doc",
    		"dot"
    	]
    },
    	"application/mud+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/multipart-core": {
    	source: "iana"
    },
    	"application/mxf": {
    	source: "iana",
    	extensions: [
    		"mxf"
    	]
    },
    	"application/n-quads": {
    	source: "iana",
    	extensions: [
    		"nq"
    	]
    },
    	"application/n-triples": {
    	source: "iana",
    	extensions: [
    		"nt"
    	]
    },
    	"application/nasdata": {
    	source: "iana"
    },
    	"application/news-checkgroups": {
    	source: "iana",
    	charset: "US-ASCII"
    },
    	"application/news-groupinfo": {
    	source: "iana",
    	charset: "US-ASCII"
    },
    	"application/news-transmission": {
    	source: "iana"
    },
    	"application/nlsml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/node": {
    	source: "iana",
    	extensions: [
    		"cjs"
    	]
    },
    	"application/nss": {
    	source: "iana"
    },
    	"application/oauth-authz-req+jwt": {
    	source: "iana"
    },
    	"application/oblivious-dns-message": {
    	source: "iana"
    },
    	"application/ocsp-request": {
    	source: "iana"
    },
    	"application/ocsp-response": {
    	source: "iana"
    },
    	"application/octet-stream": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"bin",
    		"dms",
    		"lrf",
    		"mar",
    		"so",
    		"dist",
    		"distz",
    		"pkg",
    		"bpk",
    		"dump",
    		"elc",
    		"deploy",
    		"exe",
    		"dll",
    		"deb",
    		"dmg",
    		"iso",
    		"img",
    		"msi",
    		"msp",
    		"msm",
    		"buffer"
    	]
    },
    	"application/oda": {
    	source: "iana",
    	extensions: [
    		"oda"
    	]
    },
    	"application/odm+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/odx": {
    	source: "iana"
    },
    	"application/oebps-package+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"opf"
    	]
    },
    	"application/ogg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ogx"
    	]
    },
    	"application/omdoc+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"omdoc"
    	]
    },
    	"application/onenote": {
    	source: "apache",
    	extensions: [
    		"onetoc",
    		"onetoc2",
    		"onetmp",
    		"onepkg"
    	]
    },
    	"application/opc-nodeset+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/oscore": {
    	source: "iana"
    },
    	"application/oxps": {
    	source: "iana",
    	extensions: [
    		"oxps"
    	]
    },
    	"application/p21": {
    	source: "iana"
    },
    	"application/p21+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/p2p-overlay+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"relo"
    	]
    },
    	"application/parityfec": {
    	source: "iana"
    },
    	"application/passport": {
    	source: "iana"
    },
    	"application/patch-ops-error+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xer"
    	]
    },
    	"application/pdf": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"pdf"
    	]
    },
    	"application/pdx": {
    	source: "iana"
    },
    	"application/pem-certificate-chain": {
    	source: "iana"
    },
    	"application/pgp-encrypted": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"pgp"
    	]
    },
    	"application/pgp-keys": {
    	source: "iana",
    	extensions: [
    		"asc"
    	]
    },
    	"application/pgp-signature": {
    	source: "iana",
    	extensions: [
    		"asc",
    		"sig"
    	]
    },
    	"application/pics-rules": {
    	source: "apache",
    	extensions: [
    		"prf"
    	]
    },
    	"application/pidf+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/pidf-diff+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/pkcs10": {
    	source: "iana",
    	extensions: [
    		"p10"
    	]
    },
    	"application/pkcs12": {
    	source: "iana"
    },
    	"application/pkcs7-mime": {
    	source: "iana",
    	extensions: [
    		"p7m",
    		"p7c"
    	]
    },
    	"application/pkcs7-signature": {
    	source: "iana",
    	extensions: [
    		"p7s"
    	]
    },
    	"application/pkcs8": {
    	source: "iana",
    	extensions: [
    		"p8"
    	]
    },
    	"application/pkcs8-encrypted": {
    	source: "iana"
    },
    	"application/pkix-attr-cert": {
    	source: "iana",
    	extensions: [
    		"ac"
    	]
    },
    	"application/pkix-cert": {
    	source: "iana",
    	extensions: [
    		"cer"
    	]
    },
    	"application/pkix-crl": {
    	source: "iana",
    	extensions: [
    		"crl"
    	]
    },
    	"application/pkix-pkipath": {
    	source: "iana",
    	extensions: [
    		"pkipath"
    	]
    },
    	"application/pkixcmp": {
    	source: "iana",
    	extensions: [
    		"pki"
    	]
    },
    	"application/pls+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"pls"
    	]
    },
    	"application/poc-settings+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/postscript": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ai",
    		"eps",
    		"ps"
    	]
    },
    	"application/ppsp-tracker+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/problem+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/problem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/provenance+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"provx"
    	]
    },
    	"application/prs.alvestrand.titrax-sheet": {
    	source: "iana"
    },
    	"application/prs.cww": {
    	source: "iana",
    	extensions: [
    		"cww"
    	]
    },
    	"application/prs.cyn": {
    	source: "iana",
    	charset: "7-BIT"
    },
    	"application/prs.hpub+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/prs.nprend": {
    	source: "iana"
    },
    	"application/prs.plucker": {
    	source: "iana"
    },
    	"application/prs.rdf-xml-crypt": {
    	source: "iana"
    },
    	"application/prs.xsf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/pskc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"pskcxml"
    	]
    },
    	"application/pvd+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/qsig": {
    	source: "iana"
    },
    	"application/raml+yaml": {
    	compressible: true,
    	extensions: [
    		"raml"
    	]
    },
    	"application/raptorfec": {
    	source: "iana"
    },
    	"application/rdap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/rdf+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rdf",
    		"owl"
    	]
    },
    	"application/reginfo+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rif"
    	]
    },
    	"application/relax-ng-compact-syntax": {
    	source: "iana",
    	extensions: [
    		"rnc"
    	]
    },
    	"application/remote-printing": {
    	source: "iana"
    },
    	"application/reputon+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/resource-lists+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rl"
    	]
    },
    	"application/resource-lists-diff+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rld"
    	]
    },
    	"application/rfc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/riscos": {
    	source: "iana"
    },
    	"application/rlmi+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/rls-services+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rs"
    	]
    },
    	"application/route-apd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rapd"
    	]
    },
    	"application/route-s-tsid+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sls"
    	]
    },
    	"application/route-usd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rusd"
    	]
    },
    	"application/rpki-ghostbusters": {
    	source: "iana",
    	extensions: [
    		"gbr"
    	]
    },
    	"application/rpki-manifest": {
    	source: "iana",
    	extensions: [
    		"mft"
    	]
    },
    	"application/rpki-publication": {
    	source: "iana"
    },
    	"application/rpki-roa": {
    	source: "iana",
    	extensions: [
    		"roa"
    	]
    },
    	"application/rpki-updown": {
    	source: "iana"
    },
    	"application/rsd+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"rsd"
    	]
    },
    	"application/rss+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"rss"
    	]
    },
    	"application/rtf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rtf"
    	]
    },
    	"application/rtploopback": {
    	source: "iana"
    },
    	"application/rtx": {
    	source: "iana"
    },
    	"application/samlassertion+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/samlmetadata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sarif+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/sarif-external-properties+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/sbe": {
    	source: "iana"
    },
    	"application/sbml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sbml"
    	]
    },
    	"application/scaip+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/scim+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/scvp-cv-request": {
    	source: "iana",
    	extensions: [
    		"scq"
    	]
    },
    	"application/scvp-cv-response": {
    	source: "iana",
    	extensions: [
    		"scs"
    	]
    },
    	"application/scvp-vp-request": {
    	source: "iana",
    	extensions: [
    		"spq"
    	]
    },
    	"application/scvp-vp-response": {
    	source: "iana",
    	extensions: [
    		"spp"
    	]
    },
    	"application/sdp": {
    	source: "iana",
    	extensions: [
    		"sdp"
    	]
    },
    	"application/secevent+jwt": {
    	source: "iana"
    },
    	"application/senml+cbor": {
    	source: "iana"
    },
    	"application/senml+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/senml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"senmlx"
    	]
    },
    	"application/senml-etch+cbor": {
    	source: "iana"
    },
    	"application/senml-etch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/senml-exi": {
    	source: "iana"
    },
    	"application/sensml+cbor": {
    	source: "iana"
    },
    	"application/sensml+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/sensml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sensmlx"
    	]
    },
    	"application/sensml-exi": {
    	source: "iana"
    },
    	"application/sep+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sep-exi": {
    	source: "iana"
    },
    	"application/session-info": {
    	source: "iana"
    },
    	"application/set-payment": {
    	source: "iana"
    },
    	"application/set-payment-initiation": {
    	source: "iana",
    	extensions: [
    		"setpay"
    	]
    },
    	"application/set-registration": {
    	source: "iana"
    },
    	"application/set-registration-initiation": {
    	source: "iana",
    	extensions: [
    		"setreg"
    	]
    },
    	"application/sgml": {
    	source: "iana"
    },
    	"application/sgml-open-catalog": {
    	source: "iana"
    },
    	"application/shf+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"shf"
    	]
    },
    	"application/sieve": {
    	source: "iana",
    	extensions: [
    		"siv",
    		"sieve"
    	]
    },
    	"application/simple-filter+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/simple-message-summary": {
    	source: "iana"
    },
    	"application/simplesymbolcontainer": {
    	source: "iana"
    },
    	"application/sipc": {
    	source: "iana"
    },
    	"application/slate": {
    	source: "iana"
    },
    	"application/smil": {
    	source: "iana"
    },
    	"application/smil+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"smi",
    		"smil"
    	]
    },
    	"application/smpte336m": {
    	source: "iana"
    },
    	"application/soap+fastinfoset": {
    	source: "iana"
    },
    	"application/soap+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sparql-query": {
    	source: "iana",
    	extensions: [
    		"rq"
    	]
    },
    	"application/sparql-results+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"srx"
    	]
    },
    	"application/spdx+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/spirits-event+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sql": {
    	source: "iana"
    },
    	"application/srgs": {
    	source: "iana",
    	extensions: [
    		"gram"
    	]
    },
    	"application/srgs+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"grxml"
    	]
    },
    	"application/sru+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sru"
    	]
    },
    	"application/ssdl+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"ssdl"
    	]
    },
    	"application/ssml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ssml"
    	]
    },
    	"application/stix+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/swid+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"swidtag"
    	]
    },
    	"application/tamp-apex-update": {
    	source: "iana"
    },
    	"application/tamp-apex-update-confirm": {
    	source: "iana"
    },
    	"application/tamp-community-update": {
    	source: "iana"
    },
    	"application/tamp-community-update-confirm": {
    	source: "iana"
    },
    	"application/tamp-error": {
    	source: "iana"
    },
    	"application/tamp-sequence-adjust": {
    	source: "iana"
    },
    	"application/tamp-sequence-adjust-confirm": {
    	source: "iana"
    },
    	"application/tamp-status-query": {
    	source: "iana"
    },
    	"application/tamp-status-response": {
    	source: "iana"
    },
    	"application/tamp-update": {
    	source: "iana"
    },
    	"application/tamp-update-confirm": {
    	source: "iana"
    },
    	"application/tar": {
    	compressible: true
    },
    	"application/taxii+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/td+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/tei+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"tei",
    		"teicorpus"
    	]
    },
    	"application/tetra_isi": {
    	source: "iana"
    },
    	"application/thraud+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"tfi"
    	]
    },
    	"application/timestamp-query": {
    	source: "iana"
    },
    	"application/timestamp-reply": {
    	source: "iana"
    },
    	"application/timestamped-data": {
    	source: "iana",
    	extensions: [
    		"tsd"
    	]
    },
    	"application/tlsrpt+gzip": {
    	source: "iana"
    },
    	"application/tlsrpt+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/tnauthlist": {
    	source: "iana"
    },
    	"application/token-introspection+jwt": {
    	source: "iana"
    },
    	"application/toml": {
    	compressible: true,
    	extensions: [
    		"toml"
    	]
    },
    	"application/trickle-ice-sdpfrag": {
    	source: "iana"
    },
    	"application/trig": {
    	source: "iana",
    	extensions: [
    		"trig"
    	]
    },
    	"application/ttml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ttml"
    	]
    },
    	"application/tve-trigger": {
    	source: "iana"
    },
    	"application/tzif": {
    	source: "iana"
    },
    	"application/tzif-leap": {
    	source: "iana"
    },
    	"application/ubjson": {
    	compressible: false,
    	extensions: [
    		"ubj"
    	]
    },
    	"application/ulpfec": {
    	source: "iana"
    },
    	"application/urc-grpsheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/urc-ressheet+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rsheet"
    	]
    },
    	"application/urc-targetdesc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"td"
    	]
    },
    	"application/urc-uisocketdesc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vcard+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vcard+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vemmi": {
    	source: "iana"
    },
    	"application/vividence.scriptfile": {
    	source: "apache"
    },
    	"application/vnd.1000minds.decision-model+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"1km"
    	]
    },
    	"application/vnd.3gpp-prose+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp-prose-pc3ch+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp-v2x-local-service-information": {
    	source: "iana"
    },
    	"application/vnd.3gpp.5gnas": {
    	source: "iana"
    },
    	"application/vnd.3gpp.access-transfer-events+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.bsf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.gmop+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.gtpc": {
    	source: "iana"
    },
    	"application/vnd.3gpp.interworking-data": {
    	source: "iana"
    },
    	"application/vnd.3gpp.lpp": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mc-signalling-ear": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-payload": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mcdata-service-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-signalling": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mcdata-ue-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-user-profile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-floor-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-location-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-service-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-signed+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-ue-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-user-profile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-location-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-service-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-ue-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-user-profile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mid-call+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.ngap": {
    	source: "iana"
    },
    	"application/vnd.3gpp.pfcp": {
    	source: "iana"
    },
    	"application/vnd.3gpp.pic-bw-large": {
    	source: "iana",
    	extensions: [
    		"plb"
    	]
    },
    	"application/vnd.3gpp.pic-bw-small": {
    	source: "iana",
    	extensions: [
    		"psb"
    	]
    },
    	"application/vnd.3gpp.pic-bw-var": {
    	source: "iana",
    	extensions: [
    		"pvb"
    	]
    },
    	"application/vnd.3gpp.s1ap": {
    	source: "iana"
    },
    	"application/vnd.3gpp.sms": {
    	source: "iana"
    },
    	"application/vnd.3gpp.sms+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.srvcc-ext+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.srvcc-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.state-and-event-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.ussd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp2.bcmcsinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp2.sms": {
    	source: "iana"
    },
    	"application/vnd.3gpp2.tcap": {
    	source: "iana",
    	extensions: [
    		"tcap"
    	]
    },
    	"application/vnd.3lightssoftware.imagescal": {
    	source: "iana"
    },
    	"application/vnd.3m.post-it-notes": {
    	source: "iana",
    	extensions: [
    		"pwn"
    	]
    },
    	"application/vnd.accpac.simply.aso": {
    	source: "iana",
    	extensions: [
    		"aso"
    	]
    },
    	"application/vnd.accpac.simply.imp": {
    	source: "iana",
    	extensions: [
    		"imp"
    	]
    },
    	"application/vnd.acucobol": {
    	source: "iana",
    	extensions: [
    		"acu"
    	]
    },
    	"application/vnd.acucorp": {
    	source: "iana",
    	extensions: [
    		"atc",
    		"acutc"
    	]
    },
    	"application/vnd.adobe.air-application-installer-package+zip": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"air"
    	]
    },
    	"application/vnd.adobe.flash.movie": {
    	source: "iana"
    },
    	"application/vnd.adobe.formscentral.fcdt": {
    	source: "iana",
    	extensions: [
    		"fcdt"
    	]
    },
    	"application/vnd.adobe.fxp": {
    	source: "iana",
    	extensions: [
    		"fxp",
    		"fxpl"
    	]
    },
    	"application/vnd.adobe.partial-upload": {
    	source: "iana"
    },
    	"application/vnd.adobe.xdp+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xdp"
    	]
    },
    	"application/vnd.adobe.xfdf": {
    	source: "iana",
    	extensions: [
    		"xfdf"
    	]
    },
    	"application/vnd.aether.imp": {
    	source: "iana"
    },
    	"application/vnd.afpc.afplinedata": {
    	source: "iana"
    },
    	"application/vnd.afpc.afplinedata-pagedef": {
    	source: "iana"
    },
    	"application/vnd.afpc.cmoca-cmresource": {
    	source: "iana"
    },
    	"application/vnd.afpc.foca-charset": {
    	source: "iana"
    },
    	"application/vnd.afpc.foca-codedfont": {
    	source: "iana"
    },
    	"application/vnd.afpc.foca-codepage": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-cmtable": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-formdef": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-mediummap": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-objectcontainer": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-overlay": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-pagesegment": {
    	source: "iana"
    },
    	"application/vnd.age": {
    	source: "iana",
    	extensions: [
    		"age"
    	]
    },
    	"application/vnd.ah-barcode": {
    	source: "iana"
    },
    	"application/vnd.ahead.space": {
    	source: "iana",
    	extensions: [
    		"ahead"
    	]
    },
    	"application/vnd.airzip.filesecure.azf": {
    	source: "iana",
    	extensions: [
    		"azf"
    	]
    },
    	"application/vnd.airzip.filesecure.azs": {
    	source: "iana",
    	extensions: [
    		"azs"
    	]
    },
    	"application/vnd.amadeus+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.amazon.ebook": {
    	source: "apache",
    	extensions: [
    		"azw"
    	]
    },
    	"application/vnd.amazon.mobi8-ebook": {
    	source: "iana"
    },
    	"application/vnd.americandynamics.acc": {
    	source: "iana",
    	extensions: [
    		"acc"
    	]
    },
    	"application/vnd.amiga.ami": {
    	source: "iana",
    	extensions: [
    		"ami"
    	]
    },
    	"application/vnd.amundsen.maze+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.android.ota": {
    	source: "iana"
    },
    	"application/vnd.android.package-archive": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"apk"
    	]
    },
    	"application/vnd.anki": {
    	source: "iana"
    },
    	"application/vnd.anser-web-certificate-issue-initiation": {
    	source: "iana",
    	extensions: [
    		"cii"
    	]
    },
    	"application/vnd.anser-web-funds-transfer-initiation": {
    	source: "apache",
    	extensions: [
    		"fti"
    	]
    },
    	"application/vnd.antix.game-component": {
    	source: "iana",
    	extensions: [
    		"atx"
    	]
    },
    	"application/vnd.apache.arrow.file": {
    	source: "iana"
    },
    	"application/vnd.apache.arrow.stream": {
    	source: "iana"
    },
    	"application/vnd.apache.thrift.binary": {
    	source: "iana"
    },
    	"application/vnd.apache.thrift.compact": {
    	source: "iana"
    },
    	"application/vnd.apache.thrift.json": {
    	source: "iana"
    },
    	"application/vnd.api+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.aplextor.warrp+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.apothekende.reservation+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.apple.installer+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mpkg"
    	]
    },
    	"application/vnd.apple.keynote": {
    	source: "iana",
    	extensions: [
    		"key"
    	]
    },
    	"application/vnd.apple.mpegurl": {
    	source: "iana",
    	extensions: [
    		"m3u8"
    	]
    },
    	"application/vnd.apple.numbers": {
    	source: "iana",
    	extensions: [
    		"numbers"
    	]
    },
    	"application/vnd.apple.pages": {
    	source: "iana",
    	extensions: [
    		"pages"
    	]
    },
    	"application/vnd.apple.pkpass": {
    	compressible: false,
    	extensions: [
    		"pkpass"
    	]
    },
    	"application/vnd.arastra.swi": {
    	source: "iana"
    },
    	"application/vnd.aristanetworks.swi": {
    	source: "iana",
    	extensions: [
    		"swi"
    	]
    },
    	"application/vnd.artisan+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.artsquare": {
    	source: "iana"
    },
    	"application/vnd.astraea-software.iota": {
    	source: "iana",
    	extensions: [
    		"iota"
    	]
    },
    	"application/vnd.audiograph": {
    	source: "iana",
    	extensions: [
    		"aep"
    	]
    },
    	"application/vnd.autopackage": {
    	source: "iana"
    },
    	"application/vnd.avalon+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.avistar+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.balsamiq.bmml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"bmml"
    	]
    },
    	"application/vnd.balsamiq.bmpr": {
    	source: "iana"
    },
    	"application/vnd.banana-accounting": {
    	source: "iana"
    },
    	"application/vnd.bbf.usp.error": {
    	source: "iana"
    },
    	"application/vnd.bbf.usp.msg": {
    	source: "iana"
    },
    	"application/vnd.bbf.usp.msg+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.bekitzur-stech+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.bint.med-content": {
    	source: "iana"
    },
    	"application/vnd.biopax.rdf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.blink-idb-value-wrapper": {
    	source: "iana"
    },
    	"application/vnd.blueice.multipass": {
    	source: "iana",
    	extensions: [
    		"mpm"
    	]
    },
    	"application/vnd.bluetooth.ep.oob": {
    	source: "iana"
    },
    	"application/vnd.bluetooth.le.oob": {
    	source: "iana"
    },
    	"application/vnd.bmi": {
    	source: "iana",
    	extensions: [
    		"bmi"
    	]
    },
    	"application/vnd.bpf": {
    	source: "iana"
    },
    	"application/vnd.bpf3": {
    	source: "iana"
    },
    	"application/vnd.businessobjects": {
    	source: "iana",
    	extensions: [
    		"rep"
    	]
    },
    	"application/vnd.byu.uapi+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cab-jscript": {
    	source: "iana"
    },
    	"application/vnd.canon-cpdl": {
    	source: "iana"
    },
    	"application/vnd.canon-lips": {
    	source: "iana"
    },
    	"application/vnd.capasystems-pg+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cendio.thinlinc.clientconf": {
    	source: "iana"
    },
    	"application/vnd.century-systems.tcp_stream": {
    	source: "iana"
    },
    	"application/vnd.chemdraw+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"cdxml"
    	]
    },
    	"application/vnd.chess-pgn": {
    	source: "iana"
    },
    	"application/vnd.chipnuts.karaoke-mmd": {
    	source: "iana",
    	extensions: [
    		"mmd"
    	]
    },
    	"application/vnd.ciedi": {
    	source: "iana"
    },
    	"application/vnd.cinderella": {
    	source: "iana",
    	extensions: [
    		"cdy"
    	]
    },
    	"application/vnd.cirpack.isdn-ext": {
    	source: "iana"
    },
    	"application/vnd.citationstyles.style+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"csl"
    	]
    },
    	"application/vnd.claymore": {
    	source: "iana",
    	extensions: [
    		"cla"
    	]
    },
    	"application/vnd.cloanto.rp9": {
    	source: "iana",
    	extensions: [
    		"rp9"
    	]
    },
    	"application/vnd.clonk.c4group": {
    	source: "iana",
    	extensions: [
    		"c4g",
    		"c4d",
    		"c4f",
    		"c4p",
    		"c4u"
    	]
    },
    	"application/vnd.cluetrust.cartomobile-config": {
    	source: "iana",
    	extensions: [
    		"c11amc"
    	]
    },
    	"application/vnd.cluetrust.cartomobile-config-pkg": {
    	source: "iana",
    	extensions: [
    		"c11amz"
    	]
    },
    	"application/vnd.coffeescript": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.document": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.document-template": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.presentation": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.presentation-template": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.spreadsheet": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.spreadsheet-template": {
    	source: "iana"
    },
    	"application/vnd.collection+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.collection.doc+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.collection.next+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.comicbook+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.comicbook-rar": {
    	source: "iana"
    },
    	"application/vnd.commerce-battelle": {
    	source: "iana"
    },
    	"application/vnd.commonspace": {
    	source: "iana",
    	extensions: [
    		"csp"
    	]
    },
    	"application/vnd.contact.cmsg": {
    	source: "iana",
    	extensions: [
    		"cdbcmsg"
    	]
    },
    	"application/vnd.coreos.ignition+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cosmocaller": {
    	source: "iana",
    	extensions: [
    		"cmc"
    	]
    },
    	"application/vnd.crick.clicker": {
    	source: "iana",
    	extensions: [
    		"clkx"
    	]
    },
    	"application/vnd.crick.clicker.keyboard": {
    	source: "iana",
    	extensions: [
    		"clkk"
    	]
    },
    	"application/vnd.crick.clicker.palette": {
    	source: "iana",
    	extensions: [
    		"clkp"
    	]
    },
    	"application/vnd.crick.clicker.template": {
    	source: "iana",
    	extensions: [
    		"clkt"
    	]
    },
    	"application/vnd.crick.clicker.wordbank": {
    	source: "iana",
    	extensions: [
    		"clkw"
    	]
    },
    	"application/vnd.criticaltools.wbs+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wbs"
    	]
    },
    	"application/vnd.cryptii.pipe+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.crypto-shade-file": {
    	source: "iana"
    },
    	"application/vnd.cryptomator.encrypted": {
    	source: "iana"
    },
    	"application/vnd.cryptomator.vault": {
    	source: "iana"
    },
    	"application/vnd.ctc-posml": {
    	source: "iana",
    	extensions: [
    		"pml"
    	]
    },
    	"application/vnd.ctct.ws+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cups-pdf": {
    	source: "iana"
    },
    	"application/vnd.cups-postscript": {
    	source: "iana"
    },
    	"application/vnd.cups-ppd": {
    	source: "iana",
    	extensions: [
    		"ppd"
    	]
    },
    	"application/vnd.cups-raster": {
    	source: "iana"
    },
    	"application/vnd.cups-raw": {
    	source: "iana"
    },
    	"application/vnd.curl": {
    	source: "iana"
    },
    	"application/vnd.curl.car": {
    	source: "apache",
    	extensions: [
    		"car"
    	]
    },
    	"application/vnd.curl.pcurl": {
    	source: "apache",
    	extensions: [
    		"pcurl"
    	]
    },
    	"application/vnd.cyan.dean.root+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cybank": {
    	source: "iana"
    },
    	"application/vnd.cyclonedx+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cyclonedx+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.d2l.coursepackage1p0+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.d3m-dataset": {
    	source: "iana"
    },
    	"application/vnd.d3m-problem": {
    	source: "iana"
    },
    	"application/vnd.dart": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dart"
    	]
    },
    	"application/vnd.data-vision.rdz": {
    	source: "iana",
    	extensions: [
    		"rdz"
    	]
    },
    	"application/vnd.datapackage+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dataresource+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dbf": {
    	source: "iana",
    	extensions: [
    		"dbf"
    	]
    },
    	"application/vnd.debian.binary-package": {
    	source: "iana"
    },
    	"application/vnd.dece.data": {
    	source: "iana",
    	extensions: [
    		"uvf",
    		"uvvf",
    		"uvd",
    		"uvvd"
    	]
    },
    	"application/vnd.dece.ttml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"uvt",
    		"uvvt"
    	]
    },
    	"application/vnd.dece.unspecified": {
    	source: "iana",
    	extensions: [
    		"uvx",
    		"uvvx"
    	]
    },
    	"application/vnd.dece.zip": {
    	source: "iana",
    	extensions: [
    		"uvz",
    		"uvvz"
    	]
    },
    	"application/vnd.denovo.fcselayout-link": {
    	source: "iana",
    	extensions: [
    		"fe_launch"
    	]
    },
    	"application/vnd.desmume.movie": {
    	source: "iana"
    },
    	"application/vnd.dir-bi.plate-dl-nosuffix": {
    	source: "iana"
    },
    	"application/vnd.dm.delegation+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dna": {
    	source: "iana",
    	extensions: [
    		"dna"
    	]
    },
    	"application/vnd.document+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dolby.mlp": {
    	source: "apache",
    	extensions: [
    		"mlp"
    	]
    },
    	"application/vnd.dolby.mobile.1": {
    	source: "iana"
    },
    	"application/vnd.dolby.mobile.2": {
    	source: "iana"
    },
    	"application/vnd.doremir.scorecloud-binary-document": {
    	source: "iana"
    },
    	"application/vnd.dpgraph": {
    	source: "iana",
    	extensions: [
    		"dpg"
    	]
    },
    	"application/vnd.dreamfactory": {
    	source: "iana",
    	extensions: [
    		"dfac"
    	]
    },
    	"application/vnd.drive+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ds-keypoint": {
    	source: "apache",
    	extensions: [
    		"kpxx"
    	]
    },
    	"application/vnd.dtg.local": {
    	source: "iana"
    },
    	"application/vnd.dtg.local.flash": {
    	source: "iana"
    },
    	"application/vnd.dtg.local.html": {
    	source: "iana"
    },
    	"application/vnd.dvb.ait": {
    	source: "iana",
    	extensions: [
    		"ait"
    	]
    },
    	"application/vnd.dvb.dvbisl+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.dvbj": {
    	source: "iana"
    },
    	"application/vnd.dvb.esgcontainer": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcdftnotifaccess": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcesgaccess": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcesgaccess2": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcesgpdd": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcroaming": {
    	source: "iana"
    },
    	"application/vnd.dvb.iptv.alfec-base": {
    	source: "iana"
    },
    	"application/vnd.dvb.iptv.alfec-enhancement": {
    	source: "iana"
    },
    	"application/vnd.dvb.notif-aggregate-root+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-container+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-generic+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-ia-msglist+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-ia-registration-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-ia-registration-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-init+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.pfr": {
    	source: "iana"
    },
    	"application/vnd.dvb.service": {
    	source: "iana",
    	extensions: [
    		"svc"
    	]
    },
    	"application/vnd.dxr": {
    	source: "iana"
    },
    	"application/vnd.dynageo": {
    	source: "iana",
    	extensions: [
    		"geo"
    	]
    },
    	"application/vnd.dzr": {
    	source: "iana"
    },
    	"application/vnd.easykaraoke.cdgdownload": {
    	source: "iana"
    },
    	"application/vnd.ecdis-update": {
    	source: "iana"
    },
    	"application/vnd.ecip.rlp": {
    	source: "iana"
    },
    	"application/vnd.eclipse.ditto+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ecowin.chart": {
    	source: "iana",
    	extensions: [
    		"mag"
    	]
    },
    	"application/vnd.ecowin.filerequest": {
    	source: "iana"
    },
    	"application/vnd.ecowin.fileupdate": {
    	source: "iana"
    },
    	"application/vnd.ecowin.series": {
    	source: "iana"
    },
    	"application/vnd.ecowin.seriesrequest": {
    	source: "iana"
    },
    	"application/vnd.ecowin.seriesupdate": {
    	source: "iana"
    },
    	"application/vnd.efi.img": {
    	source: "iana"
    },
    	"application/vnd.efi.iso": {
    	source: "iana"
    },
    	"application/vnd.emclient.accessrequest+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.enliven": {
    	source: "iana",
    	extensions: [
    		"nml"
    	]
    },
    	"application/vnd.enphase.envoy": {
    	source: "iana"
    },
    	"application/vnd.eprints.data+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.epson.esf": {
    	source: "iana",
    	extensions: [
    		"esf"
    	]
    },
    	"application/vnd.epson.msf": {
    	source: "iana",
    	extensions: [
    		"msf"
    	]
    },
    	"application/vnd.epson.quickanime": {
    	source: "iana",
    	extensions: [
    		"qam"
    	]
    },
    	"application/vnd.epson.salt": {
    	source: "iana",
    	extensions: [
    		"slt"
    	]
    },
    	"application/vnd.epson.ssf": {
    	source: "iana",
    	extensions: [
    		"ssf"
    	]
    },
    	"application/vnd.ericsson.quickcall": {
    	source: "iana"
    },
    	"application/vnd.espass-espass+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.eszigno3+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"es3",
    		"et3"
    	]
    },
    	"application/vnd.etsi.aoc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.asic-e+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.etsi.asic-s+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.etsi.cug+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvcommand+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvdiscovery+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsad-bc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsad-cod+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsad-npvr+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvservice+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsync+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvueprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.mcid+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.mheg5": {
    	source: "iana"
    },
    	"application/vnd.etsi.overload-control-policy-dataset+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.pstn+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.sci+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.simservs+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.timestamp-token": {
    	source: "iana"
    },
    	"application/vnd.etsi.tsl+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.tsl.der": {
    	source: "iana"
    },
    	"application/vnd.eu.kasparian.car+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.eudora.data": {
    	source: "iana"
    },
    	"application/vnd.evolv.ecig.profile": {
    	source: "iana"
    },
    	"application/vnd.evolv.ecig.settings": {
    	source: "iana"
    },
    	"application/vnd.evolv.ecig.theme": {
    	source: "iana"
    },
    	"application/vnd.exstream-empower+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.exstream-package": {
    	source: "iana"
    },
    	"application/vnd.ezpix-album": {
    	source: "iana",
    	extensions: [
    		"ez2"
    	]
    },
    	"application/vnd.ezpix-package": {
    	source: "iana",
    	extensions: [
    		"ez3"
    	]
    },
    	"application/vnd.f-secure.mobile": {
    	source: "iana"
    },
    	"application/vnd.familysearch.gedcom+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.fastcopy-disk-image": {
    	source: "iana"
    },
    	"application/vnd.fdf": {
    	source: "iana",
    	extensions: [
    		"fdf"
    	]
    },
    	"application/vnd.fdsn.mseed": {
    	source: "iana",
    	extensions: [
    		"mseed"
    	]
    },
    	"application/vnd.fdsn.seed": {
    	source: "iana",
    	extensions: [
    		"seed",
    		"dataless"
    	]
    },
    	"application/vnd.ffsns": {
    	source: "iana"
    },
    	"application/vnd.ficlab.flb+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.filmit.zfc": {
    	source: "iana"
    },
    	"application/vnd.fints": {
    	source: "iana"
    },
    	"application/vnd.firemonkeys.cloudcell": {
    	source: "iana"
    },
    	"application/vnd.flographit": {
    	source: "iana",
    	extensions: [
    		"gph"
    	]
    },
    	"application/vnd.fluxtime.clip": {
    	source: "iana",
    	extensions: [
    		"ftc"
    	]
    },
    	"application/vnd.font-fontforge-sfd": {
    	source: "iana"
    },
    	"application/vnd.framemaker": {
    	source: "iana",
    	extensions: [
    		"fm",
    		"frame",
    		"maker",
    		"book"
    	]
    },
    	"application/vnd.frogans.fnc": {
    	source: "iana",
    	extensions: [
    		"fnc"
    	]
    },
    	"application/vnd.frogans.ltf": {
    	source: "iana",
    	extensions: [
    		"ltf"
    	]
    },
    	"application/vnd.fsc.weblaunch": {
    	source: "iana",
    	extensions: [
    		"fsc"
    	]
    },
    	"application/vnd.fujifilm.fb.docuworks": {
    	source: "iana"
    },
    	"application/vnd.fujifilm.fb.docuworks.binder": {
    	source: "iana"
    },
    	"application/vnd.fujifilm.fb.docuworks.container": {
    	source: "iana"
    },
    	"application/vnd.fujifilm.fb.jfi+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.fujitsu.oasys": {
    	source: "iana",
    	extensions: [
    		"oas"
    	]
    },
    	"application/vnd.fujitsu.oasys2": {
    	source: "iana",
    	extensions: [
    		"oa2"
    	]
    },
    	"application/vnd.fujitsu.oasys3": {
    	source: "iana",
    	extensions: [
    		"oa3"
    	]
    },
    	"application/vnd.fujitsu.oasysgp": {
    	source: "iana",
    	extensions: [
    		"fg5"
    	]
    },
    	"application/vnd.fujitsu.oasysprs": {
    	source: "iana",
    	extensions: [
    		"bh2"
    	]
    },
    	"application/vnd.fujixerox.art-ex": {
    	source: "iana"
    },
    	"application/vnd.fujixerox.art4": {
    	source: "iana"
    },
    	"application/vnd.fujixerox.ddd": {
    	source: "iana",
    	extensions: [
    		"ddd"
    	]
    },
    	"application/vnd.fujixerox.docuworks": {
    	source: "iana",
    	extensions: [
    		"xdw"
    	]
    },
    	"application/vnd.fujixerox.docuworks.binder": {
    	source: "iana",
    	extensions: [
    		"xbd"
    	]
    },
    	"application/vnd.fujixerox.docuworks.container": {
    	source: "iana"
    },
    	"application/vnd.fujixerox.hbpl": {
    	source: "iana"
    },
    	"application/vnd.fut-misnet": {
    	source: "iana"
    },
    	"application/vnd.futoin+cbor": {
    	source: "iana"
    },
    	"application/vnd.futoin+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.fuzzysheet": {
    	source: "iana",
    	extensions: [
    		"fzs"
    	]
    },
    	"application/vnd.genomatix.tuxedo": {
    	source: "iana",
    	extensions: [
    		"txd"
    	]
    },
    	"application/vnd.gentics.grd+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.geo+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.geocube+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.geogebra.file": {
    	source: "iana",
    	extensions: [
    		"ggb"
    	]
    },
    	"application/vnd.geogebra.slides": {
    	source: "iana"
    },
    	"application/vnd.geogebra.tool": {
    	source: "iana",
    	extensions: [
    		"ggt"
    	]
    },
    	"application/vnd.geometry-explorer": {
    	source: "iana",
    	extensions: [
    		"gex",
    		"gre"
    	]
    },
    	"application/vnd.geonext": {
    	source: "iana",
    	extensions: [
    		"gxt"
    	]
    },
    	"application/vnd.geoplan": {
    	source: "iana",
    	extensions: [
    		"g2w"
    	]
    },
    	"application/vnd.geospace": {
    	source: "iana",
    	extensions: [
    		"g3w"
    	]
    },
    	"application/vnd.gerber": {
    	source: "iana"
    },
    	"application/vnd.globalplatform.card-content-mgt": {
    	source: "iana"
    },
    	"application/vnd.globalplatform.card-content-mgt-response": {
    	source: "iana"
    },
    	"application/vnd.gmx": {
    	source: "iana",
    	extensions: [
    		"gmx"
    	]
    },
    	"application/vnd.google-apps.document": {
    	compressible: false,
    	extensions: [
    		"gdoc"
    	]
    },
    	"application/vnd.google-apps.presentation": {
    	compressible: false,
    	extensions: [
    		"gslides"
    	]
    },
    	"application/vnd.google-apps.spreadsheet": {
    	compressible: false,
    	extensions: [
    		"gsheet"
    	]
    },
    	"application/vnd.google-earth.kml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"kml"
    	]
    },
    	"application/vnd.google-earth.kmz": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"kmz"
    	]
    },
    	"application/vnd.gov.sk.e-form+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.gov.sk.e-form+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.gov.sk.xmldatacontainer+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.grafeq": {
    	source: "iana",
    	extensions: [
    		"gqf",
    		"gqs"
    	]
    },
    	"application/vnd.gridmp": {
    	source: "iana"
    },
    	"application/vnd.groove-account": {
    	source: "iana",
    	extensions: [
    		"gac"
    	]
    },
    	"application/vnd.groove-help": {
    	source: "iana",
    	extensions: [
    		"ghf"
    	]
    },
    	"application/vnd.groove-identity-message": {
    	source: "iana",
    	extensions: [
    		"gim"
    	]
    },
    	"application/vnd.groove-injector": {
    	source: "iana",
    	extensions: [
    		"grv"
    	]
    },
    	"application/vnd.groove-tool-message": {
    	source: "iana",
    	extensions: [
    		"gtm"
    	]
    },
    	"application/vnd.groove-tool-template": {
    	source: "iana",
    	extensions: [
    		"tpl"
    	]
    },
    	"application/vnd.groove-vcard": {
    	source: "iana",
    	extensions: [
    		"vcg"
    	]
    },
    	"application/vnd.hal+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hal+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"hal"
    	]
    },
    	"application/vnd.handheld-entertainment+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"zmm"
    	]
    },
    	"application/vnd.hbci": {
    	source: "iana",
    	extensions: [
    		"hbci"
    	]
    },
    	"application/vnd.hc+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hcl-bireports": {
    	source: "iana"
    },
    	"application/vnd.hdt": {
    	source: "iana"
    },
    	"application/vnd.heroku+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hhe.lesson-player": {
    	source: "iana",
    	extensions: [
    		"les"
    	]
    },
    	"application/vnd.hl7cda+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.hl7v2+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.hp-hpgl": {
    	source: "iana",
    	extensions: [
    		"hpgl"
    	]
    },
    	"application/vnd.hp-hpid": {
    	source: "iana",
    	extensions: [
    		"hpid"
    	]
    },
    	"application/vnd.hp-hps": {
    	source: "iana",
    	extensions: [
    		"hps"
    	]
    },
    	"application/vnd.hp-jlyt": {
    	source: "iana",
    	extensions: [
    		"jlt"
    	]
    },
    	"application/vnd.hp-pcl": {
    	source: "iana",
    	extensions: [
    		"pcl"
    	]
    },
    	"application/vnd.hp-pclxl": {
    	source: "iana",
    	extensions: [
    		"pclxl"
    	]
    },
    	"application/vnd.httphone": {
    	source: "iana"
    },
    	"application/vnd.hydrostatix.sof-data": {
    	source: "iana",
    	extensions: [
    		"sfd-hdstx"
    	]
    },
    	"application/vnd.hyper+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hyper-item+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hyperdrive+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hzn-3d-crossword": {
    	source: "iana"
    },
    	"application/vnd.ibm.afplinedata": {
    	source: "iana"
    },
    	"application/vnd.ibm.electronic-media": {
    	source: "iana"
    },
    	"application/vnd.ibm.minipay": {
    	source: "iana",
    	extensions: [
    		"mpy"
    	]
    },
    	"application/vnd.ibm.modcap": {
    	source: "iana",
    	extensions: [
    		"afp",
    		"listafp",
    		"list3820"
    	]
    },
    	"application/vnd.ibm.rights-management": {
    	source: "iana",
    	extensions: [
    		"irm"
    	]
    },
    	"application/vnd.ibm.secure-container": {
    	source: "iana",
    	extensions: [
    		"sc"
    	]
    },
    	"application/vnd.iccprofile": {
    	source: "iana",
    	extensions: [
    		"icc",
    		"icm"
    	]
    },
    	"application/vnd.ieee.1905": {
    	source: "iana"
    },
    	"application/vnd.igloader": {
    	source: "iana",
    	extensions: [
    		"igl"
    	]
    },
    	"application/vnd.imagemeter.folder+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.imagemeter.image+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.immervision-ivp": {
    	source: "iana",
    	extensions: [
    		"ivp"
    	]
    },
    	"application/vnd.immervision-ivu": {
    	source: "iana",
    	extensions: [
    		"ivu"
    	]
    },
    	"application/vnd.ims.imsccv1p1": {
    	source: "iana"
    },
    	"application/vnd.ims.imsccv1p2": {
    	source: "iana"
    },
    	"application/vnd.ims.imsccv1p3": {
    	source: "iana"
    },
    	"application/vnd.ims.lis.v2.result+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolproxy+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolproxy.id+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolsettings+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.informedcontrol.rms+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.informix-visionary": {
    	source: "iana"
    },
    	"application/vnd.infotech.project": {
    	source: "iana"
    },
    	"application/vnd.infotech.project+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.innopath.wamp.notification": {
    	source: "iana"
    },
    	"application/vnd.insors.igm": {
    	source: "iana",
    	extensions: [
    		"igm"
    	]
    },
    	"application/vnd.intercon.formnet": {
    	source: "iana",
    	extensions: [
    		"xpw",
    		"xpx"
    	]
    },
    	"application/vnd.intergeo": {
    	source: "iana",
    	extensions: [
    		"i2g"
    	]
    },
    	"application/vnd.intertrust.digibox": {
    	source: "iana"
    },
    	"application/vnd.intertrust.nncp": {
    	source: "iana"
    },
    	"application/vnd.intu.qbo": {
    	source: "iana",
    	extensions: [
    		"qbo"
    	]
    },
    	"application/vnd.intu.qfx": {
    	source: "iana",
    	extensions: [
    		"qfx"
    	]
    },
    	"application/vnd.iptc.g2.catalogitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.conceptitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.knowledgeitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.newsitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.newsmessage+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.packageitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.planningitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ipunplugged.rcprofile": {
    	source: "iana",
    	extensions: [
    		"rcprofile"
    	]
    },
    	"application/vnd.irepository.package+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"irp"
    	]
    },
    	"application/vnd.is-xpr": {
    	source: "iana",
    	extensions: [
    		"xpr"
    	]
    },
    	"application/vnd.isac.fcs": {
    	source: "iana",
    	extensions: [
    		"fcs"
    	]
    },
    	"application/vnd.iso11783-10+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.jam": {
    	source: "iana",
    	extensions: [
    		"jam"
    	]
    },
    	"application/vnd.japannet-directory-service": {
    	source: "iana"
    },
    	"application/vnd.japannet-jpnstore-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-payment-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-registration": {
    	source: "iana"
    },
    	"application/vnd.japannet-registration-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-setstore-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-verification": {
    	source: "iana"
    },
    	"application/vnd.japannet-verification-wakeup": {
    	source: "iana"
    },
    	"application/vnd.jcp.javame.midlet-rms": {
    	source: "iana",
    	extensions: [
    		"rms"
    	]
    },
    	"application/vnd.jisp": {
    	source: "iana",
    	extensions: [
    		"jisp"
    	]
    },
    	"application/vnd.joost.joda-archive": {
    	source: "iana",
    	extensions: [
    		"joda"
    	]
    },
    	"application/vnd.jsk.isdn-ngn": {
    	source: "iana"
    },
    	"application/vnd.kahootz": {
    	source: "iana",
    	extensions: [
    		"ktz",
    		"ktr"
    	]
    },
    	"application/vnd.kde.karbon": {
    	source: "iana",
    	extensions: [
    		"karbon"
    	]
    },
    	"application/vnd.kde.kchart": {
    	source: "iana",
    	extensions: [
    		"chrt"
    	]
    },
    	"application/vnd.kde.kformula": {
    	source: "iana",
    	extensions: [
    		"kfo"
    	]
    },
    	"application/vnd.kde.kivio": {
    	source: "iana",
    	extensions: [
    		"flw"
    	]
    },
    	"application/vnd.kde.kontour": {
    	source: "iana",
    	extensions: [
    		"kon"
    	]
    },
    	"application/vnd.kde.kpresenter": {
    	source: "iana",
    	extensions: [
    		"kpr",
    		"kpt"
    	]
    },
    	"application/vnd.kde.kspread": {
    	source: "iana",
    	extensions: [
    		"ksp"
    	]
    },
    	"application/vnd.kde.kword": {
    	source: "iana",
    	extensions: [
    		"kwd",
    		"kwt"
    	]
    },
    	"application/vnd.kenameaapp": {
    	source: "iana",
    	extensions: [
    		"htke"
    	]
    },
    	"application/vnd.kidspiration": {
    	source: "iana",
    	extensions: [
    		"kia"
    	]
    },
    	"application/vnd.kinar": {
    	source: "iana",
    	extensions: [
    		"kne",
    		"knp"
    	]
    },
    	"application/vnd.koan": {
    	source: "iana",
    	extensions: [
    		"skp",
    		"skd",
    		"skt",
    		"skm"
    	]
    },
    	"application/vnd.kodak-descriptor": {
    	source: "iana",
    	extensions: [
    		"sse"
    	]
    },
    	"application/vnd.las": {
    	source: "iana"
    },
    	"application/vnd.las.las+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.las.las+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lasxml"
    	]
    },
    	"application/vnd.laszip": {
    	source: "iana"
    },
    	"application/vnd.leap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.liberty-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.llamagraphics.life-balance.desktop": {
    	source: "iana",
    	extensions: [
    		"lbd"
    	]
    },
    	"application/vnd.llamagraphics.life-balance.exchange+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lbe"
    	]
    },
    	"application/vnd.logipipe.circuit+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.loom": {
    	source: "iana"
    },
    	"application/vnd.lotus-1-2-3": {
    	source: "iana",
    	extensions: [
    		"123"
    	]
    },
    	"application/vnd.lotus-approach": {
    	source: "iana",
    	extensions: [
    		"apr"
    	]
    },
    	"application/vnd.lotus-freelance": {
    	source: "iana",
    	extensions: [
    		"pre"
    	]
    },
    	"application/vnd.lotus-notes": {
    	source: "iana",
    	extensions: [
    		"nsf"
    	]
    },
    	"application/vnd.lotus-organizer": {
    	source: "iana",
    	extensions: [
    		"org"
    	]
    },
    	"application/vnd.lotus-screencam": {
    	source: "iana",
    	extensions: [
    		"scm"
    	]
    },
    	"application/vnd.lotus-wordpro": {
    	source: "iana",
    	extensions: [
    		"lwp"
    	]
    },
    	"application/vnd.macports.portpkg": {
    	source: "iana",
    	extensions: [
    		"portpkg"
    	]
    },
    	"application/vnd.mapbox-vector-tile": {
    	source: "iana",
    	extensions: [
    		"mvt"
    	]
    },
    	"application/vnd.marlin.drm.actiontoken+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.marlin.drm.conftoken+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.marlin.drm.license+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.marlin.drm.mdcf": {
    	source: "iana"
    },
    	"application/vnd.mason+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.maxar.archive.3tz+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.maxmind.maxmind-db": {
    	source: "iana"
    },
    	"application/vnd.mcd": {
    	source: "iana",
    	extensions: [
    		"mcd"
    	]
    },
    	"application/vnd.medcalcdata": {
    	source: "iana",
    	extensions: [
    		"mc1"
    	]
    },
    	"application/vnd.mediastation.cdkey": {
    	source: "iana",
    	extensions: [
    		"cdkey"
    	]
    },
    	"application/vnd.meridian-slingshot": {
    	source: "iana"
    },
    	"application/vnd.mfer": {
    	source: "iana",
    	extensions: [
    		"mwf"
    	]
    },
    	"application/vnd.mfmp": {
    	source: "iana",
    	extensions: [
    		"mfm"
    	]
    },
    	"application/vnd.micro+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.micrografx.flo": {
    	source: "iana",
    	extensions: [
    		"flo"
    	]
    },
    	"application/vnd.micrografx.igx": {
    	source: "iana",
    	extensions: [
    		"igx"
    	]
    },
    	"application/vnd.microsoft.portable-executable": {
    	source: "iana"
    },
    	"application/vnd.microsoft.windows.thumbnail-cache": {
    	source: "iana"
    },
    	"application/vnd.miele+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.mif": {
    	source: "iana",
    	extensions: [
    		"mif"
    	]
    },
    	"application/vnd.minisoft-hp3000-save": {
    	source: "iana"
    },
    	"application/vnd.mitsubishi.misty-guard.trustweb": {
    	source: "iana"
    },
    	"application/vnd.mobius.daf": {
    	source: "iana",
    	extensions: [
    		"daf"
    	]
    },
    	"application/vnd.mobius.dis": {
    	source: "iana",
    	extensions: [
    		"dis"
    	]
    },
    	"application/vnd.mobius.mbk": {
    	source: "iana",
    	extensions: [
    		"mbk"
    	]
    },
    	"application/vnd.mobius.mqy": {
    	source: "iana",
    	extensions: [
    		"mqy"
    	]
    },
    	"application/vnd.mobius.msl": {
    	source: "iana",
    	extensions: [
    		"msl"
    	]
    },
    	"application/vnd.mobius.plc": {
    	source: "iana",
    	extensions: [
    		"plc"
    	]
    },
    	"application/vnd.mobius.txf": {
    	source: "iana",
    	extensions: [
    		"txf"
    	]
    },
    	"application/vnd.mophun.application": {
    	source: "iana",
    	extensions: [
    		"mpn"
    	]
    },
    	"application/vnd.mophun.certificate": {
    	source: "iana",
    	extensions: [
    		"mpc"
    	]
    },
    	"application/vnd.motorola.flexsuite": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.adsi": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.fis": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.gotap": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.kmr": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.ttc": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.wem": {
    	source: "iana"
    },
    	"application/vnd.motorola.iprm": {
    	source: "iana"
    },
    	"application/vnd.mozilla.xul+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xul"
    	]
    },
    	"application/vnd.ms-3mfdocument": {
    	source: "iana"
    },
    	"application/vnd.ms-artgalry": {
    	source: "iana",
    	extensions: [
    		"cil"
    	]
    },
    	"application/vnd.ms-asf": {
    	source: "iana"
    },
    	"application/vnd.ms-cab-compressed": {
    	source: "iana",
    	extensions: [
    		"cab"
    	]
    },
    	"application/vnd.ms-color.iccprofile": {
    	source: "apache"
    },
    	"application/vnd.ms-excel": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"xls",
    		"xlm",
    		"xla",
    		"xlc",
    		"xlt",
    		"xlw"
    	]
    },
    	"application/vnd.ms-excel.addin.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xlam"
    	]
    },
    	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xlsb"
    	]
    },
    	"application/vnd.ms-excel.sheet.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xlsm"
    	]
    },
    	"application/vnd.ms-excel.template.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xltm"
    	]
    },
    	"application/vnd.ms-fontobject": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"eot"
    	]
    },
    	"application/vnd.ms-htmlhelp": {
    	source: "iana",
    	extensions: [
    		"chm"
    	]
    },
    	"application/vnd.ms-ims": {
    	source: "iana",
    	extensions: [
    		"ims"
    	]
    },
    	"application/vnd.ms-lrm": {
    	source: "iana",
    	extensions: [
    		"lrm"
    	]
    },
    	"application/vnd.ms-office.activex+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-officetheme": {
    	source: "iana",
    	extensions: [
    		"thmx"
    	]
    },
    	"application/vnd.ms-opentype": {
    	source: "apache",
    	compressible: true
    },
    	"application/vnd.ms-outlook": {
    	compressible: false,
    	extensions: [
    		"msg"
    	]
    },
    	"application/vnd.ms-package.obfuscated-opentype": {
    	source: "apache"
    },
    	"application/vnd.ms-pki.seccat": {
    	source: "apache",
    	extensions: [
    		"cat"
    	]
    },
    	"application/vnd.ms-pki.stl": {
    	source: "apache",
    	extensions: [
    		"stl"
    	]
    },
    	"application/vnd.ms-playready.initiator+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-powerpoint": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ppt",
    		"pps",
    		"pot"
    	]
    },
    	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"ppam"
    	]
    },
    	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"pptm"
    	]
    },
    	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"sldm"
    	]
    },
    	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"ppsm"
    	]
    },
    	"application/vnd.ms-powerpoint.template.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"potm"
    	]
    },
    	"application/vnd.ms-printdevicecapabilities+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-printing.printticket+xml": {
    	source: "apache",
    	compressible: true
    },
    	"application/vnd.ms-printschematicket+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-project": {
    	source: "iana",
    	extensions: [
    		"mpp",
    		"mpt"
    	]
    },
    	"application/vnd.ms-tnef": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.devicepairing": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.nwprinting.oob": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.printerpairing": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.wsd.oob": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.lic-chlg-req": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.lic-resp": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.meter-chlg-req": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.meter-resp": {
    	source: "iana"
    },
    	"application/vnd.ms-word.document.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"docm"
    	]
    },
    	"application/vnd.ms-word.template.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"dotm"
    	]
    },
    	"application/vnd.ms-works": {
    	source: "iana",
    	extensions: [
    		"wps",
    		"wks",
    		"wcm",
    		"wdb"
    	]
    },
    	"application/vnd.ms-wpl": {
    	source: "iana",
    	extensions: [
    		"wpl"
    	]
    },
    	"application/vnd.ms-xpsdocument": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"xps"
    	]
    },
    	"application/vnd.msa-disk-image": {
    	source: "iana"
    },
    	"application/vnd.mseq": {
    	source: "iana",
    	extensions: [
    		"mseq"
    	]
    },
    	"application/vnd.msign": {
    	source: "iana"
    },
    	"application/vnd.multiad.creator": {
    	source: "iana"
    },
    	"application/vnd.multiad.creator.cif": {
    	source: "iana"
    },
    	"application/vnd.music-niff": {
    	source: "iana"
    },
    	"application/vnd.musician": {
    	source: "iana",
    	extensions: [
    		"mus"
    	]
    },
    	"application/vnd.muvee.style": {
    	source: "iana",
    	extensions: [
    		"msty"
    	]
    },
    	"application/vnd.mynfc": {
    	source: "iana",
    	extensions: [
    		"taglet"
    	]
    },
    	"application/vnd.nacamar.ybrid+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ncd.control": {
    	source: "iana"
    },
    	"application/vnd.ncd.reference": {
    	source: "iana"
    },
    	"application/vnd.nearst.inv+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nebumind.line": {
    	source: "iana"
    },
    	"application/vnd.nervana": {
    	source: "iana"
    },
    	"application/vnd.netfpx": {
    	source: "iana"
    },
    	"application/vnd.neurolanguage.nlu": {
    	source: "iana",
    	extensions: [
    		"nlu"
    	]
    },
    	"application/vnd.nimn": {
    	source: "iana"
    },
    	"application/vnd.nintendo.nitro.rom": {
    	source: "iana"
    },
    	"application/vnd.nintendo.snes.rom": {
    	source: "iana"
    },
    	"application/vnd.nitf": {
    	source: "iana",
    	extensions: [
    		"ntf",
    		"nitf"
    	]
    },
    	"application/vnd.noblenet-directory": {
    	source: "iana",
    	extensions: [
    		"nnd"
    	]
    },
    	"application/vnd.noblenet-sealer": {
    	source: "iana",
    	extensions: [
    		"nns"
    	]
    },
    	"application/vnd.noblenet-web": {
    	source: "iana",
    	extensions: [
    		"nnw"
    	]
    },
    	"application/vnd.nokia.catalogs": {
    	source: "iana"
    },
    	"application/vnd.nokia.conml+wbxml": {
    	source: "iana"
    },
    	"application/vnd.nokia.conml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.iptv.config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.isds-radio-presets": {
    	source: "iana"
    },
    	"application/vnd.nokia.landmark+wbxml": {
    	source: "iana"
    },
    	"application/vnd.nokia.landmark+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.landmarkcollection+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.n-gage.ac+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ac"
    	]
    },
    	"application/vnd.nokia.n-gage.data": {
    	source: "iana",
    	extensions: [
    		"ngdat"
    	]
    },
    	"application/vnd.nokia.n-gage.symbian.install": {
    	source: "iana",
    	extensions: [
    		"n-gage"
    	]
    },
    	"application/vnd.nokia.ncd": {
    	source: "iana"
    },
    	"application/vnd.nokia.pcd+wbxml": {
    	source: "iana"
    },
    	"application/vnd.nokia.pcd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.radio-preset": {
    	source: "iana",
    	extensions: [
    		"rpst"
    	]
    },
    	"application/vnd.nokia.radio-presets": {
    	source: "iana",
    	extensions: [
    		"rpss"
    	]
    },
    	"application/vnd.novadigm.edm": {
    	source: "iana",
    	extensions: [
    		"edm"
    	]
    },
    	"application/vnd.novadigm.edx": {
    	source: "iana",
    	extensions: [
    		"edx"
    	]
    },
    	"application/vnd.novadigm.ext": {
    	source: "iana",
    	extensions: [
    		"ext"
    	]
    },
    	"application/vnd.ntt-local.content-share": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.file-transfer": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.ogw_remote-access": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.sip-ta_remote": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.sip-ta_tcp_stream": {
    	source: "iana"
    },
    	"application/vnd.oasis.opendocument.chart": {
    	source: "iana",
    	extensions: [
    		"odc"
    	]
    },
    	"application/vnd.oasis.opendocument.chart-template": {
    	source: "iana",
    	extensions: [
    		"otc"
    	]
    },
    	"application/vnd.oasis.opendocument.database": {
    	source: "iana",
    	extensions: [
    		"odb"
    	]
    },
    	"application/vnd.oasis.opendocument.formula": {
    	source: "iana",
    	extensions: [
    		"odf"
    	]
    },
    	"application/vnd.oasis.opendocument.formula-template": {
    	source: "iana",
    	extensions: [
    		"odft"
    	]
    },
    	"application/vnd.oasis.opendocument.graphics": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"odg"
    	]
    },
    	"application/vnd.oasis.opendocument.graphics-template": {
    	source: "iana",
    	extensions: [
    		"otg"
    	]
    },
    	"application/vnd.oasis.opendocument.image": {
    	source: "iana",
    	extensions: [
    		"odi"
    	]
    },
    	"application/vnd.oasis.opendocument.image-template": {
    	source: "iana",
    	extensions: [
    		"oti"
    	]
    },
    	"application/vnd.oasis.opendocument.presentation": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"odp"
    	]
    },
    	"application/vnd.oasis.opendocument.presentation-template": {
    	source: "iana",
    	extensions: [
    		"otp"
    	]
    },
    	"application/vnd.oasis.opendocument.spreadsheet": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ods"
    	]
    },
    	"application/vnd.oasis.opendocument.spreadsheet-template": {
    	source: "iana",
    	extensions: [
    		"ots"
    	]
    },
    	"application/vnd.oasis.opendocument.text": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"odt"
    	]
    },
    	"application/vnd.oasis.opendocument.text-master": {
    	source: "iana",
    	extensions: [
    		"odm"
    	]
    },
    	"application/vnd.oasis.opendocument.text-template": {
    	source: "iana",
    	extensions: [
    		"ott"
    	]
    },
    	"application/vnd.oasis.opendocument.text-web": {
    	source: "iana",
    	extensions: [
    		"oth"
    	]
    },
    	"application/vnd.obn": {
    	source: "iana"
    },
    	"application/vnd.ocf+cbor": {
    	source: "iana"
    },
    	"application/vnd.oci.image.manifest.v1+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oftn.l10n+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.contentaccessdownload+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.contentaccessstreaming+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.cspg-hexbinary": {
    	source: "iana"
    },
    	"application/vnd.oipf.dae.svg+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.dae.xhtml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.mippvcontrolmessage+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.pae.gem": {
    	source: "iana"
    },
    	"application/vnd.oipf.spdiscovery+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.spdlist+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.ueprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.userprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.olpc-sugar": {
    	source: "iana",
    	extensions: [
    		"xo"
    	]
    },
    	"application/vnd.oma-scws-config": {
    	source: "iana"
    },
    	"application/vnd.oma-scws-http-request": {
    	source: "iana"
    },
    	"application/vnd.oma-scws-http-response": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.drm-trigger+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.imd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.ltkm": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.notification+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.provisioningtrigger": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.sgboot": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.sgdd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.sgdu": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.simple-symbol-container": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.smartcard-trigger+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.sprov+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.stkm": {
    	source: "iana"
    },
    	"application/vnd.oma.cab-address-book+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-feature-handler+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-pcc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-subs-invite+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-user-prefs+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.dcd": {
    	source: "iana"
    },
    	"application/vnd.oma.dcdc": {
    	source: "iana"
    },
    	"application/vnd.oma.dd2+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dd2"
    	]
    },
    	"application/vnd.oma.drm.risd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.group-usage-list+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.lwm2m+cbor": {
    	source: "iana"
    },
    	"application/vnd.oma.lwm2m+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.lwm2m+tlv": {
    	source: "iana"
    },
    	"application/vnd.oma.pal+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.detailed-progress-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.final-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.groups+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.invocation-descriptor+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.optimized-progress-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.push": {
    	source: "iana"
    },
    	"application/vnd.oma.scidm.messages+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.xcap-directory+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.omads-email+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.omads-file+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.omads-folder+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.omaloc-supl-init": {
    	source: "iana"
    },
    	"application/vnd.onepager": {
    	source: "iana"
    },
    	"application/vnd.onepagertamp": {
    	source: "iana"
    },
    	"application/vnd.onepagertamx": {
    	source: "iana"
    },
    	"application/vnd.onepagertat": {
    	source: "iana"
    },
    	"application/vnd.onepagertatp": {
    	source: "iana"
    },
    	"application/vnd.onepagertatx": {
    	source: "iana"
    },
    	"application/vnd.openblox.game+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"obgx"
    	]
    },
    	"application/vnd.openblox.game-binary": {
    	source: "iana"
    },
    	"application/vnd.openeye.oeb": {
    	source: "iana"
    },
    	"application/vnd.openofficeorg.extension": {
    	source: "apache",
    	extensions: [
    		"oxt"
    	]
    },
    	"application/vnd.openstreetmap.data+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"osm"
    	]
    },
    	"application/vnd.opentimestamps.ots": {
    	source: "iana"
    },
    	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawing+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"pptx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
    	source: "iana",
    	extensions: [
    		"sldx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    	source: "iana",
    	extensions: [
    		"ppsx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.template": {
    	source: "iana",
    	extensions: [
    		"potx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"xlsx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    	source: "iana",
    	extensions: [
    		"xltx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.theme+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.vmldrawing": {
    	source: "iana"
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"docx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    	source: "iana",
    	extensions: [
    		"dotx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-package.core-properties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-package.relationships+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oracle.resource+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.orange.indata": {
    	source: "iana"
    },
    	"application/vnd.osa.netdeploy": {
    	source: "iana"
    },
    	"application/vnd.osgeo.mapguide.package": {
    	source: "iana",
    	extensions: [
    		"mgp"
    	]
    },
    	"application/vnd.osgi.bundle": {
    	source: "iana"
    },
    	"application/vnd.osgi.dp": {
    	source: "iana",
    	extensions: [
    		"dp"
    	]
    },
    	"application/vnd.osgi.subsystem": {
    	source: "iana",
    	extensions: [
    		"esa"
    	]
    },
    	"application/vnd.otps.ct-kip+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oxli.countgraph": {
    	source: "iana"
    },
    	"application/vnd.pagerduty+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.palm": {
    	source: "iana",
    	extensions: [
    		"pdb",
    		"pqa",
    		"oprc"
    	]
    },
    	"application/vnd.panoply": {
    	source: "iana"
    },
    	"application/vnd.paos.xml": {
    	source: "iana"
    },
    	"application/vnd.patentdive": {
    	source: "iana"
    },
    	"application/vnd.patientecommsdoc": {
    	source: "iana"
    },
    	"application/vnd.pawaafile": {
    	source: "iana",
    	extensions: [
    		"paw"
    	]
    },
    	"application/vnd.pcos": {
    	source: "iana"
    },
    	"application/vnd.pg.format": {
    	source: "iana",
    	extensions: [
    		"str"
    	]
    },
    	"application/vnd.pg.osasli": {
    	source: "iana",
    	extensions: [
    		"ei6"
    	]
    },
    	"application/vnd.piaccess.application-licence": {
    	source: "iana"
    },
    	"application/vnd.picsel": {
    	source: "iana",
    	extensions: [
    		"efif"
    	]
    },
    	"application/vnd.pmi.widget": {
    	source: "iana",
    	extensions: [
    		"wg"
    	]
    },
    	"application/vnd.poc.group-advertisement+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.pocketlearn": {
    	source: "iana",
    	extensions: [
    		"plf"
    	]
    },
    	"application/vnd.powerbuilder6": {
    	source: "iana",
    	extensions: [
    		"pbd"
    	]
    },
    	"application/vnd.powerbuilder6-s": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder7": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder7-s": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder75": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder75-s": {
    	source: "iana"
    },
    	"application/vnd.preminet": {
    	source: "iana"
    },
    	"application/vnd.previewsystems.box": {
    	source: "iana",
    	extensions: [
    		"box"
    	]
    },
    	"application/vnd.proteus.magazine": {
    	source: "iana",
    	extensions: [
    		"mgz"
    	]
    },
    	"application/vnd.psfs": {
    	source: "iana"
    },
    	"application/vnd.publishare-delta-tree": {
    	source: "iana",
    	extensions: [
    		"qps"
    	]
    },
    	"application/vnd.pvi.ptid1": {
    	source: "iana",
    	extensions: [
    		"ptid"
    	]
    },
    	"application/vnd.pwg-multiplexed": {
    	source: "iana"
    },
    	"application/vnd.pwg-xhtml-print+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.qualcomm.brew-app-res": {
    	source: "iana"
    },
    	"application/vnd.quarantainenet": {
    	source: "iana"
    },
    	"application/vnd.quark.quarkxpress": {
    	source: "iana",
    	extensions: [
    		"qxd",
    		"qxt",
    		"qwd",
    		"qwt",
    		"qxl",
    		"qxb"
    	]
    },
    	"application/vnd.quobject-quoxdocument": {
    	source: "iana"
    },
    	"application/vnd.radisys.moml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-conf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-conn+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-dialog+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-stream+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-conf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-base+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-group+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-speech+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-transform+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.rainstor.data": {
    	source: "iana"
    },
    	"application/vnd.rapid": {
    	source: "iana"
    },
    	"application/vnd.rar": {
    	source: "iana",
    	extensions: [
    		"rar"
    	]
    },
    	"application/vnd.realvnc.bed": {
    	source: "iana",
    	extensions: [
    		"bed"
    	]
    },
    	"application/vnd.recordare.musicxml": {
    	source: "iana",
    	extensions: [
    		"mxl"
    	]
    },
    	"application/vnd.recordare.musicxml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"musicxml"
    	]
    },
    	"application/vnd.renlearn.rlprint": {
    	source: "iana"
    },
    	"application/vnd.resilient.logic": {
    	source: "iana"
    },
    	"application/vnd.restful+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.rig.cryptonote": {
    	source: "iana",
    	extensions: [
    		"cryptonote"
    	]
    },
    	"application/vnd.rim.cod": {
    	source: "apache",
    	extensions: [
    		"cod"
    	]
    },
    	"application/vnd.rn-realmedia": {
    	source: "apache",
    	extensions: [
    		"rm"
    	]
    },
    	"application/vnd.rn-realmedia-vbr": {
    	source: "apache",
    	extensions: [
    		"rmvb"
    	]
    },
    	"application/vnd.route66.link66+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"link66"
    	]
    },
    	"application/vnd.rs-274x": {
    	source: "iana"
    },
    	"application/vnd.ruckus.download": {
    	source: "iana"
    },
    	"application/vnd.s3sms": {
    	source: "iana"
    },
    	"application/vnd.sailingtracker.track": {
    	source: "iana",
    	extensions: [
    		"st"
    	]
    },
    	"application/vnd.sar": {
    	source: "iana"
    },
    	"application/vnd.sbm.cid": {
    	source: "iana"
    },
    	"application/vnd.sbm.mid2": {
    	source: "iana"
    },
    	"application/vnd.scribus": {
    	source: "iana"
    },
    	"application/vnd.sealed.3df": {
    	source: "iana"
    },
    	"application/vnd.sealed.csf": {
    	source: "iana"
    },
    	"application/vnd.sealed.doc": {
    	source: "iana"
    },
    	"application/vnd.sealed.eml": {
    	source: "iana"
    },
    	"application/vnd.sealed.mht": {
    	source: "iana"
    },
    	"application/vnd.sealed.net": {
    	source: "iana"
    },
    	"application/vnd.sealed.ppt": {
    	source: "iana"
    },
    	"application/vnd.sealed.tiff": {
    	source: "iana"
    },
    	"application/vnd.sealed.xls": {
    	source: "iana"
    },
    	"application/vnd.sealedmedia.softseal.html": {
    	source: "iana"
    },
    	"application/vnd.sealedmedia.softseal.pdf": {
    	source: "iana"
    },
    	"application/vnd.seemail": {
    	source: "iana",
    	extensions: [
    		"see"
    	]
    },
    	"application/vnd.seis+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.sema": {
    	source: "iana",
    	extensions: [
    		"sema"
    	]
    },
    	"application/vnd.semd": {
    	source: "iana",
    	extensions: [
    		"semd"
    	]
    },
    	"application/vnd.semf": {
    	source: "iana",
    	extensions: [
    		"semf"
    	]
    },
    	"application/vnd.shade-save-file": {
    	source: "iana"
    },
    	"application/vnd.shana.informed.formdata": {
    	source: "iana",
    	extensions: [
    		"ifm"
    	]
    },
    	"application/vnd.shana.informed.formtemplate": {
    	source: "iana",
    	extensions: [
    		"itp"
    	]
    },
    	"application/vnd.shana.informed.interchange": {
    	source: "iana",
    	extensions: [
    		"iif"
    	]
    },
    	"application/vnd.shana.informed.package": {
    	source: "iana",
    	extensions: [
    		"ipk"
    	]
    },
    	"application/vnd.shootproof+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.shopkick+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.shp": {
    	source: "iana"
    },
    	"application/vnd.shx": {
    	source: "iana"
    },
    	"application/vnd.sigrok.session": {
    	source: "iana"
    },
    	"application/vnd.simtech-mindmapper": {
    	source: "iana",
    	extensions: [
    		"twd",
    		"twds"
    	]
    },
    	"application/vnd.siren+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.smaf": {
    	source: "iana",
    	extensions: [
    		"mmf"
    	]
    },
    	"application/vnd.smart.notebook": {
    	source: "iana"
    },
    	"application/vnd.smart.teacher": {
    	source: "iana",
    	extensions: [
    		"teacher"
    	]
    },
    	"application/vnd.snesdev-page-table": {
    	source: "iana"
    },
    	"application/vnd.software602.filler.form+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"fo"
    	]
    },
    	"application/vnd.software602.filler.form-xml-zip": {
    	source: "iana"
    },
    	"application/vnd.solent.sdkm+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sdkm",
    		"sdkd"
    	]
    },
    	"application/vnd.spotfire.dxp": {
    	source: "iana",
    	extensions: [
    		"dxp"
    	]
    },
    	"application/vnd.spotfire.sfs": {
    	source: "iana",
    	extensions: [
    		"sfs"
    	]
    },
    	"application/vnd.sqlite3": {
    	source: "iana"
    },
    	"application/vnd.sss-cod": {
    	source: "iana"
    },
    	"application/vnd.sss-dtf": {
    	source: "iana"
    },
    	"application/vnd.sss-ntf": {
    	source: "iana"
    },
    	"application/vnd.stardivision.calc": {
    	source: "apache",
    	extensions: [
    		"sdc"
    	]
    },
    	"application/vnd.stardivision.draw": {
    	source: "apache",
    	extensions: [
    		"sda"
    	]
    },
    	"application/vnd.stardivision.impress": {
    	source: "apache",
    	extensions: [
    		"sdd"
    	]
    },
    	"application/vnd.stardivision.math": {
    	source: "apache",
    	extensions: [
    		"smf"
    	]
    },
    	"application/vnd.stardivision.writer": {
    	source: "apache",
    	extensions: [
    		"sdw",
    		"vor"
    	]
    },
    	"application/vnd.stardivision.writer-global": {
    	source: "apache",
    	extensions: [
    		"sgl"
    	]
    },
    	"application/vnd.stepmania.package": {
    	source: "iana",
    	extensions: [
    		"smzip"
    	]
    },
    	"application/vnd.stepmania.stepchart": {
    	source: "iana",
    	extensions: [
    		"sm"
    	]
    },
    	"application/vnd.street-stream": {
    	source: "iana"
    },
    	"application/vnd.sun.wadl+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wadl"
    	]
    },
    	"application/vnd.sun.xml.calc": {
    	source: "apache",
    	extensions: [
    		"sxc"
    	]
    },
    	"application/vnd.sun.xml.calc.template": {
    	source: "apache",
    	extensions: [
    		"stc"
    	]
    },
    	"application/vnd.sun.xml.draw": {
    	source: "apache",
    	extensions: [
    		"sxd"
    	]
    },
    	"application/vnd.sun.xml.draw.template": {
    	source: "apache",
    	extensions: [
    		"std"
    	]
    },
    	"application/vnd.sun.xml.impress": {
    	source: "apache",
    	extensions: [
    		"sxi"
    	]
    },
    	"application/vnd.sun.xml.impress.template": {
    	source: "apache",
    	extensions: [
    		"sti"
    	]
    },
    	"application/vnd.sun.xml.math": {
    	source: "apache",
    	extensions: [
    		"sxm"
    	]
    },
    	"application/vnd.sun.xml.writer": {
    	source: "apache",
    	extensions: [
    		"sxw"
    	]
    },
    	"application/vnd.sun.xml.writer.global": {
    	source: "apache",
    	extensions: [
    		"sxg"
    	]
    },
    	"application/vnd.sun.xml.writer.template": {
    	source: "apache",
    	extensions: [
    		"stw"
    	]
    },
    	"application/vnd.sus-calendar": {
    	source: "iana",
    	extensions: [
    		"sus",
    		"susp"
    	]
    },
    	"application/vnd.svd": {
    	source: "iana",
    	extensions: [
    		"svd"
    	]
    },
    	"application/vnd.swiftview-ics": {
    	source: "iana"
    },
    	"application/vnd.sycle+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.syft+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.symbian.install": {
    	source: "apache",
    	extensions: [
    		"sis",
    		"sisx"
    	]
    },
    	"application/vnd.syncml+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"xsm"
    	]
    },
    	"application/vnd.syncml.dm+wbxml": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"bdm"
    	]
    },
    	"application/vnd.syncml.dm+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"xdm"
    	]
    },
    	"application/vnd.syncml.dm.notification": {
    	source: "iana"
    },
    	"application/vnd.syncml.dmddf+wbxml": {
    	source: "iana"
    },
    	"application/vnd.syncml.dmddf+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"ddf"
    	]
    },
    	"application/vnd.syncml.dmtnds+wbxml": {
    	source: "iana"
    },
    	"application/vnd.syncml.dmtnds+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.syncml.ds.notification": {
    	source: "iana"
    },
    	"application/vnd.tableschema+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.tao.intent-module-archive": {
    	source: "iana",
    	extensions: [
    		"tao"
    	]
    },
    	"application/vnd.tcpdump.pcap": {
    	source: "iana",
    	extensions: [
    		"pcap",
    		"cap",
    		"dmp"
    	]
    },
    	"application/vnd.think-cell.ppttc+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.tmd.mediaflex.api+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.tml": {
    	source: "iana"
    },
    	"application/vnd.tmobile-livetv": {
    	source: "iana",
    	extensions: [
    		"tmo"
    	]
    },
    	"application/vnd.tri.onesource": {
    	source: "iana"
    },
    	"application/vnd.trid.tpt": {
    	source: "iana",
    	extensions: [
    		"tpt"
    	]
    },
    	"application/vnd.triscape.mxs": {
    	source: "iana",
    	extensions: [
    		"mxs"
    	]
    },
    	"application/vnd.trueapp": {
    	source: "iana",
    	extensions: [
    		"tra"
    	]
    },
    	"application/vnd.truedoc": {
    	source: "iana"
    },
    	"application/vnd.ubisoft.webplayer": {
    	source: "iana"
    },
    	"application/vnd.ufdl": {
    	source: "iana",
    	extensions: [
    		"ufd",
    		"ufdl"
    	]
    },
    	"application/vnd.uiq.theme": {
    	source: "iana",
    	extensions: [
    		"utz"
    	]
    },
    	"application/vnd.umajin": {
    	source: "iana",
    	extensions: [
    		"umj"
    	]
    },
    	"application/vnd.unity": {
    	source: "iana",
    	extensions: [
    		"unityweb"
    	]
    },
    	"application/vnd.uoml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"uoml"
    	]
    },
    	"application/vnd.uplanet.alert": {
    	source: "iana"
    },
    	"application/vnd.uplanet.alert-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.bearer-choice": {
    	source: "iana"
    },
    	"application/vnd.uplanet.bearer-choice-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.cacheop": {
    	source: "iana"
    },
    	"application/vnd.uplanet.cacheop-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.channel": {
    	source: "iana"
    },
    	"application/vnd.uplanet.channel-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.list": {
    	source: "iana"
    },
    	"application/vnd.uplanet.list-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.listcmd": {
    	source: "iana"
    },
    	"application/vnd.uplanet.listcmd-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.signal": {
    	source: "iana"
    },
    	"application/vnd.uri-map": {
    	source: "iana"
    },
    	"application/vnd.valve.source.material": {
    	source: "iana"
    },
    	"application/vnd.vcx": {
    	source: "iana",
    	extensions: [
    		"vcx"
    	]
    },
    	"application/vnd.vd-study": {
    	source: "iana"
    },
    	"application/vnd.vectorworks": {
    	source: "iana"
    },
    	"application/vnd.vel+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.verimatrix.vcas": {
    	source: "iana"
    },
    	"application/vnd.veritone.aion+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.veryant.thin": {
    	source: "iana"
    },
    	"application/vnd.ves.encrypted": {
    	source: "iana"
    },
    	"application/vnd.vidsoft.vidconference": {
    	source: "iana"
    },
    	"application/vnd.visio": {
    	source: "iana",
    	extensions: [
    		"vsd",
    		"vst",
    		"vss",
    		"vsw"
    	]
    },
    	"application/vnd.visionary": {
    	source: "iana",
    	extensions: [
    		"vis"
    	]
    },
    	"application/vnd.vividence.scriptfile": {
    	source: "iana"
    },
    	"application/vnd.vsf": {
    	source: "iana",
    	extensions: [
    		"vsf"
    	]
    },
    	"application/vnd.wap.sic": {
    	source: "iana"
    },
    	"application/vnd.wap.slc": {
    	source: "iana"
    },
    	"application/vnd.wap.wbxml": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"wbxml"
    	]
    },
    	"application/vnd.wap.wmlc": {
    	source: "iana",
    	extensions: [
    		"wmlc"
    	]
    },
    	"application/vnd.wap.wmlscriptc": {
    	source: "iana",
    	extensions: [
    		"wmlsc"
    	]
    },
    	"application/vnd.webturbo": {
    	source: "iana",
    	extensions: [
    		"wtb"
    	]
    },
    	"application/vnd.wfa.dpp": {
    	source: "iana"
    },
    	"application/vnd.wfa.p2p": {
    	source: "iana"
    },
    	"application/vnd.wfa.wsc": {
    	source: "iana"
    },
    	"application/vnd.windows.devicepairing": {
    	source: "iana"
    },
    	"application/vnd.wmc": {
    	source: "iana"
    },
    	"application/vnd.wmf.bootstrap": {
    	source: "iana"
    },
    	"application/vnd.wolfram.mathematica": {
    	source: "iana"
    },
    	"application/vnd.wolfram.mathematica.package": {
    	source: "iana"
    },
    	"application/vnd.wolfram.player": {
    	source: "iana",
    	extensions: [
    		"nbp"
    	]
    },
    	"application/vnd.wordperfect": {
    	source: "iana",
    	extensions: [
    		"wpd"
    	]
    },
    	"application/vnd.wqd": {
    	source: "iana",
    	extensions: [
    		"wqd"
    	]
    },
    	"application/vnd.wrq-hp3000-labelled": {
    	source: "iana"
    },
    	"application/vnd.wt.stf": {
    	source: "iana",
    	extensions: [
    		"stf"
    	]
    },
    	"application/vnd.wv.csp+wbxml": {
    	source: "iana"
    },
    	"application/vnd.wv.csp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.wv.ssp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.xacml+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.xara": {
    	source: "iana",
    	extensions: [
    		"xar"
    	]
    },
    	"application/vnd.xfdl": {
    	source: "iana",
    	extensions: [
    		"xfdl"
    	]
    },
    	"application/vnd.xfdl.webform": {
    	source: "iana"
    },
    	"application/vnd.xmi+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.xmpie.cpkg": {
    	source: "iana"
    },
    	"application/vnd.xmpie.dpkg": {
    	source: "iana"
    },
    	"application/vnd.xmpie.plan": {
    	source: "iana"
    },
    	"application/vnd.xmpie.ppkg": {
    	source: "iana"
    },
    	"application/vnd.xmpie.xlim": {
    	source: "iana"
    },
    	"application/vnd.yamaha.hv-dic": {
    	source: "iana",
    	extensions: [
    		"hvd"
    	]
    },
    	"application/vnd.yamaha.hv-script": {
    	source: "iana",
    	extensions: [
    		"hvs"
    	]
    },
    	"application/vnd.yamaha.hv-voice": {
    	source: "iana",
    	extensions: [
    		"hvp"
    	]
    },
    	"application/vnd.yamaha.openscoreformat": {
    	source: "iana",
    	extensions: [
    		"osf"
    	]
    },
    	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"osfpvg"
    	]
    },
    	"application/vnd.yamaha.remote-setup": {
    	source: "iana"
    },
    	"application/vnd.yamaha.smaf-audio": {
    	source: "iana",
    	extensions: [
    		"saf"
    	]
    },
    	"application/vnd.yamaha.smaf-phrase": {
    	source: "iana",
    	extensions: [
    		"spf"
    	]
    },
    	"application/vnd.yamaha.through-ngn": {
    	source: "iana"
    },
    	"application/vnd.yamaha.tunnel-udpencap": {
    	source: "iana"
    },
    	"application/vnd.yaoweme": {
    	source: "iana"
    },
    	"application/vnd.yellowriver-custom-menu": {
    	source: "iana",
    	extensions: [
    		"cmp"
    	]
    },
    	"application/vnd.youtube.yt": {
    	source: "iana"
    },
    	"application/vnd.zul": {
    	source: "iana",
    	extensions: [
    		"zir",
    		"zirz"
    	]
    },
    	"application/vnd.zzazz.deck+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"zaz"
    	]
    },
    	"application/voicexml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"vxml"
    	]
    },
    	"application/voucher-cms+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vq-rtcpxr": {
    	source: "iana"
    },
    	"application/wasm": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wasm"
    	]
    },
    	"application/watcherinfo+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wif"
    	]
    },
    	"application/webpush-options+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/whoispp-query": {
    	source: "iana"
    },
    	"application/whoispp-response": {
    	source: "iana"
    },
    	"application/widget": {
    	source: "iana",
    	extensions: [
    		"wgt"
    	]
    },
    	"application/winhlp": {
    	source: "apache",
    	extensions: [
    		"hlp"
    	]
    },
    	"application/wita": {
    	source: "iana"
    },
    	"application/wordperfect5.1": {
    	source: "iana"
    },
    	"application/wsdl+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wsdl"
    	]
    },
    	"application/wspolicy+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wspolicy"
    	]
    },
    	"application/x-7z-compressed": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"7z"
    	]
    },
    	"application/x-abiword": {
    	source: "apache",
    	extensions: [
    		"abw"
    	]
    },
    	"application/x-ace-compressed": {
    	source: "apache",
    	extensions: [
    		"ace"
    	]
    },
    	"application/x-amf": {
    	source: "apache"
    },
    	"application/x-apple-diskimage": {
    	source: "apache",
    	extensions: [
    		"dmg"
    	]
    },
    	"application/x-arj": {
    	compressible: false,
    	extensions: [
    		"arj"
    	]
    },
    	"application/x-authorware-bin": {
    	source: "apache",
    	extensions: [
    		"aab",
    		"x32",
    		"u32",
    		"vox"
    	]
    },
    	"application/x-authorware-map": {
    	source: "apache",
    	extensions: [
    		"aam"
    	]
    },
    	"application/x-authorware-seg": {
    	source: "apache",
    	extensions: [
    		"aas"
    	]
    },
    	"application/x-bcpio": {
    	source: "apache",
    	extensions: [
    		"bcpio"
    	]
    },
    	"application/x-bdoc": {
    	compressible: false,
    	extensions: [
    		"bdoc"
    	]
    },
    	"application/x-bittorrent": {
    	source: "apache",
    	extensions: [
    		"torrent"
    	]
    },
    	"application/x-blorb": {
    	source: "apache",
    	extensions: [
    		"blb",
    		"blorb"
    	]
    },
    	"application/x-bzip": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"bz"
    	]
    },
    	"application/x-bzip2": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"bz2",
    		"boz"
    	]
    },
    	"application/x-cbr": {
    	source: "apache",
    	extensions: [
    		"cbr",
    		"cba",
    		"cbt",
    		"cbz",
    		"cb7"
    	]
    },
    	"application/x-cdlink": {
    	source: "apache",
    	extensions: [
    		"vcd"
    	]
    },
    	"application/x-cfs-compressed": {
    	source: "apache",
    	extensions: [
    		"cfs"
    	]
    },
    	"application/x-chat": {
    	source: "apache",
    	extensions: [
    		"chat"
    	]
    },
    	"application/x-chess-pgn": {
    	source: "apache",
    	extensions: [
    		"pgn"
    	]
    },
    	"application/x-chrome-extension": {
    	extensions: [
    		"crx"
    	]
    },
    	"application/x-cocoa": {
    	source: "nginx",
    	extensions: [
    		"cco"
    	]
    },
    	"application/x-compress": {
    	source: "apache"
    },
    	"application/x-conference": {
    	source: "apache",
    	extensions: [
    		"nsc"
    	]
    },
    	"application/x-cpio": {
    	source: "apache",
    	extensions: [
    		"cpio"
    	]
    },
    	"application/x-csh": {
    	source: "apache",
    	extensions: [
    		"csh"
    	]
    },
    	"application/x-deb": {
    	compressible: false
    },
    	"application/x-debian-package": {
    	source: "apache",
    	extensions: [
    		"deb",
    		"udeb"
    	]
    },
    	"application/x-dgc-compressed": {
    	source: "apache",
    	extensions: [
    		"dgc"
    	]
    },
    	"application/x-director": {
    	source: "apache",
    	extensions: [
    		"dir",
    		"dcr",
    		"dxr",
    		"cst",
    		"cct",
    		"cxt",
    		"w3d",
    		"fgd",
    		"swa"
    	]
    },
    	"application/x-doom": {
    	source: "apache",
    	extensions: [
    		"wad"
    	]
    },
    	"application/x-dtbncx+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"ncx"
    	]
    },
    	"application/x-dtbook+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"dtb"
    	]
    },
    	"application/x-dtbresource+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"res"
    	]
    },
    	"application/x-dvi": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"dvi"
    	]
    },
    	"application/x-envoy": {
    	source: "apache",
    	extensions: [
    		"evy"
    	]
    },
    	"application/x-eva": {
    	source: "apache",
    	extensions: [
    		"eva"
    	]
    },
    	"application/x-font-bdf": {
    	source: "apache",
    	extensions: [
    		"bdf"
    	]
    },
    	"application/x-font-dos": {
    	source: "apache"
    },
    	"application/x-font-framemaker": {
    	source: "apache"
    },
    	"application/x-font-ghostscript": {
    	source: "apache",
    	extensions: [
    		"gsf"
    	]
    },
    	"application/x-font-libgrx": {
    	source: "apache"
    },
    	"application/x-font-linux-psf": {
    	source: "apache",
    	extensions: [
    		"psf"
    	]
    },
    	"application/x-font-pcf": {
    	source: "apache",
    	extensions: [
    		"pcf"
    	]
    },
    	"application/x-font-snf": {
    	source: "apache",
    	extensions: [
    		"snf"
    	]
    },
    	"application/x-font-speedo": {
    	source: "apache"
    },
    	"application/x-font-sunos-news": {
    	source: "apache"
    },
    	"application/x-font-type1": {
    	source: "apache",
    	extensions: [
    		"pfa",
    		"pfb",
    		"pfm",
    		"afm"
    	]
    },
    	"application/x-font-vfont": {
    	source: "apache"
    },
    	"application/x-freearc": {
    	source: "apache",
    	extensions: [
    		"arc"
    	]
    },
    	"application/x-futuresplash": {
    	source: "apache",
    	extensions: [
    		"spl"
    	]
    },
    	"application/x-gca-compressed": {
    	source: "apache",
    	extensions: [
    		"gca"
    	]
    },
    	"application/x-glulx": {
    	source: "apache",
    	extensions: [
    		"ulx"
    	]
    },
    	"application/x-gnumeric": {
    	source: "apache",
    	extensions: [
    		"gnumeric"
    	]
    },
    	"application/x-gramps-xml": {
    	source: "apache",
    	extensions: [
    		"gramps"
    	]
    },
    	"application/x-gtar": {
    	source: "apache",
    	extensions: [
    		"gtar"
    	]
    },
    	"application/x-gzip": {
    	source: "apache"
    },
    	"application/x-hdf": {
    	source: "apache",
    	extensions: [
    		"hdf"
    	]
    },
    	"application/x-httpd-php": {
    	compressible: true,
    	extensions: [
    		"php"
    	]
    },
    	"application/x-install-instructions": {
    	source: "apache",
    	extensions: [
    		"install"
    	]
    },
    	"application/x-iso9660-image": {
    	source: "apache",
    	extensions: [
    		"iso"
    	]
    },
    	"application/x-iwork-keynote-sffkey": {
    	extensions: [
    		"key"
    	]
    },
    	"application/x-iwork-numbers-sffnumbers": {
    	extensions: [
    		"numbers"
    	]
    },
    	"application/x-iwork-pages-sffpages": {
    	extensions: [
    		"pages"
    	]
    },
    	"application/x-java-archive-diff": {
    	source: "nginx",
    	extensions: [
    		"jardiff"
    	]
    },
    	"application/x-java-jnlp-file": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"jnlp"
    	]
    },
    	"application/x-javascript": {
    	compressible: true
    },
    	"application/x-keepass2": {
    	extensions: [
    		"kdbx"
    	]
    },
    	"application/x-latex": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"latex"
    	]
    },
    	"application/x-lua-bytecode": {
    	extensions: [
    		"luac"
    	]
    },
    	"application/x-lzh-compressed": {
    	source: "apache",
    	extensions: [
    		"lzh",
    		"lha"
    	]
    },
    	"application/x-makeself": {
    	source: "nginx",
    	extensions: [
    		"run"
    	]
    },
    	"application/x-mie": {
    	source: "apache",
    	extensions: [
    		"mie"
    	]
    },
    	"application/x-mobipocket-ebook": {
    	source: "apache",
    	extensions: [
    		"prc",
    		"mobi"
    	]
    },
    	"application/x-mpegurl": {
    	compressible: false
    },
    	"application/x-ms-application": {
    	source: "apache",
    	extensions: [
    		"application"
    	]
    },
    	"application/x-ms-shortcut": {
    	source: "apache",
    	extensions: [
    		"lnk"
    	]
    },
    	"application/x-ms-wmd": {
    	source: "apache",
    	extensions: [
    		"wmd"
    	]
    },
    	"application/x-ms-wmz": {
    	source: "apache",
    	extensions: [
    		"wmz"
    	]
    },
    	"application/x-ms-xbap": {
    	source: "apache",
    	extensions: [
    		"xbap"
    	]
    },
    	"application/x-msaccess": {
    	source: "apache",
    	extensions: [
    		"mdb"
    	]
    },
    	"application/x-msbinder": {
    	source: "apache",
    	extensions: [
    		"obd"
    	]
    },
    	"application/x-mscardfile": {
    	source: "apache",
    	extensions: [
    		"crd"
    	]
    },
    	"application/x-msclip": {
    	source: "apache",
    	extensions: [
    		"clp"
    	]
    },
    	"application/x-msdos-program": {
    	extensions: [
    		"exe"
    	]
    },
    	"application/x-msdownload": {
    	source: "apache",
    	extensions: [
    		"exe",
    		"dll",
    		"com",
    		"bat",
    		"msi"
    	]
    },
    	"application/x-msmediaview": {
    	source: "apache",
    	extensions: [
    		"mvb",
    		"m13",
    		"m14"
    	]
    },
    	"application/x-msmetafile": {
    	source: "apache",
    	extensions: [
    		"wmf",
    		"wmz",
    		"emf",
    		"emz"
    	]
    },
    	"application/x-msmoney": {
    	source: "apache",
    	extensions: [
    		"mny"
    	]
    },
    	"application/x-mspublisher": {
    	source: "apache",
    	extensions: [
    		"pub"
    	]
    },
    	"application/x-msschedule": {
    	source: "apache",
    	extensions: [
    		"scd"
    	]
    },
    	"application/x-msterminal": {
    	source: "apache",
    	extensions: [
    		"trm"
    	]
    },
    	"application/x-mswrite": {
    	source: "apache",
    	extensions: [
    		"wri"
    	]
    },
    	"application/x-netcdf": {
    	source: "apache",
    	extensions: [
    		"nc",
    		"cdf"
    	]
    },
    	"application/x-ns-proxy-autoconfig": {
    	compressible: true,
    	extensions: [
    		"pac"
    	]
    },
    	"application/x-nzb": {
    	source: "apache",
    	extensions: [
    		"nzb"
    	]
    },
    	"application/x-perl": {
    	source: "nginx",
    	extensions: [
    		"pl",
    		"pm"
    	]
    },
    	"application/x-pilot": {
    	source: "nginx",
    	extensions: [
    		"prc",
    		"pdb"
    	]
    },
    	"application/x-pkcs12": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"p12",
    		"pfx"
    	]
    },
    	"application/x-pkcs7-certificates": {
    	source: "apache",
    	extensions: [
    		"p7b",
    		"spc"
    	]
    },
    	"application/x-pkcs7-certreqresp": {
    	source: "apache",
    	extensions: [
    		"p7r"
    	]
    },
    	"application/x-pki-message": {
    	source: "iana"
    },
    	"application/x-rar-compressed": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"rar"
    	]
    },
    	"application/x-redhat-package-manager": {
    	source: "nginx",
    	extensions: [
    		"rpm"
    	]
    },
    	"application/x-research-info-systems": {
    	source: "apache",
    	extensions: [
    		"ris"
    	]
    },
    	"application/x-sea": {
    	source: "nginx",
    	extensions: [
    		"sea"
    	]
    },
    	"application/x-sh": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"sh"
    	]
    },
    	"application/x-shar": {
    	source: "apache",
    	extensions: [
    		"shar"
    	]
    },
    	"application/x-shockwave-flash": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"swf"
    	]
    },
    	"application/x-silverlight-app": {
    	source: "apache",
    	extensions: [
    		"xap"
    	]
    },
    	"application/x-sql": {
    	source: "apache",
    	extensions: [
    		"sql"
    	]
    },
    	"application/x-stuffit": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"sit"
    	]
    },
    	"application/x-stuffitx": {
    	source: "apache",
    	extensions: [
    		"sitx"
    	]
    },
    	"application/x-subrip": {
    	source: "apache",
    	extensions: [
    		"srt"
    	]
    },
    	"application/x-sv4cpio": {
    	source: "apache",
    	extensions: [
    		"sv4cpio"
    	]
    },
    	"application/x-sv4crc": {
    	source: "apache",
    	extensions: [
    		"sv4crc"
    	]
    },
    	"application/x-t3vm-image": {
    	source: "apache",
    	extensions: [
    		"t3"
    	]
    },
    	"application/x-tads": {
    	source: "apache",
    	extensions: [
    		"gam"
    	]
    },
    	"application/x-tar": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"tar"
    	]
    },
    	"application/x-tcl": {
    	source: "apache",
    	extensions: [
    		"tcl",
    		"tk"
    	]
    },
    	"application/x-tex": {
    	source: "apache",
    	extensions: [
    		"tex"
    	]
    },
    	"application/x-tex-tfm": {
    	source: "apache",
    	extensions: [
    		"tfm"
    	]
    },
    	"application/x-texinfo": {
    	source: "apache",
    	extensions: [
    		"texinfo",
    		"texi"
    	]
    },
    	"application/x-tgif": {
    	source: "apache",
    	extensions: [
    		"obj"
    	]
    },
    	"application/x-ustar": {
    	source: "apache",
    	extensions: [
    		"ustar"
    	]
    },
    	"application/x-virtualbox-hdd": {
    	compressible: true,
    	extensions: [
    		"hdd"
    	]
    },
    	"application/x-virtualbox-ova": {
    	compressible: true,
    	extensions: [
    		"ova"
    	]
    },
    	"application/x-virtualbox-ovf": {
    	compressible: true,
    	extensions: [
    		"ovf"
    	]
    },
    	"application/x-virtualbox-vbox": {
    	compressible: true,
    	extensions: [
    		"vbox"
    	]
    },
    	"application/x-virtualbox-vbox-extpack": {
    	compressible: false,
    	extensions: [
    		"vbox-extpack"
    	]
    },
    	"application/x-virtualbox-vdi": {
    	compressible: true,
    	extensions: [
    		"vdi"
    	]
    },
    	"application/x-virtualbox-vhd": {
    	compressible: true,
    	extensions: [
    		"vhd"
    	]
    },
    	"application/x-virtualbox-vmdk": {
    	compressible: true,
    	extensions: [
    		"vmdk"
    	]
    },
    	"application/x-wais-source": {
    	source: "apache",
    	extensions: [
    		"src"
    	]
    },
    	"application/x-web-app-manifest+json": {
    	compressible: true,
    	extensions: [
    		"webapp"
    	]
    },
    	"application/x-www-form-urlencoded": {
    	source: "iana",
    	compressible: true
    },
    	"application/x-x509-ca-cert": {
    	source: "iana",
    	extensions: [
    		"der",
    		"crt",
    		"pem"
    	]
    },
    	"application/x-x509-ca-ra-cert": {
    	source: "iana"
    },
    	"application/x-x509-next-ca-cert": {
    	source: "iana"
    },
    	"application/x-xfig": {
    	source: "apache",
    	extensions: [
    		"fig"
    	]
    },
    	"application/x-xliff+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xlf"
    	]
    },
    	"application/x-xpinstall": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"xpi"
    	]
    },
    	"application/x-xz": {
    	source: "apache",
    	extensions: [
    		"xz"
    	]
    },
    	"application/x-zmachine": {
    	source: "apache",
    	extensions: [
    		"z1",
    		"z2",
    		"z3",
    		"z4",
    		"z5",
    		"z6",
    		"z7",
    		"z8"
    	]
    },
    	"application/x400-bp": {
    	source: "iana"
    },
    	"application/xacml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xaml+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xaml"
    	]
    },
    	"application/xcap-att+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xav"
    	]
    },
    	"application/xcap-caps+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xca"
    	]
    },
    	"application/xcap-diff+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xdf"
    	]
    },
    	"application/xcap-el+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xel"
    	]
    },
    	"application/xcap-error+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xcap-ns+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xns"
    	]
    },
    	"application/xcon-conference-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xcon-conference-info-diff+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xenc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xenc"
    	]
    },
    	"application/xhtml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xhtml",
    		"xht"
    	]
    },
    	"application/xhtml-voice+xml": {
    	source: "apache",
    	compressible: true
    },
    	"application/xliff+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xlf"
    	]
    },
    	"application/xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xml",
    		"xsl",
    		"xsd",
    		"rng"
    	]
    },
    	"application/xml-dtd": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dtd"
    	]
    },
    	"application/xml-external-parsed-entity": {
    	source: "iana"
    },
    	"application/xml-patch+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xmpp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xop+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xop"
    	]
    },
    	"application/xproc+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xpl"
    	]
    },
    	"application/xslt+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xsl",
    		"xslt"
    	]
    },
    	"application/xspf+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xspf"
    	]
    },
    	"application/xv+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mxml",
    		"xhvml",
    		"xvml",
    		"xvm"
    	]
    },
    	"application/yang": {
    	source: "iana",
    	extensions: [
    		"yang"
    	]
    },
    	"application/yang-data+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/yang-data+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/yang-patch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/yang-patch+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/yin+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"yin"
    	]
    },
    	"application/zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"zip"
    	]
    },
    	"application/zlib": {
    	source: "iana"
    },
    	"application/zstd": {
    	source: "iana"
    },
    	"audio/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"audio/32kadpcm": {
    	source: "iana"
    },
    	"audio/3gpp": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"3gpp"
    	]
    },
    	"audio/3gpp2": {
    	source: "iana"
    },
    	"audio/aac": {
    	source: "iana"
    },
    	"audio/ac3": {
    	source: "iana"
    },
    	"audio/adpcm": {
    	source: "apache",
    	extensions: [
    		"adp"
    	]
    },
    	"audio/amr": {
    	source: "iana",
    	extensions: [
    		"amr"
    	]
    },
    	"audio/amr-wb": {
    	source: "iana"
    },
    	"audio/amr-wb+": {
    	source: "iana"
    },
    	"audio/aptx": {
    	source: "iana"
    },
    	"audio/asc": {
    	source: "iana"
    },
    	"audio/atrac-advanced-lossless": {
    	source: "iana"
    },
    	"audio/atrac-x": {
    	source: "iana"
    },
    	"audio/atrac3": {
    	source: "iana"
    },
    	"audio/basic": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"au",
    		"snd"
    	]
    },
    	"audio/bv16": {
    	source: "iana"
    },
    	"audio/bv32": {
    	source: "iana"
    },
    	"audio/clearmode": {
    	source: "iana"
    },
    	"audio/cn": {
    	source: "iana"
    },
    	"audio/dat12": {
    	source: "iana"
    },
    	"audio/dls": {
    	source: "iana"
    },
    	"audio/dsr-es201108": {
    	source: "iana"
    },
    	"audio/dsr-es202050": {
    	source: "iana"
    },
    	"audio/dsr-es202211": {
    	source: "iana"
    },
    	"audio/dsr-es202212": {
    	source: "iana"
    },
    	"audio/dv": {
    	source: "iana"
    },
    	"audio/dvi4": {
    	source: "iana"
    },
    	"audio/eac3": {
    	source: "iana"
    },
    	"audio/encaprtp": {
    	source: "iana"
    },
    	"audio/evrc": {
    	source: "iana"
    },
    	"audio/evrc-qcp": {
    	source: "iana"
    },
    	"audio/evrc0": {
    	source: "iana"
    },
    	"audio/evrc1": {
    	source: "iana"
    },
    	"audio/evrcb": {
    	source: "iana"
    },
    	"audio/evrcb0": {
    	source: "iana"
    },
    	"audio/evrcb1": {
    	source: "iana"
    },
    	"audio/evrcnw": {
    	source: "iana"
    },
    	"audio/evrcnw0": {
    	source: "iana"
    },
    	"audio/evrcnw1": {
    	source: "iana"
    },
    	"audio/evrcwb": {
    	source: "iana"
    },
    	"audio/evrcwb0": {
    	source: "iana"
    },
    	"audio/evrcwb1": {
    	source: "iana"
    },
    	"audio/evs": {
    	source: "iana"
    },
    	"audio/flexfec": {
    	source: "iana"
    },
    	"audio/fwdred": {
    	source: "iana"
    },
    	"audio/g711-0": {
    	source: "iana"
    },
    	"audio/g719": {
    	source: "iana"
    },
    	"audio/g722": {
    	source: "iana"
    },
    	"audio/g7221": {
    	source: "iana"
    },
    	"audio/g723": {
    	source: "iana"
    },
    	"audio/g726-16": {
    	source: "iana"
    },
    	"audio/g726-24": {
    	source: "iana"
    },
    	"audio/g726-32": {
    	source: "iana"
    },
    	"audio/g726-40": {
    	source: "iana"
    },
    	"audio/g728": {
    	source: "iana"
    },
    	"audio/g729": {
    	source: "iana"
    },
    	"audio/g7291": {
    	source: "iana"
    },
    	"audio/g729d": {
    	source: "iana"
    },
    	"audio/g729e": {
    	source: "iana"
    },
    	"audio/gsm": {
    	source: "iana"
    },
    	"audio/gsm-efr": {
    	source: "iana"
    },
    	"audio/gsm-hr-08": {
    	source: "iana"
    },
    	"audio/ilbc": {
    	source: "iana"
    },
    	"audio/ip-mr_v2.5": {
    	source: "iana"
    },
    	"audio/isac": {
    	source: "apache"
    },
    	"audio/l16": {
    	source: "iana"
    },
    	"audio/l20": {
    	source: "iana"
    },
    	"audio/l24": {
    	source: "iana",
    	compressible: false
    },
    	"audio/l8": {
    	source: "iana"
    },
    	"audio/lpc": {
    	source: "iana"
    },
    	"audio/melp": {
    	source: "iana"
    },
    	"audio/melp1200": {
    	source: "iana"
    },
    	"audio/melp2400": {
    	source: "iana"
    },
    	"audio/melp600": {
    	source: "iana"
    },
    	"audio/mhas": {
    	source: "iana"
    },
    	"audio/midi": {
    	source: "apache",
    	extensions: [
    		"mid",
    		"midi",
    		"kar",
    		"rmi"
    	]
    },
    	"audio/mobile-xmf": {
    	source: "iana",
    	extensions: [
    		"mxmf"
    	]
    },
    	"audio/mp3": {
    	compressible: false,
    	extensions: [
    		"mp3"
    	]
    },
    	"audio/mp4": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"m4a",
    		"mp4a"
    	]
    },
    	"audio/mp4a-latm": {
    	source: "iana"
    },
    	"audio/mpa": {
    	source: "iana"
    },
    	"audio/mpa-robust": {
    	source: "iana"
    },
    	"audio/mpeg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"mpga",
    		"mp2",
    		"mp2a",
    		"mp3",
    		"m2a",
    		"m3a"
    	]
    },
    	"audio/mpeg4-generic": {
    	source: "iana"
    },
    	"audio/musepack": {
    	source: "apache"
    },
    	"audio/ogg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"oga",
    		"ogg",
    		"spx",
    		"opus"
    	]
    },
    	"audio/opus": {
    	source: "iana"
    },
    	"audio/parityfec": {
    	source: "iana"
    },
    	"audio/pcma": {
    	source: "iana"
    },
    	"audio/pcma-wb": {
    	source: "iana"
    },
    	"audio/pcmu": {
    	source: "iana"
    },
    	"audio/pcmu-wb": {
    	source: "iana"
    },
    	"audio/prs.sid": {
    	source: "iana"
    },
    	"audio/qcelp": {
    	source: "iana"
    },
    	"audio/raptorfec": {
    	source: "iana"
    },
    	"audio/red": {
    	source: "iana"
    },
    	"audio/rtp-enc-aescm128": {
    	source: "iana"
    },
    	"audio/rtp-midi": {
    	source: "iana"
    },
    	"audio/rtploopback": {
    	source: "iana"
    },
    	"audio/rtx": {
    	source: "iana"
    },
    	"audio/s3m": {
    	source: "apache",
    	extensions: [
    		"s3m"
    	]
    },
    	"audio/scip": {
    	source: "iana"
    },
    	"audio/silk": {
    	source: "apache",
    	extensions: [
    		"sil"
    	]
    },
    	"audio/smv": {
    	source: "iana"
    },
    	"audio/smv-qcp": {
    	source: "iana"
    },
    	"audio/smv0": {
    	source: "iana"
    },
    	"audio/sofa": {
    	source: "iana"
    },
    	"audio/sp-midi": {
    	source: "iana"
    },
    	"audio/speex": {
    	source: "iana"
    },
    	"audio/t140c": {
    	source: "iana"
    },
    	"audio/t38": {
    	source: "iana"
    },
    	"audio/telephone-event": {
    	source: "iana"
    },
    	"audio/tetra_acelp": {
    	source: "iana"
    },
    	"audio/tetra_acelp_bb": {
    	source: "iana"
    },
    	"audio/tone": {
    	source: "iana"
    },
    	"audio/tsvcis": {
    	source: "iana"
    },
    	"audio/uemclip": {
    	source: "iana"
    },
    	"audio/ulpfec": {
    	source: "iana"
    },
    	"audio/usac": {
    	source: "iana"
    },
    	"audio/vdvi": {
    	source: "iana"
    },
    	"audio/vmr-wb": {
    	source: "iana"
    },
    	"audio/vnd.3gpp.iufp": {
    	source: "iana"
    },
    	"audio/vnd.4sb": {
    	source: "iana"
    },
    	"audio/vnd.audiokoz": {
    	source: "iana"
    },
    	"audio/vnd.celp": {
    	source: "iana"
    },
    	"audio/vnd.cisco.nse": {
    	source: "iana"
    },
    	"audio/vnd.cmles.radio-events": {
    	source: "iana"
    },
    	"audio/vnd.cns.anp1": {
    	source: "iana"
    },
    	"audio/vnd.cns.inf1": {
    	source: "iana"
    },
    	"audio/vnd.dece.audio": {
    	source: "iana",
    	extensions: [
    		"uva",
    		"uvva"
    	]
    },
    	"audio/vnd.digital-winds": {
    	source: "iana",
    	extensions: [
    		"eol"
    	]
    },
    	"audio/vnd.dlna.adts": {
    	source: "iana"
    },
    	"audio/vnd.dolby.heaac.1": {
    	source: "iana"
    },
    	"audio/vnd.dolby.heaac.2": {
    	source: "iana"
    },
    	"audio/vnd.dolby.mlp": {
    	source: "iana"
    },
    	"audio/vnd.dolby.mps": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pl2": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pl2x": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pl2z": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pulse.1": {
    	source: "iana"
    },
    	"audio/vnd.dra": {
    	source: "iana",
    	extensions: [
    		"dra"
    	]
    },
    	"audio/vnd.dts": {
    	source: "iana",
    	extensions: [
    		"dts"
    	]
    },
    	"audio/vnd.dts.hd": {
    	source: "iana",
    	extensions: [
    		"dtshd"
    	]
    },
    	"audio/vnd.dts.uhd": {
    	source: "iana"
    },
    	"audio/vnd.dvb.file": {
    	source: "iana"
    },
    	"audio/vnd.everad.plj": {
    	source: "iana"
    },
    	"audio/vnd.hns.audio": {
    	source: "iana"
    },
    	"audio/vnd.lucent.voice": {
    	source: "iana",
    	extensions: [
    		"lvp"
    	]
    },
    	"audio/vnd.ms-playready.media.pya": {
    	source: "iana",
    	extensions: [
    		"pya"
    	]
    },
    	"audio/vnd.nokia.mobile-xmf": {
    	source: "iana"
    },
    	"audio/vnd.nortel.vbk": {
    	source: "iana"
    },
    	"audio/vnd.nuera.ecelp4800": {
    	source: "iana",
    	extensions: [
    		"ecelp4800"
    	]
    },
    	"audio/vnd.nuera.ecelp7470": {
    	source: "iana",
    	extensions: [
    		"ecelp7470"
    	]
    },
    	"audio/vnd.nuera.ecelp9600": {
    	source: "iana",
    	extensions: [
    		"ecelp9600"
    	]
    },
    	"audio/vnd.octel.sbc": {
    	source: "iana"
    },
    	"audio/vnd.presonus.multitrack": {
    	source: "iana"
    },
    	"audio/vnd.qcelp": {
    	source: "iana"
    },
    	"audio/vnd.rhetorex.32kadpcm": {
    	source: "iana"
    },
    	"audio/vnd.rip": {
    	source: "iana",
    	extensions: [
    		"rip"
    	]
    },
    	"audio/vnd.rn-realaudio": {
    	compressible: false
    },
    	"audio/vnd.sealedmedia.softseal.mpeg": {
    	source: "iana"
    },
    	"audio/vnd.vmx.cvsd": {
    	source: "iana"
    },
    	"audio/vnd.wave": {
    	compressible: false
    },
    	"audio/vorbis": {
    	source: "iana",
    	compressible: false
    },
    	"audio/vorbis-config": {
    	source: "iana"
    },
    	"audio/wav": {
    	compressible: false,
    	extensions: [
    		"wav"
    	]
    },
    	"audio/wave": {
    	compressible: false,
    	extensions: [
    		"wav"
    	]
    },
    	"audio/webm": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"weba"
    	]
    },
    	"audio/x-aac": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"aac"
    	]
    },
    	"audio/x-aiff": {
    	source: "apache",
    	extensions: [
    		"aif",
    		"aiff",
    		"aifc"
    	]
    },
    	"audio/x-caf": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"caf"
    	]
    },
    	"audio/x-flac": {
    	source: "apache",
    	extensions: [
    		"flac"
    	]
    },
    	"audio/x-m4a": {
    	source: "nginx",
    	extensions: [
    		"m4a"
    	]
    },
    	"audio/x-matroska": {
    	source: "apache",
    	extensions: [
    		"mka"
    	]
    },
    	"audio/x-mpegurl": {
    	source: "apache",
    	extensions: [
    		"m3u"
    	]
    },
    	"audio/x-ms-wax": {
    	source: "apache",
    	extensions: [
    		"wax"
    	]
    },
    	"audio/x-ms-wma": {
    	source: "apache",
    	extensions: [
    		"wma"
    	]
    },
    	"audio/x-pn-realaudio": {
    	source: "apache",
    	extensions: [
    		"ram",
    		"ra"
    	]
    },
    	"audio/x-pn-realaudio-plugin": {
    	source: "apache",
    	extensions: [
    		"rmp"
    	]
    },
    	"audio/x-realaudio": {
    	source: "nginx",
    	extensions: [
    		"ra"
    	]
    },
    	"audio/x-tta": {
    	source: "apache"
    },
    	"audio/x-wav": {
    	source: "apache",
    	extensions: [
    		"wav"
    	]
    },
    	"audio/xm": {
    	source: "apache",
    	extensions: [
    		"xm"
    	]
    },
    	"chemical/x-cdx": {
    	source: "apache",
    	extensions: [
    		"cdx"
    	]
    },
    	"chemical/x-cif": {
    	source: "apache",
    	extensions: [
    		"cif"
    	]
    },
    	"chemical/x-cmdf": {
    	source: "apache",
    	extensions: [
    		"cmdf"
    	]
    },
    	"chemical/x-cml": {
    	source: "apache",
    	extensions: [
    		"cml"
    	]
    },
    	"chemical/x-csml": {
    	source: "apache",
    	extensions: [
    		"csml"
    	]
    },
    	"chemical/x-pdb": {
    	source: "apache"
    },
    	"chemical/x-xyz": {
    	source: "apache",
    	extensions: [
    		"xyz"
    	]
    },
    	"font/collection": {
    	source: "iana",
    	extensions: [
    		"ttc"
    	]
    },
    	"font/otf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"otf"
    	]
    },
    	"font/sfnt": {
    	source: "iana"
    },
    	"font/ttf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ttf"
    	]
    },
    	"font/woff": {
    	source: "iana",
    	extensions: [
    		"woff"
    	]
    },
    	"font/woff2": {
    	source: "iana",
    	extensions: [
    		"woff2"
    	]
    },
    	"image/aces": {
    	source: "iana",
    	extensions: [
    		"exr"
    	]
    },
    	"image/apng": {
    	compressible: false,
    	extensions: [
    		"apng"
    	]
    },
    	"image/avci": {
    	source: "iana",
    	extensions: [
    		"avci"
    	]
    },
    	"image/avcs": {
    	source: "iana",
    	extensions: [
    		"avcs"
    	]
    },
    	"image/avif": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"avif"
    	]
    },
    	"image/bmp": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"bmp"
    	]
    },
    	"image/cgm": {
    	source: "iana",
    	extensions: [
    		"cgm"
    	]
    },
    	"image/dicom-rle": {
    	source: "iana",
    	extensions: [
    		"drle"
    	]
    },
    	"image/emf": {
    	source: "iana",
    	extensions: [
    		"emf"
    	]
    },
    	"image/fits": {
    	source: "iana",
    	extensions: [
    		"fits"
    	]
    },
    	"image/g3fax": {
    	source: "iana",
    	extensions: [
    		"g3"
    	]
    },
    	"image/gif": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"gif"
    	]
    },
    	"image/heic": {
    	source: "iana",
    	extensions: [
    		"heic"
    	]
    },
    	"image/heic-sequence": {
    	source: "iana",
    	extensions: [
    		"heics"
    	]
    },
    	"image/heif": {
    	source: "iana",
    	extensions: [
    		"heif"
    	]
    },
    	"image/heif-sequence": {
    	source: "iana",
    	extensions: [
    		"heifs"
    	]
    },
    	"image/hej2k": {
    	source: "iana",
    	extensions: [
    		"hej2"
    	]
    },
    	"image/hsj2": {
    	source: "iana",
    	extensions: [
    		"hsj2"
    	]
    },
    	"image/ief": {
    	source: "iana",
    	extensions: [
    		"ief"
    	]
    },
    	"image/jls": {
    	source: "iana",
    	extensions: [
    		"jls"
    	]
    },
    	"image/jp2": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jp2",
    		"jpg2"
    	]
    },
    	"image/jpeg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jpeg",
    		"jpg",
    		"jpe"
    	]
    },
    	"image/jph": {
    	source: "iana",
    	extensions: [
    		"jph"
    	]
    },
    	"image/jphc": {
    	source: "iana",
    	extensions: [
    		"jhc"
    	]
    },
    	"image/jpm": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jpm"
    	]
    },
    	"image/jpx": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jpx",
    		"jpf"
    	]
    },
    	"image/jxr": {
    	source: "iana",
    	extensions: [
    		"jxr"
    	]
    },
    	"image/jxra": {
    	source: "iana",
    	extensions: [
    		"jxra"
    	]
    },
    	"image/jxrs": {
    	source: "iana",
    	extensions: [
    		"jxrs"
    	]
    },
    	"image/jxs": {
    	source: "iana",
    	extensions: [
    		"jxs"
    	]
    },
    	"image/jxsc": {
    	source: "iana",
    	extensions: [
    		"jxsc"
    	]
    },
    	"image/jxsi": {
    	source: "iana",
    	extensions: [
    		"jxsi"
    	]
    },
    	"image/jxss": {
    	source: "iana",
    	extensions: [
    		"jxss"
    	]
    },
    	"image/ktx": {
    	source: "iana",
    	extensions: [
    		"ktx"
    	]
    },
    	"image/ktx2": {
    	source: "iana",
    	extensions: [
    		"ktx2"
    	]
    },
    	"image/naplps": {
    	source: "iana"
    },
    	"image/pjpeg": {
    	compressible: false
    },
    	"image/png": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"png"
    	]
    },
    	"image/prs.btif": {
    	source: "iana",
    	extensions: [
    		"btif"
    	]
    },
    	"image/prs.pti": {
    	source: "iana",
    	extensions: [
    		"pti"
    	]
    },
    	"image/pwg-raster": {
    	source: "iana"
    },
    	"image/sgi": {
    	source: "apache",
    	extensions: [
    		"sgi"
    	]
    },
    	"image/svg+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"svg",
    		"svgz"
    	]
    },
    	"image/t38": {
    	source: "iana",
    	extensions: [
    		"t38"
    	]
    },
    	"image/tiff": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"tif",
    		"tiff"
    	]
    },
    	"image/tiff-fx": {
    	source: "iana",
    	extensions: [
    		"tfx"
    	]
    },
    	"image/vnd.adobe.photoshop": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"psd"
    	]
    },
    	"image/vnd.airzip.accelerator.azv": {
    	source: "iana",
    	extensions: [
    		"azv"
    	]
    },
    	"image/vnd.cns.inf2": {
    	source: "iana"
    },
    	"image/vnd.dece.graphic": {
    	source: "iana",
    	extensions: [
    		"uvi",
    		"uvvi",
    		"uvg",
    		"uvvg"
    	]
    },
    	"image/vnd.djvu": {
    	source: "iana",
    	extensions: [
    		"djvu",
    		"djv"
    	]
    },
    	"image/vnd.dvb.subtitle": {
    	source: "iana",
    	extensions: [
    		"sub"
    	]
    },
    	"image/vnd.dwg": {
    	source: "iana",
    	extensions: [
    		"dwg"
    	]
    },
    	"image/vnd.dxf": {
    	source: "iana",
    	extensions: [
    		"dxf"
    	]
    },
    	"image/vnd.fastbidsheet": {
    	source: "iana",
    	extensions: [
    		"fbs"
    	]
    },
    	"image/vnd.fpx": {
    	source: "iana",
    	extensions: [
    		"fpx"
    	]
    },
    	"image/vnd.fst": {
    	source: "iana",
    	extensions: [
    		"fst"
    	]
    },
    	"image/vnd.fujixerox.edmics-mmr": {
    	source: "iana",
    	extensions: [
    		"mmr"
    	]
    },
    	"image/vnd.fujixerox.edmics-rlc": {
    	source: "iana",
    	extensions: [
    		"rlc"
    	]
    },
    	"image/vnd.globalgraphics.pgb": {
    	source: "iana"
    },
    	"image/vnd.microsoft.icon": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ico"
    	]
    },
    	"image/vnd.mix": {
    	source: "iana"
    },
    	"image/vnd.mozilla.apng": {
    	source: "iana"
    },
    	"image/vnd.ms-dds": {
    	compressible: true,
    	extensions: [
    		"dds"
    	]
    },
    	"image/vnd.ms-modi": {
    	source: "iana",
    	extensions: [
    		"mdi"
    	]
    },
    	"image/vnd.ms-photo": {
    	source: "apache",
    	extensions: [
    		"wdp"
    	]
    },
    	"image/vnd.net-fpx": {
    	source: "iana",
    	extensions: [
    		"npx"
    	]
    },
    	"image/vnd.pco.b16": {
    	source: "iana",
    	extensions: [
    		"b16"
    	]
    },
    	"image/vnd.radiance": {
    	source: "iana"
    },
    	"image/vnd.sealed.png": {
    	source: "iana"
    },
    	"image/vnd.sealedmedia.softseal.gif": {
    	source: "iana"
    },
    	"image/vnd.sealedmedia.softseal.jpg": {
    	source: "iana"
    },
    	"image/vnd.svf": {
    	source: "iana"
    },
    	"image/vnd.tencent.tap": {
    	source: "iana",
    	extensions: [
    		"tap"
    	]
    },
    	"image/vnd.valve.source.texture": {
    	source: "iana",
    	extensions: [
    		"vtf"
    	]
    },
    	"image/vnd.wap.wbmp": {
    	source: "iana",
    	extensions: [
    		"wbmp"
    	]
    },
    	"image/vnd.xiff": {
    	source: "iana",
    	extensions: [
    		"xif"
    	]
    },
    	"image/vnd.zbrush.pcx": {
    	source: "iana",
    	extensions: [
    		"pcx"
    	]
    },
    	"image/webp": {
    	source: "apache",
    	extensions: [
    		"webp"
    	]
    },
    	"image/wmf": {
    	source: "iana",
    	extensions: [
    		"wmf"
    	]
    },
    	"image/x-3ds": {
    	source: "apache",
    	extensions: [
    		"3ds"
    	]
    },
    	"image/x-cmu-raster": {
    	source: "apache",
    	extensions: [
    		"ras"
    	]
    },
    	"image/x-cmx": {
    	source: "apache",
    	extensions: [
    		"cmx"
    	]
    },
    	"image/x-freehand": {
    	source: "apache",
    	extensions: [
    		"fh",
    		"fhc",
    		"fh4",
    		"fh5",
    		"fh7"
    	]
    },
    	"image/x-icon": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"ico"
    	]
    },
    	"image/x-jng": {
    	source: "nginx",
    	extensions: [
    		"jng"
    	]
    },
    	"image/x-mrsid-image": {
    	source: "apache",
    	extensions: [
    		"sid"
    	]
    },
    	"image/x-ms-bmp": {
    	source: "nginx",
    	compressible: true,
    	extensions: [
    		"bmp"
    	]
    },
    	"image/x-pcx": {
    	source: "apache",
    	extensions: [
    		"pcx"
    	]
    },
    	"image/x-pict": {
    	source: "apache",
    	extensions: [
    		"pic",
    		"pct"
    	]
    },
    	"image/x-portable-anymap": {
    	source: "apache",
    	extensions: [
    		"pnm"
    	]
    },
    	"image/x-portable-bitmap": {
    	source: "apache",
    	extensions: [
    		"pbm"
    	]
    },
    	"image/x-portable-graymap": {
    	source: "apache",
    	extensions: [
    		"pgm"
    	]
    },
    	"image/x-portable-pixmap": {
    	source: "apache",
    	extensions: [
    		"ppm"
    	]
    },
    	"image/x-rgb": {
    	source: "apache",
    	extensions: [
    		"rgb"
    	]
    },
    	"image/x-tga": {
    	source: "apache",
    	extensions: [
    		"tga"
    	]
    },
    	"image/x-xbitmap": {
    	source: "apache",
    	extensions: [
    		"xbm"
    	]
    },
    	"image/x-xcf": {
    	compressible: false
    },
    	"image/x-xpixmap": {
    	source: "apache",
    	extensions: [
    		"xpm"
    	]
    },
    	"image/x-xwindowdump": {
    	source: "apache",
    	extensions: [
    		"xwd"
    	]
    },
    	"message/cpim": {
    	source: "iana"
    },
    	"message/delivery-status": {
    	source: "iana"
    },
    	"message/disposition-notification": {
    	source: "iana",
    	extensions: [
    		"disposition-notification"
    	]
    },
    	"message/external-body": {
    	source: "iana"
    },
    	"message/feedback-report": {
    	source: "iana"
    },
    	"message/global": {
    	source: "iana",
    	extensions: [
    		"u8msg"
    	]
    },
    	"message/global-delivery-status": {
    	source: "iana",
    	extensions: [
    		"u8dsn"
    	]
    },
    	"message/global-disposition-notification": {
    	source: "iana",
    	extensions: [
    		"u8mdn"
    	]
    },
    	"message/global-headers": {
    	source: "iana",
    	extensions: [
    		"u8hdr"
    	]
    },
    	"message/http": {
    	source: "iana",
    	compressible: false
    },
    	"message/imdn+xml": {
    	source: "iana",
    	compressible: true
    },
    	"message/news": {
    	source: "iana"
    },
    	"message/partial": {
    	source: "iana",
    	compressible: false
    },
    	"message/rfc822": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"eml",
    		"mime"
    	]
    },
    	"message/s-http": {
    	source: "iana"
    },
    	"message/sip": {
    	source: "iana"
    },
    	"message/sipfrag": {
    	source: "iana"
    },
    	"message/tracking-status": {
    	source: "iana"
    },
    	"message/vnd.si.simp": {
    	source: "iana"
    },
    	"message/vnd.wfa.wsc": {
    	source: "iana",
    	extensions: [
    		"wsc"
    	]
    },
    	"model/3mf": {
    	source: "iana",
    	extensions: [
    		"3mf"
    	]
    },
    	"model/e57": {
    	source: "iana"
    },
    	"model/gltf+json": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"gltf"
    	]
    },
    	"model/gltf-binary": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"glb"
    	]
    },
    	"model/iges": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"igs",
    		"iges"
    	]
    },
    	"model/mesh": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"msh",
    		"mesh",
    		"silo"
    	]
    },
    	"model/mtl": {
    	source: "iana",
    	extensions: [
    		"mtl"
    	]
    },
    	"model/obj": {
    	source: "iana",
    	extensions: [
    		"obj"
    	]
    },
    	"model/step": {
    	source: "iana"
    },
    	"model/step+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"stpx"
    	]
    },
    	"model/step+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"stpz"
    	]
    },
    	"model/step-xml+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"stpxz"
    	]
    },
    	"model/stl": {
    	source: "iana",
    	extensions: [
    		"stl"
    	]
    },
    	"model/vnd.collada+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dae"
    	]
    },
    	"model/vnd.dwf": {
    	source: "iana",
    	extensions: [
    		"dwf"
    	]
    },
    	"model/vnd.flatland.3dml": {
    	source: "iana"
    },
    	"model/vnd.gdl": {
    	source: "iana",
    	extensions: [
    		"gdl"
    	]
    },
    	"model/vnd.gs-gdl": {
    	source: "apache"
    },
    	"model/vnd.gs.gdl": {
    	source: "iana"
    },
    	"model/vnd.gtw": {
    	source: "iana",
    	extensions: [
    		"gtw"
    	]
    },
    	"model/vnd.moml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"model/vnd.mts": {
    	source: "iana",
    	extensions: [
    		"mts"
    	]
    },
    	"model/vnd.opengex": {
    	source: "iana",
    	extensions: [
    		"ogex"
    	]
    },
    	"model/vnd.parasolid.transmit.binary": {
    	source: "iana",
    	extensions: [
    		"x_b"
    	]
    },
    	"model/vnd.parasolid.transmit.text": {
    	source: "iana",
    	extensions: [
    		"x_t"
    	]
    },
    	"model/vnd.pytha.pyox": {
    	source: "iana"
    },
    	"model/vnd.rosette.annotated-data-model": {
    	source: "iana"
    },
    	"model/vnd.sap.vds": {
    	source: "iana",
    	extensions: [
    		"vds"
    	]
    },
    	"model/vnd.usdz+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"usdz"
    	]
    },
    	"model/vnd.valve.source.compiled-map": {
    	source: "iana",
    	extensions: [
    		"bsp"
    	]
    },
    	"model/vnd.vtu": {
    	source: "iana",
    	extensions: [
    		"vtu"
    	]
    },
    	"model/vrml": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"wrl",
    		"vrml"
    	]
    },
    	"model/x3d+binary": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"x3db",
    		"x3dbz"
    	]
    },
    	"model/x3d+fastinfoset": {
    	source: "iana",
    	extensions: [
    		"x3db"
    	]
    },
    	"model/x3d+vrml": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"x3dv",
    		"x3dvz"
    	]
    },
    	"model/x3d+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"x3d",
    		"x3dz"
    	]
    },
    	"model/x3d-vrml": {
    	source: "iana",
    	extensions: [
    		"x3dv"
    	]
    },
    	"multipart/alternative": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/appledouble": {
    	source: "iana"
    },
    	"multipart/byteranges": {
    	source: "iana"
    },
    	"multipart/digest": {
    	source: "iana"
    },
    	"multipart/encrypted": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/form-data": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/header-set": {
    	source: "iana"
    },
    	"multipart/mixed": {
    	source: "iana"
    },
    	"multipart/multilingual": {
    	source: "iana"
    },
    	"multipart/parallel": {
    	source: "iana"
    },
    	"multipart/related": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/report": {
    	source: "iana"
    },
    	"multipart/signed": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/vnd.bint.med-plus": {
    	source: "iana"
    },
    	"multipart/voice-message": {
    	source: "iana"
    },
    	"multipart/x-mixed-replace": {
    	source: "iana"
    },
    	"text/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"text/cache-manifest": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"appcache",
    		"manifest"
    	]
    },
    	"text/calendar": {
    	source: "iana",
    	extensions: [
    		"ics",
    		"ifb"
    	]
    },
    	"text/calender": {
    	compressible: true
    },
    	"text/cmd": {
    	compressible: true
    },
    	"text/coffeescript": {
    	extensions: [
    		"coffee",
    		"litcoffee"
    	]
    },
    	"text/cql": {
    	source: "iana"
    },
    	"text/cql-expression": {
    	source: "iana"
    },
    	"text/cql-identifier": {
    	source: "iana"
    },
    	"text/css": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"css"
    	]
    },
    	"text/csv": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"csv"
    	]
    },
    	"text/csv-schema": {
    	source: "iana"
    },
    	"text/directory": {
    	source: "iana"
    },
    	"text/dns": {
    	source: "iana"
    },
    	"text/ecmascript": {
    	source: "iana"
    },
    	"text/encaprtp": {
    	source: "iana"
    },
    	"text/enriched": {
    	source: "iana"
    },
    	"text/fhirpath": {
    	source: "iana"
    },
    	"text/flexfec": {
    	source: "iana"
    },
    	"text/fwdred": {
    	source: "iana"
    },
    	"text/gff3": {
    	source: "iana"
    },
    	"text/grammar-ref-list": {
    	source: "iana"
    },
    	"text/html": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"html",
    		"htm",
    		"shtml"
    	]
    },
    	"text/jade": {
    	extensions: [
    		"jade"
    	]
    },
    	"text/javascript": {
    	source: "iana",
    	compressible: true
    },
    	"text/jcr-cnd": {
    	source: "iana"
    },
    	"text/jsx": {
    	compressible: true,
    	extensions: [
    		"jsx"
    	]
    },
    	"text/less": {
    	compressible: true,
    	extensions: [
    		"less"
    	]
    },
    	"text/markdown": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"markdown",
    		"md"
    	]
    },
    	"text/mathml": {
    	source: "nginx",
    	extensions: [
    		"mml"
    	]
    },
    	"text/mdx": {
    	compressible: true,
    	extensions: [
    		"mdx"
    	]
    },
    	"text/mizar": {
    	source: "iana"
    },
    	"text/n3": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"n3"
    	]
    },
    	"text/parameters": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/parityfec": {
    	source: "iana"
    },
    	"text/plain": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"txt",
    		"text",
    		"conf",
    		"def",
    		"list",
    		"log",
    		"in",
    		"ini"
    	]
    },
    	"text/provenance-notation": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/prs.fallenstein.rst": {
    	source: "iana"
    },
    	"text/prs.lines.tag": {
    	source: "iana",
    	extensions: [
    		"dsc"
    	]
    },
    	"text/prs.prop.logic": {
    	source: "iana"
    },
    	"text/raptorfec": {
    	source: "iana"
    },
    	"text/red": {
    	source: "iana"
    },
    	"text/rfc822-headers": {
    	source: "iana"
    },
    	"text/richtext": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rtx"
    	]
    },
    	"text/rtf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rtf"
    	]
    },
    	"text/rtp-enc-aescm128": {
    	source: "iana"
    },
    	"text/rtploopback": {
    	source: "iana"
    },
    	"text/rtx": {
    	source: "iana"
    },
    	"text/sgml": {
    	source: "iana",
    	extensions: [
    		"sgml",
    		"sgm"
    	]
    },
    	"text/shaclc": {
    	source: "iana"
    },
    	"text/shex": {
    	source: "iana",
    	extensions: [
    		"shex"
    	]
    },
    	"text/slim": {
    	extensions: [
    		"slim",
    		"slm"
    	]
    },
    	"text/spdx": {
    	source: "iana",
    	extensions: [
    		"spdx"
    	]
    },
    	"text/strings": {
    	source: "iana"
    },
    	"text/stylus": {
    	extensions: [
    		"stylus",
    		"styl"
    	]
    },
    	"text/t140": {
    	source: "iana"
    },
    	"text/tab-separated-values": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"tsv"
    	]
    },
    	"text/troff": {
    	source: "iana",
    	extensions: [
    		"t",
    		"tr",
    		"roff",
    		"man",
    		"me",
    		"ms"
    	]
    },
    	"text/turtle": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"ttl"
    	]
    },
    	"text/ulpfec": {
    	source: "iana"
    },
    	"text/uri-list": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"uri",
    		"uris",
    		"urls"
    	]
    },
    	"text/vcard": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"vcard"
    	]
    },
    	"text/vnd.a": {
    	source: "iana"
    },
    	"text/vnd.abc": {
    	source: "iana"
    },
    	"text/vnd.ascii-art": {
    	source: "iana"
    },
    	"text/vnd.curl": {
    	source: "iana",
    	extensions: [
    		"curl"
    	]
    },
    	"text/vnd.curl.dcurl": {
    	source: "apache",
    	extensions: [
    		"dcurl"
    	]
    },
    	"text/vnd.curl.mcurl": {
    	source: "apache",
    	extensions: [
    		"mcurl"
    	]
    },
    	"text/vnd.curl.scurl": {
    	source: "apache",
    	extensions: [
    		"scurl"
    	]
    },
    	"text/vnd.debian.copyright": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/vnd.dmclientscript": {
    	source: "iana"
    },
    	"text/vnd.dvb.subtitle": {
    	source: "iana",
    	extensions: [
    		"sub"
    	]
    },
    	"text/vnd.esmertec.theme-descriptor": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/vnd.familysearch.gedcom": {
    	source: "iana",
    	extensions: [
    		"ged"
    	]
    },
    	"text/vnd.ficlab.flt": {
    	source: "iana"
    },
    	"text/vnd.fly": {
    	source: "iana",
    	extensions: [
    		"fly"
    	]
    },
    	"text/vnd.fmi.flexstor": {
    	source: "iana",
    	extensions: [
    		"flx"
    	]
    },
    	"text/vnd.gml": {
    	source: "iana"
    },
    	"text/vnd.graphviz": {
    	source: "iana",
    	extensions: [
    		"gv"
    	]
    },
    	"text/vnd.hans": {
    	source: "iana"
    },
    	"text/vnd.hgl": {
    	source: "iana"
    },
    	"text/vnd.in3d.3dml": {
    	source: "iana",
    	extensions: [
    		"3dml"
    	]
    },
    	"text/vnd.in3d.spot": {
    	source: "iana",
    	extensions: [
    		"spot"
    	]
    },
    	"text/vnd.iptc.newsml": {
    	source: "iana"
    },
    	"text/vnd.iptc.nitf": {
    	source: "iana"
    },
    	"text/vnd.latex-z": {
    	source: "iana"
    },
    	"text/vnd.motorola.reflex": {
    	source: "iana"
    },
    	"text/vnd.ms-mediapackage": {
    	source: "iana"
    },
    	"text/vnd.net2phone.commcenter.command": {
    	source: "iana"
    },
    	"text/vnd.radisys.msml-basic-layout": {
    	source: "iana"
    },
    	"text/vnd.senx.warpscript": {
    	source: "iana"
    },
    	"text/vnd.si.uricatalogue": {
    	source: "iana"
    },
    	"text/vnd.sosi": {
    	source: "iana"
    },
    	"text/vnd.sun.j2me.app-descriptor": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"jad"
    	]
    },
    	"text/vnd.trolltech.linguist": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/vnd.wap.si": {
    	source: "iana"
    },
    	"text/vnd.wap.sl": {
    	source: "iana"
    },
    	"text/vnd.wap.wml": {
    	source: "iana",
    	extensions: [
    		"wml"
    	]
    },
    	"text/vnd.wap.wmlscript": {
    	source: "iana",
    	extensions: [
    		"wmls"
    	]
    },
    	"text/vtt": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"vtt"
    	]
    },
    	"text/x-asm": {
    	source: "apache",
    	extensions: [
    		"s",
    		"asm"
    	]
    },
    	"text/x-c": {
    	source: "apache",
    	extensions: [
    		"c",
    		"cc",
    		"cxx",
    		"cpp",
    		"h",
    		"hh",
    		"dic"
    	]
    },
    	"text/x-component": {
    	source: "nginx",
    	extensions: [
    		"htc"
    	]
    },
    	"text/x-fortran": {
    	source: "apache",
    	extensions: [
    		"f",
    		"for",
    		"f77",
    		"f90"
    	]
    },
    	"text/x-gwt-rpc": {
    	compressible: true
    },
    	"text/x-handlebars-template": {
    	extensions: [
    		"hbs"
    	]
    },
    	"text/x-java-source": {
    	source: "apache",
    	extensions: [
    		"java"
    	]
    },
    	"text/x-jquery-tmpl": {
    	compressible: true
    },
    	"text/x-lua": {
    	extensions: [
    		"lua"
    	]
    },
    	"text/x-markdown": {
    	compressible: true,
    	extensions: [
    		"mkd"
    	]
    },
    	"text/x-nfo": {
    	source: "apache",
    	extensions: [
    		"nfo"
    	]
    },
    	"text/x-opml": {
    	source: "apache",
    	extensions: [
    		"opml"
    	]
    },
    	"text/x-org": {
    	compressible: true,
    	extensions: [
    		"org"
    	]
    },
    	"text/x-pascal": {
    	source: "apache",
    	extensions: [
    		"p",
    		"pas"
    	]
    },
    	"text/x-processing": {
    	compressible: true,
    	extensions: [
    		"pde"
    	]
    },
    	"text/x-sass": {
    	extensions: [
    		"sass"
    	]
    },
    	"text/x-scss": {
    	extensions: [
    		"scss"
    	]
    },
    	"text/x-setext": {
    	source: "apache",
    	extensions: [
    		"etx"
    	]
    },
    	"text/x-sfv": {
    	source: "apache",
    	extensions: [
    		"sfv"
    	]
    },
    	"text/x-suse-ymp": {
    	compressible: true,
    	extensions: [
    		"ymp"
    	]
    },
    	"text/x-uuencode": {
    	source: "apache",
    	extensions: [
    		"uu"
    	]
    },
    	"text/x-vcalendar": {
    	source: "apache",
    	extensions: [
    		"vcs"
    	]
    },
    	"text/x-vcard": {
    	source: "apache",
    	extensions: [
    		"vcf"
    	]
    },
    	"text/xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xml"
    	]
    },
    	"text/xml-external-parsed-entity": {
    	source: "iana"
    },
    	"text/yaml": {
    	compressible: true,
    	extensions: [
    		"yaml",
    		"yml"
    	]
    },
    	"video/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"video/3gpp": {
    	source: "iana",
    	extensions: [
    		"3gp",
    		"3gpp"
    	]
    },
    	"video/3gpp-tt": {
    	source: "iana"
    },
    	"video/3gpp2": {
    	source: "iana",
    	extensions: [
    		"3g2"
    	]
    },
    	"video/av1": {
    	source: "iana"
    },
    	"video/bmpeg": {
    	source: "iana"
    },
    	"video/bt656": {
    	source: "iana"
    },
    	"video/celb": {
    	source: "iana"
    },
    	"video/dv": {
    	source: "iana"
    },
    	"video/encaprtp": {
    	source: "iana"
    },
    	"video/ffv1": {
    	source: "iana"
    },
    	"video/flexfec": {
    	source: "iana"
    },
    	"video/h261": {
    	source: "iana",
    	extensions: [
    		"h261"
    	]
    },
    	"video/h263": {
    	source: "iana",
    	extensions: [
    		"h263"
    	]
    },
    	"video/h263-1998": {
    	source: "iana"
    },
    	"video/h263-2000": {
    	source: "iana"
    },
    	"video/h264": {
    	source: "iana",
    	extensions: [
    		"h264"
    	]
    },
    	"video/h264-rcdo": {
    	source: "iana"
    },
    	"video/h264-svc": {
    	source: "iana"
    },
    	"video/h265": {
    	source: "iana"
    },
    	"video/iso.segment": {
    	source: "iana",
    	extensions: [
    		"m4s"
    	]
    },
    	"video/jpeg": {
    	source: "iana",
    	extensions: [
    		"jpgv"
    	]
    },
    	"video/jpeg2000": {
    	source: "iana"
    },
    	"video/jpm": {
    	source: "apache",
    	extensions: [
    		"jpm",
    		"jpgm"
    	]
    },
    	"video/jxsv": {
    	source: "iana"
    },
    	"video/mj2": {
    	source: "iana",
    	extensions: [
    		"mj2",
    		"mjp2"
    	]
    },
    	"video/mp1s": {
    	source: "iana"
    },
    	"video/mp2p": {
    	source: "iana"
    },
    	"video/mp2t": {
    	source: "iana",
    	extensions: [
    		"ts"
    	]
    },
    	"video/mp4": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"mp4",
    		"mp4v",
    		"mpg4"
    	]
    },
    	"video/mp4v-es": {
    	source: "iana"
    },
    	"video/mpeg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"mpeg",
    		"mpg",
    		"mpe",
    		"m1v",
    		"m2v"
    	]
    },
    	"video/mpeg4-generic": {
    	source: "iana"
    },
    	"video/mpv": {
    	source: "iana"
    },
    	"video/nv": {
    	source: "iana"
    },
    	"video/ogg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ogv"
    	]
    },
    	"video/parityfec": {
    	source: "iana"
    },
    	"video/pointer": {
    	source: "iana"
    },
    	"video/quicktime": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"qt",
    		"mov"
    	]
    },
    	"video/raptorfec": {
    	source: "iana"
    },
    	"video/raw": {
    	source: "iana"
    },
    	"video/rtp-enc-aescm128": {
    	source: "iana"
    },
    	"video/rtploopback": {
    	source: "iana"
    },
    	"video/rtx": {
    	source: "iana"
    },
    	"video/scip": {
    	source: "iana"
    },
    	"video/smpte291": {
    	source: "iana"
    },
    	"video/smpte292m": {
    	source: "iana"
    },
    	"video/ulpfec": {
    	source: "iana"
    },
    	"video/vc1": {
    	source: "iana"
    },
    	"video/vc2": {
    	source: "iana"
    },
    	"video/vnd.cctv": {
    	source: "iana"
    },
    	"video/vnd.dece.hd": {
    	source: "iana",
    	extensions: [
    		"uvh",
    		"uvvh"
    	]
    },
    	"video/vnd.dece.mobile": {
    	source: "iana",
    	extensions: [
    		"uvm",
    		"uvvm"
    	]
    },
    	"video/vnd.dece.mp4": {
    	source: "iana"
    },
    	"video/vnd.dece.pd": {
    	source: "iana",
    	extensions: [
    		"uvp",
    		"uvvp"
    	]
    },
    	"video/vnd.dece.sd": {
    	source: "iana",
    	extensions: [
    		"uvs",
    		"uvvs"
    	]
    },
    	"video/vnd.dece.video": {
    	source: "iana",
    	extensions: [
    		"uvv",
    		"uvvv"
    	]
    },
    	"video/vnd.directv.mpeg": {
    	source: "iana"
    },
    	"video/vnd.directv.mpeg-tts": {
    	source: "iana"
    },
    	"video/vnd.dlna.mpeg-tts": {
    	source: "iana"
    },
    	"video/vnd.dvb.file": {
    	source: "iana",
    	extensions: [
    		"dvb"
    	]
    },
    	"video/vnd.fvt": {
    	source: "iana",
    	extensions: [
    		"fvt"
    	]
    },
    	"video/vnd.hns.video": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.1dparityfec-1010": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.1dparityfec-2005": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.2dparityfec-1010": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.2dparityfec-2005": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.ttsavc": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.ttsmpeg2": {
    	source: "iana"
    },
    	"video/vnd.motorola.video": {
    	source: "iana"
    },
    	"video/vnd.motorola.videop": {
    	source: "iana"
    },
    	"video/vnd.mpegurl": {
    	source: "iana",
    	extensions: [
    		"mxu",
    		"m4u"
    	]
    },
    	"video/vnd.ms-playready.media.pyv": {
    	source: "iana",
    	extensions: [
    		"pyv"
    	]
    },
    	"video/vnd.nokia.interleaved-multimedia": {
    	source: "iana"
    },
    	"video/vnd.nokia.mp4vr": {
    	source: "iana"
    },
    	"video/vnd.nokia.videovoip": {
    	source: "iana"
    },
    	"video/vnd.objectvideo": {
    	source: "iana"
    },
    	"video/vnd.radgamettools.bink": {
    	source: "iana"
    },
    	"video/vnd.radgamettools.smacker": {
    	source: "iana"
    },
    	"video/vnd.sealed.mpeg1": {
    	source: "iana"
    },
    	"video/vnd.sealed.mpeg4": {
    	source: "iana"
    },
    	"video/vnd.sealed.swf": {
    	source: "iana"
    },
    	"video/vnd.sealedmedia.softseal.mov": {
    	source: "iana"
    },
    	"video/vnd.uvvu.mp4": {
    	source: "iana",
    	extensions: [
    		"uvu",
    		"uvvu"
    	]
    },
    	"video/vnd.vivo": {
    	source: "iana",
    	extensions: [
    		"viv"
    	]
    },
    	"video/vnd.youtube.yt": {
    	source: "iana"
    },
    	"video/vp8": {
    	source: "iana"
    },
    	"video/vp9": {
    	source: "iana"
    },
    	"video/webm": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"webm"
    	]
    },
    	"video/x-f4v": {
    	source: "apache",
    	extensions: [
    		"f4v"
    	]
    },
    	"video/x-fli": {
    	source: "apache",
    	extensions: [
    		"fli"
    	]
    },
    	"video/x-flv": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"flv"
    	]
    },
    	"video/x-m4v": {
    	source: "apache",
    	extensions: [
    		"m4v"
    	]
    },
    	"video/x-matroska": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"mkv",
    		"mk3d",
    		"mks"
    	]
    },
    	"video/x-mng": {
    	source: "apache",
    	extensions: [
    		"mng"
    	]
    },
    	"video/x-ms-asf": {
    	source: "apache",
    	extensions: [
    		"asf",
    		"asx"
    	]
    },
    	"video/x-ms-vob": {
    	source: "apache",
    	extensions: [
    		"vob"
    	]
    },
    	"video/x-ms-wm": {
    	source: "apache",
    	extensions: [
    		"wm"
    	]
    },
    	"video/x-ms-wmv": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"wmv"
    	]
    },
    	"video/x-ms-wmx": {
    	source: "apache",
    	extensions: [
    		"wmx"
    	]
    },
    	"video/x-ms-wvx": {
    	source: "apache",
    	extensions: [
    		"wvx"
    	]
    },
    	"video/x-msvideo": {
    	source: "apache",
    	extensions: [
    		"avi"
    	]
    },
    	"video/x-sgi-movie": {
    	source: "apache",
    	extensions: [
    		"movie"
    	]
    },
    	"video/x-smv": {
    	source: "apache",
    	extensions: [
    		"smv"
    	]
    },
    	"x-conference/x-cooltalk": {
    	source: "apache",
    	extensions: [
    		"ice"
    	]
    },
    	"x-shader/x-fragment": {
    	compressible: true
    },
    	"x-shader/x-vertex": {
    	compressible: true
    }
    };

    /*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015-2022 Douglas Christopher Wilson
     * MIT Licensed
     */

    (function (module) {
    	/**
    	 * Module exports.
    	 */

    	module.exports = require$$0;
    } (mimeDb));

    /*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    (function (exports) {

    	/**
    	 * Module dependencies.
    	 * @private
    	 */

    	var db = mimeDb.exports;
    	var extname = require$$1$1.extname;

    	/**
    	 * Module variables.
    	 * @private
    	 */

    	var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    	var TEXT_TYPE_REGEXP = /^text\//i;

    	/**
    	 * Module exports.
    	 * @public
    	 */

    	exports.charset = charset;
    	exports.charsets = { lookup: charset };
    	exports.contentType = contentType;
    	exports.extension = extension;
    	exports.extensions = Object.create(null);
    	exports.lookup = lookup;
    	exports.types = Object.create(null);

    	// Populate the extensions/types maps
    	populateMaps(exports.extensions, exports.types);

    	/**
    	 * Get the default charset for a MIME type.
    	 *
    	 * @param {string} type
    	 * @return {boolean|string}
    	 */

    	function charset (type) {
    	  if (!type || typeof type !== 'string') {
    	    return false
    	  }

    	  // TODO: use media-typer
    	  var match = EXTRACT_TYPE_REGEXP.exec(type);
    	  var mime = match && db[match[1].toLowerCase()];

    	  if (mime && mime.charset) {
    	    return mime.charset
    	  }

    	  // default text/* to utf-8
    	  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    	    return 'UTF-8'
    	  }

    	  return false
    	}

    	/**
    	 * Create a full Content-Type header given a MIME type or extension.
    	 *
    	 * @param {string} str
    	 * @return {boolean|string}
    	 */

    	function contentType (str) {
    	  // TODO: should this even be in this module?
    	  if (!str || typeof str !== 'string') {
    	    return false
    	  }

    	  var mime = str.indexOf('/') === -1
    	    ? exports.lookup(str)
    	    : str;

    	  if (!mime) {
    	    return false
    	  }

    	  // TODO: use content-type or other module
    	  if (mime.indexOf('charset') === -1) {
    	    var charset = exports.charset(mime);
    	    if (charset) mime += '; charset=' + charset.toLowerCase();
    	  }

    	  return mime
    	}

    	/**
    	 * Get the default extension for a MIME type.
    	 *
    	 * @param {string} type
    	 * @return {boolean|string}
    	 */

    	function extension (type) {
    	  if (!type || typeof type !== 'string') {
    	    return false
    	  }

    	  // TODO: use media-typer
    	  var match = EXTRACT_TYPE_REGEXP.exec(type);

    	  // get extensions
    	  var exts = match && exports.extensions[match[1].toLowerCase()];

    	  if (!exts || !exts.length) {
    	    return false
    	  }

    	  return exts[0]
    	}

    	/**
    	 * Lookup the MIME type for a file path/extension.
    	 *
    	 * @param {string} path
    	 * @return {boolean|string}
    	 */

    	function lookup (path) {
    	  if (!path || typeof path !== 'string') {
    	    return false
    	  }

    	  // get the extension ("ext" or ".ext" or full path)
    	  var extension = extname('x.' + path)
    	    .toLowerCase()
    	    .substr(1);

    	  if (!extension) {
    	    return false
    	  }

    	  return exports.types[extension] || false
    	}

    	/**
    	 * Populate the extensions and types maps.
    	 * @private
    	 */

    	function populateMaps (extensions, types) {
    	  // source preference (least -> most)
    	  var preference = ['nginx', 'apache', undefined, 'iana'];

    	  Object.keys(db).forEach(function forEachMimeType (type) {
    	    var mime = db[type];
    	    var exts = mime.extensions;

    	    if (!exts || !exts.length) {
    	      return
    	    }

    	    // mime -> extensions
    	    extensions[type] = exts;

    	    // extension -> mime
    	    for (var i = 0; i < exts.length; i++) {
    	      var extension = exts[i];

    	      if (types[extension]) {
    	        var from = preference.indexOf(db[types[extension]].source);
    	        var to = preference.indexOf(mime.source);

    	        if (types[extension] !== 'application/octet-stream' &&
    	          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
    	          // skip the remapping
    	          continue
    	        }
    	      }

    	      // set the extension -> mime
    	      types[extension] = type;
    	    }
    	  });
    	}
    } (mimeTypes));

    var defer_1 = defer$1;

    /**
     * Runs provided function on next iteration of the event loop
     *
     * @param {function} fn - function to run
     */
    function defer$1(fn)
    {
      var nextTick = typeof setImmediate == 'function'
        ? setImmediate
        : (
          typeof process == 'object' && typeof process.nextTick == 'function'
          ? process.nextTick
          : null
        );

      if (nextTick)
      {
        nextTick(fn);
      }
      else
      {
        setTimeout(fn, 0);
      }
    }

    var defer = defer_1;

    // API
    var async_1 = async$2;

    /**
     * Runs provided callback asynchronously
     * even if callback itself is not
     *
     * @param   {function} callback - callback to invoke
     * @returns {function} - augmented callback
     */
    function async$2(callback)
    {
      var isAsync = false;

      // check if async happened
      defer(function() { isAsync = true; });

      return function async_callback(err, result)
      {
        if (isAsync)
        {
          callback(err, result);
        }
        else
        {
          defer(function nextTick_callback()
          {
            callback(err, result);
          });
        }
      };
    }

    // API
    var abort_1 = abort$2;

    /**
     * Aborts leftover active jobs
     *
     * @param {object} state - current state object
     */
    function abort$2(state)
    {
      Object.keys(state.jobs).forEach(clean.bind(state));

      // reset leftover jobs
      state.jobs = {};
    }

    /**
     * Cleans up leftover job by invoking abort function for the provided job id
     *
     * @this  state
     * @param {string|number} key - job id to abort
     */
    function clean(key)
    {
      if (typeof this.jobs[key] == 'function')
      {
        this.jobs[key]();
      }
    }

    var async$1 = async_1
      , abort$1 = abort_1
      ;

    // API
    var iterate_1 = iterate$2;

    /**
     * Iterates over each job object
     *
     * @param {array|object} list - array or object (named list) to iterate over
     * @param {function} iterator - iterator to run
     * @param {object} state - current job status
     * @param {function} callback - invoked when all elements processed
     */
    function iterate$2(list, iterator, state, callback)
    {
      // store current index
      var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

      state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
      {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs))
        {
          return;
        }

        // clean up jobs
        delete state.jobs[key];

        if (error)
        {
          // don't process rest of the results
          // stop still active jobs
          // and reset the list
          abort$1(state);
        }
        else
        {
          state.results[key] = output;
        }

        // return salvaged results
        callback(error, state.results);
      });
    }

    /**
     * Runs iterator over provided job element
     *
     * @param   {function} iterator - iterator to invoke
     * @param   {string|number} key - key/index of the element in the list of jobs
     * @param   {mixed} item - job description
     * @param   {function} callback - invoked after iterator is done with the job
     * @returns {function|mixed} - job abort function or something else
     */
    function runJob(iterator, key, item, callback)
    {
      var aborter;

      // allow shortcut if iterator expects only two arguments
      if (iterator.length == 2)
      {
        aborter = iterator(item, async$1(callback));
      }
      // otherwise go with full three arguments
      else
      {
        aborter = iterator(item, key, async$1(callback));
      }

      return aborter;
    }

    // API
    var state_1 = state;

    /**
     * Creates initial state object
     * for iteration over list
     *
     * @param   {array|object} list - list to iterate over
     * @param   {function|null} sortMethod - function to use for keys sort,
     *                                     or `null` to keep them as is
     * @returns {object} - initial state object
     */
    function state(list, sortMethod)
    {
      var isNamedList = !Array.isArray(list)
        , initState =
        {
          index    : 0,
          keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
          jobs     : {},
          results  : isNamedList ? {} : [],
          size     : isNamedList ? Object.keys(list).length : list.length
        }
        ;

      if (sortMethod)
      {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
        {
          return sortMethod(list[a], list[b]);
        });
      }

      return initState;
    }

    var abort = abort_1
      , async = async_1
      ;

    // API
    var terminator_1 = terminator$2;

    /**
     * Terminates jobs in the attached state context
     *
     * @this  AsyncKitState#
     * @param {function} callback - final callback to invoke after termination
     */
    function terminator$2(callback)
    {
      if (!Object.keys(this.jobs).length)
      {
        return;
      }

      // fast forward iteration index
      this.index = this.size;

      // abort jobs
      abort(this);

      // send back results we have so far
      async(callback)(null, this.results);
    }

    var iterate$1    = iterate_1
      , initState$1  = state_1
      , terminator$1 = terminator_1
      ;

    // Public API
    var parallel_1 = parallel;

    /**
     * Runs iterator over provided array elements in parallel
     *
     * @param   {array|object} list - array or object (named list) to iterate over
     * @param   {function} iterator - iterator to run
     * @param   {function} callback - invoked when all elements processed
     * @returns {function} - jobs terminator
     */
    function parallel(list, iterator, callback)
    {
      var state = initState$1(list);

      while (state.index < (state['keyedList'] || list).length)
      {
        iterate$1(list, iterator, state, function(error, result)
        {
          if (error)
          {
            callback(error, result);
            return;
          }

          // looks like it's the last one
          if (Object.keys(state.jobs).length === 0)
          {
            callback(null, state.results);
            return;
          }
        });

        state.index++;
      }

      return terminator$1.bind(state, callback);
    }

    var serialOrdered$2 = {exports: {}};

    var iterate    = iterate_1
      , initState  = state_1
      , terminator = terminator_1
      ;

    // Public API
    serialOrdered$2.exports = serialOrdered$1;
    // sorting helpers
    serialOrdered$2.exports.ascending  = ascending;
    serialOrdered$2.exports.descending = descending;

    /**
     * Runs iterator over provided sorted array elements in series
     *
     * @param   {array|object} list - array or object (named list) to iterate over
     * @param   {function} iterator - iterator to run
     * @param   {function} sortMethod - custom sort function
     * @param   {function} callback - invoked when all elements processed
     * @returns {function} - jobs terminator
     */
    function serialOrdered$1(list, iterator, sortMethod, callback)
    {
      var state = initState(list, sortMethod);

      iterate(list, iterator, state, function iteratorHandler(error, result)
      {
        if (error)
        {
          callback(error, result);
          return;
        }

        state.index++;

        // are we there yet?
        if (state.index < (state['keyedList'] || list).length)
        {
          iterate(list, iterator, state, iteratorHandler);
          return;
        }

        // done here
        callback(null, state.results);
      });

      return terminator.bind(state, callback);
    }

    /*
     * -- Sort methods
     */

    /**
     * sort helper to sort array elements in ascending order
     *
     * @param   {mixed} a - an item to compare
     * @param   {mixed} b - an item to compare
     * @returns {number} - comparison result
     */
    function ascending(a, b)
    {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    /**
     * sort helper to sort array elements in descending order
     *
     * @param   {mixed} a - an item to compare
     * @param   {mixed} b - an item to compare
     * @returns {number} - comparison result
     */
    function descending(a, b)
    {
      return -1 * ascending(a, b);
    }

    var serialOrdered = serialOrdered$2.exports;

    // Public API
    var serial_1 = serial;

    /**
     * Runs iterator over provided array elements in series
     *
     * @param   {array|object} list - array or object (named list) to iterate over
     * @param   {function} iterator - iterator to run
     * @param   {function} callback - invoked when all elements processed
     * @returns {function} - jobs terminator
     */
    function serial(list, iterator, callback)
    {
      return serialOrdered(list, iterator, null, callback);
    }

    var asynckit$1 =
    {
      parallel      : parallel_1,
      serial        : serial_1,
      serialOrdered : serialOrdered$2.exports
    };

    // populates missing values
    var populate$1 = function(dst, src) {

      Object.keys(src).forEach(function(prop)
      {
        dst[prop] = dst[prop] || src[prop];
      });

      return dst;
    };

    var CombinedStream = combined_stream;
    var util = require$$1;
    var path = require$$1$1;
    var http$1 = require$$3;
    var https$1 = require$$4;
    var parseUrl$1 = require$$0$2.parse;
    var fs = require$$0$1;
    var Stream = stream$1.Stream;
    var mime = mimeTypes;
    var asynckit = asynckit$1;
    var populate = populate$1;

    // Public API
    var form_data = FormData$1;

    // make it a Stream
    util.inherits(FormData$1, CombinedStream);

    /**
     * Create readable "multipart/form-data" streams.
     * Can be used to submit forms
     * and file uploads to other web applications.
     *
     * @constructor
     * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
     */
    function FormData$1(options) {
      if (!(this instanceof FormData$1)) {
        return new FormData$1(options);
      }

      this._overheadLength = 0;
      this._valueLength = 0;
      this._valuesToMeasure = [];

      CombinedStream.call(this);

      options = options || {};
      for (var option in options) {
        this[option] = options[option];
      }
    }

    FormData$1.LINE_BREAK = '\r\n';
    FormData$1.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

    FormData$1.prototype.append = function(field, value, options) {

      options = options || {};

      // allow filename as single option
      if (typeof options == 'string') {
        options = {filename: options};
      }

      var append = CombinedStream.prototype.append.bind(this);

      // all that streamy business can't handle numbers
      if (typeof value == 'number') {
        value = '' + value;
      }

      // https://github.com/felixge/node-form-data/issues/38
      if (util.isArray(value)) {
        // Please convert your array into string
        // the way web server expects it
        this._error(new Error('Arrays are not supported.'));
        return;
      }

      var header = this._multiPartHeader(field, value, options);
      var footer = this._multiPartFooter();

      append(header);
      append(value);
      append(footer);

      // pass along options.knownLength
      this._trackLength(header, value, options);
    };

    FormData$1.prototype._trackLength = function(header, value, options) {
      var valueLength = 0;

      // used w/ getLengthSync(), when length is known.
      // e.g. for streaming directly from a remote server,
      // w/ a known file a size, and not wanting to wait for
      // incoming file to finish to get its size.
      if (options.knownLength != null) {
        valueLength += +options.knownLength;
      } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
      } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
      }

      this._valueLength += valueLength;

      // @check why add CRLF? does this account for custom/multiple CRLFs?
      this._overheadLength +=
        Buffer.byteLength(header) +
        FormData$1.LINE_BREAK.length;

      // empty or either doesn't have path or not an http response or not a stream
      if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
        return;
      }

      // no need to bother with the length
      if (!options.knownLength) {
        this._valuesToMeasure.push(value);
      }
    };

    FormData$1.prototype._lengthRetriever = function(value, callback) {

      if (value.hasOwnProperty('fd')) {

        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {

          // when end specified
          // no need to calculate range
          // inclusive, starts with 0
          callback(null, value.end + 1 - (value.start ? value.start : 0));

        // not that fast snoopy
        } else {
          // still need to fetch file size from fs
          fs.stat(value.path, function(err, stat) {

            var fileSize;

            if (err) {
              callback(err);
              return;
            }

            // update final size based on the range options
            fileSize = stat.size - (value.start ? value.start : 0);
            callback(null, fileSize);
          });
        }

      // or http response
      } else if (value.hasOwnProperty('httpVersion')) {
        callback(null, +value.headers['content-length']);

      // or request stream http://github.com/mikeal/request
      } else if (value.hasOwnProperty('httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
          value.pause();
          callback(null, +response.headers['content-length']);
        });
        value.resume();

      // something else
      } else {
        callback('Unknown stream');
      }
    };

    FormData$1.prototype._multiPartHeader = function(field, value, options) {
      // custom header specified (as string)?
      // it becomes responsible for boundary
      // (e.g. to handle extra CRLFs on .NET servers)
      if (typeof options.header == 'string') {
        return options.header;
      }

      var contentDisposition = this._getContentDisposition(value, options);
      var contentType = this._getContentType(value, options);

      var contents = '';
      var headers  = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
      };

      // allow custom headers.
      if (typeof options.header == 'object') {
        populate(headers, options.header);
      }

      var header;
      for (var prop in headers) {
        if (!headers.hasOwnProperty(prop)) continue;
        header = headers[prop];

        // skip nullish headers.
        if (header == null) {
          continue;
        }

        // convert all headers to arrays.
        if (!Array.isArray(header)) {
          header = [header];
        }

        // add non-empty headers.
        if (header.length) {
          contents += prop + ': ' + header.join('; ') + FormData$1.LINE_BREAK;
        }
      }

      return '--' + this.getBoundary() + FormData$1.LINE_BREAK + contents + FormData$1.LINE_BREAK;
    };

    FormData$1.prototype._getContentDisposition = function(value, options) {

      var filename
        , contentDisposition
        ;

      if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
      } else if (options.filename || value.name || value.path) {
        // custom filename take precedence
        // formidable and the browser add a name property
        // fs- and request- streams have path property
        filename = path.basename(options.filename || value.name || value.path);
      } else if (value.readable && value.hasOwnProperty('httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
      }

      if (filename) {
        contentDisposition = 'filename="' + filename + '"';
      }

      return contentDisposition;
    };

    FormData$1.prototype._getContentType = function(value, options) {

      // use custom content-type above all
      var contentType = options.contentType;

      // or try `name` from formidable, browser
      if (!contentType && value.name) {
        contentType = mime.lookup(value.name);
      }

      // or try `path` from fs-, request- streams
      if (!contentType && value.path) {
        contentType = mime.lookup(value.path);
      }

      // or if it's http-reponse
      if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
        contentType = value.headers['content-type'];
      }

      // or guess it from the filepath or filename
      if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
      }

      // fallback to the default content type if `value` is not simple value
      if (!contentType && typeof value == 'object') {
        contentType = FormData$1.DEFAULT_CONTENT_TYPE;
      }

      return contentType;
    };

    FormData$1.prototype._multiPartFooter = function() {
      return function(next) {
        var footer = FormData$1.LINE_BREAK;

        var lastPart = (this._streams.length === 0);
        if (lastPart) {
          footer += this._lastBoundary();
        }

        next(footer);
      }.bind(this);
    };

    FormData$1.prototype._lastBoundary = function() {
      return '--' + this.getBoundary() + '--' + FormData$1.LINE_BREAK;
    };

    FormData$1.prototype.getHeaders = function(userHeaders) {
      var header;
      var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
      };

      for (header in userHeaders) {
        if (userHeaders.hasOwnProperty(header)) {
          formHeaders[header.toLowerCase()] = userHeaders[header];
        }
      }

      return formHeaders;
    };

    FormData$1.prototype.setBoundary = function(boundary) {
      this._boundary = boundary;
    };

    FormData$1.prototype.getBoundary = function() {
      if (!this._boundary) {
        this._generateBoundary();
      }

      return this._boundary;
    };

    FormData$1.prototype.getBuffer = function() {
      var dataBuffer = new Buffer.alloc( 0 );
      var boundary = this.getBoundary();

      // Create the form content. Add Line breaks to the end of data.
      for (var i = 0, len = this._streams.length; i < len; i++) {
        if (typeof this._streams[i] !== 'function') {

          // Add content to the buffer.
          if(Buffer.isBuffer(this._streams[i])) {
            dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
          }else {
            dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
          }

          // Add break after content.
          if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
            dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData$1.LINE_BREAK)] );
          }
        }
      }

      // Add the footer and return the Buffer object.
      return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
    };

    FormData$1.prototype._generateBoundary = function() {
      // This generates a 50 character boundary similar to those used by Firefox.
      // They are optimized for boyer-moore parsing.
      var boundary = '--------------------------';
      for (var i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
      }

      this._boundary = boundary;
    };

    // Note: getLengthSync DOESN'T calculate streams length
    // As workaround one can calculate file size manually
    // and add it as knownLength option
    FormData$1.prototype.getLengthSync = function() {
      var knownLength = this._overheadLength + this._valueLength;

      // Don't get confused, there are 3 "internal" streams for each keyval pair
      // so it basically checks if there is any value added to the form
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }

      // https://github.com/form-data/form-data/issues/40
      if (!this.hasKnownLength()) {
        // Some async length retrievers are present
        // therefore synchronous length calculation is false.
        // Please use getLength(callback) to get proper length
        this._error(new Error('Cannot calculate proper length in synchronous way.'));
      }

      return knownLength;
    };

    // Public API to check if length of added values is known
    // https://github.com/form-data/form-data/issues/196
    // https://github.com/form-data/form-data/issues/262
    FormData$1.prototype.hasKnownLength = function() {
      var hasKnownLength = true;

      if (this._valuesToMeasure.length) {
        hasKnownLength = false;
      }

      return hasKnownLength;
    };

    FormData$1.prototype.getLength = function(cb) {
      var knownLength = this._overheadLength + this._valueLength;

      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }

      if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
      }

      asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
          cb(err);
          return;
        }

        values.forEach(function(length) {
          knownLength += length;
        });

        cb(null, knownLength);
      });
    };

    FormData$1.prototype.submit = function(params, cb) {
      var request
        , options
        , defaults = {method: 'post'}
        ;

      // parse provided url if it's string
      // or treat it as options object
      if (typeof params == 'string') {

        params = parseUrl$1(params);
        options = populate({
          port: params.port,
          path: params.pathname,
          host: params.hostname,
          protocol: params.protocol
        }, defaults);

      // use custom params
      } else {

        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
          options.port = options.protocol == 'https:' ? 443 : 80;
        }
      }

      // put that good code in getHeaders to some use
      options.headers = this.getHeaders(params.headers);

      // https if specified, fallback to http in any other case
      if (options.protocol == 'https:') {
        request = https$1.request(options);
      } else {
        request = http$1.request(options);
      }

      // get content length and fire away
      this.getLength(function(err, length) {
        if (err && err !== 'Unknown stream') {
          this._error(err);
          return;
        }

        // add content length
        if (length) {
          request.setHeader('Content-Length', length);
        }

        this.pipe(request);
        if (cb) {
          var onResponse;

          var callback = function (error, responce) {
            request.removeListener('error', callback);
            request.removeListener('response', onResponse);

            return cb.call(this, error, responce);
          };

          onResponse = callback.bind(this, null);

          request.on('error', callback);
          request.on('response', onResponse);
        }
      }.bind(this));

      return request;
    };

    FormData$1.prototype._error = function(err) {
      if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
      }
    };

    FormData$1.prototype.toString = function () {
      return '[object FormData]';
    };

    /**
     * Determines if the given thing is a array or js object.
     *
     * @param {string} thing - The object or array to be visited.
     *
     * @returns {boolean}
     */
    function isVisitable(thing) {
      return utils.isPlainObject(thing) || utils.isArray(thing);
    }

    /**
     * It removes the brackets from the end of a string
     *
     * @param {string} key - The key of the parameter.
     *
     * @returns {string} the key without the brackets.
     */
    function removeBrackets(key) {
      return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
    }

    /**
     * It takes a path, a key, and a boolean, and returns a string
     *
     * @param {string} path - The path to the current key.
     * @param {string} key - The key of the current object being iterated over.
     * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
     *
     * @returns {string} The path to the current key.
     */
    function renderKey(path, key, dots) {
      if (!path) return key;
      return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
      }).join(dots ? '.' : '');
    }

    /**
     * If the array is an array and none of its elements are visitable, then it's a flat array.
     *
     * @param {Array<any>} arr - The array to check
     *
     * @returns {boolean}
     */
    function isFlatArray(arr) {
      return utils.isArray(arr) && !arr.some(isVisitable);
    }

    const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
      return /^is[A-Z]/.test(prop);
    });

    /**
     * If the thing is a FormData object, return true, otherwise return false.
     *
     * @param {unknown} thing - The thing to check.
     *
     * @returns {boolean}
     */
    function isSpecCompliant(thing) {
      return thing && utils.isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator];
    }

    /**
     * Convert a data object to FormData
     *
     * @param {Object} obj
     * @param {?Object} [formData]
     * @param {?Object} [options]
     * @param {Function} [options.visitor]
     * @param {Boolean} [options.metaTokens = true]
     * @param {Boolean} [options.dots = false]
     * @param {?Boolean} [options.indexes = false]
     *
     * @returns {Object}
     **/

    /**
     * It converts an object into a FormData object
     *
     * @param {Object<any, any>} obj - The object to convert to form data.
     * @param {string} formData - The FormData object to append to.
     * @param {Object<string, any>} options
     *
     * @returns
     */
    function toFormData(obj, formData, options) {
      if (!utils.isObject(obj)) {
        throw new TypeError('target must be an object');
      }

      // eslint-disable-next-line no-param-reassign
      formData = formData || new (form_data || FormData)();

      // eslint-disable-next-line no-param-reassign
      options = utils.toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
      }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !utils.isUndefined(source[option]);
      });

      const metaTokens = options.metaTokens;
      // eslint-disable-next-line no-use-before-define
      const visitor = options.visitor || defaultVisitor;
      const dots = options.dots;
      const indexes = options.indexes;
      const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
      const useBlob = _Blob && isSpecCompliant(formData);

      if (!utils.isFunction(visitor)) {
        throw new TypeError('visitor must be a function');
      }

      function convertValue(value) {
        if (value === null) return '';

        if (utils.isDate(value)) {
          return value.toISOString();
        }

        if (!useBlob && utils.isBlob(value)) {
          throw new AxiosError('Blob is not supported. Use a Buffer instead.');
        }

        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
          return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
        }

        return value;
      }

      /**
       * Default visitor.
       *
       * @param {*} value
       * @param {String|Number} key
       * @param {Array<String|Number>} path
       * @this {FormData}
       *
       * @returns {boolean} return true to visit the each prop of the value recursively
       */
      function defaultVisitor(value, key, path) {
        let arr = value;

        if (value && !path && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            key = metaTokens ? key : key.slice(0, -2);
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (
            (utils.isArray(value) && isFlatArray(value)) ||
            (utils.isFileList(value) || utils.endsWith(key, '[]') && (arr = utils.toArray(value))
            )) {
            // eslint-disable-next-line no-param-reassign
            key = removeBrackets(key);

            arr.forEach(function each(el, index) {
              !(utils.isUndefined(el) || el === null) && formData.append(
                // eslint-disable-next-line no-nested-ternary
                indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
                convertValue(el)
              );
            });
            return false;
          }
        }

        if (isVisitable(value)) {
          return true;
        }

        formData.append(renderKey(path, key, dots), convertValue(value));

        return false;
      }

      const stack = [];

      const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
      });

      function build(value, path) {
        if (utils.isUndefined(value)) return;

        if (stack.indexOf(value) !== -1) {
          throw Error('Circular reference detected in ' + path.join('.'));
        }

        stack.push(value);

        utils.forEach(value, function each(el, key) {
          const result = !(utils.isUndefined(el) || el === null) && visitor.call(
            formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
          );

          if (result === true) {
            build(el, path ? path.concat(key) : [key]);
          }
        });

        stack.pop();
      }

      if (!utils.isObject(obj)) {
        throw new TypeError('data must be an object');
      }

      build(obj);

      return formData;
    }

    /**
     * It encodes a string by replacing all characters that are not in the unreserved set with
     * their percent-encoded equivalents
     *
     * @param {string} str - The string to encode.
     *
     * @returns {string} The encoded string.
     */
    function encode$1(str) {
      const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
      };
      return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
      });
    }

    /**
     * It takes a params object and converts it to a FormData object
     *
     * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
     * @param {Object<string, any>} options - The options object passed to the Axios constructor.
     *
     * @returns {void}
     */
    function AxiosURLSearchParams(params, options) {
      this._pairs = [];

      params && toFormData(params, this, options);
    }

    const prototype = AxiosURLSearchParams.prototype;

    prototype.append = function append(name, value) {
      this._pairs.push([name, value]);
    };

    prototype.toString = function toString(encoder) {
      const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode$1);
      } : encode$1;

      return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
      }, '').join('&');
    };

    /**
     * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
     * URI encoded counterparts
     *
     * @param {string} val The value to be encoded.
     *
     * @returns {string} The encoded value.
     */
    function encode(val) {
      return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @param {?object} options
     *
     * @returns {string} The formatted url
     */
    function buildURL(url, params, options) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }
      
      const _encode = options && options.encode || encode;

      const serializeFn = options && options.serialize;

      let serializedParams;

      if (serializeFn) {
        serializedParams = serializeFn(params, options);
      } else {
        serializedParams = utils.isURLSearchParams(params) ?
          params.toString() :
          new AxiosURLSearchParams(params, options).toString(_encode);
      }

      if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");

        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    }

    class InterceptorManager {
      constructor() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
      eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }

      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
      clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
      forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      }
    }

    var transitionalDefaults = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };

    var URLSearchParams = require$$0$2.URLSearchParams;

    var platform = {
      isNode: true,
      classes: {
        URLSearchParams,
        FormData: form_data,
        Blob: typeof Blob !== 'undefined' && Blob || null
      },
      protocols: [ 'http', 'https', 'file', 'data' ]
    };

    function toURLEncodedForm(data, options) {
      return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
          if (utils.isBuffer(value)) {
            this.append(key, value.toString('base64'));
            return false;
          }

          return helpers.defaultVisitor.apply(this, arguments);
        }
      }, options));
    }

    /**
     * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
     *
     * @param {string} name - The name of the property to get.
     *
     * @returns An array of strings.
     */
    function parsePropPath(name) {
      // foo[x][y][z]
      // foo.x.y.z
      // foo-x-y-z
      // foo x y z
      return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
        return match[0] === '[]' ? '' : match[1] || match[0];
      });
    }

    /**
     * Convert an array to an object.
     *
     * @param {Array<any>} arr - The array to convert to an object.
     *
     * @returns An object with the same keys and values as the array.
     */
    function arrayToObject(arr) {
      const obj = {};
      const keys = Object.keys(arr);
      let i;
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        obj[key] = arr[key];
      }
      return obj;
    }

    /**
     * It takes a FormData object and returns a JavaScript object
     *
     * @param {string} formData The FormData object to convert to JSON.
     *
     * @returns {Object<string, any> | null} The converted object.
     */
    function formDataToJSON(formData) {
      function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && utils.isArray(target) ? target.length : name;

        if (isLast) {
          if (utils.hasOwnProp(target, name)) {
            target[name] = [target[name], value];
          } else {
            target[name] = value;
          }

          return !isNumericKey;
        }

        if (!target[name] || !utils.isObject(target[name])) {
          target[name] = [];
        }

        const result = buildPath(path, value, target[name], index);

        if (result && utils.isArray(target[name])) {
          target[name] = arrayToObject(target[name]);
        }

        return !isNumericKey;
      }

      if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
        const obj = {};

        utils.forEachEntry(formData, (name, value) => {
          buildPath(parsePropPath(name), value, obj, 0);
        });

        return obj;
      }

      return null;
    }

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     *
     * @returns {object} The response.
     */
    function settle(resolve, reject, response) {
      const validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError(
          'Request failed with status code ' + response.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
          response.config,
          response.request,
          response
        ));
      }
    }

    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     *
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    }

    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     *
     * @returns {string} The combined URL
     */
    function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    }

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     *
     * @returns {string} The combined full path
     */
    function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    }

    var parseUrl = require$$0$2.parse;

    var DEFAULT_PORTS = {
      ftp: 21,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443,
    };

    var stringEndsWith = String.prototype.endsWith || function(s) {
      return s.length <= this.length &&
        this.indexOf(s, this.length - s.length) !== -1;
    };

    /**
     * @param {string|object} url - The URL, or the result from url.parse.
     * @return {string} The URL of the proxy that should handle the request to the
     *  given URL. If no proxy is set, this will be an empty string.
     */
    function getProxyForUrl(url) {
      var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
      var proto = parsedUrl.protocol;
      var hostname = parsedUrl.host;
      var port = parsedUrl.port;
      if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return '';  // Don't proxy URLs without a valid scheme or host.
      }

      proto = proto.split(':', 1)[0];
      // Stripping ports in this way instead of using parsedUrl.hostname to make
      // sure that the brackets around IPv6 addresses are kept.
      hostname = hostname.replace(/:\d*$/, '');
      port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
      if (!shouldProxy(hostname, port)) {
        return '';  // Don't proxy URLs that match NO_PROXY.
      }

      var proxy =
        getEnv('npm_config_' + proto + '_proxy') ||
        getEnv(proto + '_proxy') ||
        getEnv('npm_config_proxy') ||
        getEnv('all_proxy');
      if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
      }
      return proxy;
    }

    /**
     * Determines whether a given URL should be proxied.
     *
     * @param {string} hostname - The host name of the URL.
     * @param {number} port - The effective port of the URL.
     * @returns {boolean} Whether the given URL should be proxied.
     * @private
     */
    function shouldProxy(hostname, port) {
      var NO_PROXY =
        (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
      if (!NO_PROXY) {
        return true;  // Always proxy if NO_PROXY is not set.
      }
      if (NO_PROXY === '*') {
        return false;  // Never proxy if wildcard is set.
      }

      return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
          return true;  // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
          return true;  // Skip if ports don't match.
        }

        if (!/^[.*]/.test(parsedProxyHostname)) {
          // No wildcards, so stop proxying if there is an exact match.
          return hostname !== parsedProxyHostname;
        }

        if (parsedProxyHostname.charAt(0) === '*') {
          // Remove leading wildcard.
          parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
      });
    }

    /**
     * Get the value for an environment variable.
     *
     * @param {string} key - The name of the environment variable.
     * @return {string} The value of the environment variable.
     * @private
     */
    function getEnv(key) {
      return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
    }

    var getProxyForUrl_1 = getProxyForUrl;

    var followRedirects = {exports: {}};

    var src = {exports: {}};

    var browser = {exports: {}};

    /**
     * Helpers.
     */

    var ms;
    var hasRequiredMs;

    function requireMs () {
    	if (hasRequiredMs) return ms;
    	hasRequiredMs = 1;
    	var s = 1000;
    	var m = s * 60;
    	var h = m * 60;
    	var d = h * 24;
    	var w = d * 7;
    	var y = d * 365.25;

    	/**
    	 * Parse or format the given `val`.
    	 *
    	 * Options:
    	 *
    	 *  - `long` verbose formatting [false]
    	 *
    	 * @param {String|Number} val
    	 * @param {Object} [options]
    	 * @throws {Error} throw an error if val is not a non-empty string or a number
    	 * @return {String|Number}
    	 * @api public
    	 */

    	ms = function (val, options) {
    	  options = options || {};
    	  var type = typeof val;
    	  if (type === 'string' && val.length > 0) {
    	    return parse(val);
    	  } else if (type === 'number' && isFinite(val)) {
    	    return options.long ? fmtLong(val) : fmtShort(val);
    	  }
    	  throw new Error(
    	    'val is not a non-empty string or a valid number. val=' +
    	      JSON.stringify(val)
    	  );
    	};

    	/**
    	 * Parse the given `str` and return milliseconds.
    	 *
    	 * @param {String} str
    	 * @return {Number}
    	 * @api private
    	 */

    	function parse(str) {
    	  str = String(str);
    	  if (str.length > 100) {
    	    return;
    	  }
    	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    	    str
    	  );
    	  if (!match) {
    	    return;
    	  }
    	  var n = parseFloat(match[1]);
    	  var type = (match[2] || 'ms').toLowerCase();
    	  switch (type) {
    	    case 'years':
    	    case 'year':
    	    case 'yrs':
    	    case 'yr':
    	    case 'y':
    	      return n * y;
    	    case 'weeks':
    	    case 'week':
    	    case 'w':
    	      return n * w;
    	    case 'days':
    	    case 'day':
    	    case 'd':
    	      return n * d;
    	    case 'hours':
    	    case 'hour':
    	    case 'hrs':
    	    case 'hr':
    	    case 'h':
    	      return n * h;
    	    case 'minutes':
    	    case 'minute':
    	    case 'mins':
    	    case 'min':
    	    case 'm':
    	      return n * m;
    	    case 'seconds':
    	    case 'second':
    	    case 'secs':
    	    case 'sec':
    	    case 's':
    	      return n * s;
    	    case 'milliseconds':
    	    case 'millisecond':
    	    case 'msecs':
    	    case 'msec':
    	    case 'ms':
    	      return n;
    	    default:
    	      return undefined;
    	  }
    	}

    	/**
    	 * Short format for `ms`.
    	 *
    	 * @param {Number} ms
    	 * @return {String}
    	 * @api private
    	 */

    	function fmtShort(ms) {
    	  var msAbs = Math.abs(ms);
    	  if (msAbs >= d) {
    	    return Math.round(ms / d) + 'd';
    	  }
    	  if (msAbs >= h) {
    	    return Math.round(ms / h) + 'h';
    	  }
    	  if (msAbs >= m) {
    	    return Math.round(ms / m) + 'm';
    	  }
    	  if (msAbs >= s) {
    	    return Math.round(ms / s) + 's';
    	  }
    	  return ms + 'ms';
    	}

    	/**
    	 * Long format for `ms`.
    	 *
    	 * @param {Number} ms
    	 * @return {String}
    	 * @api private
    	 */

    	function fmtLong(ms) {
    	  var msAbs = Math.abs(ms);
    	  if (msAbs >= d) {
    	    return plural(ms, msAbs, d, 'day');
    	  }
    	  if (msAbs >= h) {
    	    return plural(ms, msAbs, h, 'hour');
    	  }
    	  if (msAbs >= m) {
    	    return plural(ms, msAbs, m, 'minute');
    	  }
    	  if (msAbs >= s) {
    	    return plural(ms, msAbs, s, 'second');
    	  }
    	  return ms + ' ms';
    	}

    	/**
    	 * Pluralization helper.
    	 */

    	function plural(ms, msAbs, n, name) {
    	  var isPlural = msAbs >= n * 1.5;
    	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    	}
    	return ms;
    }

    var common;
    var hasRequiredCommon;

    function requireCommon () {
    	if (hasRequiredCommon) return common;
    	hasRequiredCommon = 1;

    	/**
    	 * This is the common logic for both the Node.js and web browser
    	 * implementations of `debug()`.
    	 */
    	function setup(env) {
    	  createDebug.debug = createDebug;
    	  createDebug.default = createDebug;
    	  createDebug.coerce = coerce;
    	  createDebug.disable = disable;
    	  createDebug.enable = enable;
    	  createDebug.enabled = enabled;
    	  createDebug.humanize = requireMs();
    	  Object.keys(env).forEach(function (key) {
    	    createDebug[key] = env[key];
    	  });
    	  /**
    	  * Active `debug` instances.
    	  */

    	  createDebug.instances = [];
    	  /**
    	  * The currently active debug mode names, and names to skip.
    	  */

    	  createDebug.names = [];
    	  createDebug.skips = [];
    	  /**
    	  * Map of special "%n" handling functions, for the debug "format" argument.
    	  *
    	  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    	  */

    	  createDebug.formatters = {};
    	  /**
    	  * Selects a color for a debug namespace
    	  * @param {String} namespace The namespace string for the for the debug instance to be colored
    	  * @return {Number|String} An ANSI color code for the given namespace
    	  * @api private
    	  */

    	  function selectColor(namespace) {
    	    var hash = 0;

    	    for (var i = 0; i < namespace.length; i++) {
    	      hash = (hash << 5) - hash + namespace.charCodeAt(i);
    	      hash |= 0; // Convert to 32bit integer
    	    }

    	    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    	  }

    	  createDebug.selectColor = selectColor;
    	  /**
    	  * Create a debugger with the given `namespace`.
    	  *
    	  * @param {String} namespace
    	  * @return {Function}
    	  * @api public
    	  */

    	  function createDebug(namespace) {
    	    var prevTime;

    	    function debug() {
    	      // Disabled?
    	      if (!debug.enabled) {
    	        return;
    	      }

    	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    	        args[_key] = arguments[_key];
    	      }

    	      var self = debug; // Set `diff` timestamp

    	      var curr = Number(new Date());
    	      var ms = curr - (prevTime || curr);
    	      self.diff = ms;
    	      self.prev = prevTime;
    	      self.curr = curr;
    	      prevTime = curr;
    	      args[0] = createDebug.coerce(args[0]);

    	      if (typeof args[0] !== 'string') {
    	        // Anything else let's inspect with %O
    	        args.unshift('%O');
    	      } // Apply any `formatters` transformations


    	      var index = 0;
    	      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
    	        // If we encounter an escaped % then don't increase the array index
    	        if (match === '%%') {
    	          return match;
    	        }

    	        index++;
    	        var formatter = createDebug.formatters[format];

    	        if (typeof formatter === 'function') {
    	          var val = args[index];
    	          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

    	          args.splice(index, 1);
    	          index--;
    	        }

    	        return match;
    	      }); // Apply env-specific formatting (colors, etc.)

    	      createDebug.formatArgs.call(self, args);
    	      var logFn = self.log || createDebug.log;
    	      logFn.apply(self, args);
    	    }

    	    debug.namespace = namespace;
    	    debug.enabled = createDebug.enabled(namespace);
    	    debug.useColors = createDebug.useColors();
    	    debug.color = selectColor(namespace);
    	    debug.destroy = destroy;
    	    debug.extend = extend; // Debug.formatArgs = formatArgs;
    	    // debug.rawLog = rawLog;
    	    // env-specific initialization logic for debug instances

    	    if (typeof createDebug.init === 'function') {
    	      createDebug.init(debug);
    	    }

    	    createDebug.instances.push(debug);
    	    return debug;
    	  }

    	  function destroy() {
    	    var index = createDebug.instances.indexOf(this);

    	    if (index !== -1) {
    	      createDebug.instances.splice(index, 1);
    	      return true;
    	    }

    	    return false;
    	  }

    	  function extend(namespace, delimiter) {
    	    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    	  }
    	  /**
    	  * Enables a debug mode by namespaces. This can include modes
    	  * separated by a colon and wildcards.
    	  *
    	  * @param {String} namespaces
    	  * @api public
    	  */


    	  function enable(namespaces) {
    	    createDebug.save(namespaces);
    	    createDebug.names = [];
    	    createDebug.skips = [];
    	    var i;
    	    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    	    var len = split.length;

    	    for (i = 0; i < len; i++) {
    	      if (!split[i]) {
    	        // ignore empty strings
    	        continue;
    	      }

    	      namespaces = split[i].replace(/\*/g, '.*?');

    	      if (namespaces[0] === '-') {
    	        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    	      } else {
    	        createDebug.names.push(new RegExp('^' + namespaces + '$'));
    	      }
    	    }

    	    for (i = 0; i < createDebug.instances.length; i++) {
    	      var instance = createDebug.instances[i];
    	      instance.enabled = createDebug.enabled(instance.namespace);
    	    }
    	  }
    	  /**
    	  * Disable debug output.
    	  *
    	  * @api public
    	  */


    	  function disable() {
    	    createDebug.enable('');
    	  }
    	  /**
    	  * Returns true if the given mode name is enabled, false otherwise.
    	  *
    	  * @param {String} name
    	  * @return {Boolean}
    	  * @api public
    	  */


    	  function enabled(name) {
    	    if (name[name.length - 1] === '*') {
    	      return true;
    	    }

    	    var i;
    	    var len;

    	    for (i = 0, len = createDebug.skips.length; i < len; i++) {
    	      if (createDebug.skips[i].test(name)) {
    	        return false;
    	      }
    	    }

    	    for (i = 0, len = createDebug.names.length; i < len; i++) {
    	      if (createDebug.names[i].test(name)) {
    	        return true;
    	      }
    	    }

    	    return false;
    	  }
    	  /**
    	  * Coerce `val`.
    	  *
    	  * @param {Mixed} val
    	  * @return {Mixed}
    	  * @api private
    	  */


    	  function coerce(val) {
    	    if (val instanceof Error) {
    	      return val.stack || val.message;
    	    }

    	    return val;
    	  }

    	  createDebug.enable(createDebug.load());
    	  return createDebug;
    	}

    	common = setup;
    	return common;
    }

    var hasRequiredBrowser;

    function requireBrowser () {
    	if (hasRequiredBrowser) return browser.exports;
    	hasRequiredBrowser = 1;
    	(function (module, exports) {

    		function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    		/* eslint-env browser */

    		/**
    		 * This is the web browser implementation of `debug()`.
    		 */
    		exports.log = log;
    		exports.formatArgs = formatArgs;
    		exports.save = save;
    		exports.load = load;
    		exports.useColors = useColors;
    		exports.storage = localstorage();
    		/**
    		 * Colors.
    		 */

    		exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
    		/**
    		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
    		 * and the Firebug extension (any Firefox version) are known
    		 * to support "%c" CSS customizations.
    		 *
    		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
    		 */
    		// eslint-disable-next-line complexity

    		function useColors() {
    		  // NB: In an Electron preload script, document will be defined but not fully
    		  // initialized. Since we know we're in Chrome, we'll just detect this case
    		  // explicitly
    		  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    		    return true;
    		  } // Internet Explorer and Edge do not support colors.


    		  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    		    return false;
    		  } // Is webkit? http://stackoverflow.com/a/16459606/376773
    		  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    		  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    		  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    		  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    		  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    		  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    		}
    		/**
    		 * Colorize log arguments if enabled.
    		 *
    		 * @api public
    		 */


    		function formatArgs(args) {
    		  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

    		  if (!this.useColors) {
    		    return;
    		  }

    		  var c = 'color: ' + this.color;
    		  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    		  // arguments passed either before or after the %c, so we need to
    		  // figure out the correct index to insert the CSS into

    		  var index = 0;
    		  var lastC = 0;
    		  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    		    if (match === '%%') {
    		      return;
    		    }

    		    index++;

    		    if (match === '%c') {
    		      // We only are interested in the *last* %c
    		      // (the user may have provided their own)
    		      lastC = index;
    		    }
    		  });
    		  args.splice(lastC, 0, c);
    		}
    		/**
    		 * Invokes `console.log()` when available.
    		 * No-op when `console.log` is not a "function".
    		 *
    		 * @api public
    		 */


    		function log() {
    		  var _console;

    		  // This hackery is required for IE8/9, where
    		  // the `console.log` function doesn't have 'apply'
    		  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
    		}
    		/**
    		 * Save `namespaces`.
    		 *
    		 * @param {String} namespaces
    		 * @api private
    		 */


    		function save(namespaces) {
    		  try {
    		    if (namespaces) {
    		      exports.storage.setItem('debug', namespaces);
    		    } else {
    		      exports.storage.removeItem('debug');
    		    }
    		  } catch (error) {// Swallow
    		    // XXX (@Qix-) should we be logging these?
    		  }
    		}
    		/**
    		 * Load `namespaces`.
    		 *
    		 * @return {String} returns the previously persisted debug modes
    		 * @api private
    		 */


    		function load() {
    		  var r;

    		  try {
    		    r = exports.storage.getItem('debug');
    		  } catch (error) {} // Swallow
    		  // XXX (@Qix-) should we be logging these?
    		  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    		  if (!r && typeof process !== 'undefined' && 'env' in process) {
    		    r = process.env.DEBUG;
    		  }

    		  return r;
    		}
    		/**
    		 * Localstorage attempts to return the localstorage.
    		 *
    		 * This is necessary because safari throws
    		 * when a user disables cookies/localstorage
    		 * and you attempt to access it.
    		 *
    		 * @return {LocalStorage}
    		 * @api private
    		 */


    		function localstorage() {
    		  try {
    		    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    		    // The Browser also has localStorage in the global context.
    		    return localStorage;
    		  } catch (error) {// Swallow
    		    // XXX (@Qix-) should we be logging these?
    		  }
    		}

    		module.exports = requireCommon()(exports);
    		var formatters = module.exports.formatters;
    		/**
    		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
    		 */

    		formatters.j = function (v) {
    		  try {
    		    return JSON.stringify(v);
    		  } catch (error) {
    		    return '[UnexpectedJSONParseError]: ' + error.message;
    		  }
    		};
    } (browser, browser.exports));
    	return browser.exports;
    }

    var node = {exports: {}};

    var hasRequiredNode;

    function requireNode () {
    	if (hasRequiredNode) return node.exports;
    	hasRequiredNode = 1;
    	(function (module, exports) {

    		/**
    		 * Module dependencies.
    		 */
    		var tty = require$$0$4;

    		var util = require$$1;
    		/**
    		 * This is the Node.js implementation of `debug()`.
    		 */


    		exports.init = init;
    		exports.log = log;
    		exports.formatArgs = formatArgs;
    		exports.save = save;
    		exports.load = load;
    		exports.useColors = useColors;
    		/**
    		 * Colors.
    		 */

    		exports.colors = [6, 2, 3, 4, 5, 1];

    		try {
    		  // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    		  // eslint-disable-next-line import/no-extraneous-dependencies
    		  var supportsColor = require('supports-color');

    		  if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
    		    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
    		  }
    		} catch (error) {} // Swallow - we only care if `supports-color` is available; it doesn't have to be.

    		/**
    		 * Build up the default `inspectOpts` object from the environment variables.
    		 *
    		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
    		 */


    		exports.inspectOpts = Object.keys(process.env).filter(function (key) {
    		  return /^debug_/i.test(key);
    		}).reduce(function (obj, key) {
    		  // Camel-case
    		  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    		    return k.toUpperCase();
    		  }); // Coerce string value into JS value

    		  var val = process.env[key];

    		  if (/^(yes|on|true|enabled)$/i.test(val)) {
    		    val = true;
    		  } else if (/^(no|off|false|disabled)$/i.test(val)) {
    		    val = false;
    		  } else if (val === 'null') {
    		    val = null;
    		  } else {
    		    val = Number(val);
    		  }

    		  obj[prop] = val;
    		  return obj;
    		}, {});
    		/**
    		 * Is stdout a TTY? Colored output is enabled when `true`.
    		 */

    		function useColors() {
    		  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    		}
    		/**
    		 * Adds ANSI color escape codes if enabled.
    		 *
    		 * @api public
    		 */


    		function formatArgs(args) {
    		  var name = this.namespace,
    		      useColors = this.useColors;

    		  if (useColors) {
    		    var c = this.color;
    		    var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
    		    var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
    		    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    		    args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + "\x1B[0m");
    		  } else {
    		    args[0] = getDate() + name + ' ' + args[0];
    		  }
    		}

    		function getDate() {
    		  if (exports.inspectOpts.hideDate) {
    		    return '';
    		  }

    		  return new Date().toISOString() + ' ';
    		}
    		/**
    		 * Invokes `util.format()` with the specified arguments and writes to stderr.
    		 */


    		function log() {
    		  return process.stderr.write(util.format.apply(util, arguments) + '\n');
    		}
    		/**
    		 * Save `namespaces`.
    		 *
    		 * @param {String} namespaces
    		 * @api private
    		 */


    		function save(namespaces) {
    		  if (namespaces) {
    		    process.env.DEBUG = namespaces;
    		  } else {
    		    // If you set a process.env field to null or undefined, it gets cast to the
    		    // string 'null' or 'undefined'. Just delete instead.
    		    delete process.env.DEBUG;
    		  }
    		}
    		/**
    		 * Load `namespaces`.
    		 *
    		 * @return {String} returns the previously persisted debug modes
    		 * @api private
    		 */


    		function load() {
    		  return process.env.DEBUG;
    		}
    		/**
    		 * Init logic for `debug` instances.
    		 *
    		 * Create a new `inspectOpts` object in case `useColors` is set
    		 * differently for a particular `debug` instance.
    		 */


    		function init(debug) {
    		  debug.inspectOpts = {};
    		  var keys = Object.keys(exports.inspectOpts);

    		  for (var i = 0; i < keys.length; i++) {
    		    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    		  }
    		}

    		module.exports = requireCommon()(exports);
    		var formatters = module.exports.formatters;
    		/**
    		 * Map %o to `util.inspect()`, all on a single line.
    		 */

    		formatters.o = function (v) {
    		  this.inspectOpts.colors = this.useColors;
    		  return util.inspect(v, this.inspectOpts)
    		    .split('\n')
    		    .map(function (str) { return str.trim(); })
    		    .join(' ');
    		};
    		/**
    		 * Map %O to `util.inspect()`, allowing multiple lines if needed.
    		 */


    		formatters.O = function (v) {
    		  this.inspectOpts.colors = this.useColors;
    		  return util.inspect(v, this.inspectOpts);
    		};
    } (node, node.exports));
    	return node.exports;
    }

    var hasRequiredSrc;

    function requireSrc () {
    	if (hasRequiredSrc) return src.exports;
    	hasRequiredSrc = 1;
    	(function (module) {

    		/**
    		 * Detect Electron renderer / nwjs process, which is node, but we should
    		 * treat as a browser.
    		 */
    		if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
    		  module.exports = requireBrowser();
    		} else {
    		  module.exports = requireNode();
    		}
    } (src));
    	return src.exports;
    }

    var debug$1;

    var debug_1 = function () {
      if (!debug$1) {
        try {
          /* eslint global-require: off */
          debug$1 = requireSrc()("follow-redirects");
        }
        catch (error) { /* */ }
        if (typeof debug$1 !== "function") {
          debug$1 = function () { /* */ };
        }
      }
      debug$1.apply(null, arguments);
    };

    var url = require$$0$2;
    var URL$1 = url.URL;
    var http = require$$3;
    var https = require$$4;
    var Writable = stream$1.Writable;
    var assert = require$$4$2;
    var debug = debug_1;

    // Create handlers that pass events from native requests
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = Object.create(null);
    events.forEach(function (event) {
      eventHandlers[event] = function (arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });

    var InvalidUrlError = createErrorType(
      "ERR_INVALID_URL",
      "Invalid URL",
      TypeError
    );
    // Error types with codes
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      "Redirected request failed"
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded"
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );

    // An HTTP(S) request that can be redirected
    function RedirectableRequest(options, responseCallback) {
      // Initialize the request
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];

      // Attach a callback if passed
      if (responseCallback) {
        this.on("response", responseCallback);
      }

      // React to responses of native requests
      var self = this;
      this._onNativeResponse = function (response) {
        self._processResponse(response);
      };

      // Perform the first request
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);

    RedirectableRequest.prototype.abort = function () {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };

    // Writes buffered data to the current native request
    RedirectableRequest.prototype.write = function (data, encoding, callback) {
      // Writing is not allowed if end has been called
      if (this._ending) {
        throw new WriteAfterEndError();
      }

      // Validate input and shift parameters if necessary
      if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
      }

      // Ignore empty buffers, since writing them doesn't invoke the callback
      // https://github.com/nodejs/node/issues/22066
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      // Only write when we don't exceed the maximum body length
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data: data, encoding: encoding });
        this._currentRequest.write(data, encoding, callback);
      }
      // Error when we exceed the maximum body length
      else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };

    // Ends the current native request
    RedirectableRequest.prototype.end = function (data, encoding, callback) {
      // Shift parameters if necessary
      if (isFunction(data)) {
        callback = data;
        data = encoding = null;
      }
      else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
      }

      // Write data if needed and end
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      }
      else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function () {
          self._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };

    // Sets a header value on the current native request
    RedirectableRequest.prototype.setHeader = function (name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };

    // Clears a header value on the current native request
    RedirectableRequest.prototype.removeHeader = function (name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };

    // Global timeout for all underlying requests
    RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
      var self = this;

      // Destroys the socket on timeout
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }

      // Sets up a timer to trigger a timeout event
      function startTimer(socket) {
        if (self._timeout) {
          clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function () {
          self.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }

      // Stops a timeout from triggering
      function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
          clearTimeout(self._timeout);
          self._timeout = null;
        }

        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        if (callback) {
          self.removeListener("timeout", callback);
        }
        if (!self.socket) {
          self._currentRequest.removeListener("socket", startTimer);
        }
      }

      // Attach callback if passed
      if (callback) {
        this.on("timeout", callback);
      }

      // Start the timer if or when the socket is opened
      if (this.socket) {
        startTimer(this.socket);
      }
      else {
        this._currentRequest.once("socket", startTimer);
      }

      // Clean up on events
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);

      return this;
    };

    // Proxy all other public ClientRequest methods
    [
      "flushHeaders", "getHeader",
      "setNoDelay", "setSocketKeepAlive",
    ].forEach(function (method) {
      RedirectableRequest.prototype[method] = function (a, b) {
        return this._currentRequest[method](a, b);
      };
    });

    // Proxy all public ClientRequest properties
    ["aborted", "connection", "socket"].forEach(function (property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function () { return this._currentRequest[property]; },
      });
    });

    RedirectableRequest.prototype._sanitizeOptions = function (options) {
      // Ensure headers are always present
      if (!options.headers) {
        options.headers = {};
      }

      // Since http.request treats host as an alias of hostname,
      // but the url module interprets host as hostname plus port,
      // eliminate the host property to avoid confusion.
      if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }

      // Complete the URL object when necessary
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        }
        else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };


    // Executes the next native request (initial or redirect)
    RedirectableRequest.prototype._performRequest = function () {
      // Load the native protocol
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }

      // If specified, use the agent corresponding to the protocol
      // (HTTP and HTTPS use different types of agents)
      if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
      }

      // Create the native request and set up its event handlers
      var request = this._currentRequest =
            nativeProtocol.request(this._options, this._onNativeResponse);
      request._redirectable = this;
      for (var event of events) {
        request.on(event, eventHandlers[event]);
      }

      // RFC7230§5.3.1: When making a request directly to an origin server, […]
      // a client MUST send only the absolute path […] as the request-target.
      this._currentUrl = /^\//.test(this._options.path) ?
        url.format(this._options) :
        // When making a request to a proxy, […]
        // a client MUST send the target URI in absolute-form […].
        this._options.path;

      // End a redirected request
      // (The first request must be ended explicitly with RedirectableRequest#end)
      if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          // Only write if this request has not been redirected yet
          /* istanbul ignore else */
          if (request === self._currentRequest) {
            // Report any write errors
            /* istanbul ignore if */
            if (error) {
              self.emit("error", error);
            }
            // Write the next buffer if there are still left
            else if (i < buffers.length) {
              var buffer = buffers[i++];
              /* istanbul ignore else */
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            }
            // End the request if `end` has been called on us
            else if (self._ended) {
              request.end();
            }
          }
        }());
      }
    };

    // Processes a response from the current native request
    RedirectableRequest.prototype._processResponse = function (response) {
      // Store the redirected response
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode: statusCode,
        });
      }

      // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
      // that further action needs to be taken by the user agent in order to
      // fulfill the request. If a Location header field is provided,
      // the user agent MAY automatically redirect its request to the URI
      // referenced by the Location field value,
      // even if the specific status code is not understood.

      // If the response is not a redirect; return it as-is
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false ||
          statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);

        // Clean up
        this._requestBodyBuffers = [];
        return;
      }

      // The response is a redirect, so abort the current request
      abortRequest(this._currentRequest);
      // Discard the remainder of the response to avoid waiting for data
      response.destroy();

      // RFC7231§6.4: A client SHOULD detect and intervene
      // in cyclical redirections (i.e., "infinite" redirection loops).
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
      }

      // Store the request headers if applicable
      var requestHeaders;
      var beforeRedirect = this._options.beforeRedirect;
      if (beforeRedirect) {
        requestHeaders = Object.assign({
          // The Host header was set by nativeProtocol.request
          Host: response.req.getHeader("host"),
        }, this._options.headers);
      }

      // RFC7231§6.4: Automatic redirection needs to done with
      // care for methods not known to be safe, […]
      // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
      // the request method from POST to GET for the subsequent request.
      var method = this._options.method;
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
          // RFC7231§6.4.4: The 303 (See Other) status code indicates that
          // the server is redirecting the user agent to a different resource […]
          // A user agent can perform a retrieval request targeting that URI
          // (a GET or HEAD request if using HTTP) […]
          (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }

      // Drop the Host header, as the redirect might lead to a different host
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

      // If the redirect is relative, carry over the host of the last request
      var currentUrlParts = url.parse(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
        url.format(Object.assign(currentUrlParts, { host: currentHost }));

      // Determine the URL of the redirection
      var redirectUrl;
      try {
        redirectUrl = url.resolve(currentUrl, location);
      }
      catch (cause) {
        this.emit("error", new RedirectionError({ cause: cause }));
        return;
      }

      // Create the redirected request
      debug("redirecting to", redirectUrl);
      this._isRedirect = true;
      var redirectUrlParts = url.parse(redirectUrl);
      Object.assign(this._options, redirectUrlParts);

      // Drop confidential headers when redirecting to a less secure protocol
      // or to a different domain that is not a superdomain
      if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
         redirectUrlParts.protocol !== "https:" ||
         redirectUrlParts.host !== currentHost &&
         !isSubdomain(redirectUrlParts.host, currentHost)) {
        removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
      }

      // Evaluate the beforeRedirect callback
      if (isFunction(beforeRedirect)) {
        var responseDetails = {
          headers: response.headers,
          statusCode: statusCode,
        };
        var requestDetails = {
          url: currentUrl,
          method: method,
          headers: requestHeaders,
        };
        try {
          beforeRedirect(this._options, responseDetails, requestDetails);
        }
        catch (err) {
          this.emit("error", err);
          return;
        }
        this._sanitizeOptions(this._options);
      }

      // Perform the redirected request
      try {
        this._performRequest();
      }
      catch (cause) {
        this.emit("error", new RedirectionError({ cause: cause }));
      }
    };

    // Wraps the key/value object of protocols with redirect functionality
    function wrap(protocols) {
      // Default settings
      var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024,
      };

      // Wrap each protocol
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function (scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

        // Executes a request, following redirects
        function request(input, options, callback) {
          // Parse parameters
          if (isString(input)) {
            var parsed;
            try {
              parsed = urlToOptions(new URL$1(input));
            }
            catch (err) {
              /* istanbul ignore next */
              parsed = url.parse(input);
            }
            if (!isString(parsed.protocol)) {
              throw new InvalidUrlError({ input });
            }
            input = parsed;
          }
          else if (URL$1 && (input instanceof URL$1)) {
            input = urlToOptions(input);
          }
          else {
            callback = options;
            options = input;
            input = { protocol: protocol };
          }
          if (isFunction(options)) {
            callback = options;
            options = null;
          }

          // Set defaults
          options = Object.assign({
            maxRedirects: exports.maxRedirects,
            maxBodyLength: exports.maxBodyLength,
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          if (!isString(options.host) && !isString(options.hostname)) {
            options.hostname = "::1";
          }

          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }

        // Executes a GET request, following redirects
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }

        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true },
        });
      });
      return exports;
    }

    /* istanbul ignore next */
    function noop() { /* empty */ }

    // from https://github.com/nodejs/node/blob/master/lib/internal/url.js
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ?
          /* istanbul ignore next */
          urlObject.hostname.slice(1, -1) :
          urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href,
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }

    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return (lastValue === null || typeof lastValue === "undefined") ?
        undefined : String(lastValue).trim();
    }

    function createErrorType(code, message, baseClass) {
      // Create constructor
      function CustomError(properties) {
        Error.captureStackTrace(this, this.constructor);
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
      }

      // Attach constructor and set default properties
      CustomError.prototype = new (baseClass || Error)();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      return CustomError;
    }

    function abortRequest(request) {
      for (var event of events) {
        request.removeListener(event, eventHandlers[event]);
      }
      request.on("error", noop);
      request.abort();
    }

    function isSubdomain(subdomain, domain) {
      assert(isString(subdomain) && isString(domain));
      var dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }

    function isString(value) {
      return typeof value === "string" || value instanceof String;
    }

    function isFunction(value) {
      return typeof value === "function";
    }

    function isBuffer(value) {
      return typeof value === "object" && ("length" in value);
    }

    // Exports
    followRedirects.exports = wrap({ http: http, https: https });
    followRedirects.exports.wrap = wrap;

    const VERSION = "1.1.3";

    /**
     * A `CanceledError` is an object that is thrown when an operation is canceled.
     *
     * @param {string=} message The message.
     * @param {Object=} config The config.
     * @param {Object=} request The request.
     *
     * @returns {CanceledError} The created error.
     */
    function CanceledError(message, config, request) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
      this.name = 'CanceledError';
    }

    utils.inherits(CanceledError, AxiosError, {
      __CANCEL__: true
    });

    function parseProtocol(url) {
      const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match && match[1] || '';
    }

    const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

    /**
     * Parse data uri to a Buffer or Blob
     *
     * @param {String} uri
     * @param {?Boolean} asBlob
     * @param {?Object} options
     * @param {?Function} options.Blob
     *
     * @returns {Buffer|Blob}
     */
    function fromDataURI(uri, asBlob, options) {
      const _Blob = options && options.Blob || platform.classes.Blob;
      const protocol = parseProtocol(uri);

      if (asBlob === undefined && _Blob) {
        asBlob = true;
      }

      if (protocol === 'data') {
        uri = protocol.length ? uri.slice(protocol.length + 1) : uri;

        const match = DATA_URL_PATTERN.exec(uri);

        if (!match) {
          throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
        }

        const mime = match[1];
        const isBase64 = match[2];
        const body = match[3];
        const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');

        if (asBlob) {
          if (!_Blob) {
            throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
          }

          return new _Blob([buffer], {type: mime});
        }

        return buffer;
      }

      throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
    }

    // RawAxiosHeaders whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    const ignoreDuplicateOf = utils.toObjectSet([
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ]);

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} rawHeaders Headers needing to be parsed
     *
     * @returns {Object} Headers parsed into an object
     */
    var parseHeaders = rawHeaders => {
      const parsed = {};
      let key;
      let val;
      let i;

      rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();

        if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
          return;
        }

        if (key === 'set-cookie') {
          if (parsed[key]) {
            parsed[key].push(val);
          } else {
            parsed[key] = [val];
          }
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      });

      return parsed;
    };

    const $internals = Symbol('internals');
    const $defaults = Symbol('defaults');

    function normalizeHeader(header) {
      return header && String(header).trim().toLowerCase();
    }

    function normalizeValue(value) {
      if (value === false || value == null) {
        return value;
      }

      return utils.isArray(value) ? value.map(normalizeValue) : String(value);
    }

    function parseTokens(str) {
      const tokens = Object.create(null);
      const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let match;

      while ((match = tokensRE.exec(str))) {
        tokens[match[1]] = match[2];
      }

      return tokens;
    }

    function matchHeaderValue(context, value, header, filter) {
      if (utils.isFunction(filter)) {
        return filter.call(this, value, header);
      }

      if (!utils.isString(value)) return;

      if (utils.isString(filter)) {
        return value.indexOf(filter) !== -1;
      }

      if (utils.isRegExp(filter)) {
        return filter.test(value);
      }
    }

    function formatHeader(header) {
      return header.trim()
        .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
    }

    function buildAccessors(obj, header) {
      const accessorName = utils.toCamelCase(' ' + header);

      ['get', 'set', 'has'].forEach(methodName => {
        Object.defineProperty(obj, methodName + accessorName, {
          value: function(arg1, arg2, arg3) {
            return this[methodName].call(this, header, arg1, arg2, arg3);
          },
          configurable: true
        });
      });
    }

    function findKey(obj, key) {
      key = key.toLowerCase();
      const keys = Object.keys(obj);
      let i = keys.length;
      let _key;
      while (i-- > 0) {
        _key = keys[i];
        if (key === _key.toLowerCase()) {
          return _key;
        }
      }
      return null;
    }

    function AxiosHeaders(headers, defaults) {
      headers && this.set(headers);
      this[$defaults] = defaults || null;
    }

    Object.assign(AxiosHeaders.prototype, {
      set: function(header, valueOrRewrite, rewrite) {
        const self = this;

        function setHeader(_value, _header, _rewrite) {
          const lHeader = normalizeHeader(_header);

          if (!lHeader) {
            throw new Error('header name must be a non-empty string');
          }

          const key = findKey(self, lHeader);

          if (key && _rewrite !== true && (self[key] === false || _rewrite === false)) {
            return;
          }

          self[key || _header] = normalizeValue(_value);
        }

        if (utils.isPlainObject(header)) {
          utils.forEach(header, (_value, _header) => {
            setHeader(_value, _header, valueOrRewrite);
          });
        } else {
          setHeader(valueOrRewrite, header, rewrite);
        }

        return this;
      },

      get: function(header, parser) {
        header = normalizeHeader(header);

        if (!header) return undefined;

        const key = findKey(this, header);

        if (key) {
          const value = this[key];

          if (!parser) {
            return value;
          }

          if (parser === true) {
            return parseTokens(value);
          }

          if (utils.isFunction(parser)) {
            return parser.call(this, value, key);
          }

          if (utils.isRegExp(parser)) {
            return parser.exec(value);
          }

          throw new TypeError('parser must be boolean|regexp|function');
        }
      },

      has: function(header, matcher) {
        header = normalizeHeader(header);

        if (header) {
          const key = findKey(this, header);

          return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }

        return false;
      },

      delete: function(header, matcher) {
        const self = this;
        let deleted = false;

        function deleteHeader(_header) {
          _header = normalizeHeader(_header);

          if (_header) {
            const key = findKey(self, _header);

            if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
              delete self[key];

              deleted = true;
            }
          }
        }

        if (utils.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }

        return deleted;
      },

      clear: function() {
        return Object.keys(this).forEach(this.delete.bind(this));
      },

      normalize: function(format) {
        const self = this;
        const headers = {};

        utils.forEach(this, (value, header) => {
          const key = findKey(headers, header);

          if (key) {
            self[key] = normalizeValue(value);
            delete self[header];
            return;
          }

          const normalized = format ? formatHeader(header) : String(header).trim();

          if (normalized !== header) {
            delete self[header];
          }

          self[normalized] = normalizeValue(value);

          headers[normalized] = true;
        });

        return this;
      },

      toJSON: function(asStrings) {
        const obj = Object.create(null);

        utils.forEach(Object.assign({}, this[$defaults] || null, this),
          (value, header) => {
            if (value == null || value === false) return;
            obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value;
          });

        return obj;
      }
    });

    Object.assign(AxiosHeaders, {
      from: function(thing) {
        if (utils.isString(thing)) {
          return new this(parseHeaders(thing));
        }
        return thing instanceof this ? thing : new this(thing);
      },

      accessor: function(header) {
        const internals = this[$internals] = (this[$internals] = {
          accessors: {}
        });

        const accessors = internals.accessors;
        const prototype = this.prototype;

        function defineAccessor(_header) {
          const lHeader = normalizeHeader(_header);

          if (!accessors[lHeader]) {
            buildAccessors(prototype, _header);
            accessors[lHeader] = true;
          }
        }

        utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

        return this;
      }
    });

    AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent']);

    utils.freezeMethods(AxiosHeaders.prototype);
    utils.freezeMethods(AxiosHeaders);

    /**
     * Throttle decorator
     * @param {Function} fn
     * @param {Number} freq
     * @return {Function}
     */
    function throttle(fn, freq) {
      let timestamp = 0;
      const threshold = 1000 / freq;
      let timer = null;
      return function throttled(force, args) {
        const now = Date.now();
        if (force || now - timestamp > threshold) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          timestamp = now;
          return fn.apply(null, args);
        }
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            timestamp = Date.now();
            return fn.apply(null, args);
          }, threshold - (now - timestamp));
        }
      };
    }

    /**
     * Calculate data maxRate
     * @param {Number} [samplesCount= 10]
     * @param {Number} [min= 1000]
     * @returns {Function}
     */
    function speedometer(samplesCount, min) {
      samplesCount = samplesCount || 10;
      const bytes = new Array(samplesCount);
      const timestamps = new Array(samplesCount);
      let head = 0;
      let tail = 0;
      let firstSampleTS;

      min = min !== undefined ? min : 1000;

      return function push(chunkLength) {
        const now = Date.now();

        const startedAt = timestamps[tail];

        if (!firstSampleTS) {
          firstSampleTS = now;
        }

        bytes[head] = chunkLength;
        timestamps[head] = now;

        let i = tail;
        let bytesCount = 0;

        while (i !== head) {
          bytesCount += bytes[i++];
          i = i % samplesCount;
        }

        head = (head + 1) % samplesCount;

        if (head === tail) {
          tail = (tail + 1) % samplesCount;
        }

        if (now - firstSampleTS < min) {
          return;
        }

        const passed = startedAt && now - startedAt;

        return  passed ? Math.round(bytesCount * 1000 / passed) : undefined;
      };
    }

    const kInternals = Symbol('internals');

    class AxiosTransformStream extends stream$1.Transform{
      constructor(options) {
        options = utils.toFlatObject(options, {
          maxRate: 0,
          chunkSize: 64 * 1024,
          minChunkSize: 100,
          timeWindow: 500,
          ticksRate: 2,
          samplesCount: 15
        }, null, (prop, source) => {
          return !utils.isUndefined(source[prop]);
        });

        super({
          readableHighWaterMark: options.chunkSize
        });

        const self = this;

        const internals = this[kInternals] = {
          length: options.length,
          timeWindow: options.timeWindow,
          ticksRate: options.ticksRate,
          chunkSize: options.chunkSize,
          maxRate: options.maxRate,
          minChunkSize: options.minChunkSize,
          bytesSeen: 0,
          isCaptured: false,
          notifiedBytesLoaded: 0,
          ts: Date.now(),
          bytes: 0,
          onReadCallback: null
        };

        const _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);

        this.on('newListener', event => {
          if (event === 'progress') {
            if (!internals.isCaptured) {
              internals.isCaptured = true;
            }
          }
        });

        let bytesNotified = 0;

        internals.updateProgress = throttle(function throttledHandler() {
          const totalBytes = internals.length;
          const bytesTransferred = internals.bytesSeen;
          const progressBytes = bytesTransferred - bytesNotified;
          if (!progressBytes || self.destroyed) return;

          const rate = _speedometer(progressBytes);

          bytesNotified = bytesTransferred;

          process.nextTick(() => {
            self.emit('progress', {
              'loaded': bytesTransferred,
              'total': totalBytes,
              'progress': totalBytes ? (bytesTransferred / totalBytes) : undefined,
              'bytes': progressBytes,
              'rate': rate ? rate : undefined,
              'estimated': rate && totalBytes && bytesTransferred <= totalBytes ?
                (totalBytes - bytesTransferred) / rate : undefined
            });
          });
        }, internals.ticksRate);

        const onFinish = () => {
          internals.updateProgress(true);
        };

        this.once('end', onFinish);
        this.once('error', onFinish);
      }

      _read(size) {
        const internals = this[kInternals];

        if (internals.onReadCallback) {
          internals.onReadCallback();
        }

        return super._read(size);
      }

      _transform(chunk, encoding, callback) {
        const self = this;
        const internals = this[kInternals];
        const maxRate = internals.maxRate;

        const readableHighWaterMark = this.readableHighWaterMark;

        const timeWindow = internals.timeWindow;

        const divider = 1000 / timeWindow;
        const bytesThreshold = (maxRate / divider);
        const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;

        function pushChunk(_chunk, _callback) {
          const bytes = Buffer.byteLength(_chunk);
          internals.bytesSeen += bytes;
          internals.bytes += bytes;

          if (internals.isCaptured) {
            internals.updateProgress();
          }

          if (self.push(_chunk)) {
            process.nextTick(_callback);
          } else {
            internals.onReadCallback = () => {
              internals.onReadCallback = null;
              process.nextTick(_callback);
            };
          }
        }

        const transformChunk = (_chunk, _callback) => {
          const chunkSize = Buffer.byteLength(_chunk);
          let chunkRemainder = null;
          let maxChunkSize = readableHighWaterMark;
          let bytesLeft;
          let passed = 0;

          if (maxRate) {
            const now = Date.now();

            if (!internals.ts || (passed = (now - internals.ts)) >= timeWindow) {
              internals.ts = now;
              bytesLeft = bytesThreshold - internals.bytes;
              internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
              passed = 0;
            }

            bytesLeft = bytesThreshold - internals.bytes;
          }

          if (maxRate) {
            if (bytesLeft <= 0) {
              // next time window
              return setTimeout(() => {
                _callback(null, _chunk);
              }, timeWindow - passed);
            }

            if (bytesLeft < maxChunkSize) {
              maxChunkSize = bytesLeft;
            }
          }

          if (maxChunkSize && chunkSize > maxChunkSize && (chunkSize - maxChunkSize) > minChunkSize) {
            chunkRemainder = _chunk.subarray(maxChunkSize);
            _chunk = _chunk.subarray(0, maxChunkSize);
          }

          pushChunk(_chunk, chunkRemainder ? () => {
            process.nextTick(_callback, null, chunkRemainder);
          } : _callback);
        };

        transformChunk(chunk, function transformNextChunk(err, _chunk) {
          if (err) {
            return callback(err);
          }

          if (_chunk) {
            transformChunk(_chunk, transformNextChunk);
          } else {
            callback(null);
          }
        });
      }

      setLength(length) {
        this[kInternals].length = +length;
        return this;
      }
    }

    const isBrotliSupported = utils.isFunction(zlib$1.createBrotliDecompress);

    const {http: httpFollow, https: httpsFollow} = followRedirects.exports;

    const isHttps = /https:?/;

    const supportedProtocols = platform.protocols.map(protocol => {
      return protocol + ':';
    });

    /**
     * If the proxy or config beforeRedirects functions are defined, call them with the options
     * object.
     *
     * @param {Object<string, any>} options - The options object that was passed to the request.
     *
     * @returns {Object<string, any>}
     */
    function dispatchBeforeRedirect(options) {
      if (options.beforeRedirects.proxy) {
        options.beforeRedirects.proxy(options);
      }
      if (options.beforeRedirects.config) {
        options.beforeRedirects.config(options);
      }
    }

    /**
     * If the proxy or config afterRedirects functions are defined, call them with the options
     *
     * @param {http.ClientRequestArgs} options
     * @param {AxiosProxyConfig} configProxy configuration from Axios options object
     * @param {string} location
     *
     * @returns {http.ClientRequestArgs}
     */
    function setProxy(options, configProxy, location) {
      let proxy = configProxy;
      if (!proxy && proxy !== false) {
        const proxyUrl = getProxyForUrl_1(location);
        if (proxyUrl) {
          proxy = new URL(proxyUrl);
        }
      }
      if (proxy) {
        // Basic proxy authorization
        if (proxy.username) {
          proxy.auth = (proxy.username || '') + ':' + (proxy.password || '');
        }

        if (proxy.auth) {
          // Support proxy auth object form
          if (proxy.auth.username || proxy.auth.password) {
            proxy.auth = (proxy.auth.username || '') + ':' + (proxy.auth.password || '');
          }
          const base64 = Buffer
            .from(proxy.auth, 'utf8')
            .toString('base64');
          options.headers['Proxy-Authorization'] = 'Basic ' + base64;
        }

        options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
        const proxyHost = proxy.hostname || proxy.host;
        options.hostname = proxyHost;
        // Replace 'host' since options is not a URL object
        options.host = proxyHost;
        options.port = proxy.port;
        options.path = location;
        if (proxy.protocol) {
          options.protocol = proxy.protocol.includes(':') ? proxy.protocol : `${proxy.protocol}:`;
        }
      }

      options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
        // Configure proxy for redirected request, passing the original config proxy to apply
        // the exact same logic as if the redirected request was performed by axios directly.
        setProxy(redirectOptions, configProxy, redirectOptions.href);
      };
    }

    /*eslint consistent-return:0*/
    function httpAdapter(config) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        let data = config.data;
        const responseType = config.responseType;
        const responseEncoding = config.responseEncoding;
        const method = config.method.toUpperCase();
        let isFinished;
        let isDone;
        let rejected = false;
        let req;

        // temporary internal emitter until the AxiosRequest class will be implemented
        const emitter = new require$$0$3();

        function onFinished() {
          if (isFinished) return;
          isFinished = true;

          if (config.cancelToken) {
            config.cancelToken.unsubscribe(abort);
          }

          if (config.signal) {
            config.signal.removeEventListener('abort', abort);
          }

          emitter.removeAllListeners();
        }

        function done(value, isRejected) {
          if (isDone) return;

          isDone = true;

          if (isRejected) {
            rejected = true;
            onFinished();
          }

          isRejected ? rejectPromise(value) : resolvePromise(value);
        }

        const resolve = function resolve(value) {
          done(value);
        };

        const reject = function reject(value) {
          done(value, true);
        };

        function abort(reason) {
          emitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
        }

        emitter.once('abort', reject);

        if (config.cancelToken || config.signal) {
          config.cancelToken && config.cancelToken.subscribe(abort);
          if (config.signal) {
            config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
          }
        }

        // Parse url
        const fullPath = buildFullPath(config.baseURL, config.url);
        const parsed = new URL(fullPath);
        const protocol = parsed.protocol || supportedProtocols[0];

        if (protocol === 'data:') {
          let convertedData;

          if (method !== 'GET') {
            return settle(resolve, reject, {
              status: 405,
              statusText: 'method not allowed',
              headers: {},
              config
            });
          }

          try {
            convertedData = fromDataURI(config.url, responseType === 'blob', {
              Blob: config.env && config.env.Blob
            });
          } catch (err) {
            throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
          }

          if (responseType === 'text') {
            convertedData = convertedData.toString(responseEncoding);

            if (!responseEncoding || responseEncoding === 'utf8') {
              data = utils.stripBOM(convertedData);
            }
          } else if (responseType === 'stream') {
            convertedData = stream$1.Readable.from(convertedData);
          }

          return settle(resolve, reject, {
            data: convertedData,
            status: 200,
            statusText: 'OK',
            headers: {},
            config
          });
        }

        if (supportedProtocols.indexOf(protocol) === -1) {
          return reject(new AxiosError(
            'Unsupported protocol ' + protocol,
            AxiosError.ERR_BAD_REQUEST,
            config
          ));
        }

        const headers = AxiosHeaders.from(config.headers).normalize();

        // Set User-Agent (required by some servers)
        // See https://github.com/axios/axios/issues/69
        // User-Agent is specified; handle case where no UA header is desired
        // Only set header if it hasn't been set in config
        headers.set('User-Agent', 'axios/' + VERSION, false);

        const onDownloadProgress = config.onDownloadProgress;
        const onUploadProgress = config.onUploadProgress;
        const maxRate = config.maxRate;
        let maxUploadRate = undefined;
        let maxDownloadRate = undefined;

        // support for https://www.npmjs.com/package/form-data api
        if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
          headers.set(data.getHeaders());
        } else if (data && !utils.isStream(data)) {
          if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils.isString(data)) {
            data = Buffer.from(data, 'utf-8');
          } else {
            return reject(new AxiosError(
              'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
              AxiosError.ERR_BAD_REQUEST,
              config
            ));
          }

          // Add Content-Length header if data exists
          headers.set('Content-Length', data.length, false);

          if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
            return reject(new AxiosError(
              'Request body larger than maxBodyLength limit',
              AxiosError.ERR_BAD_REQUEST,
              config
            ));
          }
        }

        const contentLength = +headers.getContentLength();

        if (utils.isArray(maxRate)) {
          maxUploadRate = maxRate[0];
          maxDownloadRate = maxRate[1];
        } else {
          maxUploadRate = maxDownloadRate = maxRate;
        }

        if (data && (onUploadProgress || maxUploadRate)) {
          if (!utils.isStream(data)) {
            data = stream$1.Readable.from(data, {objectMode: false});
          }

          data = stream$1.pipeline([data, new AxiosTransformStream({
            length: utils.toFiniteNumber(contentLength),
            maxRate: utils.toFiniteNumber(maxUploadRate)
          })], utils.noop);

          onUploadProgress && data.on('progress', progress => {
            onUploadProgress(Object.assign(progress, {
              upload: true
            }));
          });
        }

        // HTTP basic authentication
        let auth = undefined;
        if (config.auth) {
          const username = config.auth.username || '';
          const password = config.auth.password || '';
          auth = username + ':' + password;
        }

        if (!auth && parsed.username) {
          const urlUsername = parsed.username;
          const urlPassword = parsed.password;
          auth = urlUsername + ':' + urlPassword;
        }

        auth && headers.delete('authorization');

        let path;

        try {
          path = buildURL(
            parsed.pathname + parsed.search,
            config.params,
            config.paramsSerializer
          ).replace(/^\?/, '');
        } catch (err) {
          const customErr = new Error(err.message);
          customErr.config = config;
          customErr.url = config.url;
          customErr.exists = true;
          return reject(customErr);
        }

        headers.set('Accept-Encoding', 'gzip, deflate, br', false);

        const options = {
          path,
          method: method,
          headers: headers.toJSON(),
          agents: { http: config.httpAgent, https: config.httpsAgent },
          auth,
          protocol,
          beforeRedirect: dispatchBeforeRedirect,
          beforeRedirects: {}
        };

        if (config.socketPath) {
          options.socketPath = config.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
          setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
        }

        let transport;
        const isHttpsRequest = isHttps.test(options.protocol);
        options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        if (config.transport) {
          transport = config.transport;
        } else if (config.maxRedirects === 0) {
          transport = isHttpsRequest ? require$$4 : require$$3;
        } else {
          if (config.maxRedirects) {
            options.maxRedirects = config.maxRedirects;
          }
          if (config.beforeRedirect) {
            options.beforeRedirects.config = config.beforeRedirect;
          }
          transport = isHttpsRequest ? httpsFollow : httpFollow;
        }

        if (config.maxBodyLength > -1) {
          options.maxBodyLength = config.maxBodyLength;
        } else {
          // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
          options.maxBodyLength = Infinity;
        }

        if (config.insecureHTTPParser) {
          options.insecureHTTPParser = config.insecureHTTPParser;
        }

        // Create the request
        req = transport.request(options, function handleResponse(res) {
          if (req.destroyed) return;

          const streams = [res];

          // uncompress the response body transparently if required
          let responseStream = res;

          // return the last request in case of redirects
          const lastRequest = res.req || req;

          // if decompress disabled we should not decompress
          if (config.decompress !== false) {
            // if no content, but headers still say that it is encoded,
            // remove the header not confuse downstream operations
            if (data && data.length === 0 && res.headers['content-encoding']) {
              delete res.headers['content-encoding'];
            }

            switch (res.headers['content-encoding']) {
            /*eslint default-case:0*/
            case 'gzip':
            case 'compress':
            case 'deflate':
              // add the unzipper to the body stream processing pipeline
              streams.push(zlib$1.createUnzip());

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            case 'br':
              if (isBrotliSupported) {
                streams.push(zlib$1.createBrotliDecompress());
                delete res.headers['content-encoding'];
              }
            }
          }

          if (onDownloadProgress) {
            const responseLength = +res.headers['content-length'];

            const transformStream = new AxiosTransformStream({
              length: utils.toFiniteNumber(responseLength),
              maxRate: utils.toFiniteNumber(maxDownloadRate)
            });

            onDownloadProgress && transformStream.on('progress', progress => {
              onDownloadProgress(Object.assign(progress, {
                download: true
              }));
            });

            streams.push(transformStream);
          }

          responseStream = streams.length > 1 ? stream$1.pipeline(streams, utils.noop) : streams[0];

          const offListeners = stream$1.finished(responseStream, () => {
            offListeners();
            onFinished();
          });

          const response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: new AxiosHeaders(res.headers),
            config,
            request: lastRequest
          };

          if (responseType === 'stream') {
            response.data = responseStream;
            settle(resolve, reject, response);
          } else {
            const responseBuffer = [];
            let totalResponseBytes = 0;

            responseStream.on('data', function handleStreamData(chunk) {
              responseBuffer.push(chunk);
              totalResponseBytes += chunk.length;

              // make sure the content length is not over the maxContentLength if specified
              if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                // stream.destroy() emit aborted event before calling reject() on Node.js v16
                rejected = true;
                responseStream.destroy();
                reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                  AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
              }
            });

            responseStream.on('aborted', function handlerStreamAborted() {
              if (rejected) {
                return;
              }

              const err = new AxiosError(
                'maxContentLength size of ' + config.maxContentLength + ' exceeded',
                AxiosError.ERR_BAD_RESPONSE,
                config,
                lastRequest
              );
              responseStream.destroy(err);
              reject(err);
            });

            responseStream.on('error', function handleStreamError(err) {
              if (req.destroyed) return;
              reject(AxiosError.from(err, null, config, lastRequest));
            });

            responseStream.on('end', function handleStreamEnd() {
              try {
                let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                if (responseType !== 'arraybuffer') {
                  responseData = responseData.toString(responseEncoding);
                  if (!responseEncoding || responseEncoding === 'utf8') {
                    responseData = utils.stripBOM(responseData);
                  }
                }
                response.data = responseData;
              } catch (err) {
                reject(AxiosError.from(err, null, config, response.request, response));
              }
              settle(resolve, reject, response);
            });
          }

          emitter.once('abort', err => {
            if (!responseStream.destroyed) {
              responseStream.emit('error', err);
              responseStream.destroy();
            }
          });
        });

        emitter.once('abort', err => {
          reject(err);
          req.destroy(err);
        });

        // Handle errors
        req.on('error', function handleRequestError(err) {
          // @todo remove
          // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
          reject(AxiosError.from(err, null, config, req));
        });

        // set tcp keep alive to prevent drop connection by peer
        req.on('socket', function handleRequestSocket(socket) {
          // default interval of sending ack packet is 1 minute
          socket.setKeepAlive(true, 1000 * 60);
        });

        // Handle request timeout
        if (config.timeout) {
          // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
          const timeout = parseInt(config.timeout, 10);

          if (isNaN(timeout)) {
            reject(new AxiosError(
              'error trying to parse `config.timeout` to int',
              AxiosError.ERR_BAD_OPTION_VALUE,
              config,
              req
            ));

            return;
          }

          // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
          // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
          // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
          // And then these socket which be hang up will devouring CPU little by little.
          // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
          req.setTimeout(timeout, function handleRequestTimeout() {
            if (isDone) return;
            let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
              config,
              req
            ));
            abort();
          });
        }


        // Send the request
        if (utils.isStream(data)) {
          let ended = false;
          let errored = false;

          data.on('end', () => {
            ended = true;
          });

          data.once('error', err => {
            errored = true;
            req.destroy(err);
          });

          data.on('close', () => {
            if (!ended && !errored) {
              abort(new CanceledError('Request stream has been aborted', config, req));
            }
          });

          data.pipe(req);
        } else {
          req.end(data);
        }
      });
    }

    var cookies = platform.isStandardBrowserEnv ?

    // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :

    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })();

    var isURLSameOrigin = platform.isStandardBrowserEnv ?

    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        const msie = /(msie|trident)/i.test(navigator.userAgent);
        const urlParsingNode = document.createElement('a');
        let originURL;

        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
        function resolveURL(url) {
          let href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);

        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
        return function isURLSameOrigin(requestURL) {
          const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :

      // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })();

    function progressEventReducer(listener, isDownloadStream) {
      let bytesNotified = 0;
      const _speedometer = speedometer(50, 250);

      return e => {
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;

        bytesNotified = loaded;

        const data = {
          loaded,
          total,
          progress: total ? (loaded / total) : undefined,
          bytes: progressBytes,
          rate: rate ? rate : undefined,
          estimated: rate && total && inRange ? (total - loaded) / rate : undefined
        };

        data[isDownloadStream ? 'download' : 'upload'] = true;

        listener(data);
      };
    }

    function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = AxiosHeaders.from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }

          if (config.signal) {
            config.signal.removeEventListener('abort', onCanceled);
          }
        }

        if (utils.isFormData(requestData) && platform.isStandardBrowserEnv) {
          requestHeaders.setContentType(false); // Let the browser set it
        }

        let request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          const username = config.auth.username || '';
          const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
          requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
        }

        const fullPath = buildFullPath(config.baseURL, config.url);

        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        function onloadend() {
          if (!request) {
            return;
          }
          // Prepare the response
          const responseHeaders = AxiosHeaders.from(
            'getAllResponseHeaders' in request && request.getAllResponseHeaders()
          );
          const responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
            request.responseText : request.response;
          const response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };

          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);

          // Clean up request
          request = null;
        }

        if ('onloadend' in request) {
          // Use onloadend if available
          request.onloadend = onloadend;
        } else {
          // Listen for ready state to emulate onloadend
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }

            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            }
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
          };
        }

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
          const transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
            config,
            request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (platform.isStandardBrowserEnv) {
          // Add xsrf header
          const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
            && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

          if (xsrfValue) {
            requestHeaders.set(config.xsrfHeaderName, xsrfValue);
          }
        }

        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);

        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
          });
        }

        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
          request.responseType = config.responseType;
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
        }

        if (config.cancelToken || config.signal) {
          // Handle cancellation
          // eslint-disable-next-line func-names
          onCanceled = cancel => {
            if (!request) {
              return;
            }
            reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
            request.abort();
            request = null;
          };

          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
          }
        }

        const protocol = parseProtocol(fullPath);

        if (protocol && platform.protocols.indexOf(protocol) === -1) {
          reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
          return;
        }


        // Send the request
        request.send(requestData || null);
      });
    }

    const adapters = {
      http: httpAdapter,
      xhr: xhrAdapter
    };

    var adapters$1 = {
      getAdapter: (nameOrAdapter) => {
        if(utils.isString(nameOrAdapter)){
          const adapter = adapters[nameOrAdapter];

          if (!nameOrAdapter) {
            throw Error(
              utils.hasOwnProp(nameOrAdapter) ?
                `Adapter '${nameOrAdapter}' is not available in the build` :
                `Can not resolve adapter '${nameOrAdapter}'`
            );
          }

          return adapter
        }

        if (!utils.isFunction(nameOrAdapter)) {
          throw new TypeError('adapter is not a function');
        }

        return nameOrAdapter;
      },
      adapters
    };

    const DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    /**
     * If the browser has an XMLHttpRequest object, use the XHR adapter, otherwise use the HTTP
     * adapter
     *
     * @returns {Function}
     */
    function getDefaultAdapter() {
      let adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = adapters$1.getAdapter('xhr');
      } else if (typeof process !== 'undefined' && utils.kindOf(process) === 'process') {
        // For node use HTTP adapter
        adapter = adapters$1.getAdapter('http');
      }
      return adapter;
    }

    /**
     * It takes a string, tries to parse it, and if it fails, it returns the stringified version
     * of the input
     *
     * @param {any} rawValue - The value to be stringified.
     * @param {Function} parser - A function that parses a string into a JavaScript object.
     * @param {Function} encoder - A function that takes a value and returns a string.
     *
     * @returns {string} A stringified version of the rawValue.
     */
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== 'SyntaxError') {
            throw e;
          }
        }
      }

      return (encoder || JSON.stringify)(rawValue);
    }

    const defaults = {

      transitional: transitionalDefaults,

      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        const contentType = headers.getContentType() || '';
        const hasJSONContentType = contentType.indexOf('application/json') > -1;
        const isObjectPayload = utils.isObject(data);

        if (isObjectPayload && utils.isHTMLForm(data)) {
          data = new FormData(data);
        }

        const isFormData = utils.isFormData(data);

        if (isFormData) {
          if (!hasJSONContentType) {
            return data;
          }
          return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
        }

        if (utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
          return data.toString();
        }

        let isFileList;

        if (isObjectPayload) {
          if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
            return toURLEncodedForm(data, this.formSerializer).toString();
          }

          if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
            const _FormData = this.env && this.env.FormData;

            return toFormData(
              isFileList ? {'files[]': data} : data,
              _FormData && new _FormData(),
              this.formSerializer
            );
          }
        }

        if (isObjectPayload || hasJSONContentType ) {
          headers.setContentType('application/json', false);
          return stringifySafely(data);
        }

        return data;
      }],

      transformResponse: [function transformResponse(data) {
        const transitional = this.transitional || defaults.transitional;
        const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        const JSONRequested = this.responseType === 'json';

        if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
          const silentJSONParsing = transitional && transitional.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;

          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === 'SyntaxError') {
                throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }

        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,
      maxBodyLength: -1,

      env: {
        FormData: platform.classes.FormData,
        Blob: platform.classes.Blob
      },

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },

      headers: {
        common: {
          'Accept': 'application/json, text/plain, */*'
        }
      }
    };

    utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });

    /**
     * Transform the data for a request or a response
     *
     * @param {Array|Function} fns A single function or Array of functions
     * @param {?Object} response The response object
     *
     * @returns {*} The resulting transformed data
     */
    function transformData(fns, response) {
      const config = this || defaults;
      const context = response || config;
      const headers = AxiosHeaders.from(context.headers);
      let data = context.data;

      utils.forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
      });

      headers.normalize();

      return data;
    }

    function isCancel(value) {
      return !!(value && value.__CANCEL__);
    }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     *
     * @param {Object} config The config that is to be used for the request
     *
     * @returns {void}
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }

      if (config.signal && config.signal.aborted) {
        throw new CanceledError();
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      config.headers = AxiosHeaders.from(config.headers);

      // Transform request data
      config.data = transformData.call(
        config,
        config.transformRequest
      );

      const adapter = config.adapter || defaults.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData.call(
          config,
          config.transformResponse,
          response
        );

        response.headers = AxiosHeaders.from(response.headers);

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              config.transformResponse,
              reason.response
            );
            reason.response.headers = AxiosHeaders.from(reason.response.headers);
          }
        }

        return Promise.reject(reason);
      });
    }

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     *
     * @returns {Object} New object resulting from merging config2 to config1
     */
    function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      const config = {};

      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      // eslint-disable-next-line consistent-return
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(undefined, config1[prop]);
        }
      }

      // eslint-disable-next-line consistent-return
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(undefined, config2[prop]);
        }
      }

      // eslint-disable-next-line consistent-return
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(undefined, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(undefined, config1[prop]);
        }
      }

      // eslint-disable-next-line consistent-return
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(undefined, config1[prop]);
        }
      }

      const mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'beforeRedirect': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
      };

      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(prop);
        (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
      });

      return config;
    }

    const validators$1 = {};

    // eslint-disable-next-line func-names
    ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
      validators$1[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
      };
    });

    const deprecatedWarnings = {};

    /**
     * Transitional option validator
     *
     * @param {function|boolean?} validator - set to false if the transitional option has been removed
     * @param {string?} version - deprecated version / removed since version
     * @param {string?} message - some message with additional info
     *
     * @returns {function}
     */
    validators$1.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
      }

      // eslint-disable-next-line func-names
      return (value, opt, opts) => {
        if (validator === false) {
          throw new AxiosError(
            formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
            AxiosError.ERR_DEPRECATED
          );
        }

        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          // eslint-disable-next-line no-console
          console.warn(
            formatMessage(
              opt,
              ' has been deprecated since v' + version + ' and will be removed in the near future'
            )
          );
        }

        return validator ? validator(value, opt, opts) : true;
      };
    };

    /**
     * Assert object's properties type
     *
     * @param {object} options
     * @param {object} schema
     * @param {boolean?} allowUnknown
     *
     * @returns {object}
     */

    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== 'object') {
        throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
      }
      const keys = Object.keys(options);
      let i = keys.length;
      while (i-- > 0) {
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
          const value = options[opt];
          const result = value === undefined || validator(value, opt, options);
          if (result !== true) {
            throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
        }
      }
    }

    var validator = {
      assertOptions,
      validators: validators$1
    };

    const validators = validator.validators;

    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     *
     * @return {Axios} A new instance of Axios
     */
    class Axios {
      constructor(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }

      /**
       * Dispatch a request
       *
       * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
       * @param {?Object} config
       *
       * @returns {Promise} The Promise to be fulfilled
       */
      request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }

        config = mergeConfig(this.defaults, config);

        const {transitional, paramsSerializer} = config;

        if (transitional !== undefined) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }

        if (paramsSerializer !== undefined) {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }

        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();

        // Flatten headers
        const defaultHeaders = config.headers && utils.merge(
          config.headers.common,
          config.headers[config.method]
        );

        defaultHeaders && utils.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );

        config.headers = new AxiosHeaders(config.headers, defaultHeaders);

        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
          }

          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });

        let promise;
        let i = 0;
        let len;

        if (!synchronousRequestInterceptors) {
          const chain = [dispatchRequest.bind(this), undefined];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;

          promise = Promise.resolve(config);

          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }

          return promise;
        }

        len = requestInterceptorChain.length;

        let newConfig = config;

        i = 0;

        while (i < len) {
          const onFulfilled = requestInterceptorChain[i++];
          const onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }

        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }

        i = 0;
        len = responseInterceptorChain.length;

        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }

        return promise;
      }

      getUri(config) {
        config = mergeConfig(this.defaults, config);
        const fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      }
    }

    // Provide aliases for supported request methods
    utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/

      function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            headers: isForm ? {
              'Content-Type': 'multipart/form-data'
            } : {},
            url,
            data
          }));
        };
      }

      Axios.prototype[method] = generateHTTPMethod();

      Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
    });

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @param {Function} executor The executor function.
     *
     * @returns {CancelToken}
     */
    class CancelToken {
      constructor(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        let resolvePromise;

        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        const token = this;

        // eslint-disable-next-line func-names
        this.promise.then(cancel => {
          if (!token._listeners) return;

          let i = token._listeners.length;

          while (i-- > 0) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });

        // eslint-disable-next-line func-names
        this.promise.then = onfulfilled => {
          let _resolve;
          // eslint-disable-next-line func-names
          const promise = new Promise(resolve => {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);

          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };

          return promise;
        };

        executor(function cancel(message, config, request) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new CanceledError(message, config, request);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }

      /**
       * Subscribe to the cancel signal
       */

      subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }

        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }

      /**
       * Unsubscribe from the cancel signal
       */

      unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      }
    }

    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     *
     * @returns {Function}
     */
    function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    }

    /**
     * Determines whether the payload is an error thrown by Axios
     *
     * @param {*} payload The value to test
     *
     * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
     */
    function isAxiosError(payload) {
      return utils.isObject(payload) && (payload.isAxiosError === true);
    }

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     *
     * @returns {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      const context = new Axios(defaultConfig);
      const instance = bind(Axios.prototype.request, context);

      // Copy axios.prototype to instance
      utils.extend(instance, Axios.prototype, context, {allOwnKeys: true});

      // Copy context to instance
      utils.extend(instance, context, null, {allOwnKeys: true});

      // Factory for creating new instances
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };

      return instance;
    }

    // Create the default instance to be exported
    const axios = createInstance(defaults);

    // Expose Axios class to allow class inheritance
    axios.Axios = Axios;

    // Expose Cancel & CancelToken
    axios.CanceledError = CanceledError;
    axios.CancelToken = CancelToken;
    axios.isCancel = isCancel;
    axios.VERSION = VERSION;
    axios.toFormData = toFormData;

    // Expose AxiosError class
    axios.AxiosError = AxiosError;

    // alias for CanceledError for backward compatibility
    axios.Cancel = axios.CanceledError;

    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };

    axios.spread = spread;

    // Expose isAxiosError
    axios.isAxiosError = isAxiosError;

    axios.formToJSON = thing => {
      return formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
    };

    var ua = Bowser.parse(window.navigator.userAgent);
    var TabClient = /** @class */ (function (_super) {
        __extends(TabClient, _super);
        function TabClient(config) {
            var _this = _super.call(this, config) || this;
            _this.isClient = true;
            _this.ua = ua;
            _this.client = {
                isWX: window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i),
                isAli: window.navigator.userAgent.toLowerCase().match(/Alipay/i),
                isPC: ua.platform.type === "desktop"
            };
            return _this;
        }
        TabClient.prototype.start = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (config)
                                _super.prototype.start.call(this, config);
                            this.req = axios;
                            // @ts-ignore
                            if (!this.config.apiUrl)
                                this.config.apiUrl = location.origin + "/api/";
                            this.socket = lookup(this.config.apiUrl.replace("/api", ""));
                            if (this.config.apiUrl && localStorage)
                                this.token = localStorage.getItem(this.config.apiUrl);
                            this.injectModule(types, typesClientController);
                            this.injectModule(users, usersClientController);
                            this.injectModule(elements, elementsClientController);
                            this.injectModule(system, systemClientController);
                            this.users.authMe();
                            this.makeSocketEvents();
                            return [4 /*yield*/, this.runEventFn("start", "启动")];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        TabClient.prototype.makeSocketEvents = function () {
            var _this = this;
            this.socket.on("disconnect", function (reason) {
                console.log("连接已断开:", reason);
                _this.runEventFn("disconnect", "连接已断开");
                console.log("连接重启中:正在尝试重新连接服务器");
            });
            this.socket.io.on("reconnect", function () { return __awaiter(_this, void 0, void 0, function () {
                var _i, _a, unit;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log("连接重启中:服务器已连接");
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, this.users.authMe()];
                        case 2:
                            _b.sent();
                            console.log("连接重启中:数据更新正在恢复");
                            for (_i = 0, _a = this.moduleList; _i < _a.length; _i++) {
                                unit = _a[_i];
                                this[unit].api.hotReloadRestart();
                            }
                            console.log("连接已重启");
                            return [4 /*yield*/, this.runEventFn("reconnect", "连接已重启")];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            _b.sent();
                            location.reload();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            this.socket.on("update", function (_a) {
                var id = _a.id, type = _a.type, changeId = _a.changeId;
                var p = _this.parsePlaceString(id);
                if (p.key) {
                    // console.log("收到" + p.Unit + "Children更新：", id);
                    _this[p.units].api.childrenRefresh(p.id + "." + p.place + "." + p.key, type, changeId);
                }
                else {
                    // console.log("收到" + p.Unit + "更新：", id);
                    _this[p.units].refresh(p.id);
                }
            });
            this.socket.on("delete", function (_a) {
                var id = _a.id;
                console.log("收到元素删除：", id);
                var p = _this.parsePlaceString(id);
                _this[p.units].afterDelete(p.id);
            });
        };
        TabClient.prototype.assignMe = function (me) {
            _super.prototype.assignMe.call(this, me);
            if (localStorage)
                localStorage.setItem(this.config.apiUrl, me.token);
            return this.me;
        };
        TabClient.prototype.clearMe = function () {
            _super.prototype.clearMe.call(this);
            if (localStorage)
                localStorage.setItem(this.config.apiUrl, null);
        };
        return TabClient;
    }(Tab));
    var TabClientVue = {
        install: function (app, options) {
            app.config.globalProperties.$tab = new TabClient(options);
            app.config.globalProperties.$tabClient = TabClient;
        }
    };
    // // @ts-ignore
    // declare module "@vue/runtime-core" {
    //     interface ComponentCustomProperties {
    //         $tabClient: typeof TabClient;
    //         $tab: any;
    //     }
    // }

    exports.TabClient = TabClient;
    exports.TabClientVue = TabClientVue;

}));
