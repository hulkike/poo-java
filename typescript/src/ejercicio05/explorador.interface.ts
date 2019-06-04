import {HormigaInterface} from "./hormiga.interface";

export interface Explorador extends HormigaInterface {
    investigar(): void;
    marcarCaminos(): void;
    informar(): void;
}