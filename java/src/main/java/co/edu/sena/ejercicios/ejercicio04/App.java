package co.edu.sena.ejercicios.ejercicio04;

public class App {
    public static void main(String[] args) {
        Iphone6 iphone6 = new Iphone6();
        iphone6.tomarFotos();
        iphone6.apagar();
        iphone6.comprar();
        iphone6.encender();
        Iphone7 iphone7 = new Iphone7();
        iphone7.tomarFotos();
        iphone7.apagar();
        iphone7.comprar();
        iphone7.encender();

        Apple apple1 = new Iphone6();
        apple1.comprar();
        apple1.apagar();
        apple1.encender();
        Apple apple2 = new Iphone7();
        apple2.encender();
        apple2.apagar();
        apple2.comprar();

        GalaxyS6 galaxyS6 = new GalaxyS6();
        galaxyS6.tomarFotos();
        galaxyS6.apagar();
        galaxyS6.comprar();
        galaxyS6.encender();
        GalaxyS7 galaxyS7 = new GalaxyS7();
        galaxyS7.tomarFotos();
        galaxyS7.apagar();
        galaxyS7.encender();
        galaxyS7.comprar();


        Samsung samsung1 = new GalaxyS6();
        samsung1.comprar();
        samsung1.apagar();
        samsung1.encender();
        Samsung samsung2 = new GalaxyS7();
        samsung2.encender();
        samsung2.apagar();
        samsung2.comprar();

        Celular celular1 = new GalaxyS6();
        celular1.encender();
        celular1.apagar();
        Celular celular2 = new GalaxyS7();
        celular2.apagar();
        celular2.encender();
        Celular celular3 = new Iphone6();
        celular3.apagar();
        celular3.encender();
        Celular celular4 = new Iphone7();
        celular4.encender();
        celular4.apagar();


    }
}
