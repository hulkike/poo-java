export class Gafas {
    private _marca: string;
    private _precio: number;
    private _color: string;
    private _grosor: number;
    private _estilo: string;

    constructor() {
        // constructor
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(value: number) {
        this._precio = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get grosor(): number {
        return this._grosor;
    }

    set grosor(value: number) {
        this._grosor = value;
    }

    get estilo(): string {
        return this._estilo;
    }

    set estilo(value: string) {
        this._estilo = value;
    }
}
