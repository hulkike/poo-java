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
var psvita_1 = require("./psvita");
var PsvitaFat = /** @class */ (function (_super) {
    __extends(PsvitaFat, _super);
    function PsvitaFat(controles, conectorSonido, conectorVideo) {
        return _super.call(this, controles, conectorSonido, conectorVideo) || this;
    }
    return PsvitaFat;
}(psvita_1.Psvita));
exports.PsvitaFat = PsvitaFat;
