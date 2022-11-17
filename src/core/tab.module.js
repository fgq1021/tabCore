// import { reactive } from "vue";
// import { indexOf } from "lodash";
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
// import { Type } from "class-transformer";
export var defaultTypeModule = {
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
            var parentType, structure, key, type, _a, e_1, Unit;
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
                        e_1 = _b.sent();
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
                        _a.label = 3;
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
            var data, type, _a, _b, _i, i, s, _c, _d, e_2;
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
                        e_2 = _e.sent();
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
export { tabUnit };
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
                        return [2 /*return*/];
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
                    var accessControl = el.accessControl || {}, owner = el.owner;
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
                return [2 /*return*/];
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
export { tabModule };
