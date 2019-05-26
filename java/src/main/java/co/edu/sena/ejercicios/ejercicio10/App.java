package co.edu.sena.ejercicios.ejercicio10;

public class App {
    public static void main(String[] args) {
        ClaseUno claseUno = new ClaseUno();
        InterfaceDos claseDos = ClaseUno.getClaseDos();
        InterfaceTres claseTres= ClaseUno.ClaseDos.getClaseTres();
        InterfaceCuatro clasCuatro= ClaseUno.ClaseDos.ClaseTres.getClaseCuatro();
        InterfaceCinco claseCinco= ClaseUno.ClaseDos.ClaseTres.ClaseCuatro.getClaseCinco();
        InterfaceSeis claseSeis= ClaseUno.ClaseDos.ClaseTres.ClaseCuatro.ClaseCinco.getClaseSeis();
        InterfaceSiete claseSiete= ClaseUno.ClaseDos.ClaseTres.ClaseCuatro.ClaseCinco.ClaseSeis.getClaseSiete();
        InterfaceOcho claseOcho= ClaseUno.ClaseDos.ClaseTres.ClaseCuatro.ClaseCinco.ClaseSeis.ClaseSiete.getClaseOcho();
        InterfaceNueve claseNueve= ClaseUno.ClaseDos.ClaseTres.ClaseCuatro.ClaseCinco.ClaseSeis.ClaseSiete.ClaseOcho.getClaseNueve();
        InterfaceDiez claseDiez= ClaseUno.ClaseDos.ClaseTres.ClaseCuatro.ClaseCinco.ClaseSeis.ClaseSiete.ClaseOcho.ClaseNueve.getClaseDiez();


    }
}
