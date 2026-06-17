//Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como resposta o módulo
//deste valor, ou seja, o número lido como sendo positivo

let num ;
console.log("informe um número: ")
num = 10;
console.log(`Número informado ${num}`);

if (num > 0) {
    console.log(` ${num} é positivo`);
} else if (num < 0) {
   console.log(` ${num} é negativo`); 
}