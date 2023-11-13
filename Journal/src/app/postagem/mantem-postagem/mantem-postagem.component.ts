import { Component } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Postagem} from "../../shared/model/postagem";
import {PostagemService} from "../../shared/services/postagem.service";


@Component({
  selector: 'app-mantem-postagem',
  templateUrl: './mantem-postagem.component.html',
  styleUrls: ['./mantem-postagem.component.scss']
})
export class MantemPostagemComponent {
  autor: Usuario;
  postagem: Postagem;
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemService) {
    this.autor = new Usuario("","danielmendesfeels","12345","","Daniel Mendes", "daniel.mendes@user.com"); //Aqui deveria ler o usuário logado para atribuir como autor.
    this.postagem = new Postagem("",this.autor, "","","",0);

  }

  inserir() {
    /*let postAInserir: Postagem = this.postagem;*/
    this.postagemService.inserir(this.postagem).subscribe(
      postagemCriada => {
        console.log(`Post ${this.postagem.id} was created.`)
        window.alert(`Thanks, ${this.autor.nome}. Your post was created. Please refresh to view it.`)
      }
    );

  }

}
