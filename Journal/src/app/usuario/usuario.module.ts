import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantemUsuarioComponent } from './mantem-usuario/mantem-usuario.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import {MatCardModule} from "@angular/material/card";




@NgModule({
    declarations: [
        MantemUsuarioComponent,
        ListarUsuarioComponent,
    ],
    exports: [
        MantemUsuarioComponent,
        ListarUsuarioComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class UsuarioModule { }
