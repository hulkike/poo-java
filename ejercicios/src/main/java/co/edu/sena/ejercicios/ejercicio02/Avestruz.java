package co.edu.sena.ejercicios.ejercicio02;

public class Avestruz extends Ave {
    @Override
    public void comer() {
        System.out.println("soy omnívora");
    }

    @Override
    public void desplazarse() {
        System.out.println("soy bípedo y camino");
    }
}
