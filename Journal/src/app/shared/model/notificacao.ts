import {Solicitacao} from "./solicitacao";

export class Notificacao {
  constructor(
    private _Timestamp: string,
    private _Lida: boolean = false
  ) {}

  get Timestamp(): string {
    return this._Timestamp;
  }
  set Timestamp(novoTimestamp: string) {
    this._Timestamp = novoTimestamp;
  }

  get Lida(): boolean {
    return this._Lida;
  }
  set Lida(lida: boolean) {
    this._Lida = lida;
  } //Usar quando o usuário clicar em uma notificação, ela vai receber lida = true.

}
