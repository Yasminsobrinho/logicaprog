// Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
// valor informado pelo usuário.

let n = 5;
let acum = 0;

console.log("digite um numero: ");
console.log( n );

for (cont = 1; cont <= n; cont++) {
    acum = acum + cont;
    console.log ( `a soma dos números é: ${acum}`);
}