import {Playstation} from "./playstation";

export class Psvita extends Playstation {
    constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}