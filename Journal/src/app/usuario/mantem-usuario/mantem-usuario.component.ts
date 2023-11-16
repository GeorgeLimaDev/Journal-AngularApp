import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service";
import { UsuarioLogadoService } from "../../shared/services/usuario-logado.service";

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.scss']
})
export class MantemUsuarioComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService, public usuarioLogado: UsuarioLogadoService) {
    this.usuario = new Usuario("","","","","", "");
  }

  ngOnInit() {

  }

  addUsuario() {
      /*if (this.canEdit) {
        this.canEdit = false;
        this.userRegistering = new Usuario('', '', '', '', '');
      } else {*/
      this.usuarioService.inserir(this.usuario).subscribe(
          usuario => console.log(usuario)
      );
      window.alert(`Account ${this.usuario.nickname} was created. You can now use it to log in.`);
      this.usuario = new Usuario('', '', '', '', '', "");
  }
}


