package co.edu.sena.ejercicios.ejercicio02;

public abstract class Animal {
    public abstract void respirar();
    public final void morir(){
        System.out.println("muero y me descompongo como cualquier animal");
    }
    public abstract void comer();
    public abstract void desplazarse();
    public abstract void reproducirse();
    public abstract void nacer();
}
