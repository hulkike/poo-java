export class Tamal {
    private _color: string;
    private _tamanio: string;
    private _region: string;
    private _precio: number;
    private _peso: number;

    constructor() {
        // constructor
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get tamanio(): string {
        return this._tamanio;
    }

    set tamanio(value: string) {
        this._tamanio = value;
    }

    get region(): string {
        return this._region;
    }

    set region(value: string) {
        this._region = value;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(value: number) {
        this._precio = value;
    }

    get peso(): number {
        return this._peso;
    }

    set peso(value: number) {
        this._peso = value;
    }
}
