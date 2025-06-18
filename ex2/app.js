import prompt from "prompt-sync"
const ler = prompt();
console.log('----PROGRAMA DO RECORDE----\n');

console.log('Me informe O seu recorde');
let r = Number(ler());


console.log("\nMe informe O recorde mundial");
let m = Number(ler());

console.log("\nMe informe O recorde olímpico");
let o = Number(ler());

let sit;
if(r > m){
sit = 'RM'
}

else {
    sit = '*'
}

console.log(sit);

if(r > o){
sit = 'Ro'
}

else {
    sit = '*'
}
    console.log(sit); 