import prompt from 'prompt-sync'
const ler = prompt()


// link da questao: https://olimpiada.ic.unicamp.br/pratique/pj/2021/f1/idade/
//
// pedindo dados
console.log(`descubrindo a idade da Camila`);

console.log(`Qual a primeira idade?`);
let idade1 = Number(ler());

console.log(`Qual a segunda idade?`);
let idade2 = Number(ler());

console.log(`Qual a terceira idade?`);
let idade3 = Number(ler());

// verificacoes
if (idade1 > idade2){
    if(idade1<idade3){
        console.log(`Esta é a idade de Camila: ${idade1}`)
    }
}

else if (idade2 < idade3){
    if(idade2<idade3){
        console.log(`Esta é a idade de Camila: ${idade2}`)
    }
}

else(console.log(`Esta é a idade de Camila: ${idade3}`))
