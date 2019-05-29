package co.edu.sena.ejercicios.ejercicio04;

public class App2 {
    public static void main(String[] args) {
        GalaxyS6 galaxyS6 = new GalaxyS6();
        Samsung samsung = galaxyS6;
        Celular celular = samsung;
        Samsung samsung1 = (Samsung) celular;
        GalaxyS6 galaxyS61 = (GalaxyS6) samsung1;
        galaxyS61.tomarFotos();


        GalaxyS7 galaxyS7 = new GalaxyS7();
        Samsung samsung2 = galaxyS7;
        Celular celular1 = samsung2;
        Samsung samsung3 = (Samsung) celular1;
        GalaxyS7 galaxyS71 = (GalaxyS7) samsung3;

        Iphone6 iphone6 = new Iphone6();
        Apple apple = iphone6;
        Celular celular2 = apple;
        Apple apple1 = (Apple) celular2;
        Iphone6 iphone61 = (Iphone6) apple1;

        Iphone7 iphone7 = new Iphone7();
        Apple apple2 = iphone7;
        Celular celular3 = apple2;
        Apple apple3 = (Apple) celular3;
        Iphone7 iphone71 = (Iphone7) apple3;


    }
}
