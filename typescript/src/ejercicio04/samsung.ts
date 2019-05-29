import {Celular} from "./celular";

export class Samsung extends Celular {
    public comprar(): void {
        console.log("vendido en tienda Samsung");
    }

}