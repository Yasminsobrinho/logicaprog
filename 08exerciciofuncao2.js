// Criar uma função calcularArea(base, altura) que
// retorne a área de um retângulo

function calcularArea(base, altura) {
    let area = base * altura;
    return area;
}

let a = calcularArea(2, 3);
console.log(`a área do retângulo é ${a}`);

let n1 = 5, n2 = 8;
n3 = calcularArea(n1, n2);
console.log(`a área do retângulo é ${n3}`);

// Criar uma função converterCelsius(temp) que converta
// Celsius para Fahrenheit: (temp * 9/5) + 32

function converterCelsius(temp) {
    return (temp * 9 / 5) + 32;
}
console.log(`temperatura 40 celsius = a ${converterCelsius(40)} Fahrenheit`);

// Criar uma função saudacaoPersonalizada(nome) que
// retorne "Olá, [nome]! Seja bem-vindo."

function saudacaoPersonalizada(nome) { // var local
    return `Olá, ${nome}! Seja bem-vindo.`
}
console.log(saudacaoPersonalizada("Yasmin"));

let nome = "lara"; //var global
console.log(saudacaoPersonalizada(nome));