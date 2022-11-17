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
import { types } from "./types/types.module";
import { users } from "./users/users.module";
import { elements } from "./elements/elements.module";
import { typesClientController } from "./types/types.client.controller";
import { usersClientController } from "./users/users.client.controller";
import { elementsClientController } from "./elements/elements.client.controller";
import { Tab } from "./index";
import { axios } from "taro-axios";
var io = require("weapp.socket.io");
var TabWXClient = /** @class */ (function (_super) {
    __extends(TabWXClient, _super);
    function TabWXClient(config) {
        var _this = _super.call(this, config) || this;
        _this.isClient = true;
        _this.req = axios;
        _this.client = {
            isWX: true,
            isAli: false,
            isPC: false
        };
        _this.socket = io(_this.config.apiUrl.replace("/api", ""));
        _this.start();
        return _this;
    }
    TabWXClient.prototype.start = function () {
        if (this.config.apiUrl) { // @ts-ignore
            this.token = wx.getStorageSync(this.config.apiUrl);
        }
        this.injectModule(types, typesClientController);
        this.injectModule(users, usersClientController);
        this.injectModule(elements, elementsClientController);
        if (this.token)
            this.users.authMe();
        this.makeSocketEvents();
    };
    TabWXClient.prototype.assignMe = function (me) {
        this.me = this.users.assign(me);
        this.token = me.token;
        this.manage = me.manage;
        // @ts-ignore
        wx.setStorageSync(this.config.apiUrl, me.token);
        return this.me;
    };
    TabWXClient.prototype.makeSocketEvents = function () {
        var _this = this;
        this.socket.on("disconnect", function (reason) {
            console.log("连接已断开:", reason);
            _this.runEventFn("disconnect", "连接已断开");
            console.log("连接重启中:正在尝试重新连接服务器");
        });
        this.socket.io.on("reconnect", function () {
            console.log("连接重启中:服务器已连接");
            console.log("连接重启中:数据更新正在恢复");
            for (var _i = 0, _a = _this.moduleList; _i < _a.length; _i++) {
                var unit = _a[_i];
                _this[unit].api.hotReloadRestart();
            }
            console.log("连接已重启");
            _this.runEventFn("reconnect", "连接已重启");
        });
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
    return TabWXClient;
}(Tab));
export { TabWXClient };
export var TabWxVue = {
    install: function (app, options) {
        app.config.globalProperties.$tab = new TabWXClient(options);
        app.config.globalProperties.$tabClient = TabWXClient;
    }
};
