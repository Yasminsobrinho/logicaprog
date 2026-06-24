// Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
// elementos deste vetor.

let numeros = [1, 2, 3, 4, 5];
soma = 0;

console.log("digite um número (número 1): ");
console.log("digite um número (número 2): ");
console.log("digite um número (número 3): ");
console.log("digite um número (número 4): ");
console.log("digite um número (número 5): ");

for(let num of numeros){
    soma += num;
}
console.log(`a soma total é: ${soma}`);