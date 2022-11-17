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
var elements = /** @class */ (function (_super) {
    __extends(elements, _super);
    function elements(config, controller) {
        var _this_1 = _super.call(this, config, controller) || this;
        _this_1.className = "elements";
        var _this = _this_1;
        _this_1.unit = /** @class */ (function (_super) {
            __extends(Element, _super);
            function Element(el) {
                var _this_1 = _super.call(this, el) || this;
                _this_1.className = "Element";
                _this_1.api = function () {
                    return _this;
                };
                _this_1.$init();
                return _this_1;
            }
            return Element;
        }(tabUnit));
        return _this_1;
    }
    //从TabOS2进行数据格式升级，升级时需要前往element.service.ts，将 parents: [String] 改为 parents: []
    elements.prototype.updateFromTabOS2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            function pureData(d) {
                return JSON.parse(JSON.stringify(d));
            }
            function updateEl(el) {
                var parents = pureData(el.parents), childrenElement = pureData(el.children).Element, children = {};
                for (var i in parents) {
                    var p = parents[i];
                    parents[i] = p.el + "." + p.place + "." + p.key;
                }
                for (var i in childrenElement) {
                    var c = childrenElement[i];
                    if (c.list && c.list.length) {
                        for (var i_1 in c.list) {
                            c.list[i_1] = "element-" + c.list[i_1];
                        }
                        children[c.place + "." + c.key] = c.list;
                    }
                    if (c.el)
                        children[c.place + "." + c.key] = "element-" + c.el;
                }
                console.log(parents, children);
                delete el.goodsInfo;
                delete el.manager;
                delete el.subIndex;
                el.parents = parents;
                el.children = children;
                return el;
            }
            var els, _i, els_1, el, _el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("开始从TabOS2进行升级");
                        return [4 /*yield*/, this.api.Model.find({})];
                    case 1:
                        els = _a.sent();
                        console.log(els.length);
                        _i = 0, els_1 = els;
                        _a.label = 2;
                    case 2:
                        if (!(_i < els_1.length)) return [3 /*break*/, 5];
                        el = els_1[_i];
                        console.log(el.title);
                        _el = updateEl(el);
                        return [4 /*yield*/, _el.save()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    elements.prototype.updateBtoDot = function () {
        return __awaiter(this, void 0, void 0, function () {
            function pureData(d) {
                return JSON.parse(JSON.stringify(d));
            }
            function updateEl(el) {
                var parents = pureData(el.parents);
                for (var i in parents) {
                    parents[i] = parents[i].replace(/-/g, ".");
                }
                el.parents = parents;
                return el;
            }
            var els, _i, els_2, el, _el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("开始将-更新为.");
                        return [4 /*yield*/, this.api.Model.find({})];
                    case 1:
                        els = _a.sent();
                        console.log(els.length);
                        _i = 0, els_2 = els;
                        _a.label = 2;
                    case 2:
                        if (!(_i < els_2.length)) return [3 /*break*/, 5];
                        el = els_2[_i];
                        console.log(el.title);
                        _el = updateEl(el);
                        console.log(_el);
                        return [4 /*yield*/, _el.save()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return elements;
}(tabModule));
export { elements };
