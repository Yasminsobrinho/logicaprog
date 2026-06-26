// Crie um objeto aluno
// Com as propriedades: nome (string), idade (number) e matriculado
// (boolean). Use seus próprios dados!

// 2

// Acesse e exiba cada propriedade
// Use console.log para exibir cada valor separadamente usando a
// notação de ponto.

// 3

// Modifique uma propriedade
// Altere o valor de idade para um número diferente e exiba o novo
// valor no console.


let aluno = {
    nome: "mara",
    idade: 21,
    matriculado: true
}

console.log(`nome: ${aluno.nome}`);
console.log(`idade: ${aluno.idade}`);
console.log(`matriculado: ${aluno.matriculado}`);

aluno.idade = 12;

console.log(`idade: ${aluno.idade}`);