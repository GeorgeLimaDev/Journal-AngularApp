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
    this.URL_usuarios = 'http://localhost:3000/usuarios';
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    //Add lógica para validar o usuário antes da inserção
    return this.httpClient.post<Usuario>(this.URL_usuarios, usuario);
  }
  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_usuarios);
  }

}
