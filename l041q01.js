/*Desenvolva um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a metade deste número, senão, ele deverá exibir o número sem alterações. */

let num, metade;

console.log("informe o numero: ");

num = 20; //exemplo de um numero informado pelo usuario

 if (num > 20 ) {
    metade = num / 2;
    console.log(`a metade de ${num} é ${metade}`);
} else {
    console.log(`o numero inserido foi ${num}`);
}

console.log("FIM DO PROGRAMA");
