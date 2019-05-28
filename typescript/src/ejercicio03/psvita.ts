import {Playstation} from "./playstation";

export abstract class Psvita extends Playstation {
    protected constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}