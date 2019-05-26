package co.edu.sena.ejercicios.ejercicio11;

import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Mouse;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Teclado;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.salida.Monitor;
import co.edu.sena.ejercicios.ejercicio11.partes.Torre;

public class ComputadorEscritorio extends Computador {
    public ComputadorEscritorio(Torre torre, Mouse mouse, Teclado teclado, Monitor monitor) {
        super(torre, mouse, teclado, monitor);
    }
}
