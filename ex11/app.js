import prompt from 'prompt-sync'
import { fazerSobra, obterItem, obterParcela } from './funcao';
const ler = prompt();


console.log('----PROGRAMA DA PARCELA EXATA----');

let item=obterItem();

let parc=obterParcela();

let parcelas = parseInt(item / parc);

let sobra = item % parc;

fazerSobra(parc,sobra,parcelas)

console.log('Feito');