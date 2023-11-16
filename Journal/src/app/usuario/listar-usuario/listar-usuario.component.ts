import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service";
import {HttpClient} from "@angular/common/http";
import { UsuarioLogadoService } from "../../shared/services/usuario-logado.service";

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {
  URL_usuarios: 'http://localhost:3000/usuarios';
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = [];
    this.URL_usuarios = 'http://localhost:3000/usuarios';
  }

  ngOnInit() {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  listar(): Usuario[] {
    this.usuarioService.listar().subscribe(
      usuarios => {this.usuarios = usuarios
      return this.usuarios }
    );
    return [];
  }

}
