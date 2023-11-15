import { Component, OnInit } from '@angular/core';
import { Postagem } from "../../shared/model/postagem";
import { PostagemService } from "../../shared/services/postagem.service";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.scss']
})
export class ListarPostagemComponent implements OnInit {
  postagens: Postagem[] = [];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.atualizarPostagens();
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

  atualizarPostagens() {
    this.postagemService.listar().subscribe(postagens => {
      this.postagens = postagens.reverse();
    });
  }
}
