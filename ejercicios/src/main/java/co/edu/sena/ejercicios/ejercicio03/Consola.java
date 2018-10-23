package co.edu.sena.ejercicios.ejercicio03;

public class Consola {
    private int controles;
    private String conectorSonido;
    private String conectorVideo;

    public Consola(int controles, String conectorSonido, String conectorVideo) {
        this.controles = controles;
        this.conectorSonido = conectorSonido;
        this.conectorVideo = conectorVideo;
    }

    public int getControles() {
        return controles;
    }

    public void setControles(int controles) {
        this.controles = controles;
    }

    public String getConectorSonido() {
        return conectorSonido;
    }

    public void setConectorSonido(String conectorSonido) {
        this.conectorSonido = conectorSonido;
    }

    public String getConectorVideo() {
        return conectorVideo;
    }

    public void setConectorVideo(String conectorVideo) {
        this.conectorVideo = conectorVideo;
    }
}
