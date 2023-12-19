import {Postagem} from "./postagem";

export class Usuario {
  constructor(
    public id: string,
    public nickname: string,
    public senha: string,
    public link: string = '',
    public nome: string,
    public email: string,
    public avatar: string = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    public postagens: Postagem[] = [],) {
    this.link = `www.journal.app/user/${nickname}`;
  }

}
