import * as funcoes from './funcao.js';
import prompt from 'prompt-sync'
const ler = prompt();

funcoes.apresentarPrograma();

funcoes.obterItem();

let parc=funcoes.obterQtd();

let parcelas = parseInt(item / parc);

let sobra = item % parc;

funcoes.apresentarResultado(parc,parcelas,sobra);