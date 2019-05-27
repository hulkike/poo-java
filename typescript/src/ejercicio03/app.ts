import {Wiiu} from "./wiiu";

let wiiu: Wiiu = new Wiiu(2, "RDA", "HDMI");
console.log(wiiu.controles);
console.log(wiiu.conectorSonido);
console.log(wiiu.conectorVideo);
