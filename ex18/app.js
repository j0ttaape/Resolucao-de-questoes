import prompt from 'prompt-sync'
import * as funcoes from './funcoes.js';
const ler = prompt();

console.log("----PROGRAMA DO MORANGO ----");

let area1 = funcoes.calcularArea('Me informe o comprimento e a largura da primeira area ');

let area2 = funcoes.calcularArea('Me informe o comprimento e a largura da segunda area ');

let sit;

if(area1 >= area2){
    sit = area1
}
else{
    sit = area2;
}

console.log(sit);