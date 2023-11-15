import { Injectable } from '@angular/core';
import {UsuarioService} from "./usuario.service"
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsuarioLogadoService} from "./usuario-logado.service"
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient, private router: Router, private usersService: UsuarioService, private usuarioLogadoService: UsuarioLogadoService) {
  }

  login(nickname:string, senha:string){
    let usuarioValidado: Usuario | null = null;
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
