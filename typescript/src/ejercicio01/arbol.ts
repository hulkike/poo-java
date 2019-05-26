export class Arbol {
    private _color: string;
    private _altura: number;
    private _edad: number;
    private _diametro: number;
    private _tipo: string;

    constructor() {
    }


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get altura(): number {
        return this._altura;
    }

    set altura(value: number) {
        this._altura = value;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get diametro(): number {
        return this._diametro;
    }

    set diametro(value: number) {
        this._diametro = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }
}





