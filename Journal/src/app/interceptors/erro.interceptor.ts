import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError} from 'rxjs';
import { MensagensService } from "../shared/services/mensagens.service";

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagensService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(resposta => this.trataRespostaErro(resposta))
    );
  }
  trataRespostaErro(resposta: object): Observable<HttpEvent<any>>{

    if(resposta instanceof HttpErrorResponse){
      this.mensagemService.error('Erro: ' + resposta.message);
    }
    return throwError(resposta);
  }
}
