import {Component, OnInit} from '@angular/core';
import {Postagem} from "../model/postagem";
import {Subject} from "rxjs";
import {PostagemService} from "../services/postagem.service";
import {takeUntil} from "rxjs/operators";
import {UsuarioLogadoService} from "../services/usuario-logado.service";
import {PostagemFirestoreService} from "../services/postagem-firestore.service";

@Component({
  selector: 'app-own-posts',
  templateUrl: './own-posts.component.html',
  styleUrls: ['./own-posts.component.scss']
})
export class OwnPostsComponent implements OnInit {
  postagens: Postagem[] = [];
  private unsubscribe$: Subject<void> = new Subject<void>();
  contPostagens:number = 0;

  constructor(private postagemService: PostagemFirestoreService, private usuarioLogado: UsuarioLogadoService) {
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
      // @ts-ignore
      let postagemDoUsuario: Postagem[] = postagens.filter(postagem => postagem.nickAutor === this.usuarioLogado.getCurrentUser().nickname);
      this.postagens = postagemDoUsuario.reverse();
      this.contPostagens = this.postagens.length
    });
  }

}
