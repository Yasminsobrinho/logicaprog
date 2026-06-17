/*Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
Código Opção
1 Incluir
2 Alterar
3 Excluir
4 Pesquisar
5 Sair*/

let cod;

console.log("menu de opções:");
console.log("código opção");
console.log("1 incluir");
console.log("2 alterar");
console.log("3 excluir");
console.log("4 pesquisar");
console.log("5 sair");
console.log("informe p código referente a ação desejada: ");
cod = 40;
console.log(`código inserido ${cod}`);

switch ( cod ) {
    case 1:
        console.log("Você selecionou: 1 - incluir");
        break;
    case 2:
        console.log("Você selecionou: 2 - alterar");
        break;
    case 3:
        console.log("Você selecionou: 3 - excluir");
        break;
    case 4:
        console.log("Você selecionou: 4 - pesquisar");
        break;
    case 5:
        console.log("Você selecionou: 5 - sair");
        break;
    default:
        console.log("código informado não é válido.");
        break;
}
