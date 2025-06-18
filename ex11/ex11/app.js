import prompt from 'prompt-sync'
const ler = prompt();


console.log('----PROGRAMA DA PARCELA EXATA----');

console.log('\nMe informe o valor do item que será pago');
let item = Number(ler());

console.log('\nMe  informe a quantidade de parcelas que você vai pagar');
let parc = Number(ler());
let parcelas = parseInt(item / parc);

let sobra = item % parc;

for(let i = 1; i <= parc; i++){
    if(i <= sobra){
        console.log(parcelas + 1);
    }

    else{
        console.log(parcelas);
    }
}

console.log('Feito');