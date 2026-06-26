// Desenvolver um programa que pergunte 20 elementos de um vetor a e construa um vetor b de mesma
// dimensão com os mesmos elementos de a, os quais devem estar invertidos, ou seja, o primeiro elemento de a
// passa a ser o último elemento de b, e assim por diante. Apresentar os vetores a e b.

let a = [2, 3, 4, 5, 2, 12, 4, 5, 6, 1, 7, 2, 2, 3, 4, 5, 6, 1, 7, 11];
let b = [11, 7, 1, 6, 5, 4, 3, 2, 2, 7, 1, 6, 5, 4, 12, 2, 5, 4, 3, 2];
let cont = 0;
for(cont = 0; cont < a.length; cont++) {
    console.log(`${a[cont]}`);
    console.log(` ${b[cont]}`);
};