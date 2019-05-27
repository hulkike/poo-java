import {Consola} from "./consola";

export abstract class Playstation extends Consola {
    constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}