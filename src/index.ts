export class Tab {
  public me = {};
  public token = "";
  public manage = [];
  public system;
  public users;
  public types;
  public elements;
  public reactive;
  public config = {
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
      host: "localhost",
      port: 27017,
      db: "TabOS"
    },
    users: {
      root: { _id: "" }
    }
  };
  public moduleList = [];
  public typeModules = {};

  constructor(config?) {
    this.start(config);
  }

  start(config?) {
    console.log("TabOS客户端初始化中");
    if (config) {
      const reactive = config["reactive"];
      delete config.reactive;
      this.reactive = this.reactive || reactive;
      if (this.reactive)
        this.config = this.reactive(this.config);
      Object.assign(this.config, config);
    }
    console.log(this);
  }

  assignMe(me) {
    this.me = this.users.assign(me);
    this.token = me.token;
    this.manage = me.manage;
    return this.me;
  }

  clearMe() {
    this.me = {};
    this.token = null;
  }

  makeList(list, option) {
    for (let key in option) {
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
      value() {
        const res = { list };
        Object.assign(res, option);
        return res;
      }
    });
    Object.defineProperty(list, "getMore", {
      enumerable: false,
      value(num) {
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
  }

  pureData(d) {
    if (d)
      return JSON.parse(JSON.stringify(d));
    return d;
  }

  injectModule(m, c) {
    m = new m(this.config, c);
    this.moduleList.push(m.className);
    this[m.className] = m;
    this[m.className].putTab(this);
    this[m.className].api.putTab(this, this[m.className]);
  }

  importType(t) {
    if (t.types)
      for (let tid of t.types) {
        this.typeModules[tid] = t;
        for (let m of this.moduleList) {
          this[m].importType(tid);
        }
      }
  }

  parseUnit(u: string) {
    const unit = u.toLowerCase(), o = { unit: "", units: "", Units: "", Unit: "" };
    if (unit === "system") {
      return { unit: "system", units: "system", Units: "System", Unit: "System" };
    }
    if (unit.charAt(unit.length - 1) === "s") {
      o.units = unit;
      o.unit = unit.slice(0, unit.length - 1);
    } else {
      o.unit = unit;
      o.units = unit + "s";
    }
    o.Unit = o.unit.charAt(0).toUpperCase() + o.unit.slice(1, o.unit.length);
    o.Units = o.Unit + "s";
    return o;
  }

  parsePlaceString(s: string) {
    const _this = this, sType = typeof s;

    function unitParse(o) {
      const unitObj = _this.parseUnit(o.unit);
      Object.assign(o, unitObj);
      return o;
    }

    if (sType === "object")
      s = s[0];

    if (s) {
      const d = s.split(".");
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
      const a = s.split("-");
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
    } else return {};
  }

  async get(placeString, user?) {
    const { units, id } = this.parsePlaceString(placeString);
    if (units)
      return this[units].get(id, user);
    else
      return Promise.reject({ status: "NOT_FOUND", message: "没有此地址", placeString });
  }

  assign(el) {
    const { units } = this.parseUnit(el.className);
    return this[units].assign(el);
  }

  genSecret(passwordLength = 16) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }

  private eventFn = {};

  on(event, fn) {
    if (!this.eventFn[event])
      this.eventFn[event] = [];
    this.eventFn[event].push(fn);
  }

  async runEventFn(event, msg) {
    const list = this.eventFn[event];
    if (list)
      for (let fn of list) {
        await fn(msg);
      }
    return true;
  }
}


