import {Apple} from "./apple";
import {Celular} from "./celular";
import {GalaxyS6} from "./galaxy.s6";
import {GalaxyS7} from "./galaxy.s7";
import {Iphone6} from "./iphone6";
import {Iphone7} from "./iphone7";
import {Samsung} from "./samsung";

let galaxyS6: GalaxyS6 = new GalaxyS6();
let samsung: Samsung = galaxyS6;
let celular: Celular = samsung;
let samsung1: Samsung = celular as Samsung;
let galaxyS61: GalaxyS6 = samsung1 as GalaxyS6;

let galaxyS7: GalaxyS7 = new GalaxyS7();
let samsung2: Samsung = galaxyS7;
let celular1: Celular = samsung2;
let samsung3: Samsung = celular1 as Samsung;
let galaxyS71: GalaxyS7 = samsung3 as GalaxyS7;

let iphone6: Iphone6 = new Iphone6();
let apple: Apple = iphone6;
let celular2: Celular = apple;
let apple1: Apple = celular2 as Apple;
let iphone61: Iphone6 = apple1 as Iphone6;

let iphone7: Iphone7 = new Iphone7();
let apple2: Apple = iphone7;
let celular3: Celular = apple2;
let apple3: Apple = celular3 as Apple;
let iphone71: Iphone7 = apple3 as Iphone7;


