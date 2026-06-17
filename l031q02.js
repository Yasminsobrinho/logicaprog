// 2)Elaborar um programa que pergunte o nome do usuário, quatro valores inteiros e apresente 2 resultados:
// a) Resultado de suas adições
// b) Resultado de suas multiplicações
// exibir, ao início, uma saudação ao usuário!


// declaração de variáveis
let nome ;
let nuum1, num2, num3, num4, soma, mult;

console.log("informe o seu nome: ");
//leia(nome)
nome = "rafael";

console.log("informe o primeiro valor inteiro: ");
num1 = 5;
console.log("informe o segundo valor inteiro: ");
num2 = 8;
console.log("informe o terceiro valor inteiro: ");
num3 = 10;
console.log("informe o quarto valor inteiro: ");
num4 = 12;


soma = num1 + num2 + num3 + num4
console.log("a soma dos quatro valores inseridos é "+ soma);
console.log(`soma: ${num1} + ${num2} + ${num3} + ${num4} = ${soma}`);


mult = num1 * num2 * num3 * num4;
console.log(`a multiplicação dos 4 valores inseridos é ${mult}`);
console.log(`Multiplicação: ${num1} x ${num2} x ${num3} x ${num4} = ${mult}`);
// comentário inserido em 17/06/26