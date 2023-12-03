import { Component } from '@angular/core';
import { UsuarioLogadoService } from "../services/usuario-logado.service";
import { Router } from "@angular/router";
import {Usuario} from "../model/usuario";
import {UsuarioFirestoreService} from "../services/usuario-firestore.service";

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

  constructor(public usuarioLogado: UsuarioLogadoService, private router: Router, private usuarioFirestore: UsuarioFirestoreService) {
    // @ts-ignore
    this.novonickname = usuarioLogado.getCurrentUser().nickname;
    // @ts-ignore
    this.novasenha = usuarioLogado.getCurrentUser().senha;
    // @ts-ignore
    this.novonome = usuarioLogado.getCurrentUser().nome;
    const idUsuario = this.usuarioLogado.getCurrentUser().id;
    this.usuarioLogado.getCurrentUser().senha = this.novasenha;
    this.usuarioLogado.getCurrentUser().nome = this.novonome;
    this.usuarioLogado.getCurrentUser().nickname = this.novonickname;
    this.usuarioEditado = new Usuario(idUsuario, this.usuarioLogado.getCurrentUser())
  }
  remover(): void {
    this.usuarioFirestore.apagar(this.usuarioLogado.getCurrentUser().id);
    this.router.navigate(['']).then();
  }

  editar(): void {
    this.usuarioLogado.setCurrentUser(this.usuarioEditado);
    this.usuarioFirestore.atualizar(this.usuarioEditado);
  }

}
