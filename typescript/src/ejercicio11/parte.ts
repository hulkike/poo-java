export class Parte {
    private _serial: string;
    private _marca: string;


    constructor(serial: string, marca: string) {
        this._serial = serial;
        this._marca = marca;
    }


    get serial(): string {
        return this._serial;
    }

    set serial(value: string) {
        this._serial = value;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }
}