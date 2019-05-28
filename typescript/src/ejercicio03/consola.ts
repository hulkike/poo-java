export abstract class Consola {
    private _controles: number;
    private _conectorSonido: string;
    private _conectorVideo: string;

    protected constructor(controles: number, conectorSonido: string, conectorVideo: string) {
        this._controles = controles;
        this._conectorSonido = conectorSonido;
        this._conectorVideo = conectorVideo;
    }

    get controles(): number {
        return this._controles;
    }

    set controles(value: number) {
        this._controles = value;
    }

    get conectorSonido(): string {
        return this._conectorSonido;
    }

    set conectorSonido(value: string) {
        this._conectorSonido = value;
    }

    get conectorVideo(): string {
        return this._conectorVideo;
    }

    set conectorVideo(value: string) {
        this._conectorVideo = value;
    }
}