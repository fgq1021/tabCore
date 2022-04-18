import * as mongoose from "mongoose";
import {types} from "./types/types.module";
import {users} from "./users/users.module";
import {elements} from "./elements/elements.module";
import {typesServerController} from "./types/types.server.controller";
import {usersServerController} from "./users/users.server.controller";
import {elementsServerController} from "./elements/elements.server.controller";
import {Tab} from "./index";
import {reactive} from "@vue/reactivity";


export class TabServer extends Tab {
    public readonly isClient = false;
    public socket;

    constructor(config: object) {
        super(config);
    }

    async start() {
        await this.connectMongo();
        this.injectModule(types, typesServerController);
        this.injectModule(users, usersServerController);
        this.injectModule(elements, elementsServerController);
        this.users.authMe();
        return true;
    }

    // injectModule(m, c) {
    //   this[m.className.toLowerCase()] = new m(this.config, c);
    //   this[m.className.toLowerCase()].putTab(this);
    // }

    assignMe(me) {
        this.me = reactive(new this.users.unit(me));
        this.token = me.token;
        this.manage = me.manage;
        return this.me;
    }


    connectMongo(config?: object) {
        if (config)
            Object.assign(this.config.mongo, config);

        let mongoUri = "", mongoConfig = this.config.mongo;
        if (mongoConfig.username) {
            mongoUri = `mongodb://${mongoConfig.username}:${mongoConfig.pass}@${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}?authSource=${mongoConfig.user}`;
        } else {
            mongoUri = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`;
        }
        return new Promise((resolve, reject) => {
            function connect() {
                console.log(`数据库: ${mongoUri} 连接中`);
                mongoose.connect(mongoUri)
                    .then(() => {
                        console.log(`数据库: ${mongoUri} 连接成功`);
                        resolve(1);
                    })
                    .catch(err => {
                        console.error(`数据库: ${mongoUri} 无法连接`);
                        mongoose.disconnect()
                            .then(() => {
                                console.warn(`数据库: ${mongoUri} 重新连接中`);
                                setTimeout(() => {
                                    connect();
                                }, 5000);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    });
            }

            connect();
        });
    }

    putSocket(socket) {
        this.socket = socket;
    }
}


