// Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
// elementos que sejam ímpares.

let numeros = [1, 8, 9, 12, 5];
let soma = 0;

console.log("digite um número (número 1): ");
console.log("digite um número (número 2): ");
console.log("digite um número (número 3): ");
console.log("digite um número (número 4): ");
console.log("digite um número (número 3): ");

for(let cont = 0; cont < numeros.length; cont++) {
   if(numeros[cont] % 2 === 1){
    soma += numeros[cont];
   }
}
console.log(soma);