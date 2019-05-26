package co.edu.sena.ejercicios.ejercicio05;

public class Ejericicio05 {
    public static void main(String[] args) {
        Reina reina = new Reina();
        funcionesBasicas(reina);
        reina.mandar();
        reina.ponerHuevos();

        Obrero obrero = new Macho();
        funcionesBasicas(obrero);
        obrero.arreglar();
        obrero.construir();
        obrero.cuidarCrias();
        obrero.excavar();

        Soldado soldado = new Macho();
        funcionesBasicas(soldado);
        soldado.defender();
        soldado.luchar();
        soldado.vigilar();

        Explorador explorador = new Macho();
        funcionesBasicas(explorador);
        explorador.investigar();
        explorador.marcarCaminos();
        explorador.informar();
    }

    public static void funcionesBasicas(HormigaInterface hormiga){
        hormiga.caminar();
        hormiga.comer();
        hormiga.correr();
        hormiga.morir();
        hormiga.nacer();
        hormiga.respirar();
    }
}
