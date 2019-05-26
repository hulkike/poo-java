export class Pan {
    private _tipo: string;
    private _precio: number;
    private _color: string;
    private _peso: number;
    private _sabor: string;

    constructor() {
        // constructor
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
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

    get peso(): number {
        return this._peso;
    }

    set peso(value: number) {
        this._peso = value;
    }

    get sabor(): string {
        return this._sabor;
    }

    set sabor(value: string) {
        this._sabor = value;
    }
}
