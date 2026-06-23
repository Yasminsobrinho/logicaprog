// Dado um array desordenado, exiba-o antes e depois da ordenação, tanto crescente quanto decrescente.

let numeros = [42, 7, 19, 3, 55, 28];

console.log("Original:", numeros);
// [42, 7, 19, 3, 55, 28]
// Criar cópia para não alterar o original

let crescente = [...numeros].sort((a, b) => a - b);
console.log("Crescente:", crescente);
// [3, 7, 19, 28, 42, 55]

let decrescente = [...numeros].sort((a, b) => b - a);
console.log("Decrescente:", decrescente);
// [55, 42, 28, 19, 7, 3]