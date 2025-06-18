import prompt from 'prompt-sync'
const ler = prompt();

console.log('----PROGRAMA DA LESMA----\n');

console.log('Me infore a altura do muro');
let a = Number(ler());

console.log('Me infore a altura que a lesma sobe por dia');
let s = Number(ler());

console.log('Me infore a altura que a lesma desce por noite');
let d = Number(ler());

let di = 0;
let i = 1;
for( i ; di <= a; i++){
   di = di + s;

   di = di - d;
}

console.log(i);
