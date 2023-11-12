import {Solicitacao} from "./solicitacao";
import {Notificacao} from "./notificacao";
import {Postagem} from "./postagem";

export class Usuario {
  constructor(
    public id: string,
    public nickname: string, //Não pode conter espaços.
    public senha: string,
    public link: string = '',
    public nome: string,
    public email: string,
    public postagens: Postagem[] = [],
    public seguidores: Usuario[] = [],
    public seguindo: Usuario[] = [],
    public solicitacoes: Solicitacao[] = [],
    public notificacoes: Notificacao[] = [],
    public logado: boolean = false) {
    this.link = `www.journal.app/user/${nickname}`;
  }

  /*get nickname(): string {
    return this.nickname;
  }
  set nickname(novoNickname: string) {
    this.nickname = novoNickname;
    this.link = this.updateLink(novoNickname); //Caso o usuário defina um novo nickname seu link é atualizado junto.
  }

  get senha(): string {
    return this._senha;
  }
  set senha(novaSenha: string) {
    this._senha = novaSenha;
  }

  get link(): string {
    return this._link;
  }
  set link(newLink: string) {
    this._link = newLink;
    this._nickname = this.updateLink(newLink);
  }

  updateLink(novoNickname: string) {
    return `www.journal.app/user/${novoNickname}`;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get email(): string {
    return this._email;
  }
  set email(novoEmail: string) {
    this._email = novoEmail;
  }

  get postagens(): Postagem[] {
    return this._postagens;
  }


  set postagens(value: Postagem[]) {
    this._postagens = value;
  } //Acho que não vai ser necessário.*/

  countPostagens(): number {
    return this.postagens.length;
  }

  addPostagem(novaPostagem: Postagem) {
    this.postagens.push(novaPostagem);
  }

  delPostagem(postADeletar: Postagem) {
    const index = this.postagens.findIndex((postagem: Postagem) => postagem === postADeletar);
    if (index !== -1) {
      this.postagens.splice(index, 1);
    }
  }

  /*get seguidores(): Usuario[] {
    return this.seguidores;
  }
  set seguidores(value: Usuario[]) {
    this.seguidores = value;
  } //Acho que não vai ser necessário.*/

  addSeguidor (novoSeguidor: Usuario) {
    this.seguidores.push(novoSeguidor);
  }

  delSeguidor (seguidorADeletar: Usuario) {
    const index = this.seguidores.findIndex((usuario) => usuario === seguidorADeletar);
    if (index !== -1) {
      this.seguidores.splice(index, 1);
    }
  }

  /*get seguindo(): Usuario[] {
    return this.seguindo;
  }
  set seguindo(value: Usuario[]) {
    this.seguindo = value;
  } //Acho que não vai ser necessário.*/

  seguir (novoUsuario: Usuario) {
    this.seguindo.push(novoUsuario);
  }

  deixarDeSeguir (seguidoADeletar: Usuario) {
    const index = this.seguindo.findIndex((usuario) => usuario === seguidoADeletar);
    if (index !== -1) {
      this.seguindo.splice(index, 1);
    }
  }

  /*get solicitacoes(): Solicitacao[] {
    return this.solicitacoes;
  }
  set solicitacoes(value: Solicitacao[]) {
    this.solicitacoes = value;
  } //Acho que não vai ser necessário.*/

  addSolicitacao(novaSolicitacao: Solicitacao) {
    this.solicitacoes.push(novaSolicitacao);
  }

  delSolicitacao(SolADeletar: Solicitacao) {
    const index = this.solicitacoes.findIndex((solicitacao) => solicitacao === SolADeletar);
    if (index !== -1) {
      this.solicitacoes.splice(index, 1);
    }
  }

  /*get notificacoes(): Notificacao[] {
    return this.notificacoes;
  }
  set notificacoes(value: Notificacao[]) {
    this.notificacoes = value;
  } //Acho que não vai ser necessário.*/

  addNotificacao(novaNotificacao: Notificacao) {
    this.notificacoes.push(novaNotificacao);
  }

  delNotificacao(notADeletar: Notificacao) {
    const index = this.notificacoes.findIndex((notificacao) => notificacao === notADeletar);
    if (index !== -1) {
      this.notificacoes.splice(index, 1);
    }
  }

  /*get logado(): boolean {
    return this.logado;
  }
  set logado(value: boolean) {
    this.logado = value;
  } //Utilizar ao fazer o login (recebe true), ou logout (recebe false).*/

  toString(): string {
    return `
    Nickname: ${this.nickname}
    Senha: ${this.senha}
    Link: ${this.link}
    Nome: ${this.nome}
    Email: ${this.email}
    Postagens: ${this.postagens.length}
    Seguidores: ${this.seguidores.length}
    Seguindo: ${this.seguindo.length}
    Solicitações: ${this.solicitacoes.length}
    Notificações: ${this.notificacoes.length}
    Logado: ${this.logado}
    `
  }

}
