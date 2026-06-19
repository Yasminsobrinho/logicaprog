// Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
// perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10)

let num = 2;
let cont = 1;
let acum;

console.log("informe um número: ");
console.log(`número informado: ${num}`);

do {
     acum = num * cont;
    console.log ( `${num} x ${cont} =  ${acum}`);
    cont = cont + 1;
} while ( cont <= 10 );