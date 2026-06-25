//material 08 (modularização e funcão)

let num;  //variável GLOBAL (variável que funciona em todo o código)

function somar(a, b) {
    let result = a + b;
    return result;  //result é uma variável LOCAL (só vai funcionar dentro das "{}" dela)
}
direcionador(); // é possivel chamar uma função de qualquel lugar do código

//exibindo imediatamente o valor retornado pela função
console.log(somar( 5, 3 ));

//guardando o valor retornado em uma variável
num = somar(10, 20);
console.log(num); 

somar (4, 5);  //o retorno da função se perde

function direcionador(){
    console.log("siga em frinte! estude sempre!");
}

//chamando a função direcionador()
direcionador();
direcionador();

let texto = direcionador();
console.log(texto);  //não recebe retorno da função

//função sem return (função void)
function  mensagem() {
    return "ame mais, brigue menos!";
}

//chamando a função mensagem()
mensagem();  // perdi o retorno da função
console.log( mensagem() );

function tudao(){
    console.log("inicio da função tudao()");
    direcionador(); // chamando a função direcionador()
    let calc = somar(2, 3); //chamando a função somar e guardando na variável calc
    console.log(`resultado da soma: ${calc}`);
    let msg = mensagem();
     direcionador();
     console.log(`mensagem do dia do dia: ${msg}`);
     console.log("fim da função tudao()");
}
tudao(); // chamando a função tudao