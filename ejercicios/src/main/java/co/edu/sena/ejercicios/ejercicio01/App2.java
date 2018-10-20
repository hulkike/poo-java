package co.edu.sena.ejercicios.ejercicio01;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicInteger;

public class App2 {
    public static void main(String[] args) {
        List<Integer> lista = new ArrayList<>();
        Scanner teclado = new Scanner(System.in);
        System.out.println("digite la cantidad de numero que va tener la lista: ");
        int cantidad = teclado.nextInt();
        for (int i = 0; i <cantidad ; i++) {
            System.out.println("digite el numero "+(i+1));
            lista.add(teclado.nextInt());
        }
        //cantidad de numero diferentes de cero
        long cantidadCeros = lista.stream().filter(integer -> integer!=0).count();
        System.out.println("la cantidad de numero diferentes de cero es: "+ cantidadCeros);

        //cantidad de numero negativos leidos
        long cantidadNegativos = lista.stream().filter(integer -> integer<0).count();
        System.out.println("la cantidad de numero menores de cero es: "+ cantidadNegativos);

        //Promedio de numero impares
        AtomicInteger suma= new AtomicInteger();
        long cantidadImpares = lista.stream().filter((Integer integer) -> {
            if(integer % 2 ==1)
            suma.set(suma.get() + integer);
            return integer % 2 ==1;
        }).count();
        System.out.println("el promedio de los numero impares es: "+ (suma.get()/cantidadImpares));

        //sumar total de elementos leidos
        Optional<Integer> sumaTotal = lista.stream().reduce((integer, integer2) -> integer+integer2);
        System.out.println("la suma total es:"+ sumaTotal.get());

    }
}
