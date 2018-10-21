package co.edu.sena.ejercicios.ejercicio02;

public class Tiburon extends Pez {
    @Override
    public void comer() {
        System.out.println("soy carnívoro");
    }

    @Override
    public void nacer() {
        System.out.println("no nacemos de huevos estamos en el vientre de nuestra madre a veces nos comemos a nuestros hermanos");
    }
}
