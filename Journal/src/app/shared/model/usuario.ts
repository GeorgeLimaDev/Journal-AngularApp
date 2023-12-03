import {Solicitacao} from "./solicitacao";
import {Notificacao} from "./notificacao";
import {Postagem} from "./postagem";

export class Usuario {

    id?: string;
    nickname?: string;
    senha?: string;
    link: string = '';
    nome?: string;
    email?: string;
    avatar: string = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    postagens: Postagem[] = [];
    seguidores: Usuario[] = [];
    seguindo: Usuario[] = [];
    solicitacoes: Solicitacao[] = [];
    notificacoes: Notificacao[] = [];
    logado: boolean = false;


  constructor(id?: string, usuario: Usuario = {nickname: '', senha: '', link: '', nome: '', email: '', avatar: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg', postagens: [], seguidores: [], seguindo: [], solicitacoes: [], notificacoes: [], logado: false}) {
    this.id = id;
    this.nickname = usuario.nickname;
    this.senha = usuario.senha;
    this.link = usuario.link;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.avatar = usuario.avatar;
    this.postagens = usuario.postagens;
    this.seguidores = usuario.seguidores;
    this.seguindo = usuario.seguindo;
    this.solicitacoes = usuario.solicitacoes;
    this.notificacoes = usuario.notificacoes;
    this.logado = usuario.logado;
  }

  /*countPostagens(): number {
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

  addSeguidor (novoSeguidor: Usuario) {
    this.seguidores.push(novoSeguidor);
  }

  delSeguidor (seguidorADeletar: Usuario) {
    const index = this.seguidores.findIndex((usuario) => usuario === seguidorADeletar);
    if (index !== -1) {
      this.seguidores.splice(index, 1);
    }
  }

  seguir (novoUsuario: Usuario) {
    this.seguindo.push(novoUsuario);
  }

  deixarDeSeguir (seguidoADeletar: Usuario) {
    const index = this.seguindo.findIndex((usuario) => usuario === seguidoADeletar);
    if (index !== -1) {
      this.seguindo.splice(index, 1);
    }
  }

  addSolicitacao(novaSolicitacao: Solicitacao) {
    this.solicitacoes.push(novaSolicitacao);
  }

  delSolicitacao(SolADeletar: Solicitacao) {
    const index = this.solicitacoes.findIndex((solicitacao) => solicitacao === SolADeletar);
    if (index !== -1) {
      this.solicitacoes.splice(index, 1);
    }
  }

  addNotificacao(novaNotificacao: Notificacao) {
    this.notificacoes.push(novaNotificacao);
  }

  delNotificacao(notADeletar: Notificacao) {
    const index = this.notificacoes.findIndex((notificacao) => notificacao === notADeletar);
    if (index !== -1) {
      this.notificacoes.splice(index, 1);
    }
  }*/

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
