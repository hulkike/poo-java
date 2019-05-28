"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arbol = /** @class */ (function () {
    function Arbol() {
        // constructor
    }
    Object.defineProperty(Arbol.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arbol.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (value) {
            this._altura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arbol.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arbol.prototype, "diametro", {
        get: function () {
            return this._diametro;
        },
        set: function (value) {
            this._diametro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arbol.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Arbol;
}());
exports.Arbol = Arbol;
