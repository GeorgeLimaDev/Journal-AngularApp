import { Component, OnInit } from '@angular/core';
import { Postagem } from "../../shared/model/postagem";
import { Subject } from 'rxjs';
import {PostagemFirestoreService} from "../../shared/services/postagem-firestore.service";
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service";
import {Usuario} from "../../shared/model/usuario";
import { MatDialog } from "@angular/material/dialog";
import {EditPostComponent} from "../../edit-post/edit-post.component";

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.scss']
})
export class ListarPostagemComponent implements OnInit {
  postagens: Postagem[] = [];
  usuarioLogado: Usuario;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(public dialog: MatDialog, private postagemService: PostagemFirestoreService, UsuarioLogadoService: UsuarioLogadoService) {
    this.usuarioLogado = UsuarioLogadoService.getCurrentUser();
  }

  ngOnInit() {
    this.listar();
    /*this.postagemService.listar()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(novaPostagem => {
        this.postagens.unshift(novaPostagem); // Adiciona a nova postagem no início da lista
      });*/
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

  editar(postagem: Postagem) {
    this.postagemService.atualizar(postagem);
  }

  excluir(postagem: Postagem) {
    this.postagemService.apagar(postagem.id);
  }

  postsDoUsuarioLogado(): Postagem[] {
    let posts: Postagem[] = this.postagens;

    posts = posts.filter(post => post.idAutor === this.usuarioLogado.id);

    return posts;
  }

  openDialog() {
    this.dialog.open(EditPostComponent, {
      width: '50%'
    })
  }

}
