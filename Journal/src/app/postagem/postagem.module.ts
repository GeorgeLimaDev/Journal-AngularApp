import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantemPostagemComponent } from './mantem-postagem/mantem-postagem.component';
import { ListarPostagemComponent } from './listar-postagem/listar-postagem.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateListPostsComponent} from '../create-list-posts/create-list-posts.component'



@NgModule({
  declarations: [
    MantemPostagemComponent,
    ListarPostagemComponent,
    CreateListPostsComponent
  ],
    exports: [
        MantemPostagemComponent,
        ListarPostagemComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostagemModule { }
