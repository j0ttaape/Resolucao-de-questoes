import prompt from 'prompt-sync';
import { fazerTroca, obterLetra, obterQtd } from './funcao';
let ler = prompt();

let qtd=obterQtd()

obterLetra();

let trocas = ['a', 'b', 'c'];

fazerTroca(qtd);

// Exibe a posição final dos copos
console.log('Posição final dos copos:', trocas);
