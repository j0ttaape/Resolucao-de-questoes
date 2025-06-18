import prompt from "prompt-sync"
const ler = prompt();

console.log('----PROGRAMA DO BONDINHO----');

console.log('\nExistem quantas crianças para serem levadas?');
 let cri = Number(ler())

console.log('\nExistem quantos Monitores para serem levados?');
 let mon = Number(ler())

 let sit;
if(mon + cri <= 50 ){
    sit = 'S';
}
else{
    sit = "N";
}

console.log(sit);