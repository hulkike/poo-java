"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var play2_slim_1 = require("./play2.slim");
var wiiu_1 = require("./wiiu");
var wiiu = new wiiu_1.Wiiu(2, "RDA", "HDMI");
console.log(wiiu.controles);
console.log(wiiu.conectorSonido);
console.log(wiiu.conectorVideo);
var play2Slim = new play2_slim_1.Play2Slim(2, "RDA", "RDA");
