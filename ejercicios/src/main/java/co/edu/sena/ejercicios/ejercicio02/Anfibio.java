package co.edu.sena.ejercicios.ejercicio02;


public class Anfibio extends Vertebrado {
    @Override
    public void comer() {
        System.out.println("soy omnívoro");
    }

    @Override
    public void desplazarse() {
        System.out.println("camino y nado");
    }

    @Override
    public void reproducirse() {
        System.out.println("de forma sexual");
    }

    @Override
    public void nacer() {
        System.out.println("nazco de un huevo");
    }
}
