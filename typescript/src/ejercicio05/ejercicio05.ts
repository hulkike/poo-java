import {Explorador} from "./explorador.interface";
import {Macho} from "./macho";
import {Obrero} from "./obrero.interface";
import {Reina} from "./reina";
import {Soldado} from "./soldado.interface";

const reina: Reina = new Reina();
reina.mandar();
reina.ponerHuevo();
reina.caminar();
reina.comer();
reina.correr();
reina.morir();
reina.nacer();
reina.respirar();

const soldado: Soldado = new Macho();
soldado.luchar();
soldado.defender();
soldado.vigilar();
soldado.caminar();
soldado.comer();
soldado.respirar();
soldado.nacer();
soldado.morir();
soldado.correr();

const explorador: Explorador = new Macho();
explorador.informar();
explorador.investigar();
explorador.marcarCaminos();
explorador.correr();
explorador.morir();
explorador.nacer();
explorador.respirar();
explorador.comer();
explorador.caminar();

let obrero: Obrero = new Macho();
obrero.arreglar();
obrero.construir();
obrero.cuidarCrias();
obrero.excavar();
obrero.recolectar();
obrero.caminar();
obrero.comer();
obrero.respirar();
obrero.nacer();
obrero.morir();
obrero.correr();

let soldado2: Soldado = obrero as unknown as Soldado;

let explorador2: Explorador = obrero as unknown as Explorador;











