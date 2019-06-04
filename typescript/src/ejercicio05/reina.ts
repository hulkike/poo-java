import {Hormiga} from "./hormiga";

export class Reina extends Hormiga {

    public _nombre : unknown;
    public _sexo: any;


    public ponerHuevo(): void {
        console.log("pongo huevo");
    }

    public mandar() {
        console.log("mando a todo");
    }


    get nombre(): unknown {
        return this._nombre;
    }

    set nombre(value: unknown) {
        this._nombre = value;
    }


    get sexo(): any {
        return this._sexo;
    }

    set sexo(value: any) {
        this._sexo = value;
    }
}