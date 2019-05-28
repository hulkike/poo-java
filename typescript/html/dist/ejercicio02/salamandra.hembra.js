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
var salamandra_1 = require("./salamandra");
var SalamandraHembra = /** @class */ (function (_super) {
    __extends(SalamandraHembra, _super);
    function SalamandraHembra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalamandraHembra.prototype.criar = function () {
        console.log("cuida lo huevos y mis hijitos");
    };
    return SalamandraHembra;
}(salamandra_1.Salamandra));
exports.SalamandraHembra = SalamandraHembra;
