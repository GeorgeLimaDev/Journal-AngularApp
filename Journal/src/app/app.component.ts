import { Component } from '@angular/core';
import {Usuario} from "./shared/model/usuario";
import {USUARIOS} from "./shared/model/USUARIOS";
import {Postagem} from "./shared/model/postagem";
import {POSTAGENS} from "./shared/model/POSTAGENS";
import { DialogService } from './dialog/dialogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Journal';
  postagens: Postagem[] = POSTAGENS;
  postagemRegistering: Postagem = new Postagem((new Usuario('', '', '', '', '')), '', '', '', 0);
  canEdit = false;
  addPostagem() {
    if (this.canEdit) {
      this.canEdit = false;
      this.postagemRegistering = new Postagem((new Usuario('', '', '', '', '')), '', '', '', 0);
    } else {
      this.postagens.push(this.postagemRegistering);
      this.postagemRegistering = new Postagem((new Usuario('', '', '', '', '')), '', '', '', 0);
    }
  }

  editPostagem(postagemToEdit: Postagem) {
    this.canEdit = true;
    this.postagemRegistering = postagemToEdit;
  }

  delPostagem(postagemADeletar: Postagem) {
    const index = this.postagens.findIndex((postagem) => postagem === postagemADeletar);
    if (index !== -1) {
      this.postagens.splice(index, 1);
    }
  }

  constructor(private dialogService: DialogService) {
  }

  openDialog(): void {
    this.dialogService.openDialog();
  }
}
