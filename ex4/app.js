import prompt from 'prompt-sync'
let ler = prompt();

// link da questao: https://olimpiada.ic.unicamp.br/pratique/p1/2021/f1/torneio/

let recordes=[]

console.log('informe os recordes')
for(let i=1; i<=3; i++){
    let num=Number(ler());
    recordes.push(num)
}


if(recordes[0]> recordes[1]){
    console.log('*')
    console.log('RO')
}

else if(recordes[0] == recordes[1]){
    console.log('*')
    console.log('*')
}

else if(recordes[0] < recordes[1]){
    console.log('RM')
    console.log('RO')
}