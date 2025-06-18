import prompt from 'prompt-sync'
const ler = prompt();

console.log('----PROGRAMA DO GATO----\n');

console.log('Me informe o número de lajotas');
let num = Number(ler());

const lajes = [];
console.log('Agora informe a cor de cada lajota');
for(let i = 1; i <= num; i++){
    lajes.push(Number(ler()));
}

let quant = 0;
for(let i = 0; i <= num; i++){

    if(lajes[i + 1] == 0 && lajes[i +2] == 0 ){
        quant = -1
        i = num -1;
    }

    else{

    if( lajes[i] == 1 && lajes[i +1] == 1 && lajes[i +2] == 1 ){
        quant = quant + 1;
        i++
    }
    else if(lajes[i + 1] == 1){
        quant = quant + 1;
    }
    else if(lajes[i +1] == 0){
        quant = quant + 1;
        i++
    }
}
}

console.log(quant);