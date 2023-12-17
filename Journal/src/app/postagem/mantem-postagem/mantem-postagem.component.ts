import { Component } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Postagem} from "../../shared/model/postagem";
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service"
import {PostagemFirestoreService} from "../../shared/services/postagem-firestore.service";


@Component({
  selector: 'app-mantem-postagem',
  templateUrl: './mantem-postagem.component.html',
  styleUrls: ['./mantem-postagem.component.scss']
})
export class MantemPostagemComponent {
  autor: Usuario;
  postagem: Postagem;
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemFirestoreService, private UsuarioLogadoService: UsuarioLogadoService) {
    this.autor = UsuarioLogadoService.getCurrentUser();
    this.postagem = new Postagem("", undefined);

  }

  inserir() {
    this.postagem.idAutor = this.UsuarioLogadoService.getCurrentUser().id;
    this.postagem.autor = this.UsuarioLogadoService.getCurrentUser().nome;
    this.postagem.avatarAutor = this.UsuarioLogadoService.getCurrentUser().avatar;
    this.postagem.nickAutor = this.UsuarioLogadoService.getCurrentUser().nickname;
    // @ts-ignore
    this.postagemService.inserir(this.postagem).subscribe(
      postagemCriada => {}
    );
    this.postagem = new Postagem("", undefined);
  }

}
