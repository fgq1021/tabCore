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
var Tab = /** @class */ (function () {
    function Tab(config) {
        this.me = {};
        this.token = "";
        this.manage = [];
        this.config = {
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
                host: "127.0.0.1",
                port: 27017,
                db: "TabOS"
            },
            users: {
                root: { _id: "" }
            }
        };
        this.moduleList = [];
        this.typeModules = {};
        this.eventFn = {};
        this.start(config);
    }
    Tab.prototype.start = function (config) {
        console.log("TabOS客户端初始化中");
        if (config) {
            var reactive = config["reactive"];
            delete config.reactive;
            this.reactive = this.reactive || reactive;
            if (this.reactive)
                this.config = this.reactive(this.config);
            Object.assign(this.config, config);
        }
        // console.log(this);
    };
    Tab.prototype.assignMe = function (me) {
        this.me = this.users.assign(me);
        this.token = me.token;
        this.manage = me.manage;
        return this.me;
    };
    Tab.prototype.clearMe = function () {
        this.me = {};
        this.token = null;
    };
    Tab.prototype.makeList = function (list, option) {
        for (var key in option) {
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
            value: function () {
                var res = { list: list };
                Object.assign(res, option);
                return res;
            }
        });
        Object.defineProperty(list, "getMore", {
            enumerable: false,
            value: function (num) {
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
    };
    Tab.prototype.pureData = function (d) {
        if (d)
            return JSON.parse(JSON.stringify(d));
        return d;
    };
    Tab.prototype.injectModule = function (m, c) {
        m = new m(this.config, c);
        this.moduleList.push(m.className);
        this[m.className] = m;
        this[m.className].putTab(this);
        this[m.className].api.putTab(this, this[m.className]);
    };
    Tab.prototype.importType = function (t) {
        if (t.types)
            for (var _i = 0, _a = t.types; _i < _a.length; _i++) {
                var tid = _a[_i];
                this.typeModules[tid] = t;
                for (var _b = 0, _c = this.moduleList; _b < _c.length; _b++) {
                    var m = _c[_b];
                    this[m].importType(tid);
                }
            }
    };
    Tab.prototype.parseUnit = function (u) {
        var unit = u.toLowerCase(), o = { unit: "", units: "", Units: "", Unit: "" };
        if (unit === "system") {
            return { unit: "system", units: "system", Units: "System", Unit: "System" };
        }
        if (unit.charAt(unit.length - 1) === "s") {
            o.units = unit;
            o.unit = unit.slice(0, unit.length - 1);
        }
        else {
            o.unit = unit;
            o.units = unit + "s";
        }
        o.Unit = o.unit.charAt(0).toUpperCase() + o.unit.slice(1, o.unit.length);
        o.Units = o.Unit + "s";
        return o;
    };
    Tab.prototype.parsePlaceString = function (s) {
        var _this = this, sType = typeof s;
        function unitParse(o) {
            var unitObj = _this.parseUnit(o.unit);
            Object.assign(o, unitObj);
            return o;
        }
        if (sType === "object")
            s = s[0];
        if (s) {
            var d = s.split(".");
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
            var a = s.split("-");
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
        }
        else
            return {};
    };
    Tab.prototype.get = function (placeString, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, units, id;
            return __generator(this, function (_b) {
                _a = this.parsePlaceString(placeString), units = _a.units, id = _a.id;
                if (units)
                    return [2 /*return*/, this[units].get(id, user)];
                else
                    return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "没有此地址", placeString: placeString })];
                return [2 /*return*/];
            });
        });
    };
    Tab.prototype.assign = function (el) {
        var units = this.parseUnit(el.className).units;
        return this[units].assign(el);
    };
    Tab.prototype.genSecret = function (passwordLength) {
        if (passwordLength === void 0) { passwordLength = 16; }
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        return password;
    };
    Tab.prototype.on = function (event, fn) {
        if (!this.eventFn[event])
            this.eventFn[event] = [];
        this.eventFn[event].push(fn);
    };
    Tab.prototype.runEventFn = function (event, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var list, _i, list_1, fn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = this.eventFn[event];
                        if (!list) return [3 /*break*/, 4];
                        _i = 0, list_1 = list;
                        _a.label = 1;
                    case 1:
                        if (!(_i < list_1.length)) return [3 /*break*/, 4];
                        fn = list_1[_i];
                        return [4 /*yield*/, fn(msg)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    return Tab;
}());
export { Tab };
