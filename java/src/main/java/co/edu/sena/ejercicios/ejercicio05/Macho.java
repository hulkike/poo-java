package co.edu.sena.ejercicios.ejercicio05;

public class Macho extends Hormiga implements Obrero, Soldado, Explorador {
    @Override
    public void construir(){
        System.out.println("construyo construyo");
    }

    @Override
    public void arreglar(){
        System.out.println("arreglo los túneles del nido");
    }

    @Override
    public void recolectar() {
        System.out.println("recolecto comidita");
    }

    @Override
    public void excavar() {
        System.out.println("abro un agujero");
    }

    @Override
    public void cuidarCrias() {
        System.out.println("cuido a la prole");
    }

    @Override
    public void investigar() {
        System.out.println("salgo a investigar que hay alrededor");
    }

    @Override
    public void marcarCaminos() {
        System.out.println("marco los caminos para que mis compañeras no se pierdan");
    }

    @Override
    public void informar() {
        System.out.println("informo cuando encuentro algo de comer");
    }

    @Override
    public void luchar() {
        System.out.println("lucho lucho por mi colonia");
    }

    @Override
    public void defender() {
        System.out.println("defiendo mi colonia");
    }

    @Override
    public void vigilar() {
        System.out.println("vigilo que no entren intrusos a mi colonia");
    }
}
