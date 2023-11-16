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
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    MantemPostagemComponent,
    ListarPostagemComponent,
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
        FormsModule,
        MatButtonToggleModule
    ]
})
export class PostagemModule { }
