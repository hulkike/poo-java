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
var vertebrados_1 = require("./vertebrados");
var Anfibio = /** @class */ (function (_super) {
    __extends(Anfibio, _super);
    function Anfibio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anfibio.prototype.comer = function () {
        console.log("soy carnívoro");
    };
    Anfibio.prototype.desplazarse = function () {
        console.log("nado, camino");
    };
    Anfibio.prototype.reproducirse = function () {
        console.log("de forma sexual");
    };
    Anfibio.prototype.nacer = function () {
        console.log("ovíparo");
    };
    return Anfibio;
}(vertebrados_1.Vertebrados));
exports.Anfibio = Anfibio;
