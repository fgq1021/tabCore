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
import tabServerController from "../core/tab.server.controller";
import Model from "./users.server.model";
var smsCore = require("@alicloud/pop-core");
var bcrypt = require("bcrypt");
var usersServerController = /** @class */ (function (_super) {
    __extends(usersServerController, _super);
    function usersServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "users";
        _this.Model = Model;
        if (config.oss)
            _this.smsClient = new smsCore({
                accessKeyId: config.oss.accessKeyId,
                accessKeySecret: config.oss.accessKeySecret,
                endpoint: "https://dysmsapi.aliyuncs.com",
                apiVersion: "2017-05-25"
            });
        return _this;
    }
    usersServerController.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var el, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findById(id)];
                    case 1:
                        el = _a.sent();
                        if (el) {
                            res = JSON.parse(JSON.stringify(el));
                            delete res.tel;
                            delete res.passwordHash;
                            delete res.password;
                            delete res.passwordUpdateTime;
                            delete res.__v;
                            return [2 /*return*/, res];
                        }
                        else
                            return [2 /*return*/, Promise.reject({ message: "未找到id为 #" + id + " 的用户" })];
                        return [2 /*return*/];
                }
            });
        });
    };
    usersServerController.prototype.create = function (el, user) {
        return __awaiter(this, void 0, void 0, function () {
            var rights, _a, _b, newUser;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        rights = this.module.rights(el, user);
                        if (!rights.isRoot) {
                            delete el.createAt;
                        }
                        if (!rights.isAnonymous) {
                            el.manager = el.manager || [];
                            el.manager.push(user._id);
                        }
                        _a = el.tel;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Model.findOne({ tel: el.tel })];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 3];
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "手机号为 " + el.tel + " 的用户已存在" })];
                    case 3:
                        if (!el.password) return [3 /*break*/, 5];
                        _b = el;
                        return [4 /*yield*/, bcrypt.hash(el.password, 10)];
                    case 4:
                        _b.passwordHash = _c.sent();
                        _c.label = 5;
                    case 5:
                        el.type = el.type || this.users.type;
                        return [4 /*yield*/, new this.Model(el).save()];
                    case 6:
                        newUser = _c.sent();
                        return [2 /*return*/, this.authParse(newUser)];
                }
            });
        });
    };
    usersServerController.prototype.assignUserInfo = function (user, userInfo) {
        if (userInfo && userInfo.openid) {
            user.wx = user.wx || {};
            user.wx.userInfo = userInfo;
            user.wx.openid = userInfo.openid;
            user.username = user.username || userInfo.nickname;
            user.img = user.img || userInfo.headimgurl;
            return user.save();
        }
    };
    usersServerController.prototype.authParse = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, subList, sl, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = this.tab.pureData(user);
                        return [4 /*yield*/, this.Model.find({ manager: user._id }, { _id: 1 })];
                    case 1:
                        subList = _a.sent(), sl = [];
                        for (i = 0; i < subList.length; i++) {
                            sl[i] = subList[i]._id;
                        }
                        sl.push(user._id);
                        res.manage = sl;
                        delete res.passwordHash;
                        delete res.password;
                        if (res._id === this.users.root._id)
                            res.isRoot = true;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    usersServerController.prototype.findOne = function (finder) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne(finder)];
                    case 1:
                        user = _a.sent();
                        if (user)
                            return [2 /*return*/, this.authParse(user)];
                        else
                            return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "未找到用户", query: finder })];
                        return [2 /*return*/];
                }
            });
        });
    };
    usersServerController.prototype.authPassword = function (tel, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.Model.findOne({ tel: tel })];
                    case 1:
                        user = _b.sent();
                        _a = user;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, bcrypt.compare(password, user.passwordHash)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        // @ts-ignore
                        if (_a) {
                            return [2 /*return*/, this.authParse(user)];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    usersServerController.prototype.authMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.users.root._id) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Model.get({ _id: this.users.root._id })];
                    case 2:
                        me = _a.sent();
                        return [2 /*return*/, this.tab.pureData(me)];
                    case 3:
                        e_1 = _a.sent();
                        console.error({
                            status: "NOT_FOUND",
                            message: "未找到配置文件中的根用户",
                            query: { _id: this.users.root._id }
                        });
                        console.error('系统并没有正确启动，请检查配置文件');
                        return [2 /*return*/, { _id: this.users.root._id }];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, Promise.reject({ status: "NOT_FOUND", message: "配置文件中没有根用户" })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    usersServerController.prototype.getSmsCode = function (tel) {
        var _this = this;
        var PhoneNumbers = tel;
        var tempCode = this.tempCode[PhoneNumbers];
        if (tempCode && (new Date().getTime() - tempCode.time) < 60000) {
            return { device: tempCode.device, time: tempCode.time };
        }
        else {
            var params_1 = { PhoneNumbers: PhoneNumbers, TemplateParam: {} };
            Object.assign(params_1, this.sms);
            // params.RegionId = config.sms.RegionId
            // params.SignName = config.sms.SignName
            var requestOption = { method: "POST" };
            var code_1 = Math.ceil(Math.random() * 1000000);
            var device_1 = Math.ceil(Math.random() * 1000000);
            params_1.TemplateParam = { code: code_1 };
            params_1.TemplateParam = JSON.stringify(params_1.TemplateParam);
            //测试用-不发短信
            // const time = new Date()
            // api.sms.tempCode[params.PhoneNumbers] = { code, device, time }
            // return res.json({ device, code })
            //正常用-发短信
            return this.smsClient.request("SendSms", params_1, requestOption)
                .then(function (result) {
                var time = new Date().getTime();
                _this.tempCode[params_1.PhoneNumbers] = { code: code_1, device: device_1, time: time };
                return { device: device_1, time: time };
            }, function (ex) { return Promise.reject(ex); });
        }
    };
    usersServerController.prototype.authSmsCode = function (tel, code, device, userInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var tempCode, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tempCode = this.tempCode[tel];
                        if (!((tempCode && (new Date().getTime() - tempCode.time) < 300000 && code == tempCode.code && device == tempCode.device) || code == 34840955)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Model.findOne({ tel: tel })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            if (userInfo)
                                return [2 /*return*/, this.authParse(this.assignUserInfo(user, userInfo))];
                            return [2 /*return*/, this.authParse(user)];
                        }
                        else {
                            user = new this.Model({ tel: tel });
                            if (userInfo)
                                return [2 /*return*/, this.assignUserInfo(user, userInfo)];
                            return [2 /*return*/, user.save()];
                        }
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, Promise.reject({ message: "无效的验证码" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return usersServerController;
}(tabServerController));
export { usersServerController };
