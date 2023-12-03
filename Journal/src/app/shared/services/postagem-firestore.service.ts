import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import {Postagem} from "../model/postagem";

@Injectable({
  providedIn: 'root'
})
export class PostagemFirestoreService {
  colecaoPostagens: AngularFirestoreCollection<Postagem>;
  NOME_COLECAO = 'postagens';

  constructor(private afs: AngularFirestore) {
    this.colecaoPostagens = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Postagem[]> {
    return this.colecaoPostagens.valueChanges({idField: 'id'});
  }

  inserir(postagem: Postagem): Observable<object> {
    delete postagem.id;
    return from(this.colecaoPostagens.add(Object.assign({}, postagem)));
  }

  apagar(id: string): Observable<void> {
    return from(this.colecaoPostagens.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Postagem> {
    return this.colecaoPostagens.doc(id).get().pipe(map(document =>
    new Postagem(document.id, document.data())));
  }

  atualizar(postagem: Postagem): Observable<void> {
    const id = postagem.id;
    delete postagem.id;
    return from(this.colecaoPostagens.doc(id).update(Object.assign({}, postagem)));
  }

}
