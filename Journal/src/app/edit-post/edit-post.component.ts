import { Component } from '@angular/core';
import {Postagem} from "../shared/model/postagem";
import {PostagemSelecionadaService} from "../shared/services/postagem-selecionada.service";
import {PostagemService} from "../shared/services/postagem.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

  postEditando: Postagem;
  novoConteudo: string;

  constructor(private postagemService: PostagemService, private postagemSelecionada: PostagemSelecionadaService) {
    this.postEditando = this.postagemSelecionada.getCurrentPost();
    // @ts-ignore
    this.novoConteudo = this.postagemSelecionada.getCurrentPost().conteudo;
  }

  // editar(postagem: Postagem) {
  //  this.postagemSelecionada.setCurrentPost(this.postEditando);
  //  this.postagemService.atualizar(this.postEditando);
  //}
}
