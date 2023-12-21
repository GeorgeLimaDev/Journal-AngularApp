import { Component, OnInit } from '@angular/core';
import { Postagem } from "../../shared/model/postagem";
import { Subject } from 'rxjs';
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service";
import {Usuario} from "../../shared/model/usuario";
import { MatDialog } from "@angular/material/dialog";
import {EditPostComponent} from "../../edit-post/edit-post.component";
import {PostagemService} from "../../shared/services/postagem.service";

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.scss']
})
export class ListarPostagemComponent implements OnInit {
  postagens: Postagem[] = [];
  usuarioLogado: Usuario;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(public dialog: MatDialog, private postagemService: PostagemService, UsuarioLogadoService: UsuarioLogadoService) {
    this.usuarioLogado = UsuarioLogadoService.getCurrentUser();
  }

  ngOnInit() {
    this.listar();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  listar() {
    this.postagemService.listar().subscribe(postagens => {
      this.postagens = postagens.reverse();
    });
  }

  //editar(postagem: Postagem) {
  //  this.postagemService.atualizar(postagem);
  //}

  excluir(postagem: Postagem) {
    console.log("Chamou excluir");
     this.postagemService.remover(postagem.id);
  }

  postsDoUsuarioLogado(): Postagem[] {
    let posts: Postagem[] = this.postagens;

    posts = posts.filter(post => post.autor.id === this.usuarioLogado.id);

    return posts;
  }

  openDialog() {
    this.dialog.open(EditPostComponent, {
      width: '50%'
    })
  }

}
