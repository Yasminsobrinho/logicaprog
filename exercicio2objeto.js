// Crie um array com 3 produtos
// Cada produto deve ter nome (string) e preco (number). Ex:
// Notebook, Mouse, Teclado.

// Acesse o primeiro e o último produto
// Use a notação de índice para exibir o nome de cada um no
// console.

// Percorra a lista com for...of
// Exiba o nome e o preço de cada produto no formato:
// "Produto: Notebook | Preço: R$ 3000"

// Modifique o preço do segundo produto
// Altere o preço usando o índice e exiba a lista novamente
// para confirmar a mudança.


let produtos = [
    { nome: "notebook", preco: 2000},
    {nome: "mouse", preco:  100},
    {nome:"teclado", preco: 200 } 
];

for(let produto of produtos){
    console.log(`roduto: ${produto.nome} | preço: ${produto.preco}`);
    }
