package co.edu.sena.ejercicios.ejercicio02;

public abstract class Reptil extends Vertebrado {
    @Override
    public void desplazarse() {
        System.out.println("me desplazo caminando");
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
