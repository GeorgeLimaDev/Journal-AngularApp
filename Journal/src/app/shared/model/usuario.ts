import {Solicitacao} from "./solicitacao";
import {Notificacao} from "./notificacao";

//Pendente: fazer métodos add, del e loc para os atributos de arrays.

export class Usuario {
  constructor(
    private _nickname: string,
    private _senha: string,
    private _link: string,
    private _nome: string,
    private _email: string,
    private _seguidores: Usuario[],
    private _seguindo: Usuario[],
    private _solicitacoes: Solicitacao[],
    private _notificacoes: Notificacao[],
    private _logado: boolean = false) {
    this._link = `www.journal.app/user/${_link}`;
  }

  get nickname(): string {
    return this._nickname;
  }
  set nickname(novoNickname: string) {
    this._nickname = novoNickname;
    this.updateLink(novoNickname);
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
  }

  updateLink(novoNickname: string) {
    this._link = `www.journal.app/user/${novoNickname}`;
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

  get seguidores(): Usuario[] {
    return this._seguidores;
  }
  set seguidores(value: Usuario[]) {
    this._seguidores = value;
  }

  get seguindo(): Usuario[] {
    return this._seguindo;
  }
  set seguindo(value: Usuario[]) {
    this._seguindo = value;
  }

  get solicitacoes(): Solicitacao[] {
    return this._solicitacoes;
  }
  set solicitacoes(value: Solicitacao[]) {
    this._solicitacoes = value;
  }

  get notificacoes(): Notificacao[] {
    return this._notificacoes;
  }
  set notificacoes(value: Notificacao[]) {
    this._notificacoes = value;
  }

  get logado(): boolean {
    return this._logado;
  }
  set logado(value: boolean) {
    this._logado = value;
  }

  login(estado: boolean) {
    this._logado = true;
  }

  logout(estado: boolean) {
    this._logado = false;
  }

}
