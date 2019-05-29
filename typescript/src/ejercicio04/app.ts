import {Apple} from "./apple";
import {Celular} from "./celular";
import {GalaxyS6} from "./galaxy.s6";
import {GalaxyS7} from "./galaxy.s7";
import {Iphone6} from "./iphone6";
import {Iphone7} from "./iphone7";
import {Samsung} from "./samsung";

const iphone6: Iphone6 = new Iphone6();
iphone6.tomarFotos();
iphone6.apagar();
iphone6.comprar();
iphone6.encender();
const iphone7: Iphone7 = new Iphone7();
iphone7.tomarFotos();
iphone7.apagar();
iphone7.comprar();
iphone7.encender();

const apple1: Apple = new Iphone6();
apple1.comprar();
apple1.apagar();
apple1.encender();
const apple2: Apple = new Iphone7();
apple2.encender();
apple2.apagar();
apple2.comprar();

const galaxyS6: GalaxyS6 = new GalaxyS6();
galaxyS6.tomarFotos();
galaxyS6.apagar();
galaxyS6.comprar();
galaxyS6.encender();
const galaxyS7: GalaxyS7 = new GalaxyS7();
galaxyS7.tomarFotos();
galaxyS7.apagar();
galaxyS7.encender();
galaxyS7.comprar();


const samsung1: Samsung = new GalaxyS6();
samsung1.comprar();
samsung1.apagar();
samsung1.encender();
const samsung2: Samsung = new GalaxyS7();
samsung2.encender();
samsung2.apagar();
samsung2.comprar();

const celular1: Celular = new GalaxyS6();
celular1.encender();
celular1.apagar();
const celular2: Celular = new GalaxyS7();
celular2.apagar();
celular2.encender();
const celular3: Celular = new Iphone6();
celular3.apagar();
celular3.encender();
const celular4: Celular = new Iphone7();
celular4.encender();
celular4.apagar();


