import {Explorador} from "./explorador.interface";
import {Hormiga} from "./hormiga";
import {Obrero} from "./obrero.interface";
import {Soldado} from "./soldado.interface";


export class Macho extends Hormiga implements Soldado, Obrero, Explorador {
    public arreglar(): void {
        console.log("arreglo las cosas");
    }

    public construir(): void {
        console.log("construyo el nido");
    }

    public cuidarCrias(): void {
        console.log("cuido las crias");
    }

    public defender(): void {
        console.log("defiendo el nido");
    }

    public excavar(): void {
        console.log("excavo");
    }

    public informar(): void {
        console.log("informo");
    }

    public investigar(): void {
        console.log("investigo");
    }

    public luchar(): void {
        console.log("lucho");
    }

    public marcarCaminos(): void {
        console.log("marco el camino");
    }

    public recolectar(): void {
        console.log("recolecto alimentos");
    }

    public vigilar(): void {
        console.log("vigilo");
    }
}