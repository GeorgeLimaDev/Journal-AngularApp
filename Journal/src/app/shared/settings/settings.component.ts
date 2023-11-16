import { Component } from '@angular/core';
import { UsuarioService } from "../services/usuario.service";
import { UsuarioLogadoService } from "../services/usuario-logado.service";
import { Router } from "@angular/router";
import { MantemUsuarioComponent } from "../../usuario/mantem-usuario/mantem-usuario.component";
import {Usuario} from "../model/usuario";

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

  constructor(private usuarioService: UsuarioService, public usuarioLogado: UsuarioLogadoService, private router: Router) {
    this.novonickname = usuarioLogado.getCurrentUser().nickname;
    this.novasenha = usuarioLogado.getCurrentUser().senha;
    this.novonome = usuarioLogado.getCurrentUser().nome;
    this.usuarioEditado = new Usuario(this.usuarioLogado.getCurrentUser().id, this.novonickname, this.novasenha, this.usuarioLogado.getCurrentUser().link, this.novonome, this.usuarioLogado.getCurrentUser().email, this.usuarioLogado.getCurrentUser().avatar)
  }
  remover(): void {
    this.usuarioLogado.remover(this.usuarioLogado.getCurrentUser());
    this.router.navigate(['']).then();
  }
  editar(): void {
    this.usuarioLogado.setCurrentUser(this.usuarioEditado);
    console.log(this.usuarioEditado);
    this.usuarioLogado.editar(this.usuarioEditado);
  }
}
