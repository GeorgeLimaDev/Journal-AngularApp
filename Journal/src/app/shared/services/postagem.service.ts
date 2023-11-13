import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Postagem} from "../model/postagem";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  URL_postagens = 'http://localhost:3000/postagens';

  constructor(private httpClient: HttpClient) {
  }

  inserir(postagem: Postagem): Observable<Postagem>  {
    return this.httpClient.post<Postagem>(this.URL_postagens, postagem)
  }

  listar(): Observable<Postagem[]> {
    return this.httpClient.get<Postagem[]>(this.URL_postagens);
  }
}
