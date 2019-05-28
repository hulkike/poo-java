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
var animal_1 = require("./animal");
var Vertebrados = /** @class */ (function (_super) {
    __extends(Vertebrados, _super);
    function Vertebrados() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vertebrados.prototype.respirar = function () {
        console.log("respiro con pulmones");
    };
    return Vertebrados;
}(animal_1.Animal));
exports.Vertebrados = Vertebrados;
