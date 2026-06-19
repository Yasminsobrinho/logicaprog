// Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam menores que 20.

let cont = 1;

do {
    if ( cont % 4 === 0){
         console.log( cont );

    }
    cont = cont + 1;
} while ( cont <= 20);