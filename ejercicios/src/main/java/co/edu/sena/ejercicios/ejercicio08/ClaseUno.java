package co.edu.sena.ejercicios.ejercicio08;

public class ClaseUno {

    public InterfaceDos getClaseDos(){
        return new ClaseDos();
    }

    public class ClaseDos implements InterfaceDos {
        public class ClaseTres implements InterfaceTres {
            public class ClaseCuatro implements InterfaceCuatro {
                public class ClaseCinco {
                    public class ClaseSeis {
                        public class ClaseSiete {
                            public class ClaseOcho {
                                public class ClaseNueve {
                                    public class ClaseDiez {
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
