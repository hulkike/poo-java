import {Item} from "./item";

export class Producto {
    private _idProducto: string;
    private _nombre: string;
    private _precio: number;
    private _cantidadDisponible: number;
    private _item: Item;


    get idProducto(): string {
        return this._idProducto;
    }

    set idProducto(value: string) {
        this._idProducto = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(value: number) {
        this._precio = value;
    }

    get cantidadDisponible(): number {
        return this._cantidadDisponible;
    }

    set cantidadDisponible(value: number) {
        this._cantidadDisponible = value;
    }

    get item(): Item {
        return this._item;
    }

    set item(value: Item) {
        this._item = value;
    }
}