//Teste:
import {Usuario} from "./usuario";

const george = new Usuario('georgelimadev', 'password123', '', 'George Lima', 'georgelimabr@outlook.com');
export const USUARIOS: Usuario[]= [];
USUARIOS.push(george);
console.log(USUARIOS);
