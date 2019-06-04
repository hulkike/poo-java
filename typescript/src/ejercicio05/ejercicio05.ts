import {Explorador} from "./explorador.interface";
import {Macho} from "./macho";
import {Obrero} from "./obrero.interface";
import {Reina} from "./reina";
import {Soldado} from "./soldado.interface";
import {Hormiga} from "./hormiga";



const reina: any = new Reina();


const soldado: any = new Macho();


const explorador: Explorador = new Macho();


let obrero: Obrero = new Macho();

let soldado2: Soldado = obrero as unknown as Soldado;

let explorador2: Explorador = obrero as unknown as Explorador;











