import {Injectable} from '@angular/core';
import {from, Observable, switchMap, take, toArray} from 'rxjs';
import {Usuario} from '../model/usuario';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Usuario[]> {
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }

  inserir(usuario: Usuario): Observable<object> | null {
    delete usuario.id;
    if (!usuario.nickname || usuario.nickname.trim() === '') {
      window.alert("Nickname is invalid!");
      return null;
    }
    if (!usuario.senha || usuario.senha.trim() === '') {
      window.alert("Password is invalid!");
      return null;
    }
    if (!usuario.nome || usuario.nome.trim() === '') {
      window.alert("Name is invalid!");
      return null;
    }
    if (!usuario.email || usuario.email.trim() === '') {
      window.alert("Email is invalid!");
      return null;
    }
    return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
  }

  apagar(id: string| undefined): Observable<void> {
    return from(this.colecaoUsuarios.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.colecaoUsuarios.doc(id).get().pipe(map(
      document =>
    new Usuario(document.id, document.data())));
  }

  atualizar(usuario: Usuario): Observable<void> {
    const id = usuario.id;
    delete usuario.id;
    return from(this.colecaoUsuarios.doc(id).update(Object.assign({}, usuario)));
  }

}
