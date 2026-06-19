/*Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.*/

let sexFem = 1;
let sexMasc = 2;

console.log("Selecione se você é homem ou mulher: ")

 switch ( sexFem ){
    case 2 :
        console.log("Você selecionou:(homem) Banheiro masculino à direita ");
        break;
    case 1:
        console.log("Você selecionou:(Mulher) Banheiro feminino à esquerda");
        break;
 }