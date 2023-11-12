import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service"

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.scss']
})
export class MantemUsuarioComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario("","","","","", "");
  }

  ngOnInit() {

  }

  /*canEdit = false;*/
  addUsuario() {
    /*if (this.canEdit) {
      this.canEdit = false;
      this.userRegistering = new Usuario('', '', '', '', '');
    } else {*/
      this.usuarioService.inserir(this.usuario).subscribe(
        usuario => console.log(usuario)
      );
      window.alert(`Account ${this.usuario.nickname} was created. You can now use it to log in.`);
      this.usuario = new Usuario('', '', '', '', '',"");
  }

  /*editUsuario(usuarioToEdit: Usuario) {
    this.canEdit = true;
    this.userRegistering = usuarioToEdit;
  }

  delUsuario(usuarioADeletar: Usuario) {
    const index = this.usuarioService.listar().findIndex((usuario) => usuario === usuarioADeletar);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }*/

}
