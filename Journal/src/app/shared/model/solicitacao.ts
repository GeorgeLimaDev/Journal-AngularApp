import {Usuario} from "./usuario";
import {Notificacao} from "./notificacao";

export class Solicitacao extends Notificacao {
  constructor(
    private _solicitante: Usuario,
    private _solicitado: Usuario,
    private _status: string,
    private _SolTimestamp: string,
    private _SolLida: boolean

  ) {
    super(_SolTimestamp, _SolLida);
  }

  get solicitante(): Usuario {
    return this._solicitante;
  }
  set solicitante(novoSolicitante: Usuario) {
    this._solicitante = novoSolicitante;
  }

  get solicitado(): Usuario {
    return this._solicitado;
  }
  set solicitado(novoSolicitado: Usuario) {
    this._solicitado = novoSolicitado;
  }

  get status(): string {
    return this._status;
  }
  set status(novoStatus: string) {
    this._status = novoStatus;
  }

  get SolTimestamp(): string {
    return this._SolTimestamp;
  }
  set SolTimestamp(novoSolTimestamp: string) {
    this._SolTimestamp = novoSolTimestamp;
  }

  // Getter and Setter methods for _SolLida
  get SolLida(): boolean {
    return this._SolLida;
  }
  set SolLida(novoSolLida: boolean) {
    this._SolLida = novoSolLida;
  }

}
