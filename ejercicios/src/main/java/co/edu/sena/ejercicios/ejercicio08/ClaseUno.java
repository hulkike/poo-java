package co.edu.sena.ejercicios.ejercicio08;

public class ClaseUno {

    public InterfaceDos getClaseDos() {
        return new ClaseDos();
    }

    public class ClaseDos implements InterfaceDos {

        public InterfaceTres getClaseDos() {
            return new ClaseTres();
        }

        public class ClaseTres implements InterfaceTres {

            public InterfaceCuatro getClaseDos() {
                return new ClaseCuatro();
            }

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
