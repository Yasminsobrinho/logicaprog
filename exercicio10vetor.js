// Desenvolver um programa que armazene nome e nota das PR1 e PR2 de 15 alunos, calcule e armazene a média,
// armazene também a situação do aluno (AP ou RP). Exibir ao final uma listagem contendo nomes, notas, médias e
// situação de cada aluno.

let alunos = [
   {nome: "yasmin", nota1: 10, nota2: 10},
   {nome: "vitoria", nota1: 10, nota2: 9},
   {nome: "vinicius", nota1: 8, nota2: 10},
   {nome: "vitor", nota1: 6, nota2: 5},
   {nome: "amanda", nota1: 8, nota2: 9},
   {nome: "marcela", nota1: 9, nota2: 8},
   {nome: "agatha", nota1: 0, nota2: 4},
   {nome: "luiz", nota1: 9, nota2: 9},
   {nome: "alba", nota1: 10, nota2: 8},
   {nome: "lucia", nota1: 3, nota2: 7},
   {nome: "mara", nota1: 1, nota2: 5},
   {nome: "roberto", nota1: 9, nota2: 7},
   {nome: "alberto", nota1: 10, nota2: 8},
   {nome: "mauro", nota1: 6, nota2: 7},
   {nome: "mila", nota1: 2, nota2: 5}

];

for (let cont= 0; cont < 15; cont++) {
    let media = (alunos[cont].nota1 + alunos[cont].nota2) / 2;
    if(media >= 5){
        console.log(`aluno(a): ${alunos[cont].nome} - media: ${media} - AP`);
    } else {
        console.log(`aluno(a): ${alunos[cont].nome} - media: ${media} - RP`);
    };
};