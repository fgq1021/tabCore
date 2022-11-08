import * as mongoose from "mongoose";
import {types} from "./types/types.module";
import {users} from "./users/users.module";
import {elements} from "./elements/elements.module";
import {system} from "./system/system.module";
import {typesServerController} from "./types/types.server.controller";
import {usersServerController} from "./users/users.server.controller";
import {elementsServerController} from "./elements/elements.server.controller";
import {systemServerController} from "./system/system.server.controller";
import {Tab} from "./index";
import {defaultTypes} from "./system/system.default.units";
import systemServerType from "./system/system.server.type";
import {readFile, writeFile} from "fs/promises";
import {join} from "path";

export class TabServer extends Tab {
    public readonly isClient = false;
    public socket;
    public rootPath
    public configPath

    constructor(config: object) {
        super(config);
    }

    async start(config?) {
        super.start(await this.margeConfig(config));
        await this.connectMongo();
        this.injectModule(types, typesServerController);
        this.injectModule(users, usersServerController);
        this.injectModule(elements, elementsServerController);
        this.injectModule(system, systemServerController);
        await this.getConfig();
        await this.users.authMe();

        await this.runEventFn("start", "启动");
        return true;
    }

    async close() {
        await this.runEventFn("close", "停止");
        process.exit();
    }

    // clearMe() {
    //     super.clearMe();
    //     console.log('根用户初始化失败，请在清除根用户信息')
    // }

    async margeConfig(config = {}) {
        const c = {}
        if (process.env['TAB_CONFIG']) {
            this.rootPath = process.env['TAB_CONFIG']
            this.configPath = join(this.rootPath, 'tab.config.json')
            try {
                const envConfig = JSON.parse(await readFile(this.configPath, 'utf-8'))
                Object.assign(c, envConfig)
            } catch (e) {
                console.log(e)
            }
        }
        Object.assign(c, config)
        return c
    }

    async getConfig() {
        let configJson;
        if (this.config._id) {
            try {
                configJson = await this.makeConfig(this.config._id);
            } catch (e) {
                configJson = await this.initialization();
            }
        } else {
            configJson = await this.initialization();
        }
        Object.assign(this.config, configJson);
        const config = await this.system.get(
            this.config._id,
            this.config.users.root
        );
        systemServerType.types.push(config.type);
        this.importType(systemServerType);
        return true
    }

    async makeConfig(id) {
        const config = await this.system.get(id, this.config.users.root);
        return config.toJson({}, {});
    }

    async initialization() {
        console.warn("初始化");
        if (!this.configPath) {
            console.warn("初始化", "未监测到环境变量中的配置地址");
            console.warn("初始化", "请将配置目录写入", "process.env['TAB_CONFIG']");
            return Promise.reject()
        }

        console.warn("初始化", "数据库检测...");
        const users = await this.users.api.list();
        if (users.total) {
            console.warn("初始化", "数据库检测", "监测到用户数据", users.total, "组");
            await this.systemRepair();
        }

        console.warn("初始化", "创建管理员");
        const rootUser = await this.users.create({
            tel: 12345678900,
            password: "123"
        });
        this.config.users.root._id = rootUser._id;
        this.users.authMe();
        console.log(this.me);

        console.warn("初始化", "创建初始类型库");
        const typeLib = await rootUser.createChild(
            {title: "类型库"},
            "data.typeLib",
            "Type",
            "Object",
            this.me
        );

        const rootUserType = await this.createDefaultTypes(
            "rootUser",
            typeLib,
            "data.commonUse",
            {},
            true
        );

        rootUser.type = rootUserType._id;
        rootUser.save(this.me);
        typeLib.type = (await rootUserType.getChild("data.typeLib", this.me))._id;
        typeLib.save(this.me);

        console.warn("初始化", "创建配置文件>>>>>>>>>>>>>>>>>>>>");
        const systemConfig = await this.createUnitDeep(
            {},
            rootUser,
            "data.systemConfig"
        );
        const userConfig = await systemConfig.getChild("data.users", this.me);
        await userConfig.fixChild(rootUser, "data.root", "Object", this.me);
        systemConfig.data.secret = this.genSecret(32);
        await systemConfig.save(this.me);
        console.warn("初始化", "写入启动配置");
        const systemConfigJson = await systemConfig.toJson({}, this.me);
        console.warn(systemConfigJson);
        // console.warn(__dirname);
        console.warn("初始化", "写入位置：", this.configPath);
        await writeFile(this.configPath, JSON.stringify(systemConfigJson));
        return systemConfigJson;
    }

