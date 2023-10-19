//Teste:
import {Postagem} from "./postagem";
import {george, USUARIOS} from "./USUARIOS";

const postagemTeste: Postagem = new Postagem(george, "", "Teste", "Postagem de teste", Date.now());
const postagemTeste2: Postagem = new Postagem(george, "", "Teste 2", "Postagem de teste 2", Date.now());
const postagemTeste3: Postagem = new Postagem(george, "", "Teste 3", "Postagem de teste 3", Date.now());
george.addPostagem((postagemTeste));
george.addPostagem((postagemTeste2));
george.addPostagem((postagemTeste3));
export const POSTAGENS: Postagem[] = [];
POSTAGENS.push(postagemTeste);
POSTAGENS.push(postagemTeste2);
POSTAGENS.push(postagemTeste3);
console.log(george.toString());
console.log(postagemTeste.toString());
console.log(postagemTeste2.toString());
console.log(postagemTeste3.toString());
//Bug percebido: o link para as postagens não está recebendo o auto-incremento.
console.log(POSTAGENS.length); //O total de postagens conta corretamente aqui.
console.log(george.countPostagens()); //O total de postagens conta corretamente aqui também.
