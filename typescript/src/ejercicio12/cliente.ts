import {Factura} from "./factura";

export class Cliente {
    private _tipoDocumento: string;
    private _numeroDocumento: string;
    private _nombre: string;
    private _direccion: string;
    private _telefono: string;
    private _facturas: Factura[];


    get tipoDocumento(): string {
        return this._tipoDocumento;
    }

    set tipoDocumento(value: string) {
        this._tipoDocumento = value;
    }

    get numeroDocumento(): string {
        return this._numeroDocumento;
    }

    set numeroDocumento(value: string) {
        this._numeroDocumento = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get telefono(): string {
        return this._telefono;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    get facturas(): Factura[] {
        return this._facturas;
    }

    set facturas(value: Factura[]) {
        this._facturas = value;
    }

}