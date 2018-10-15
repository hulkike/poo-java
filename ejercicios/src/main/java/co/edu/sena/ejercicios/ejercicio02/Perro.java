package co.edu.sena.ejercicios.ejercicio02;

public class Perro extends Mamifero {
    public static final int PATAS = 4;
    private String raza;

    @Override
    public void desplazarse() {
        System.out.println("soy cuadrúpedo");
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }
}
