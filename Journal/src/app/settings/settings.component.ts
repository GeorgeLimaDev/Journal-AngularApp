import { Component } from '@angular/core';
import { UsuarioLogadoService } from "../shared/services/usuario-logado.service";
import { Router } from "@angular/router";
import {Usuario} from "../shared/model/usuario";
import {UsuarioService} from "../shared/services/usuario.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  novonickname: string;
  novasenha: string;
  novonome: string;
  usuarioEditado: Usuario;

  constructor(public usuarioLogado: UsuarioLogadoService, private router: Router, private usuarioService: UsuarioService) {
    // @ts-ignore
    this.novonickname = usuarioLogado.getCurrentUser().nickname;
    // @ts-ignore
    this.novasenha = usuarioLogado.getCurrentUser().senha;
    // @ts-ignore
    this.novonome = usuarioLogado.getCurrentUser().nome;
    const idUsuario = this.usuarioLogado.getCurrentUser().id;
    this.usuarioLogado.getCurrentUser().id = idUsuario;
    this.usuarioLogado.getCurrentUser().senha = this.novasenha;
    this.usuarioLogado.getCurrentUser().nome = this.novonome;
    this.usuarioLogado.getCurrentUser().nickname = this.novonickname;
    this.usuarioEditado = new Usuario(idUsuario, this.usuarioLogado.getCurrentUser().nickname, this.usuarioLogado.getCurrentUser().senha,
      this.usuarioLogado.getCurrentUser().link, this.usuarioLogado.getCurrentUser().nome, this.usuarioLogado.getCurrentUser().email);
  }
  //remover(): void {
  //  this.usuarioService.apagar(this.usuarioLogado.getCurrentUser().id);
  //  this.router.navigate(['']).then();
  //}

  //editar(): void {
  //  this.usuarioLogado.setCurrentUser(this.usuarioEditado);
  //  this.usuarioService.atualizar(this.usuarioEditado);
  //}

}
