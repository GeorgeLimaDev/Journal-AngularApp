import {Usuario} from "./usuario";
import {Notificacao} from "./notificacao";

export class Comentario extends Notificacao{
  constructor(
    private _autor: Usuario,
    private _conteudo: string,
    private _timestamp: string,
    private _ComTimestamp: string,
    private _ComLido: boolean
  ) {
    super(_ComTimestamp, _ComLido);
  }

  // Getter and Setter methods for _autor
  get autor(): Usuario {
    return this._autor;
  }
  set autor(novoAutor: Usuario) {
    this._autor = novoAutor;
  }

  getNomeAutor() {
    return this._autor.nickname;
  }

  setNomeAutor(): string {
    let nomeAutor = this._autor.nickname;
    return nomeAutor;
  }

  get conteudo(): string {
    return this._conteudo;
  }
  set conteudo(novoConteudo: string) {
    this._conteudo = novoConteudo;
  }

  get timestamp(): string {
    return this._timestamp;
  }
  set timestamp(novoTimestamp: string) {
    this._timestamp = novoTimestamp;
  }

  get ComTimestamp(): string {
    return this._ComTimestamp;
  }
  set ComTimestamp(novoComTimestamp: string) {
    this._ComTimestamp = novoComTimestamp;
  }

  get ComLido(): boolean {
    return this._ComLido;
  }
  set ComLido(novoComLido: boolean) {
    this._ComLido = novoComLido;
  }

}
