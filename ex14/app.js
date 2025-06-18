import prompt from 'prompt-sync'
const ler = prompt();

console.log('----PROGRAMA DAS FIGURINHAS----\n');


console.log('Me informe a quantidade de figurinhas que existem no album');
let q = Number(ler());

console.log('Me informe a quantidade de figurinhas que Você já comprou ');
let c = Number(ler());

const figs = [];

for(let i = 1; i <= c; i++){
    console.log(`Me informe o número da ${i}° figurinha`);
    figs.push(Number(ler()));

}

//Set().size serve para contar os números que se repetem, uma única vez 
let tem = new Set(figs).size;

let faltam = q - tem;

console.log(`Faltam ${faltam} figurinhas para completar o album`);

