import { HttpClient } from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Usuario} from "../model/usuario";
import {Postagem} from "../model/postagem";

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService implements OnInit{
  URL_usuarios: string;
  private currentUserSubject: Usuario;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new Usuario("", undefined);
    this.URL_usuarios = 'http://localhost:3000/usuarios';
  }

  ngOnInit() {

  }

  setCurrentUser(usuario: Usuario) {
    this.currentUserSubject = usuario;
  }

  public getCurrentUser(): Usuario {
    return this.currentUserSubject;
  }

  remover(usuario: Usuario) {
    window.alert(`the user ${usuario.nickname} was deleted!`);
    return this.httpClient.delete(`${this.URL_usuarios}/${usuario.id}`).subscribe(usuarioRemovido => {});
  }

  editar(usuario: Usuario) {
    window.alert(`Values from ${usuario.nickname} were successfully saved!`);
    return this.httpClient.put<Usuario>(`${this.URL_usuarios}/${usuario.id}`, usuario).subscribe(usuarioRemovido => {});
  }

 }
