package co.edu.sena.ejercicios.ejercicio05;

public class Ejercicio05 {
    public static void main(String[] args) {
        Reina reina = new Reina();
        reina.mandar();
        reina.ponerHuevos();
        reina.caminar();
        reina.comer();
        reina.correr();
        reina.morir();
        reina.nacer();
        reina.respirar();

        Obrero obrero = new Macho();
        funcionesObrero(obrero);

        Soldado soldado = new Macho();
        funcionesSoldado(soldado);

        Explorador explorador = new Macho();
        funcionesExplorador(explorador);

        Soldado s2 = (Soldado) obrero;
        funcionesSoldado(s2);

        Explorador ex2 = (Explorador) obrero;
        funcionesExplorador(ex2);

        Obrero o2 = (Obrero) explorador;
        funcionesObrero(o2);


    }

    private static void funcionesObrero(Obrero obrero) {
        obrero.arreglar();
        obrero.construir();
        obrero.cuidarCrias();
        obrero.excavar();
        obrero.caminar();
        obrero.comer();
        obrero.correr();
        obrero.morir();
        obrero.nacer();
        obrero.respirar();
    }

    private static void funcionesExplorador(Explorador explorador) {
        explorador.caminar();
        explorador.comer();
        explorador.correr();
        explorador.morir();
        explorador.nacer();
        explorador.respirar();
        explorador.investigar();
        explorador.marcarCaminos();
        explorador.informar();
    }

    private static void funcionesSoldado(Soldado s2) {
        s2.caminar();
        s2.comer();
        s2.correr();
        s2.morir();
        s2.nacer();
        s2.respirar();
        s2.defender();
        s2.luchar();
        s2.vigilar();
    }
}
