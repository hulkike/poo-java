package co.edu.sena.ejercicios.ejercicio11.partes;

import co.edu.sena.ejercicios.ejercicio11.Parte;

public class Lector extends Parte {
    private double alto;
    private double largo;
    private double ancho;

    public Lector(String serial, String marca, double alto, double largo, double ancho) {
        super(serial, marca);
        this.alto = alto;
        this.largo = largo;
        this.ancho = ancho;
    }
}
