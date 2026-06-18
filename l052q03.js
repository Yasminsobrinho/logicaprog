// Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiro
let cont = 0;
let acum = 0;

do {
    acum += cont; // acum = acum + cont;
    cont += 1; // cont = cont + 1;
} while ( cont <= 5 );

console.log (`a soma dos valores de 0 a 5 é ${acum}`);