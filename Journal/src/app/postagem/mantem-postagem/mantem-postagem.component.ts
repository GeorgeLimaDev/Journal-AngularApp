import { Component } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Postagem} from "../../shared/model/postagem";
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service"
import {PostagemService} from "../../shared/services/postagem.service";


@Component({
  selector: 'app-mantem-postagem',
  templateUrl: './mantem-postagem.component.html',
  styleUrls: ['./mantem-postagem.component.scss']
})
export class MantemPostagemComponent {
  autor: Usuario;
  postagem: Postagem;
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemService, private UsuarioLogadoService: UsuarioLogadoService) {
    this.autor = UsuarioLogadoService.getCurrentUser();
    this.postagem = new Postagem("", new Usuario("", "", "", "", "", ""), "", "", Date.now());


  }

  inserir() {
    this.postagem.autor.id = this.UsuarioLogadoService.getCurrentUser().id;
    this.postagem.autor.nome = this.UsuarioLogadoService.getCurrentUser().nome;
    this.postagem.autor.avatar = this.UsuarioLogadoService.getCurrentUser().avatar;
    this.postagem.autor.nickname = this.UsuarioLogadoService.getCurrentUser().nickname;
    // @ts-ignore
    this.postagemService.inserir(this.postagem).subscribe(
      postagemCriada => {}
    );
    this.postagem = new Postagem("", new Usuario("", "", "", "", "", ""), "", "", Date.now());
  }

}
