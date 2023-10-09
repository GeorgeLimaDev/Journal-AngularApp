import {Usuario} from "./usuario";
import {Comentario} from "./comentario";

export class Postagem {
  constructor(
    private _autor: Usuario,
    private _link: string = '',
    private _titulo: string,
    private _conteudo: string,
    private _timestamp: string,
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
    this._link = this.linkPost();
  }

  linkPost() {
    const numeroDePosts = this._autor.postagens.length;
    if (numeroDePosts === 0) {
      return `www.journal.app/${this._autor.nome}/1`;
    }
    return `www.journal.app/${this._autor.nome}/${numeroDePosts+1}`
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

}
