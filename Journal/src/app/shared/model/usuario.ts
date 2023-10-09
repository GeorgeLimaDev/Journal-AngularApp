import {Solicitacao} from "./solicitacao";
import {Notificacao} from "./notificacao";
import {Postagem} from "./postagem";

export class Usuario {
  constructor(
    private _nickname: string,
    private _senha: string,
    private _link: string,
    private _nome: string,
    private _email: string,
    private _postagens: Postagem[] = [],
    private _seguidores: Usuario[] = [],
    private _seguindo: Usuario[] = [],
    private _solicitacoes: Solicitacao[] = [],
    private _notificacoes: Notificacao[] = [],
    private _logado: boolean = false) {
    this._link = `www.journal.app/user/${_nickname}`;
  }

  get nickname(): string {
    return this._nickname;
  }
  set nickname(novoNickname: string) {
    this._nickname = novoNickname;
    this._link = this.updateLink(novoNickname); //Caso o usuário defina um novo nickname seu link é atualizado junto.
  } //É possível fazer a operação da linha anterior usando o método set padrão de _link?

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
  } //Acho que não vai ser necessário.

  addPostagem(novaPostagem: Postagem) {
    this._postagens.push(novaPostagem);
  }

  delPostagem(postADeletar: Postagem) {
    const index = this._postagens.findIndex((postagem: Postagem) => postagem === postADeletar);
    if (index !== -1) {
      this._postagens.splice(index, 1);
    }
  }

  get seguidores(): Usuario[] {
    return this._seguidores;
  }
  set seguidores(value: Usuario[]) {
    this._seguidores = value;
  } //Acho que não vai ser necessário.

  addSeguidor (novoSeguidor: Usuario) {
    this._seguidores.push(novoSeguidor);
  }

  delSeguidor (seguidorADeletar: Usuario) {
    const index = this._seguidores.findIndex((usuario) => usuario === seguidorADeletar);
    if (index !== -1) {
      this._seguidores.splice(index, 1);
    }
  }

  get seguindo(): Usuario[] {
    return this._seguindo;
  }
  set seguindo(value: Usuario[]) {
    this._seguindo = value;
  } //Acho que não vai ser necessário.

  seguir (novoUsuario: Usuario) {
    this._seguindo.push(novoUsuario);
  }

  deixarDeSeguir (seguidoADeletar: Usuario) {
    const index = this._seguindo.findIndex((usuario) => usuario === seguidoADeletar);
    if (index !== -1) {
      this._seguindo.splice(index, 1);
    }
  }

  get solicitacoes(): Solicitacao[] {
    return this._solicitacoes;
  }
  set solicitacoes(value: Solicitacao[]) {
    this._solicitacoes = value;
  } //Acho que não vai ser necessário.

  addSolicitacao(novaSolicitacao: Solicitacao) {
    this._solicitacoes.push(novaSolicitacao);
  }

  delSolicitacao(SolADeletar: Solicitacao) {
    const index = this._solicitacoes.findIndex((solicitacao) => solicitacao === SolADeletar);
    if (index !== -1) {
      this._solicitacoes.splice(index, 1);
    }
  }

  get notificacoes(): Notificacao[] {
    return this._notificacoes;
  }
  set notificacoes(value: Notificacao[]) {
    this._notificacoes = value;
  } //Acho que não vai ser necessário.

  addNotificacao(novaNotificacao: Notificacao) {
    this._notificacoes.push(novaNotificacao);
  }

  delNotificacao(notADeletar: Notificacao) {
    const index = this._notificacoes.findIndex((notificacao) => notificacao === notADeletar);
    if (index !== -1) {
      this._notificacoes.splice(index, 1);
    }
  }

  get logado(): boolean {
    return this._logado;
  }
  set logado(value: boolean) {
    this._logado = value;
  } //Utilizar ao fazer o login (rece true) ou logout (recebe false).

}
