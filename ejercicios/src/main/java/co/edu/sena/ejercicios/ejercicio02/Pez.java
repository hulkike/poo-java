package co.edu.sena.ejercicios.ejercicio02;

public abstract class Pez extends Vertebrado {
    @Override
    public void desplazarse() {
        System.out.println("yo nado");
    }

    @Override
    public void reproducirse() {
        System.out.println("de forma sexual");
    }

    @Override
    public void nacer() {
        System.out.println("de huevos");
    }

}
