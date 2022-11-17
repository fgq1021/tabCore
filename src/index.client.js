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
import { types } from "./types/types.module";
import { users } from "./users/users.module";
import { elements } from "./elements/elements.module";
import { system } from "./system/system.module";
import { typesClientController } from "./types/types.client.controller";
import { usersClientController } from "./users/users.client.controller";
import { elementsClientController } from "./elements/elements.client.controller";
import { systemClientController } from "./system/system.client.controller";
import { Tab } from "./index";
import { io } from "socket.io-client";
import Bowser from "bowser";
import axios from "axios";
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
                        this.socket = io(this.config.apiUrl.replace("/api", ""));
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
            var _i, _a, unit, e_1;
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
                        e_1 = _b.sent();
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
export { TabClient };
export var TabClientVue = {
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
