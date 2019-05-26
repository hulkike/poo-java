export class Avion {
    private _color: string;
    private _precio: number;
    private _marca: string;
    private _turbinas: number;
    private _capacidad: number;

    constructor() {
        // constructor
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(value: number) {
        this._precio = value;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }

    get turbinas(): number {
        return this._turbinas;
    }

    set turbinas(value: number) {
        this._turbinas = value;
    }

    get capacidad(): number {
        return this._capacidad;
    }

    set capacidad(value: number) {
        this._capacidad = value;
    }
}
