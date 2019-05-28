import {Play2Slim} from "./play2.slim";
import {Wiiu} from "./wiiu";


let wiiu: Wiiu = new Wiiu(2, "RDA", "HDMI");
console.log(wiiu.controles);
console.log(wiiu.conectorSonido);
console.log(wiiu.conectorVideo);

let play2Slim: Play2Slim = new Play2Slim(2, "RDA", "RDA");
