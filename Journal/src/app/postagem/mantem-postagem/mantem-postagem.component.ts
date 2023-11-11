import { Component, OnInit } from '@angular/core';
import {Postagem} from "../../shared/model/postagem";
import {Usuario} from "../../shared/model/usuario";
import {PostagemService} from "../../shared/services/postagem.service";


@Component({
  selector: 'app-mantem-postagem',
  templateUrl: './mantem-postagem.component.html',
  styleUrls: ['./mantem-postagem.component.scss']
})
export class MantemPostagemComponent implements OnInit {
  postagem: Postagem;

  constructor(private postagemService: PostagemService) {
    this.postagem = new Postagem((new Usuario("","","","","")), "","","",0);
  }

  ngOnInit() {

  }

  addPostagem() {
    this.postagemService.inserir(this.postagem).subscribe(
      postagem => console.log(postagem)
    );
    this.postagem = new Postagem((new Usuario("","","","","")), "","","",0);
  }

}
