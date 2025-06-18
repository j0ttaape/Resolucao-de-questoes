import prompt from 'prompt-sync'
let ler = prompt();

export function calcularArea(msg){
    console.log(msg);
let compri = Number(ler());
let larg = Number(ler());

let area = compri * larg;

return area;
}