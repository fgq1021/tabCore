const userTypes = {
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

export const defaultTypes = {
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
      }]
  },
  user: userTypes,
  rootUser: {
    title: "管理员",
    dataStructure: [
      ...userTypes.dataStructure,
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
    ]
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
