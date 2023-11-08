import { Component } from '@angular/core';
import {Usuario} from "./shared/model/usuario";
import {Postagem} from "./shared/model/postagem";
import { DialogService } from './dialog/dialogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Journal';

  constructor(private dialogService: DialogService) {
  }

  openDialog(): void {
    this.dialogService.openDialog();
  }
}
