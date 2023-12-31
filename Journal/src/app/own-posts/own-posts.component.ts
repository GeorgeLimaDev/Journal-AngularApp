import {Component, OnInit} from '@angular/core';
import {Postagem} from "../shared/model/postagem";
import {Subject} from "rxjs";
import {PostagemService} from "../shared/services/postagem.service";
import {takeUntil} from "rxjs/operators";
import {UsuarioLogadoService} from "../shared/services/usuario-logado.service";
import {PostagemFirestoreService} from "../shared/services/postagem-firestore.service";

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
      console.log(this.usuarioLogado.getCurrentUser());
      // @ts-ignore
      let postagemDoUsuario: Postagem[] = postagens.filter(postagem => postagem.idAutor === this.usuarioLogado.getCurrentUser().id);
      this.postagens = postagemDoUsuario.reverse();
      this.contPostagens = this.postagens.length
    });
  }

}
