// ASSUNTO: VETORES

// vetor com nomes de alunos
let alunos = ["Ana", "Bruno", "Carlos", "Diana"];

// vetor com notas de alunos
let notas = [8.5 , 3 , 8 , 10];

// vetor de números
let numeros = [6, 23, -7, 18, 4, 92, 15, 33, 0, 50];

 console.log(alunos); // exibe os dados do vetor todo
 console.log(alunos[3]); // exibir diana
 console.log(alunos[0]); // exibir ana
alunos[2] = "antonio";
console.log(alunos) // vetor todo (agora c antonio)

// for para percorrer cada indice do vetor
for (let cont = 0 ; cont < 4 ; cont++) {
console.log( `aluno(a) ${cont + 1}: ${alunos[cont]}.`);
}

console.log(notas); // exibindo todas as notas 
console.log(notas[2]); // 8

// for para percorrer cada indice dos dois vetores / FOR CLÁSSICO
for (let cont = 0 ; cont < 4 ; cont++) {
   console.log(`nome: ${alunos[cont]} - nota ${notas[cont]} `);
}

console.log(alunos.length); // exibir tamanho do vetor: 4

// quando usa o nome da do vetor 1 length é para mudar o tamanho do vetor sem precisar mexer no for
for (let cont = 0 ; cont < alunos.length ; cont++) {
    console.log( `aluno(a) ${cont + 1}: ${alunos[cont]}.`);
}

// exemplo com FOR OF 
for (let aluno of alunos) {
    console.log(`nome: ${aluno}`);
}

// exemplo com FOR EACH
alunos.forEach(function(aluno, indice){
    console.log(`índice: ${indice}, aluno: ${aluno}`);
});

// método PUSH, UNSHIFT, POP e SHIFT

// PUSH - adiciona ao final do vetor
alunos.push("raimundo");
console.log(alunos); 

// POP - remove do final do vetor
alunos.pop();
console.log(alunos);

// UNSHIFT - adiciona ao inicio do vetor
alunos.unshift("raimundo");
console.log(alunos);

// SHIFT - remove do início do vetor
alunos.shift();
console.log(alunos);

console.log(numeros);

// ordem crescente
numeros.sort( (a, b) => a - b );
console.log(numeros);

// ordem decrescente
numeros.sort( (a ,b) => b - a );
console.log(numeros);

