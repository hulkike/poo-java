package co.edu.sena.ejercicios.ejercicio02;

public class App {
    public static void main(String[] args) {
        SapoMacho sapoMacho = new SapoMacho();
        System.out.println("---Sapo Macho---");
        sapoMacho.comer();
        sapoMacho.desplazarse();
        sapoMacho.morir();
        sapoMacho.nacer();
        sapoMacho.reproducirse();
        sapoMacho.respirar();


        SapoHembra saporHembra = new SapoHembra();
        System.out.println("---Sapo Hembra---");
        saporHembra.comer();
        saporHembra.desplazarse();
        saporHembra.morir();
        saporHembra.nacer();
        saporHembra.reproducirse();
        saporHembra.respirar();
        saporHembra.criar();




    }
}
