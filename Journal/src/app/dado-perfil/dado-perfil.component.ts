import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from '../shared/services/usuario-logado.service';
import { Usuario } from '../shared/model/usuario';
import {PostagemService} from "../shared/services/postagem.service";

@Component({
  selector: 'app-dado-perfil',
  templateUrl: './dado-perfil.component.html',
  styleUrls: ['./dado-perfil.component.scss']
})
export class DadoPerfilComponent implements OnInit {
  currentUserSubject: Usuario | null;

  constructor(private usuarioLogadoService: UsuarioLogadoService, private postagensService: PostagemService) {
    this.currentUserSubject = this.fetchUsuarioLogado();
  }

  ngOnInit(): void {

  }

  fetchUsuarioLogado() {
    return this.usuarioLogadoService.getCurrentUser();
  }

}
