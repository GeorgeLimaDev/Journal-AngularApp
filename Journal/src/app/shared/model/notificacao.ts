import {Solicitacao} from "./solicitacao";

export class Notificacao {
  constructor(
    private _Timestamp: string,
    private _Lida: boolean
  ) {}

  get Timestamp(): string {
    return this._Timestamp;
  }
  set Timestamp(novoTimestamp: string) {
    this._Timestamp = novoTimestamp;
  }

  // Getter and Setter methods for _Lida
  get Lida(): boolean {
    return this._Lida;
  }
  set Lida(novoLida: boolean) {
    this._Lida = novoLida;
  }

}
