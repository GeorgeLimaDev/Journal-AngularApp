import {Usuario} from "./usuario";
import {Comentario} from "./comentario";

export class Postagem {
  constructor(
    public id: string,
    public autor: Usuario,
    public link: string = '',
    public conteudo: string,
    public timestamp: number,
  ) {

  }

}
