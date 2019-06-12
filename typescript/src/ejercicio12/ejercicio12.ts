import {Cliente} from "./cliente";
import {Factura} from "./factura";
import {Producto} from "./producto";
import {Item} from "./item";


const c1: Cliente = new Cliente();
c1.tipoDocumento="CC";
c1.numeroDocumento="123242342";

const c2: Cliente = new Cliente();

const f1: Factura = new Factura();
f1.idFactura=1;
f1.fecha= new Date();
f1.totalFactura=134;
f1.iva=0.19;
const f2: Factura = new Factura();
const f3: Factura = new Factura();
const f4: Factura = new Factura();

const p1: Producto= new Producto();
p1.idProducto="1111";
p1.nombre="papas";
p1.cantidadDisponible=1000;
p1.precio=2000;
const p2: Producto= new Producto();
p2.precio=1000;
p2.nombre="coca cola";
p2.cantidadDisponible=10000;
p2.idProducto="22222";
const p3: Producto= new Producto();
const p4: Producto= new Producto();
const p5: Producto= new Producto();
const p6: Producto= new Producto();
const p7: Producto= new Producto();
const p8: Producto= new Producto();

const i1: Item= new Item();
i1.producto=p1;
i1.cantidad=10;
i1.precioVenta=1500;
const i2: Item= new Item();
i2.cantidad=5;
i2.precioVenta=1000;
i2.producto=p2;
const i3: Item= new Item();
const i4: Item= new Item();
const i5: Item= new Item();
const i6: Item= new Item();
const i7: Item= new Item();
const i8: Item= new Item();

c1.facturas = new Array<Factura>();
c1.facturas.push(f1);
c1.facturas.push(f2);

c2.facturas= new Array<Factura>();
c2.facturas.push(f3);
c2.facturas.push(f4);

c1.facturas[0].items= new Array<Item>();
c1.facturas[0].items.push(i1);
c1.facturas[0].items.push(i2);
c1.facturas[1].items= new Array<Item>();
c1.facturas[1].items.push(i3);
c1.facturas[1].items.push(i4);

imprimirCliente(c1);
imprimirCliente(c2);




function imprimirCliente(cliente: Cliente){
    console.log("tipo documento: "+cliente.tipoDocumento);
    console.log("numero documento: "+cliente.numeroDocumento);
    console.log("cantidad facturas: "+cliente.facturas.length);
    for (let i=0; i<cliente.facturas.length;i++){
        console.log("------------------"+(i+1));
        console.log("id factura:"+cliente.facturas[i].idFactura);
        console.log("fecha: "+cliente.facturas[i].fecha);
        console.log("iva: "+cliente.facturas[i].iva);
        console.log("total facuta:"+cliente.facturas[i].totalFactura);
        for (let j = 0; j <cliente.facturas[i].items.length ; j++) {
            console.log("item: "+(j+1));
            console.log("nombre: "+cliente.facturas[i].items[j].producto.nombre);
            console.log("id Producto: "+cliente.facturas[i].items[j].producto.idProducto);
            console.log("valor venta: "+cliente.facturas[i].items[j].precioVenta);
            console.log("cantidad: "+cliente.facturas[i].items[j].cantidad);
        }
    }
}







