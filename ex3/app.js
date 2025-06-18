import prompt from 'prompt-sync'
let ler = prompt();
let dobro = 2;

// link da questao: https://olimpiada.ic.unicamp.br/pratique/p1/2020/f1/tesouro/
//
// pedindo informacoes
console.log(`Qual a quantidade de moedas?`);
let moedas = Number(ler());

console.log(`Qual a quantidade de marinheiros no barco?`)
let marinheiros = Number(ler());

let soma = (marinheiros + dobro)
let div = (moedas/soma)*2;

console.log(`O capitao ganha: ${div}`)