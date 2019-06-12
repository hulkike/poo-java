import {Cliente} from "./cliente";
import {Item} from "./item";

export class Factura {
    private _idFactura: number;
    private _fecha: Date;
    private _totalFactura: number;
    private _iva: number;
    private _cliente: Cliente;
    private _items: Array<Item>


    get idFactura(): number {
        return this._idFactura;
    }

    set idFactura(value: number) {
        this._idFactura = value;
    }

    get fecha(): Date {
        return this._fecha;
    }

    set fecha(value: Date) {
        this._fecha = value;
    }

    get totalFactura(): number {
        return this._totalFactura;
    }

    set totalFactura(value: number) {
        this._totalFactura = value;
    }

    get iva(): number {
        return this._iva;
    }

    set iva(value: number) {
        this._iva = value;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(value: Cliente) {
        this._cliente = value;
    }

    get items(): Array<Item> {
        return this._items;
    }

    set items(value: Array<Item>) {
        this._items = value;
    }
}