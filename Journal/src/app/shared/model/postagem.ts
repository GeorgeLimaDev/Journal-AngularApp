import {Usuario} from "./usuario";
import {Comentario} from "./comentario";

export class Postagem {
  constructor(
    private _autor: Usuario,
    private _link: string = '',
    private _titulo: string,
    private _conteudo: string,
    private _timestamp: number,
    private _comentarios: Comentario[] = []
  ) {
    this._link = this.linkPost();
  }

  get autor(): Usuario {
    return this._autor;
  }
  set autor(novoAutor: Usuario) {
    this._autor = novoAutor;
  }

  get link() {
    return this._link;
  }

  set link(novoLink) {
    this._link = novoLink;
  }

  linkPost() {
    return `www.journal.app/${this._autor.nickname}/${this._autor.countPostagens()+1}`
  }

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

  get timestamp(): number {
    return this._timestamp;
  }
  set timestamp(novoTimestamp: number) {
    this._timestamp = novoTimestamp;
  }

  get comentarios(): Comentario[] {
    return this._comentarios;
  }
  set comentarios(value: Comentario[]) {
    this._comentarios = value;
  } //Acho que não vai ser necessário.

  addComentario(novoComentario: Comentario) {
    this._comentarios.push(novoComentario);
  }

  delComentario(comentarioADeletar: Comentario) {
    const index = this._comentarios.findIndex((comentario) => comentario === comentarioADeletar);
    if (index !== -1) {
      this._comentarios.splice(index, 1);
    }
  }

  toString(): string {
    return `
    Autor: ${this.autor.nome}
    Link: ${this.link}
    Titulo: ${this.titulo}
    Conteudo: ${this.conteudo}
    Timestamp: ${this.timestamp}
    Comentários: ${this.comentarios.length}
    `
  }

}
