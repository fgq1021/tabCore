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
import { tabUnit, tabModule } from "../core/tab.module";
var users = /** @class */ (function (_super) {
    __extends(users, _super);
    function users(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "users";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends(User, _super);
            function User(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "User";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            return User;
        }(tabUnit));
        return _this_1;
    }
    users.prototype.create = function (el, user) {
        return __awaiter(this, void 0, void 0, function () {
            var parents, pushParents, _a, _b, _i, i, id, pel, _c, _d, _e, i, pel, newEl, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        parents = [], pushParents = [];
                        _a = [];
                        for (_b in el.parents)
                            _a.push(_b);
                        _i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        id = this.tab.parsePlaceString(el.parents[i]).id;
                        return [4 /*yield*/, this.get(id)];
                    case 2:
                        pel = _g.sent();
                        if (pel)
                            parents.push(el.parents[i]);
                        _g.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        el.parents = parents;
                        _c = [];
                        for (_d in el.pushParents)
                            _c.push(_d);
                        _e = 0;
                        _g.label = 5;
                    case 5:
                        if (!(_e < _c.length)) return [3 /*break*/, 8];
                        i = _c[_e];
                        return [4 /*yield*/, this.tab.get(el.pushParents[i])];
                    case 6:
                        pel = _g.sent();
                        if (this.rights(pel, user).write())
                            pushParents.push(el.pushParents[i]);
                        _g.label = 7;
                    case 7:
                        _e++;
                        return [3 /*break*/, 5];
                    case 8:
                        el.pushParents = pushParents;
                        _f = this.assign;
                        return [4 /*yield*/, this.api.create(el, user)];
                    case 9:
                        newEl = _f.apply(this, [_g.sent()]);
                        // if (newEl.created)
                        newEl.created();
                        return [2 /*return*/, newEl];
                }
            });
        });
    };
    users.prototype.authPassword = function (tel, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.authPassword(tel, password)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    users.prototype.getSmsCode = function (tel) {
        return this.api.getSmsCode(tel);
    };
    users.prototype.authSmsCode = function (tel, code, device, userInfo) {
        return this.api.authSmsCode(tel, code, device, userInfo);
    };
    users.prototype.authMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 5]);
                        return [4 /*yield*/, this.api.authMe()];
                    case 1:
                        me = _a.sent();
                        return [2 /*return*/, this.tab.assignMe(me)];
                    case 2:
                        e_1 = _a.sent();
                        if (!(e_1.status === "NOT_FOUND" || e_1.statusCode === 401)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.tab.clearMe()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, Promise.reject(e_1)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.getAuth = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.findOne({ _id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return users;
}(tabModule));
export { users };
