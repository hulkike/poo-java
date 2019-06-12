package co.edu.sena.ejercicios.ejercicio12;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class Ejemplo01 {
    public static void main(String[] args) {
        Cliente c1 = new Cliente();
        Cliente c2 = new Cliente();


        Factura f1 = new Factura();
        f1.setIdFactura(1);
        f1.setFecha(LocalDateTime.now());
        f1.setIva(13412);
        f1.setTotalFactura(34345234);
        Factura f2 = new Factura();

        Factura f3 = new Factura();
        Factura f4 = new Factura();


        Producto p1 = new Producto();
        p1.setNombre("papas");
        p1.setCantidadDisponible(100);
        p1.setPrecio(1200);
        p1.setIdProducto("serial 1");
        Producto p2 = new Producto();
        p2.setNombre("coca cola");
        Producto p3 = new Producto();
        Producto p4 = new Producto();
        Producto p5 = new Producto();
        Producto p6 = new Producto();
        Producto p7 = new Producto();
        Producto p8 = new Producto();

        Item i1 = new Item();
        i1.setProducto(p1);
        i1.setCantidad(3);
        i1.setPrecioVenta(p1.getPrecio());
        Item i2 = new Item();
        i2.setProducto(p2);
        Item i3 = new Item();
        i3.setProducto(p3);
        Item i4 = new Item();
        i4.setProducto(p4);
        Item i5 = new Item();
        i5.setProducto(p5);
        Item i6 = new Item();
        i6.setProducto(p6);
        Item i7 = new Item();
        i7.setProducto(p7);
        Item i8 = new Item();
        i8.setProducto(p8);

        c1.setFacturas(new ArrayList<>());
        c1.getFacturas().add(f1);
        c1.getFacturas().add(f2);

        c2.setFacturas(new ArrayList<>());
        c2.getFacturas().add(f3);
        c2.getFacturas().add(f4);

        f1.setItems(new ArrayList<>());
        f1.getItems().add(i1);
        f1.getItems().add(i2);

        System.out.println(c1);
        System.out.println(c2);


    }
}
