// Fazer um programa que pergunte o salário de um funcionário e apresente esse salário com um aumento de 15%

let salario, acrescimo, SalFinal;

console.log("Informe o salário: ");
salario = 1000.00;

acrescimo = salario * 15 / 100;
SalFinal = salario + acrescimo;

console.log(`O novo salário é: R$ ${SalFinal.toFixed(2)}`);