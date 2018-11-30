package co.edu.sena.ejercicios.ejercicio11;

import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Camara;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Mouse;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.entrada.Teclado;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.entradasalida.Multifuncional;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.salida.Impresora;
import co.edu.sena.ejercicios.ejercicio11.dispositivo.salida.Monitor;
import co.edu.sena.ejercicios.ejercicio11.partes.Torre;

import java.util.Scanner;

public class Computador {
    private Torre torre;
    private Mouse mouse;
    private Teclado teclado;
    private Monitor monitor;
    private Camara camara;
    private Impresora impresora;
    private Multifuncional multifuncional;
    private Scanner scanner;

    public Computador(Torre torre, Mouse mouse, Teclado teclado, Monitor monitor) {
        this.torre = torre;
        this.mouse = mouse;
        this.teclado = teclado;
        this.monitor = monitor;
    }

    public Torre getTorre() {
        return torre;
    }

    public void setTorre(Torre torre) {
        this.torre = torre;
    }

    public Mouse getMouse() {
        return mouse;
    }

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Camara getCamara() {
        return camara;
    }

    public void setCamara(Camara camara) {
        this.camara = camara;
    }

    public Impresora getImpresora() {
        return impresora;
    }

    public void setImpresora(Impresora impresora) {
        this.impresora = impresora;
    }

    public Multifuncional getMultifuncional() {
        return multifuncional;
    }

    public void setMultifuncional(Multifuncional multifuncional) {
        this.multifuncional = multifuncional;
    }

    public Scanner getScanner() {
        return scanner;
    }

    public void setScanner(Scanner scanner) {
        this.scanner = scanner;
    }
}
