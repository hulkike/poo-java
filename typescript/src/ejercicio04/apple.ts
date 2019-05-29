import {Celular} from "./celular";

export abstract class Apple extends Celular {
    public comprar(): void {
        console.log("vendido en tienda Apple");
    }

}

