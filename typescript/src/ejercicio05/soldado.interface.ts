import {HormigaInterface} from "./hormiga.interface";

export interface Soldado extends HormigaInterface {
    luchar(): void;
    defender(): void;
    vigilar(): void;
}