import { Component, OnInit } from '@angular/core';
import { UsuarioLogadoService } from '../services/usuario-logado.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-perfil-feed',
  templateUrl: './perfil-feed.component.html',
  styleUrls: ['./perfil-feed.component.scss'],
})
export class PerfilFeedComponent implements OnInit {
  currentUserSubject: Usuario | null;

  constructor(private usuarioLogadoService: UsuarioLogadoService) {
    this.currentUserSubject = this.fetchUsuarioLogado();
  }

  ngOnInit(): void {

  }

  fetchUsuarioLogado() {
    console.log(this.usuarioLogadoService.getCurrentUser());
    return this.usuarioLogadoService.getCurrentUser();
  }
}
