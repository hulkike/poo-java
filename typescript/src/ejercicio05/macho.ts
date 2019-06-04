import {Explorador} from "./explorador.interface";
import {Hormiga} from "./hormiga";
import {Obrero} from "./obrero.interface";
import {Soldado} from "./soldado.interface";


export class Macho extends Hormiga implements Soldado, Obrero, Explorador {
    public arreglar(): void {
        console.log("como");
    }

    public construir(): void {
        console.log("como");
    }

    public cuidarCrias(): void {
        console.log("como");
    }

    public defender(): void {
        console.log("como");
    }

    public excavar(): void {
        console.log("como");
    }

    public informar(): void {
        console.log("como");
    }

    public investigar(): void {
        console.log("como");
    }

    public luchar(): void {
        console.log("como");
    }

    public marcarCaminos(): void {
        console.log("como");
    }

    public recolectar(): void {
        console.log("como");
    }

    vigilar(): void {
        console.log("vigilo");
    }
}