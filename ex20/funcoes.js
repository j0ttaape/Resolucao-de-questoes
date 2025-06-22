import prompt from 'prompt-sync'
const ler = prompt();


export function apresentarPrograma(){
    console.log("----- PROGRAMA DO HELICÓPTERO -----");
}



export function podeFugir(H, P, F, D) {
    if (D === -1) { // Direção horária
        while (F !== H && F !== P) {
            F = (F + 1) % 16; // Move para a próxima posição
        }
        return F === H; // Verifica se o fugitivo alcançou o helicóptero
    } else { // Direção anti-horária
        while (F !== H && F !== P) {
            F = (F - 1 + 16) % 16; // Move para a posição anterior
        }
        return F === H; // Verifica se o fugitivo alcançou o helicóptero
    }
}

// Função para ler a entrada do usuário
export function main() {
    const input = prompt("Digite H, P, F e D separados por espaço:"); // Leitura da entrada
    const [H, P, F, D] = input.split(" ").map(Number); // Converte a entrada em números

    if (podeFugir(H, P, F, D)) {
        console.log("S"); // Fugitivo consegue fugir
    } else {
        console.log("N"); // Fugitivo não consegue fugir
    }
}

