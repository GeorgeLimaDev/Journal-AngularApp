import {Usuario} from "./usuario";
import {Notificacao} from "./notificacao";

export class Solicitacao extends Notificacao {
  constructor(
    private _solicitante: Usuario,
    private _solicitado: Usuario,
    private _status: string, //Pode ser: Pendente, aceita, recusada.
    private _SolTimestamp: string,
    private _SolLida: boolean
  ) {super(_SolTimestamp, _SolLida)}

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
    const statusPossiveis = ['pendente', 'aceita', 'recusada'];
    if (statusPossiveis.includes(novoStatus)) {
      this._status = novoStatus;
    }
  }

}
