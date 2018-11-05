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

                        public InterfaceSiete getClaseSiete() {
                            return new ClaseSiete();
                        }

                        public class ClaseSiete implements InterfaceSiete {

                            public InterfaceOcho getClaseOcho() {
                                return new ClaseOcho();
                            }

                            public class ClaseOcho implements InterfaceOcho {
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
