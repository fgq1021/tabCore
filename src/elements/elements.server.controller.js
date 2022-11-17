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
import tabServerController from "../core/tab.server.controller";
import Model from "./elements.server.model";
var elementsServerController = /** @class */ (function (_super) {
    __extends(elementsServerController, _super);
    function elementsServerController(config) {
        var _this = _super.call(this, config) || this;
        _this.className = "elements";
        _this.Model = Model;
        return _this;
    }
    return elementsServerController;
}(tabServerController));
export { elementsServerController };
