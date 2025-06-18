import prompt from 'prompt-sync'
let ler = prompt();

export function CalculasSobra(quantidade){
    let quantidadeGastos=[]
    for(let i = 1; i<=quantidade; i++){
        console.log(`Informe o gasto do ${i}º mês:`)
        let num =  Number(ler());
        quantidadeGastos.push(num)

    }
    return quantidadeGastos
}

export function CalculosdeMes(quantidadeGastos,cota){
    let sobra =0;
    for (let i = 0; i < quantidadeGastos; i++) {
        sobra = (cota - quantidadeGastos[i]);
    }

    let internetDisponivelUltimoMes = sobra + cota;

    return internetDisponivelUltimoMes;
}