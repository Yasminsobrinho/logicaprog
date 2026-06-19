// Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 3 até 21.
let acum = 0
let cont;

for ( cont = 3; cont <= 21; cont++) {

    if (cont % 2 === 0 ){

        acum = acum + cont
    }

}

console.log(`${acum}`);