package co.edu.sena.ejercicios.ejercicio02;

public abstract class Ave extends Vertebrado {
    @Override
    public void desplazarse() {
        System.out.println("me desplazo por el aire vuelo");
    }

    @Override
    public void reproducirse() {
        System.out.println("me reproduzco de forma sexual");
    }

    @Override
    public void nacer() {
        System.out.println("nazco de un huevo");
    }
}