    async createDefaultTypes(
        typeName,
        parent,
        placeString,
        createdTypes = {},
        array?
    ) {
        const type = defaultTypes[typeName];
        const typeUnit = await parent.createChild(
            type,
            placeString,
            "Type",
            array ? "Array" : "Object",
            this.me
        );
        createdTypes[typeName] = typeUnit;
        for (const i in type.dataStructure) {
            const key = type.dataStructure[i];
            if (key.settings.unitType) {
                const createdType = createdTypes[key.settings.unitType];
                if (createdType)
                    await typeUnit.fixChild(
                        createdType,
                        "data." + key.name,
                        "Object",
                        this.me
                    );
                else
                    await this.createDefaultTypes(
                        key.settings.unitType,
                        typeUnit,
                        "data." + key.name,
                        createdTypes
                    );
            }
        }
        return typeUnit;
    }

    async createUnitDeep(el, parent, placeString) {
        // @ts-ignore
        console.warn(parent.title, parent._id, this.me._id);
        const unit = await parent.createChild({}, placeString, null, null, this.me),
            type = await unit.getType(this.me);
        for (const i in type.dataStructure) {
            const key = type.dataStructure[i];
            if (key.dataType === "Object") {
                try {
                    const subPlaceString = "data." + key.name,
                        subType = await type.getChild(subPlaceString, this.me);
                    if (key.settings.unit === "types") {
                        await unit.fixChild(subType, subPlaceString, "Object", this.me);
                    } else
                        await this.createUnitDeep(
                            {type: subType._id},
                            unit,
                            subPlaceString
                        );
                } catch (e) {
                    console.log(e);
                }
            }
        }
        return unit;
    }

    async systemRepair() {
        console.warn("开始系统修复");
        await this.users.api.Model.deleteOne({tel: 12345678900});
        return true
    }

    async resetDatabase() {
        console.warn("清空数据库");
        await this.users.api.Model.deleteMany({});
        await this.types.api.Model.deleteMany({});
        await this.system.api.Model.deleteMany({});
        await this.elements.api.Model.deleteMany({});
    }

    async backupDatabase() {
        const backups = {}
        for (let model of this.moduleList) {
            backups[model] = await this[model].api.Model.find({})
        }
        return backups
    }

    async restoreDatabase(info, collections, cover = true) {
        if (!this.rootPath)
            return Promise.reject()
        for (let cn in collections) {
            const collectionBackup = collections[cn], collection = this[cn].api.Model
            if (cover)
                await collection.deleteMany({})
            await collection.insertMany(collectionBackup)
        }
        await writeFile(this.configPath, JSON.stringify(info.config));
        return true
    }

    async connectMongo(config?: object) {
        console.log("数据库连接开始");
        if (config) Object.assign(this.config.mongo, config);

        let mongoUri = "",
            mongoConfig = this.config.mongo;
        if (mongoConfig.username) {
            mongoUri = `mongodb://${mongoConfig.username}:${mongoConfig.pass}@${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}?authSource=${mongoConfig.user}`;
        } else {
            mongoUri = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`;
        }

        try {
            console.log(`数据库: ${mongoUri} 连接中`);
            await mongoose.connect(mongoUri)
            console.log(`数据库: ${mongoUri} 连接成功`);
        } catch (e) {
            console.log(`数据库: ${mongoUri} 连接失败，尝试重新连接`);
            await mongoose.disconnect()
            return new Promise((resolve, reject) => {
                setTimeout(async () => {
                    await this.connectMongo(config)
                    resolve(true)
                }, 2000)
            })
        }
        return true
    }

    putSocket(socket) {
        this.socket = socket;
    }
}
