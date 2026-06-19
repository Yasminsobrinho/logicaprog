// Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
// qualquer, ou seja, de be

// , onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().

let base = 5;
let expo = 2
let cont = 1;
let result;

console.log(" informe o valor de B: ");
console.log(base);

console.log("informe o valor de E: ");
console.log(expo);

for ( cont = 1; cont <= expo; cont++ ) {
    result = base ** expo;
}

console.log(result);