import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {DialogService} from "./dialogService";
import {Usuario} from "../shared/model/usuario";
import {USUARIOS} from "../shared/model/USUARIOS";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  usuarios: Usuario[] = USUARIOS;
  userRegistering: Usuario = new Usuario('', '', '', '', '');
  canEdit = false;
  addUsuario() {
    if (this.canEdit) {
      this.canEdit = false;
      this.userRegistering = new Usuario('', '', '', '', '');
    } else {
      this.usuarios.push(this.userRegistering);
      console.log(this.userRegistering);
      window.alert(`Usuário ${this.userRegistering.nickname} criado com sucesso!`);
      this.userRegistering = new Usuario('', '', '', '', '');
    }
  }

  editUsuario(usuarioToEdit: Usuario) {
    this.canEdit = true;
    this.userRegistering = usuarioToEdit;
  }

  delUsuario(usuarioADeletar: Usuario) {
    const index = this.usuarios.findIndex((usuario) => usuario === usuarioADeletar);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogService>) { }

// To close the dialog and pass data back to the calling component
  closeDialog(result: any): void {
    this.dialogRef.close(result);
  }

}
