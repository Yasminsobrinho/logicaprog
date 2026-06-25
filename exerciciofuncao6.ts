// Escreva uma função chamada verificarMaioridade em
// TypeScript. Ela deve receber um parâmetro chamado idade (do Ipo number) e retornar uma string dizendo
// "Maior de idade" se a idade for 18 ou mais, ou "Menor de idade" caso contrário. CerIfique-se de definir o
// Ipo do retorno da função.

function verificarMaioridade(idade: number): string {
    if (idade >= 18){
        return "Maior de idade";
    } else {
        return "menor de idade";
    }
}
console.log(verificarMaioridade(12));