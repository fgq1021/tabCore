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
import Model from "./system.server.model";
import { join, dirname } from "path";
import * as fs from "fs/promises";
import * as SparkMD5 from "spark-md5";
var systemServerController = /** @class */ (function (_super) {
    __extends(systemServerController, _super);
    function systemServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "system";
        _this.Model = Model;
        return _this;
    }
    systemServerController.prototype.upload = function (file, id, place, key, p, user) {
        return __awaiter(this, void 0, void 0, function () {
            var el, rights, filename, index, suffix, md5, storeAs, url, spark, storePath, data, parentPath, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.module.get(id, user)];
                    case 1:
                        el = _a.sent(), rights = this.module.rights(el, user);
                        if (!rights.write()) return [3 /*break*/, 8];
                        filename = file.originalname, index = filename.lastIndexOf("."), suffix = filename.substring(index + 1, filename.length);
                        md5 = void 0, storeAs = "/", url = void 0;
                        if (index !== 32) {
                            spark = new SparkMD5.ArrayBuffer();
                            spark.append(file.buffer);
                            md5 = spark.end();
                            storeAs += md5 + "." + suffix;
                        }
                        else {
                            storeAs += filename;
                        }
                        storePath = join(this.tab.rootPath, "/local".concat(storeAs)), data = new Uint8Array(file.buffer);
                        parentPath = dirname(storePath);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, fs.access(parentPath)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, fs.mkdir(parentPath, { recursive: true })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [4 /*yield*/, fs.writeFile(storePath, data)];
                    case 7:
                        _a.sent();
                        url = "/local".concat(storeAs);
                        if (url) {
                            if (place || key) {
                                el[place][key] = url;
                                return [2 /*return*/, el.save(user)];
                            }
                            return [2 /*return*/, url];
                        }
                        return [2 /*return*/, Promise.reject({ status: "FORBIDDEN", message: "无法存储该文件，请检查服务器设置" })];
                    case 8: return [2 /*return*/, Promise.reject({
                            status: "FORBIDDEN",
                            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
                        })];
                }
            });
        });
    };
    systemServerController.prototype.getFile = function (url) {
        return fs.readFile(join(this.tab.rootPath, url), 'utf-8');
    };
    return systemServerController;
}(tabServerController));
export { systemServerController };
