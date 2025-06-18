import prompt from 'prompt-sync'
let ler = prompt();

console.log('Programa do chefe');

console.log('Comece a falar os números')
let rep ;

const num = [];

for(let i = 1 ; i <= 6; i++){
    rep = Number(ler());

if(rep == 'p'){
 num.splice(num.length -1, 1)
 console.log()
}

   else{
    num.push(rep) 
}
}



console.log(`A soma é igual a ${soma}`);