import { Component } from '@angular/core';
import {Usuario} from "./shared/model/usuario";
import {USUARIOS} from "./shared/model/USUARIOS";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Journal';
  usuarios: Usuario[] = USUARIOS;
}

let usuarios = USUARIOS;
