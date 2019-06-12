import {Parte} from "../parte";
import {MotherBoard} from "./mother.board";
import {Ram} from "./ram";
import {Fuente} from "./fuente";
import {Procesador} from "./procesador";
import {Disipador} from "./disipador";
import {LectorCd} from "./lector.cd";
import {LectorDvd} from "./lector.dvd";
import {LectorBR} from "./lector.b.r";
import {LectorDisquette} from "./lector.disquette";
import {TarjetaSonido} from "./tarjeta.sonido";
import {TarjetaVideo} from "./tarjeta.video";
import {Bateria} from "./bateria";
import {DiscoDuro} from "./disco.duro";

export class Torre extends Parte {
    private _discoDuro: DiscoDuro;
    private _tarjetaMadre: MotherBoard;
    private _tarjetaMemoria: Ram;
    private _fuente: Fuente;
    private _procesador: Procesador;
    private _disipador: Disipador;
    private _lectorCD: LectorCd;
    private _lectorDVD: LectorDvd;
    private _lectorBR: LectorBR;
    private _lectorDisquette: LectorDisquette;
    private _tarjetaSonido: TarjetaSonido;
    private _tarjetaVideo: TarjetaVideo;
    private _bateria: Bateria;

    constructor(serial: string, marca: string, discoDuro: DiscoDuro, tarjetaMadre: MotherBoard, tarjetaMemoria: Ram, fuente: Fuente, procesador: Procesador, disipador: Disipador) {
        super(serial, marca);
        this._discoDuro = discoDuro;
        this._tarjetaMadre = tarjetaMadre;
        this._tarjetaMemoria = tarjetaMemoria;
        this._fuente = fuente;
        this._procesador = procesador;
        this._disipador = disipador;
    }


    get discoDuro(): DiscoDuro {
        return this._discoDuro;
    }

    set discoDuro(value: DiscoDuro) {
        this._discoDuro = value;
    }

    get tarjetaMadre(): MotherBoard {
        return this._tarjetaMadre;
    }

    set tarjetaMadre(value: MotherBoard) {
        this._tarjetaMadre = value;
    }

    get tarjetaMemoria(): Ram {
        return this._tarjetaMemoria;
    }

    set tarjetaMemoria(value: Ram) {
        this._tarjetaMemoria = value;
    }

    get fuente(): Fuente {
        return this._fuente;
    }

    set fuente(value: Fuente) {
        this._fuente = value;
    }

    get procesador(): Procesador {
        return this._procesador;
    }

    set procesador(value: Procesador) {
        this._procesador = value;
    }

    get disipador(): Disipador {
        return this._disipador;
    }

    set disipador(value: Disipador) {
        this._disipador = value;
    }

    get lectorCD(): LectorCd {
        return this._lectorCD;
    }

    set lectorCD(value: LectorCd) {
        this._lectorCD = value;
    }

    get lectorDVD(): LectorDvd {
        return this._lectorDVD;
    }

    set lectorDVD(value: LectorDvd) {
        this._lectorDVD = value;
    }

    get lectorBR(): LectorBR {
        return this._lectorBR;
    }

    set lectorBR(value: LectorBR) {
        this._lectorBR = value;
    }

    get lectorDisquette(): LectorDisquette {
        return this._lectorDisquette;
    }

    set lectorDisquette(value: LectorDisquette) {
        this._lectorDisquette = value;
    }

    get tarjetaSonido(): TarjetaSonido {
        return this._tarjetaSonido;
    }

    set tarjetaSonido(value: TarjetaSonido) {
        this._tarjetaSonido = value;
    }

    get tarjetaVideo(): TarjetaVideo {
        return this._tarjetaVideo;
    }

    set tarjetaVideo(value: TarjetaVideo) {
        this._tarjetaVideo = value;
    }

    get bateria(): Bateria {
        return this._bateria;
    }

    set bateria(value: Bateria) {
        this._bateria = value;
    }


    toString(): string {
        return "";
    }
}

