import prompt from 'prompt-sync'
let ler = prompt();

// link da questao: https://olimpiada.ic.unicamp.br/pratique/p1/2020/f1/tesouro/ 


console.log("informe o numero de moedas")
let moedas= Number(ler());

console.log('informe o numero de marinheiros')
let mari=Number(ler());



let soma=mari+2;

let div = (moedas / soma) * 2;

console.log(`o capitao recebe ${div}`)