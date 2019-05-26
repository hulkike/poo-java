package co.edu.sena.ejercicios.ejercicio12;

import java.util.Objects;

public class Item {
    private int cantidad;
    private double precioVenta;
    private Producto producto;
    private Factura factura;

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return cantidad == item.cantidad &&
                Double.compare(item.precioVenta, precioVenta) == 0 &&
                Objects.equals(producto, item.producto) &&
                Objects.equals(factura, item.factura);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cantidad, precioVenta, producto, factura);
    }

    @Override
    public String toString() {
        return "Item{" +
                "cantidad=" + cantidad +
                ", precioVenta=" + precioVenta +
                ", producto=" + producto +
                ", factura=" + factura +
                '}';
    }
}
