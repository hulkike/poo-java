import {Nintendo} from "./nintendo";

export class Switch extends Nintendo {

    constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        super(controles, conectorSonido, conectorVideo);
    }
}