import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantemPostagemComponent } from './mantem-postagem/mantem-postagem.component';
import { ListarPostagemComponent } from './listar-postagem/listar-postagem.component';



@NgModule({
  declarations: [
    MantemPostagemComponent,
    ListarPostagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostagemModule { }
