package co.edu.sena.ejercicios.ejercicio11;

public class Parte {
    private String serial;
    private String marca;

    public Parte(String serial, String marca) {
        this.serial = serial;
        this.marca = marca;
    }

    public String getSerial() {
        return serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
}
