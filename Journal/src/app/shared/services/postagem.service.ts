import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Postagem } from "../model/postagem";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  URL_postagens = 'http://localhost:3000/postagens';

  // Subject para notificar sobre inserção de nova postagem
  private postagemInseridaSubject: Subject<Postagem> = new Subject<Postagem>();
  postagemInserida$: Observable<Postagem> = this.postagemInseridaSubject.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  inserir(postagem: Postagem): Observable<Postagem> {
    return this.httpClient.post<Postagem>(this.URL_postagens, postagem)
      .pipe(
        // Ao completar a inserção com sucesso, notificar sobre a nova postagem inserida
        tap((novaPostagem: Postagem) => this.postagemInseridaSubject.next(novaPostagem))
      );
  }

  listar(): Observable<Postagem[]> {
    return this.httpClient.get<Postagem[]>(this.URL_postagens);
  }
}
