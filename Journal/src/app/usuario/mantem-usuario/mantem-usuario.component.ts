import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service";

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

  addUsuario() {
      this.usuarioService.inserir(this.usuario).subscribe(usuario => {});
      window.alert(`Account ${this.usuario.nickname} was created. You can now use it to log in.`);
      this.usuario = new Usuario('', '', '', '', '', "");
  }

}
