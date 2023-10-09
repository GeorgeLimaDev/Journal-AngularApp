import {Usuario} from "./usuario";
import {Notificacao} from "./notificacao";

export class Comentario extends Notificacao {
  constructor(
    private _autor: Usuario,
    private _conteudo: string,
    private _timestamp: string,
    private _ComLido: boolean
  ) {super(_timestamp, _ComLido)}

  get autor(): Usuario {
    return this._autor;
  }
  set autor(novoAutor: Usuario) {
    this._autor = novoAutor;
  }

  get conteudo(): string {
    return this._conteudo;
  }
  set conteudo(novoConteudo: string) {
    this._conteudo = novoConteudo;
  }

}
