import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_usuarios: string;

  constructor(private httpClient: HttpClient) {
    this.URL_usuarios = 'http://localhost:8080/usuarios';
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_usuarios, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_usuarios);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_usuarios}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_usuarios}/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_usuarios}/${usuario.id}`, usuario);
  }

}
