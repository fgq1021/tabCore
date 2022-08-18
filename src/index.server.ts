import * as mongoose from 'mongoose';
import { types } from './types/types.module';
import { users } from './users/users.module';
import { elements } from './elements/elements.module';
import { system } from './system/system.module';
import { typesServerController } from './types/types.server.controller';
import { usersServerController } from './users/users.server.controller';
import { elementsServerController } from './elements/elements.server.controller';
import { systemServerController } from './system/system.server.controller';
import { Tab } from './index';
import { defaultTypes } from './system/system.default.units';
import systemServerType from './system/system.server.type';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export class TabServer extends Tab {
  public readonly isClient = false;
  public socket;

  constructor(config: object) {
    super(config);
  }

  async start(config?) {
    if (config) super.start(config);
    await this.connectMongo();
    this.injectModule(types, typesServerController);
    this.injectModule(users, usersServerController);
    this.injectModule(elements, elementsServerController);
    this.injectModule(system, systemServerController);
    await this.getConfig();
    this.users.authMe();

    await this.runEventFn('start', '启动');
    return true;
  }

  async close() {
    await this.runEventFn('close', '停止');
    process.exit();
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
      this.config.users.root,
    );
    systemServerType.types.push(config.type);
    this.importType(systemServerType);
  }

  async makeConfig(id) {
    const config = await this.system.get(id, this.config.users.root);
    return config.toJson({}, {});
  }

  async initialization() {
    console.warn('初始化');
    console.warn('初始化', '数据库检测...');
    const users = await this.users.api.list();
    if (users.total) {
      console.warn('初始化', '数据库检测', '监测到用户数据', users.total, '组');
      await this.systemRepair();
    }

    console.warn('初始化', '创建管理员');
    const rootUser = await this.users.create({
      tel: 12345678900,
      password: '123',
    });
    this.config.users.root._id = rootUser._id;
    this.users.authMe();
    console.log(this.me);

    console.warn('初始化', '创建初始类型库');
    const typeLib = await rootUser.createChild(
      { title: '类型库' },
      'data.typeLib',
      'Type',
      'Object',
      this.me,
    );

    const rootUserType = await this.createDefaultTypes(
      'rootUser',
      typeLib,
      'data.commonUse',
      {},
      true,
    );

    rootUser.type = rootUserType._id;
    rootUser.save(this.me);
    typeLib.type = (await rootUserType.getChild('data.typeLib', this.me))._id;
    typeLib.save(this.me);

    console.warn('初始化', '创建配置文件>>>>>>>>>>>>>>>>>>>>');
    const systemConfig = await this.createUnitDeep(
      {},
      rootUser,
      'data.systemConfig',
    );
    const userConfig = await systemConfig.getChild('data.users', this.me);
    await userConfig.fixChild(rootUser, 'data.root', 'Object', this.me);
    systemConfig.data.secret = this.genSecret(32);
    await systemConfig.save(this.me);
    console.warn('初始化', '写入启动配置');
    const systemConfigJson = await systemConfig.toJson({}, this.me);
    console.warn(systemConfigJson);
    console.warn(__dirname);
    console.warn(
      '初始化',
      '写入位置：',
      join(__dirname, '../tab.config.json'),
    );
    await writeFile(
      join(__dirname, '../tab.config.json'),
      JSON.stringify(systemConfigJson),
    );
    return systemConfigJson;
  }

  async createDefaultTypes(
    typeName,
    parent,
    placeString,
    createdTypes = {},
    array?,
  ) {
    const type = defaultTypes[typeName];
    const typeUnit = await parent.createChild(
      type,
      placeString,
      'Type',
      array ? 'Array' : 'Object',
      this.me,
    );
    createdTypes[typeName] = typeUnit;
    for (const i in type.dataStructure) {
      const key = type.dataStructure[i];
      if (key.settings.unitType) {
        const createdType = createdTypes[key.settings.unitType];
        if (createdType)
          await typeUnit.fixChild(
            createdType,
            'data.' + key.name,
            'Object',
            this.me,
          );
        else
          await this.createDefaultTypes(
            key.settings.unitType,
            typeUnit,
            'data.' + key.name,
            createdTypes,
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
      if (key.dataType === 'Object') {
        try {
          const subPlaceString = 'data.' + key.name,
            subType = await type.getChild(subPlaceString, this.me);
          if (key.settings.unit === 'types') {
            await unit.fixChild(subType, subPlaceString, 'Object', this.me);
          } else
            await this.createUnitDeep(
              { type: subType._id },
              unit,
              subPlaceString,
            );
        } catch (e) {
          console.log(e);
        }
      }
    }
    return unit;
  }

  async systemRepair() {
    console.warn('开始系统修复');
    return this.resetDatabase();
  }

  async resetDatabase() {
    console.warn('清空数据库');
    await this.users.api.Model.deleteMany({});
    await this.types.api.Model.deleteMany({});
    await this.system.api.Model.deleteMany({});
    await this.elements.api.Model.deleteMany({});
  }

  connectMongo(config?: object) {
    console.log('connectMongo');
    if (config) Object.assign(this.config.mongo, config);

    let mongoUri = '',
      mongoConfig = this.config.mongo;
    if (mongoConfig.username) {
      mongoUri = `mongodb://${mongoConfig.username}:${mongoConfig.pass}@${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}?authSource=${mongoConfig.user}`;
    } else {
      mongoUri = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`;
    }
    return new Promise((resolve, reject) => {
      function connect() {
        console.log(`数据库: ${mongoUri} 连接中`);
        mongoose
          .connect(mongoUri)
          .then(() => {
            console.log(`数据库: ${mongoUri} 连接成功`);
            resolve(1);
          })
          .catch((err) => {
            console.error(`数据库: ${mongoUri} 无法连接`);
            mongoose
              .disconnect()
              .then(() => {
                console.warn(`数据库: ${mongoUri} 重新连接中`);
                setTimeout(() => {
                  connect();
                }, 5000);
              })
              .catch((err) => {
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
