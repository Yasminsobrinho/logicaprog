//Desenvolver um programa que apresente todos os números divisíveis por 5 que sejam menores que 50.

num = 5;
 
console.log( num );

for ( num = 5; num <= 50; num++) {

    if ( num %5 === 0 ) {
        console.log( num );
    }
}