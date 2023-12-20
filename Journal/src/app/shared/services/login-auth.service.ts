import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioLogadoService} from "./usuario-logado.service"
import {Usuario} from "../model/usuario";
import {UsuarioService} from "./usuario.service";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private router: Router, private usersService: UsuarioService, private usuarioLogadoService: UsuarioLogadoService) {
  }

  login(nickname:string, senha:string){
    let usuarioValidado: Usuario;
    this.usersService.listar().subscribe(usuariosListados => {
      usuariosListados.map((usuarioAtual) => {
        if(usuarioAtual.nickname == nickname && usuarioAtual.senha == senha) {
          usuarioValidado = usuarioAtual;
          this.usuarioLogadoService.setCurrentUser(usuarioValidado);
          this.router.navigate(['/feed']);
      }
    })
      if(!usuarioValidado){
        window.alert("Either Nickname or password is incorrect.");
      }
  })

}

logoff(){
  this.router.navigate(['']).then(r => {})
  }

}
