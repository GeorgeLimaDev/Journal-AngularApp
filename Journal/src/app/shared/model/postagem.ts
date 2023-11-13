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

  linkPost() {
    return `www.journal.app/${this.autor.nickname}/${this.autor.countPostagens()+1}`
  }

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
