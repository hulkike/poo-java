package co.edu.sena.ejercicios.ejercicio08;

public class ClaseUno {

    public InterfaceDos getClaseDos() {
        return new ClaseDos();
    }

    public class ClaseDos implements InterfaceDos {

        public InterfaceTres getClaseTres() {
            return new ClaseTres();
        }

        public class ClaseTres implements InterfaceTres {

            public InterfaceCuatro getClaseCuatro() {
                return new ClaseCuatro();
            }

            public class ClaseCuatro implements InterfaceCuatro {

                public InterfaceCinco getClaseCinco() {
                    return new ClaseCinco();
                }

                public class ClaseCinco implements InterfaceCinco {

                    public InterfaceSeis getClaseSeis() {
                        return new ClaseSeis();
                    }

                    public class ClaseSeis implements InterfaceSeis {
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
