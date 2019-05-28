"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Consola = /** @class */ (function () {
    function Consola(controles, conectorSonido, conectorVideo) {
        this._controles = controles;
        this._conectorSonido = conectorSonido;
        this._conectorVideo = conectorVideo;
    }
    Object.defineProperty(Consola.prototype, "controles", {
        get: function () {
            return this._controles;
        },
        set: function (value) {
            this._controles = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consola.prototype, "conectorSonido", {
        get: function () {
            return this._conectorSonido;
        },
        set: function (value) {
            this._conectorSonido = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consola.prototype, "conectorVideo", {
        get: function () {
            return this._conectorVideo;
        },
        set: function (value) {
            this._conectorVideo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Consola;
}());
exports.Consola = Consola;
