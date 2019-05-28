"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pan = /** @class */ (function () {
    function Pan() {
        // constructor
    }
    Object.defineProperty(Pan.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pan.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (value) {
            this._precio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pan.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (value) {
            this._peso = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pan.prototype, "sabor", {
        get: function () {
            return this._sabor;
        },
        set: function (value) {
            this._sabor = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pan;
}());
exports.Pan = Pan;
