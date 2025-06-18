import prompt from  'prompt-sync'
import { VerificarDimensoes } from './funcao.js';
let ler = prompt();

console.log(`Olá, me informe a primeira dimensão da caixa:\n`);
let dime1 = Number(ler());

console.log(`Olá, me informe a segunda dimensão da caixa:\n`);
let dime2 = Number(ler());

console.log(`Olá, me informe a terceira dimensão da caixa:\n`);
let dime3 = Number(ler());

console.log(`Agora me informe a largura e altura da caixa:\n`)

console.log(`Altura:`)
let altura = Number(ler());

console.log(`Largura:`)
let largura = Number(ler());

let verificacao = VerificarDimensoes(dime1,dime2,dime3,altura,largura)

console.log(verificacao)