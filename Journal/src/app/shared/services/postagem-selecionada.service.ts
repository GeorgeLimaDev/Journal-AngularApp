import {Injectable, OnInit} from '@angular/core';
import {Postagem} from "../model/postagem";
import {Usuario} from "../model/usuario";
import {PostagemService} from "./postagem.service";

@Injectable({
  providedIn: 'root'
})
export class PostagemSelecionadaService implements OnInit{
  private currentUserPost: Postagem;

  constructor(private postagemService: PostagemService) {
    this.currentUserPost = new Postagem("", new Usuario("", "","","","",""), "", "", Date.now());
  }

  ngOnInit() {

  }

  setCurrentPost(postagem: Postagem) {
    this.currentUserPost = postagem;
  }

  getCurrentPost(): Postagem {
    return this.currentUserPost;
  }

}
