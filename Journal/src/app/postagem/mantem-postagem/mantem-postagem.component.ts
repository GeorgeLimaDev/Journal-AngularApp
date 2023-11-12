import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Postagem} from "../../shared/model/postagem";
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

  constructor(private postagemService: PostagemService) {
    this.autor = new Usuario("","","","","", ""); //Aqui deveria ler o usuário logado para atribuir como autor.
    this.postagem = new Postagem("",this.autor, "","","",0);

  }

  inserir() {
    let postAInserir: Postagem = new Postagem("", this.autor, "", "","", Date.now());
    this.postagemService.inserir(postAInserir);
    console.log(`Post ${this.postagem.id} was created.`)
  }

}
