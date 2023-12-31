import {Component, OnInit} from '@angular/core';
import {PostagemService} from "../shared/services/postagem.service";
import {Postagem} from "../shared/model/postagem";

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit{
  postagens: Postagem[];
  constructor(private postagemService: PostagemService) {
    this.postagens = [];
  }
  ngOnInit() {
    this.postagemService.listar().subscribe(postagensRetornadas =>
      {
        this.postagens = postagensRetornadas.reverse();
      }
    );
  }

}
