package co.edu.sena.ejercicios.ejercicio11;

import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Mouse;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Teclado;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.salida.Monitor;
import co.edu.sena.ejercicios.ejercicio11.partes.Bateria;
import co.edu.sena.ejercicios.ejercicio11.partes.Torre;

public class ComputadorPortatil extends Computador {
    private Bateria bateria;

    public ComputadorPortatil(Torre torre, Mouse mouse, Teclado teclado, Monitor monitor, Bateria bateria) {
        super(torre, mouse, teclado, monitor);
        this.bateria = bateria;
    }
}
