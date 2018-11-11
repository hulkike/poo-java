package co.edu.sena.ejercicios.ejercicio10;

public class ClaseUno {

    public static InterfaceDos getClaseDos() {
        return new ClaseDos();
    }

    public static class ClaseDos implements InterfaceDos {

        public static InterfaceTres getClaseTres() {
            return new ClaseTres();
        }

        public static class ClaseTres implements InterfaceTres {

            public static InterfaceCuatro getClaseCuatro() {
                return new ClaseCuatro();
            }

            public static class ClaseCuatro implements InterfaceCuatro {

                public static InterfaceCinco getClaseCinco() {
                    return new ClaseCinco();
                }

                public static class ClaseCinco implements InterfaceCinco {

                    public static InterfaceSeis getClaseSeis() {
                        return new ClaseSeis();
                    }

                    public static class ClaseSeis implements InterfaceSeis {

                        public static InterfaceSiete getClaseSiete() {
                            return new ClaseSiete();
                        }

                        public static class ClaseSiete implements InterfaceSiete {

                            public static InterfaceOcho getClaseOcho() {
                                return new ClaseOcho();
                            }

                            public static  class ClaseOcho implements InterfaceOcho {

                                public static InterfaceNueve getClaseNueve() {
                                    return new ClaseNueve();
                                }

                                public static class ClaseNueve implements InterfaceNueve {

                                    public static InterfaceDiez getClaseDiez() {
                                        return new ClaseDiez();
                                    }

                                    public static class ClaseDiez implements InterfaceDiez {
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
