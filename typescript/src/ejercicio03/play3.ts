import {Playstation} from "./playstation";

export abstract class Play3 extends Playstation {
    protected constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}