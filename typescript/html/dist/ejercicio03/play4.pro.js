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
var play4_1 = require("./play4");
var Play4Pro = /** @class */ (function (_super) {
    __extends(Play4Pro, _super);
    function Play4Pro(controles, conectorSonido, conectorVideo) {
        return _super.call(this, controles, conectorSonido, conectorVideo) || this;
    }
    return Play4Pro;
}(play4_1.Play4));
exports.Play4Pro = Play4Pro;
