package co.edu.sena.ejercicios.ejercicio03;

public class App {
    public static void main(String[] args) {

        Play1Slim play1Slim = new Play1Slim(2,"RCA","RCA");
        Play1Fat play1Fat = new Play1Fat(2,"RCA","RCA");
        Play2Fat play2 = new Play2Fat(2, "RCA", "RCA");
        Play2Slim play2Slim = new Play2Slim(2,"RCA","RCA");
        Play3Slim play3Slim = new Play3Slim(2, "HDMI", "HDMI");
        Play3Fat play3 = new Play3Fat(2, "HDMI", "HDMI");
        Play4Fat play4Fat = new Play4Fat(2, "HDMI", "HDMI");
        Play4Slim play4Slim = new Play4Slim(2, "HDMI","HDMI");
        Play4Pro play4Pro = new Play4Pro(2, "HDMI", "HDMI");
        PsvitaSlim psvitaSlim = new PsvitaSlim(1, "3.5 pulgadas", "No tiene");
        PsvitaFat psvitaFat = new PsvitaFat(1, "3.5 pulgadas", "No tiene");
        Snes snes = new Snes(2, "Cable av", "Cable av");
        Switch aSwitch = new Switch(2, "HDMI", "HDMI");
        Wii wii = new Wii(2, "RCA", "RCA");
        WiiU wiiU = new WiiU(2, "RCA", "RCA");


    }
}
