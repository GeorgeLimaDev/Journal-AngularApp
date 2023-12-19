import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Postagem } from "../model/postagem";
import {Observable, Subject, tap} from "rxjs";
import {UsuarioLogadoService} from "./usuario-logado.service";

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  URL_postagens = 'http://localhost:8080/postagens';
  private postagemInseridaSubject: Subject<Postagem> = new Subject<Postagem>();
  postagemInserida$: Observable<Postagem> = this.postagemInseridaSubject.asObservable();
  private postagensUsuario: Postagem[] = [];

  constructor(private httpClient: HttpClient, private usuarioLogado:UsuarioLogadoService) {
  }

  inserir(postagem: Postagem): Observable<Postagem> {
    return this.httpClient.post<Postagem>(this.URL_postagens, postagem)
      .pipe(
        tap((novaPostagem: Postagem) => this.postagemInseridaSubject.next(novaPostagem))
      );
  }

  listar(): Observable<Postagem[]> {
    return this.httpClient.get<Postagem[]>(this.URL_postagens);
  }

 //  listarPorId(){
  //  //    let arrayTeste = []
  //  //   this.listar().subscribe(postagens => {
  //  //     console.log( postagens.filter(postagem => postagem.autor.id === this.usuarioLogado.getCurrentUser().id))
  //  //     postagens.filter(postagem => postagem.autor.id === this.usuarioLogado.getCurrentUser().id).length;
  //  //   });
  //  //
  //  // }

}
