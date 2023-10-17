//Teste:
import {Postagem} from "./postagem";
import {george, USUARIOS} from "./USUARIOS";

const postagemTeste: Postagem = new Postagem(george, "", "Teste", "Postagem de teste", Date.now());
const postagemTeste2: Postagem = new Postagem(george, "", "Teste 2", "Postagem de teste 2", Date.now());
george.addPostagem((postagemTeste));
george.addPostagem((postagemTeste2));
export const POSTAGENS: Postagem[] = [];
POSTAGENS.push(postagemTeste);
POSTAGENS.push(postagemTeste2);
console.log(postagemTeste.toString());
console.log(postagemTeste2.toString());
