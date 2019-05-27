import {Vertebrados} from "./vertebrados";

export class Anfibio extends Vertebrados {

    public comer(): void {
        console.log("soy carnívoro");
    }

    public desplazarse(): void {
        console.log("nado, camino");
    }

    public reproducirse(): void {
        console.log("de forma sexual");
    }

    public nacer(): void {
        console.log("ovíparo");
    }
}
