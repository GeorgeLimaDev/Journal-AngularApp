import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";
import {USUARIOS} from "../model/USUARIOS";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[];

  constructor() {
    this.usuarios = USUARIOS;
  }

  inserir(usuario: Usuario) {
    //Add lógica para validar o usuário antes da inserção
    this.usuarios.push(usuario);
  }
  listar():Usuario[] {
    return this.usuarios;
  }
}
