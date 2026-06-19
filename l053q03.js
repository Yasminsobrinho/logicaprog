// Desenvolver um programa que apresente os resultados de uma tabuada de um número qualquer informado
// pelo usuário.

let num = 2;
let cont;

 console.log("digite um número: ");
 console.log( num );

 for ( cont = 1; cont <= 10; cont++ ) {
     console.log(`${num} x ${cont} = ${num * cont}`);
 }