import { Component } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Postagem} from "../../shared/model/postagem";
import {PostagemService} from "../../shared/services/postagem.service";
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service"


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
    this.postagem = new Postagem("",this.autor, "","","",0);

  }

  inserir() {
    this.postagemService.inserir(this.postagem).subscribe(
      postagemCriada => {
        console.log(`Post ${this.postagem.id} was created.`)
        this.postagem = new Postagem("",this.autor, "","","",0);
      }
    );

  }

}
