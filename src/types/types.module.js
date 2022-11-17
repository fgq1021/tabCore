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
var types = /** @class */ (function (_super) {
    __extends(types, _super);
    function types(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "types";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends(Type, _super);
            function Type(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "Type";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            Type.prototype.getType = function (user) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (this.type)
                            return [2 /*return*/, _super.prototype.getType.call(this, user)];
                        return [2 /*return*/, this.api().get(this._id, user)];
                    });
                });
            };
            Type.prototype.getStructure = function (key) {
                var place = this.api().parsePlaceString(key);
                if (place.key)
                    key = place.key;
                for (var i in this.dataStructure) {
                    if (this.dataStructure[i].name === key)
                        return this.dataStructure[i];
                }
                return false;
            };
            Type.prototype.getKey = function (key) {
                return this.getStructure(key);
            };
            return Type;
        }(tabUnit));
        return _this_1;
    }
    types.prototype.getKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getKeys()];
                    case 1:
                        _a.keys = _b.sent();
                        return [2 /*return*/, this.keys];
                }
            });
        });
    };
    types.prototype.listMy = function (finder, sort, limit, skip, user) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user) return [3 /*break*/, 2];
                        Object.assign(finder, { owner: user._id, type: undefined });
                        return [4 /*yield*/, this.api.list(finder, sort, limit, skip)];
                    case 1:
                        list = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.listMy(finder, sort, limit, skip)];
                    case 3:
                        list = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.assignList(list)];
                }
            });
        });
    };
    types.prototype.find = function (finder, sort, limit, skip, user) {
        if (finder === void 0) { finder = {}; }
        if (sort === void 0) { sort = {}; }
        if (limit === void 0) { limit = 50; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        finder["type"] = undefined;
                        _a = this.rightsOfList;
                        return [4 /*yield*/, this.api.list(finder, sort, limit, skip)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(), user])];
                }
            });
        });
    };
    return types;
}(tabModule));
export { types };
