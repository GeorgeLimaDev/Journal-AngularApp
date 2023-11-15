import { HttpClient } from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Usuario} from "../model/usuario";
import {LoginAuthService} from "./login-auth.service"

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService implements OnInit{
  private currentUserSubject: Usuario;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new Usuario("","","","","","", "");
  }

  ngOnInit() {

  }

  setCurrentUser(usuario: Usuario) {
    this.currentUserSubject = usuario;
  }
  public getCurrentUser(): Usuario {
    return this.currentUserSubject;
  }

}
