import {Component, OnInit} from '@angular/core';
import {Postagem} from "../model/postagem";
import {Subject} from "rxjs";
import {PostagemService} from "../services/postagem.service";
import {takeUntil} from "rxjs/operators";
import {UsuarioLogadoService} from "../services/usuario-logado.service";

@Component({
  selector: 'app-own-posts',
  templateUrl: './own-posts.component.html',
  styleUrls: ['./own-posts.component.scss']
})
export class OwnPostsComponent implements OnInit {
  postagens: Postagem[] = [];
  private unsubscribe$: Subject<void> = new Subject<void>();
  contPostagens:number=0;

  constructor(private postagemService: PostagemService, private usuarioLogado: UsuarioLogadoService) {
  }

  ngOnInit() {
    this.listar();
    this.postagemService.postagemInserida$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(novaPostagem => {
        this.postagens.unshift(novaPostagem); // Adiciona a nova postagem no início da lista
      });


  }



  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  listar() {
    this.postagemService.listar().subscribe(postagens => {
      let postagemDoUsuario: Postagem[] = postagens.filter(postagem => postagem.autor.id === this.usuarioLogado.getCurrentUser().id);
      this.postagens = postagemDoUsuario.reverse();
      console.log(this.postagens);
      this.contPostagens = this.postagens.length
    });

  }

}
