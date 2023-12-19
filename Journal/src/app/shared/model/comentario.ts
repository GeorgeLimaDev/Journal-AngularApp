import {Usuario} from "./usuario";


export class Comentario {
  constructor(
    private _autor: Usuario,
    private _conteudo: string,
    private _timestamp: string,
    private _ComLido: boolean
  ) {

  }

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
