import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import {Postagem} from "../model/postagem";
import {UsuarioFirestoreService} from "./usuario-firestore.service";
import {UsuarioLogadoService} from "./usuario-logado.service";

@Injectable({
  providedIn: 'root'
})
export class PostagemFirestoreService {
  colecaoPostagens: AngularFirestoreCollection<Postagem>;
  NOME_COLECAO = 'postagens';

  constructor(private afs: AngularFirestore, private usuarioService: UsuarioFirestoreService, private usuarioLogado : UsuarioLogadoService) {
    this.colecaoPostagens = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Postagem[]> {
    return this.colecaoPostagens.valueChanges({idField: 'id'});
  }

  inserir(postagem: Postagem): Observable<object> | null {
    delete postagem.id;
    if (!postagem.conteudo || postagem.conteudo.trim() === '') {
      window.alert("Post content is invalid.");
      return null;
    }
    let postCriado = from(this.colecaoPostagens.add(Object.assign({}, postagem)));
    // @ts-ignore
    this.usuarioLogado.getCurrentUser().postagens.push(postagem.timestamp);
    this.usuarioService.atualizar(this.usuarioLogado.getCurrentUser());
    return postCriado;
  }

  apagar(id: string | undefined): Observable<void> {
    let postagemEncontrada = this.pesquisarPorId(id);

      // @ts-ignore
      const index = this.usuarioLogado.getCurrentUser().postagens.findIndex(postagem => postagem.timestamp === postagemEncontrada.timestamp);
      if (index !== -1) {
        // @ts-ignore
        this.usuarioLogado.getCurrentUser().postagens.splice(index, 1);
        console.log(this.usuarioLogado.getCurrentUser().postagens);
      }
      this.usuarioService.atualizar(this.usuarioLogado.getCurrentUser());

    return from(this.colecaoPostagens.doc(id).delete());
  }

  pesquisarPorId(id: string | undefined): Observable<Postagem> {
    return this.colecaoPostagens.doc(id).get().pipe(map(document =>
    new Postagem(document.id, document.data())));
  }

  async pesquisarPorAutor(autor: string | undefined): Promise<Postagem[]> {
    let postagensDoUsuarioLogado = this.colecaoPostagens.ref.where('nickAutor', '==', autor).get()
      .then(querySnapshot => querySnapshot.docs.map(doc => new Postagem(doc.id, doc.data())));
    return await postagensDoUsuarioLogado;
  }

  atualizar(postagem: Postagem): Observable<void> {
    const id = postagem.id;
    delete postagem.id;
    return from(this.colecaoPostagens.doc(id).update(Object.assign({}, postagem)));
  }

  atualizarJuntoComUsuario(postagens: Postagem[]) {
    postagens.forEach(post => {
      this.atualizar(post);
    })
  }

}
