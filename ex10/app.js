import prompt from 'prompt-sync'
import { CalculasSobra, CalculosdeMes } from './funcao.js';
let ler = prompt()

// link da questao: https://olimpiada.ic.unicamp.br/pratique/pj/2021/f1/plano/

console.log(`Qual o valor da quota?`);
let quota = Number(ler());

console.log(`Quantos meses você utilizou a internet?`);
let qtdMes = Number(ler());

let calculo = CalculasSobra(qtdMes);

let calculofinal = CalculosdeMes(calculo,quota,qtdMes);
console.log(calculofinal);