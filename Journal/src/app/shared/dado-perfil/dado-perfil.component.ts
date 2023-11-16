import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from '../services/usuario-logado.service';
import { Usuario } from '../model/usuario';
import {PostagemService} from "../services/postagem.service";

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
    console.log(this.usuarioLogadoService.getCurrentUser());
    return this.usuarioLogadoService.getCurrentUser();
  }
}

