import prompt from 'prompt-sync'
const ler =prompt();


// exercicio: https://olimpiada.ic.unicamp.br/pratique/pj/2016/f2/caverna/

export function apresentarPrograma(){
    console.log(`---- PROGRAMA DA CAVERNA ----`)
}


// Leitura da entrada
export function obterNumeroMeergulho(){
    console.log(`Informe o numero de mergulhos`);
    let N=Number(ler());

    return N;
}

export function obterComprimento(){
    console.log(`informe o comprimento maximo da fita`);
     let M=Number(ler());
     return M;
}

let medicoes = []; 
export function obterMedicoes(N,medicoes){
    for(let i=1; i<=N; i++){
    console.log(`informe as medicoes`);
     let num=Number(ler());
        medicoes.push(num)
}
}

// Inicializa a soma total
let somaTotal = 0;

export function calcularSomaTotal(medicoes,somaTotal,M,N){
// Processa cada medição
for (let i = 0; i < N; i++) {
    if (medicoes[i] > M) {
        console.log(-1);
        break; // Sai do loop se a medição for inválida
    }
    somaTotal += medicoes[i];
}
}

export function calcularSomaTotal2(somaTotal,M){
// Imprime a soma total se todas as medições forem válidas
if (somaTotal <= M) {
    console.log(somaTotal);
}
}