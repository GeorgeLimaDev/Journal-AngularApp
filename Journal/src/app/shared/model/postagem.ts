import {Usuario} from "./usuario";
import {Comentario} from "./comentario";

export class Postagem {
  constructor(
    public id: string,
    public autor: Usuario,
    public link: string = '',
    public conteudo: string,
    public privacidade: string,
    public timestamp: number,
    public comentarios: Comentario[] = []
  ) {
    this.link = this.linkPost();
  }

  /*get autor(): Usuario {
    return this.autor;
  }
  set autor(novoAutor: Usuario) {
    this.autor = novoAutor;
  }

  get link() {
    return this.link;
  }

  set link(novoLink) {
    this._ink = novoLink;
  }*/

  linkPost() {
    return `www.journal.app/${this.autor.nickname}/${this.autor.countPostagens()+1}`
  }

  /*get titulo(): string {
    return this.titulo;
  }
  set titulo(novoTitulo: string) {
    this.titulo = novoTitulo;
  }

  get conteudo(): string {
    return this.conteudo;
  }
  set conteudo(novoConteudo: string) {
    this.conteudo = novoConteudo;
  }

  get timestamp(): number {
    return this.timestamp;
  }
  set timestamp(novoTimestamp: number) {
    this.timestamp = novoTimestamp;
  }

  get comentarios(): Comentario[] {
    return this.comentarios;
  }
  set comentarios(value: Comentario[]) {
    this.comentarios = value;
  } //Acho que não vai ser necessário.*/

  addComentario(novoComentario: Comentario) {
    this.comentarios.push(novoComentario);
  }

  delComentario(comentarioADeletar: Comentario) {
    const index = this.comentarios.findIndex((comentario) => comentario === comentarioADeletar);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
    }
  }

  toString(): string {
    return `
    Autor: ${this.autor.nome}
    Link: ${this.link}
    Conteudo: ${this.conteudo}
    Privacidade: ${this.privacidade}
    Timestamp: ${this.timestamp}
    Comentários: ${this.comentarios.length}
    `
  }

}
