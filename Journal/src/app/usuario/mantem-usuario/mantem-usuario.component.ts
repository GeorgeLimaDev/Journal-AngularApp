import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service";
import {MensagensService} from "../../shared/services/mensagens.service";

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.scss']
})
export class MantemUsuarioComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService, private mensagemService: MensagensService) {
    this.usuario = new Usuario("", "", "", "", "", "");
  }

  ngOnInit() {

  }

  addUsuario() {
      // @ts-ignore
    this.usuarioService.inserir(this.usuario).subscribe(usuario => {
      this.mensagemService.success(`Usuário ${usuario.nickname} cadastrado com sucesso! Siga para o Login.`)
    });
      window.alert(`Account ${this.usuario.nickname} was created. You can now use it to log in.`);
      this.usuario = new Usuario("", "", "", "", "", "");
  }

}
