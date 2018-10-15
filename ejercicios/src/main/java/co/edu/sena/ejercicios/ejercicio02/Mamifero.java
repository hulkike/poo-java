package co.edu.sena.ejercicios.ejercicio02;

public class Mamifero extends Vertebrado {
    @Override
    public void nacer() {
        System.out.println("nazco del utero de mi madre");
    }

    @Override
    public void comer() {
        System.out.println("soy omnívoro");
    }

    @Override
    public void reproducirse() {
        System.out.println("de forma sexual");
    }
}
