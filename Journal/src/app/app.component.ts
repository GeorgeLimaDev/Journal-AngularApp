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
  usuarios: Usuario[] = USUARIOS;
  postagens: Postagem[] = POSTAGENS;
  constructor(private dialogService: DialogService) { }
  openDialog(): void {
    this.dialogService.openDialog();
  }
}

let usuarios = USUARIOS;
let postagens: Postagem[] = POSTAGENS;
