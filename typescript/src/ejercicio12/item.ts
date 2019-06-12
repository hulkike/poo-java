import {Factura} from "./factura";
import {Producto} from "./producto";

export class Item {

    private _cantidad: number;
    private _precioVenta: number;
    private _producto: Producto;
    private _factura: Factura;


    get cantidad(): number {
        return this._cantidad;
    }

    set cantidad(value: number) {
        this._cantidad = value;
    }

    get precioVenta(): number {
        return this._precioVenta;
    }

    set precioVenta(value: number) {
        this._precioVenta = value;
    }

    get producto(): Producto {
        return this._producto;
    }

    set producto(value: Producto) {
        this._producto = value;
    }

    get factura(): Factura {
        return this._factura;
    }

    set factura(value: Factura) {
        this._factura = value;
    }
}