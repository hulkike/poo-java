"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var anfibio_1 = require("./anfibio");
var Salamandra = /** @class */ (function (_super) {
    __extends(Salamandra, _super);
    function Salamandra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Salamandra;
}(anfibio_1.Anfibio));
exports.Salamandra = Salamandra;
