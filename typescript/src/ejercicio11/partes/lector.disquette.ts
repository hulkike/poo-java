import {Parte} from "../parte";

export class LectorDisquette extends Parte{
    constructor(serial: string, marca: string) {
        super(serial, marca);
    }
}