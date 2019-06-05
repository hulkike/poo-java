import {Hormiga} from "./hormiga";

export class Reina extends Hormiga {
    public ponerHuevo(): void {
        console.log("pongo huevo");
    }

    public mandar() {
        console.log("mando a todo");
    }
}