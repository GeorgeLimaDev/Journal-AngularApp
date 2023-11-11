import { Component, OnInit } from '@angular/core';
import {Postagem} from "../../shared/model/postagem";
import {PostagemService} from "../../shared/services/postagem.service";

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.scss']
})
export class ListarPostagemComponent implements OnInit {
  postagens: Postagem[];

  constructor(private postagemService: PostagemService) {
    this.postagens = [];
  }

  ngOnInit() {
    this.postagemService.listar().subscribe(
      postagens => this.postagens = postagens
    );
  }
}
