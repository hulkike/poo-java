export class Persona {
    private _colorOjos: string;
    private _colorPiel: string;
    private _dedos: number;
    private _colorCabello: string;
    private _lunares: number;

    constructor() {
        // constructor
    }

    get colorOjos(): string {
        return this._colorOjos;
    }

    set colorOjos(value: string) {
        this._colorOjos = value;
    }

    get colorPiel(): string {
        return this._colorPiel;
    }

    set colorPiel(value: string) {
        this._colorPiel = value;
    }

    get dedos(): number {
        return this._dedos;
    }

    set dedos(value: number) {
        this._dedos = value;
    }

    get colorCabello(): string {
        return this._colorCabello;
    }

    set colorCabello(value: string) {
        this._colorCabello = value;
    }

    get lunares(): number {
        return this._lunares;
    }

    set lunares(value: number) {
        this._lunares = value;
    }
}
