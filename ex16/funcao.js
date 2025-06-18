import prompt from 'prompt-sync'
let ler = prompt();

export function VerificarDimensoes(lado1,lado2,lado3, altu, largu){
    let saida = '';
    if(lado1 <= altu && lado2 <= largu){
        saida = `A caixa passou com sucesso.`
    }
    
    else if(lado1 <= altu && lado3 <= largu){
        saida = `A caixa passou com sucesso.`
    }
    else if(lado2 <= altu && lado3 <= largu){
        saida = `A caixa passou com sucesso.`
    }
    else(saida= 'A caixa não passou')
    return saida
}