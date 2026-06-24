// Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
// de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
// das 5 pessoas cadastradas.

let nomes = ["vitoria", "vinicius", "roberta", "alba", "mara"];
let profissoes = ["medico(a)", "veterinario(a)", "policial", "programador(a)"];

console.log("digite o nome da pessoa 1: ");
console.log("digite o nome da pessoa 2: ");
console.log("digite o nome da pessoa 3: ");
console.log("digite o nome da pessoa 4: ");
console.log("digite o nome da pessoa 5: ");
console.log("digite a profissão da pessoa 1: ");
console.log("digite a profissão da pessoa 2: ");
console.log("digite a profissão da pessoa 3: ");
console.log("digite a profissão da pessoa 4: ");
console.log("digite a profissão da pessoa 5: ");

for(let cont = 0; cont < nomes.length; cont++) {
console.log(`PESSOA ${cont}`);
console.log(`nome: ${nomes[0]} - profissão: ${profissoes[0]}`);
};
