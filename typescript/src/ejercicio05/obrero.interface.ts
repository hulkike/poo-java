import {HormigaInterface} from "./hormiga.interface";

export interface Obrero extends HormigaInterface {
    construir(): void;
    arreglar(): void;
    recolectar(): void;
    excavar(): void;
    cuidarCrias(): void;
}