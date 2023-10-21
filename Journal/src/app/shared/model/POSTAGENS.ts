//Teste:
import {Postagem} from "./postagem";
import {george, USUARIOS} from "./USUARIOS";

const postagemTeste: Postagem = new Postagem(george, "", "Teste", "Postagem de teste", Date.now());
george.addPostagem((postagemTeste));
const postagemTeste2: Postagem = new Postagem(george, "", "Teste 2", "Postagem de teste 2", Date.now());
george.addPostagem((postagemTeste2));
const postagemTeste3: Postagem = new Postagem(george, "", "Teste 3", "Postagem de teste 3", Date.now());
george.addPostagem((postagemTeste3));
console.log(george.toString());
export const POSTAGENS: Postagem[] = [];
POSTAGENS.push(postagemTeste, postagemTeste2, postagemTeste3);
console.log(POSTAGENS);
