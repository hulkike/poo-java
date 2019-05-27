import {Nintendo} from "./nintendo";

export class Snes extends Nintendo {
    constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}
