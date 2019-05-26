package co.edu.sena.ejercicios.ejercicio02;

public class Ornitorrinco extends Mamifero {
    @Override
    public void desplazarse() {
        System.out.println("nado y camino");
    }

    @Override
    public void nacer() {
        System.out.println("nazco de un huevo");
    }

    @Override
    public void reproducirse() {
        System.out.println("forma sexual aunque pongo huevos");
    }
}
