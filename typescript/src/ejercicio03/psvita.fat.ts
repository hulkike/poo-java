import {Psvita} from "./psvita";

export class PsvitaFat extends Psvita {
    constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}