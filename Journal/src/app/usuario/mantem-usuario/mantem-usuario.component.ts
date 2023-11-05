import { Component } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {USUARIOS} from "../../shared/model/USUARIOS";

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.scss']
})
export class MantemUsuarioComponent {
  usuarios: Usuario[] = USUARIOS;
  userRegistering: Usuario = new Usuario('', '', '', '', '');
  canEdit = false;
  addUsuario() {
    if (this.canEdit) {
      this.canEdit = false;
      this.userRegistering = new Usuario('', '', '', '', '');
    } else {
      this.usuarios.push(this.userRegistering);
      console.log(this.userRegistering.toString());
      window.alert(`Account ${this.userRegistering.nickname} was created. You can now log in to it.`);
      this.userRegistering = new Usuario('', '', '', '', '');
    }
  }

  editUsuario(usuarioToEdit: Usuario) {
    this.canEdit = true;
    this.userRegistering = usuarioToEdit;
  }

  delUsuario(usuarioADeletar: Usuario) {
    const index = this.usuarios.findIndex((usuario) => usuario === usuarioADeletar);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }

}
