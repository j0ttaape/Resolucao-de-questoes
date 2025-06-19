import prompt from 'prompt-sync'
const ler=prompt();

export function obterQtd(){
    console.log('informe a quantidade de movimentos');
let movi = Number(ler());

return movi;
}


export function obterLetra(){
    console.log('informe qual copo você quer mexer (a, b ou c)');
let letra = ler();

return letra;
}

let trocas = ['a', 'b', 'c'];


export function fazerTroca(movi){
    console.log('informe as trocas (ex: "ab" para trocar a e b)');
for (let i = 1; i <= movi; i++) {
    let troca = ler();
    // Realiza a troca
    let index1 = trocas.indexOf(troca[0]);
    let index2 = trocas.indexOf(troca[1]);
    
    if (index1 !== -1 && index2 !== -1) {
        // Troca as posições
        let temp = trocas[index1];
        trocas[index1] = trocas[index2];
        trocas[index2] = temp;
    }
}

}