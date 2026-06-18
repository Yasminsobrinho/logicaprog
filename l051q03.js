//Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.

let cont = 15;

while ( cont <= 200 ){

    console.log( `${cont} elevado ao quadrado = ${cont * cont}` );
    cont = cont + 1;
}
/* ou
let cont = 15;
let pot;
while ( cont <= 200 ){
    pot = cont * cont ( ou math.pow )
    console.log( `${cont} elevado ao quadrado = ${pot}` );
    cont = cont + 1;
}*/