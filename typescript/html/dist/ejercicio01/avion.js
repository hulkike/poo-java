"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Avion = /** @class */ (function () {
    function Avion() {
        // constructor
    }
    Object.defineProperty(Avion.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avion.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (value) {
            this._precio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avion.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avion.prototype, "turbinas", {
        get: function () {
            return this._turbinas;
        },
        set: function (value) {
            this._turbinas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avion.prototype, "capacidad", {
        get: function () {
            return this._capacidad;
        },
        set: function (value) {
            this._capacidad = value;
        },
        enumerable: true,
        configurable: true
    });
    return Avion;
}());
exports.Avion = Avion;
