var __extends = (this && this.__extends) || (function () {
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
import * as mongoose from "mongoose";
import { types } from "./types/types.module";
import { users } from "./users/users.module";
import { elements } from "./elements/elements.module";
import { system } from "./system/system.module";
import { typesServerController } from "./types/types.server.controller";
import { usersServerController } from "./users/users.server.controller";
import { elementsServerController } from "./elements/elements.server.controller";
import { systemServerController } from "./system/system.server.controller";
import { Tab } from "./index";
import { defaultTypes } from "./system/system.default.units";
import systemServerType from "./system/system.server.type";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
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
                        this.configPath = join(this.rootPath, 'tab.config.json');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, readFile(this.configPath, 'utf-8')];
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
            var configJson, e_2, config;
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
                        e_2 = _a.sent();
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
                        return [4 /*yield*/, writeFile(this.configPath, JSON.stringify(systemConfigJson))];
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
                    case 6: return [4 /*yield*/, writeFile(this.configPath, JSON.stringify(info.config))];
                    case 7:
                        _c.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TabServer.prototype.connectMongo = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var mongoUri, mongoConfig, e_4;
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
                        return [4 /*yield*/, mongoose.connect(mongoUri)];
                    case 2:
                        _a.sent();
                        console.log("\u6570\u636E\u5E93: ".concat(mongoUri, " \u8FDE\u63A5\u6210\u529F"));
                        return [3 /*break*/, 5];
                    case 3:
                        e_4 = _a.sent();
                        console.log("\u6570\u636E\u5E93: ".concat(mongoUri, " \u8FDE\u63A5\u5931\u8D25\uFF0C\u5C1D\u8BD5\u91CD\u65B0\u8FDE\u63A5"));
                        return [4 /*yield*/, mongoose.disconnect()];
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
export { TabServer };
