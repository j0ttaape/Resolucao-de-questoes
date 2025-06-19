import prompt from 'prompt-sync'
const ler = prompt();


console.log('----PROGRAMA DA PARCELA EXATA----');

export function obterItem(){
console.log('\nMe informe o valor do item que será pago');
let item = Number(ler());

return item;
}
export function obterParcela(){
console.log('\nMe  informe a quantidade de parcelas que você vai pagar');
let parc = Number(ler());

return parc;
}

let parcelas = parseInt(item / parc);


let sobra = item % parc;

export function fazerSobra(parc,sobra,parcelas){
for(let i = 1; i <= parc; i++){
    if(i <= sobra){
        console.log(parcelas + 1);
    }

    else{
        console.log(parcelas);
    }
}

}