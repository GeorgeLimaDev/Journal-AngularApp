import {Injectable, OnInit} from '@angular/core';
import {Postagem} from "../model/postagem";
import {Usuario} from "../model/usuario";
import {PostagemFirestoreService} from "./postagem-firestore.service";

@Injectable({
  providedIn: 'root'
})
export class PostagemSelecionadaService implements OnInit{
  private currentUserPost: Postagem;

  constructor(private postagemService: PostagemFirestoreService) {
    this.currentUserPost = new Postagem("", undefined);
  }

  ngOnInit() {

  }

  setCurrentPost(postagem: Postagem) {
    this.currentUserPost = postagem;
  }

  getCurrentPost(): Postagem {
    return this.currentUserPost;
  }

  editar(postagem: Postagem) {
    return this.postagemService.atualizar(postagem);
  }

}
