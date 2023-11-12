import {Component, OnInit} from '@angular/core';
import {PostagemService} from "../../shared/services/postagem.service";
import {Postagem} from "../../shared/model/postagem";
import {ListarPostagemComponent} from "../../postagem/listar-postagem/listar-postagem.component"

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{

  ngOnInit() {

  }


}
