import {Usuario} from "./usuario";
import {Comentario} from "./comentario";


export class Postagem {

  id?: string;
  autor?: string;
  nickAutor?: string;
  avatarAutor?: string;
  link: string = '';
  conteudo?: string;
  privacidade?: string;
  timestamp?: number;
  comentarios: Comentario[] = [];

  constructor(id?: string, postagem: Postagem = {autor: '', nickAutor: '', avatarAutor: '', link: '', conteudo: '', privacidade: '', timestamp: 0, comentarios: []}) {
    this.id = id;
    this.autor = postagem.autor;
    this.conteudo = postagem.conteudo;
    this.privacidade = postagem.privacidade;
    this.timestamp = postagem.timestamp;
    this.comentarios = postagem.comentarios;
    this.link = "www.journal.app/post";
  }

  /*addComentario(novoComentario: Comentario) {
    this.comentarios.push(novoComentario);
  }

  delComentario(comentarioADeletar: Comentario) {
    const index = this.comentarios.findIndex((comentario) => comentario === comentarioADeletar);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
    }
  }*/

  toString(): string {
    // @ts-ignore
    return `
    Autor: ${this.autor}
    Link: ${this.link}
    Conteudo: ${this.conteudo}
    Privacidade: ${this.privacidade}
    Timestamp: ${this.timestamp}
    Comentários: ${this.comentarios.length}
    `
  }

}
