package co.edu.sena.ejercicios.ejercicio03;

public class App {
    public static void main(String[] args) {

        Play2 play2 = new Play2(2, "RCA", "RCA");
        Play3 play3 = new Play3(2, "HDMI", "HDMI");
        Play4Fat play4Fat = new Play4Fat(2, "HDMI", "HDMI");
        Play4Slim play4Slim = new Play4Slim(2, "HDMI","HDMI");
        Play4Pro play4Pro = new Play4Pro(2, "HDMI", "HDMI");
        PsVita psVita = new PsVita(1, "3.5 pulgadas", "No tiene");
        Snes snes = new Snes(2, "Cable av", "Cable av");
        Switch aSwitch = new Switch(2, "HDMI", "HDMI");
        Wii wii = new Wii(2, "RCA", "RCA");
        WiiU wiiU = new WiiU(2, "RCA", "RCA");


    }
}
