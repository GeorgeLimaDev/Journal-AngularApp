import {Usuario} from "./usuario";
import {Comentario} from "./comentario";

//Pendente: fazer métodos add, del e loc para os atributos de arrays.

export class Postagem {
  constructor(
    private _autor: Usuario,
    private _link: string,
    private _titulo: string,
    private _conteudo: string,
    private _timestamp: string,
    private _comentarios: Comentario[]
  ) {
    this._link = `www.journal.app/${_autor.nickname}/post` //terminar com um número auto-incrementado.
  }

  get autor(): Usuario {
    return this._autor;
  }
  set autor(novoAutor: Usuario) {
    this._autor = novoAutor;
  }

  get link(): string {
    return this._link;
  }
  set link(novoLink: string) {
    this._link = novoLink;
  } //Verificar implementação do auto-incremento.

  get titulo(): string {
    return this._titulo;
  }
  set titulo(novoTitulo: string) {
    this._titulo = novoTitulo;
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

  get comentarios(): Comentario[] {
    return this._comentarios;
  }
  set comentarios(value: Comentario[]) {
    this._comentarios = value;
  }

}
