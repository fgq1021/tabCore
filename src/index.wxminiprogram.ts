import {types} from "./types/types.module";
import {users} from "./users/users.module";
import {elements} from "./elements/elements.module";
import {typesClientController} from "./types/types.client.controller";
import {usersClientController} from "./users/users.client.controller";
import {elementsClientController} from "./elements/elements.client.controller";
import {Tab} from "./index";
import {axios} from "taro-axios";

const io = require('weapp.socket.io')


export class TabWXClient extends Tab {
    public isClient = true;
    public req = axios
    public token;
    public client = {
        isWX: true,
        isAli: false,
        isPC: false
    };
    public socket = io(this.config.apiUrl.replace('/api', ''));

    constructor(config?: object) {
        super(config);
        this.start();
    }

    start() {
        if (this.config.apiUrl) { // @ts-ignore
            this.token = wx.getStorageSync(this.config.apiUrl);
        }

        this.injectModule(types, typesClientController);
        this.injectModule(users, usersClientController);
        this.injectModule(elements, elementsClientController);

        if (this.token)
            this.users.authMe();

        this.makeSocketEvents();
    }

    assignMe(me) {
        this.me = this.users.assign(me);
        this.token = me.token;
        this.manage = me.manage;
        // @ts-ignore
        wx.setStorageSync(this.config.apiUrl, me.token);
        return this.me;
    }

    makeSocketEvents() {
        this.socket.on("disconnect", (reason) => {
            console.log("连接已断开:", reason);
            this.runEventFn("disconnect", "连接已断开");
            console.log("连接重启中:正在尝试重新连接服务器");
        });
        this.socket.io.on("reconnect", () => {
            console.log("连接重启中:服务器已连接");
            console.log("连接重启中:数据更新正在恢复");
            for (let unit of this.moduleList) {
                this[unit].api.hotReloadRestart();
            }
            console.log("连接已重启");
            this.runEventFn("reconnect", "连接已重启");
        });
        this.socket.on("update", ({ id, type, changeId }) => {
            const p = this.parsePlaceString(id);
            if (p.key) {
                // console.log("收到" + p.Unit + "Children更新：", id);
                this[p.units].api.childrenRefresh(p.id + "." + p.place + "." + p.key, type, changeId);
            } else {
                // console.log("收到" + p.Unit + "更新：", id);
                this[p.units].refresh(p.id);
            }
        });
        this.socket.on("delete", ({ id }) => {
            console.log("收到元素删除：", id);
            const p = this.parsePlaceString(id);
            this[p.units].afterDelete(p.id);
        });
    }

    private eventFn = {};

    on(event, fn) {
        if (!this.eventFn[event])
            this.eventFn[event] = [];
        this.eventFn[event].push(fn);
    }

    runEventFn(event, msg) {
        const list = this.eventFn[event];
        if (list)
            for (let fn of list) {
                fn(msg);
            }
    }
}

// @ts-ignore
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $tabClient: typeof TabWXClient;
        $tab: any;
    }
}


export const TabWxVue = {
    install: (app, options) => {
        app.config.globalProperties.$tab = new TabWXClient(options);
        app.config.globalProperties.$tabClient = TabWXClient;
    }
};


