// Entrada de dados
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

// Calcula a soma, subtrações, produto e divisão
let soma = num1 + num2;
let subtracao1 = num1 - num2;
let subtracao2 = num2 - num1;
let produto = num1 * num2;
let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero não permitida";
let quociente = num2 !== 0 ? Math.floor(num1 / num2) : "Divisão por zero não permitida";
let resto = num2 !== 0 ? num1 % num2 : "Divisão por zero não permitida";

// Verifica a relação entre os números
let relacao = num1 > num2 ? "maior" : (num1 < num2 ? "menor" : "igual");

// Calcula a potência
let potencia = Math.pow(num1, num2);

// Exibe os resultados
alert(`Soma: ${soma}`);
alert(`Subtração do primeiro pelo segundo: ${subtracao1}`);
alert(`Subtração do segundo pelo primeiro: ${subtracao2}`);
alert(`Produto: ${produto}`);
alert(`Divisão: ${divisao}`);
alert(`Quociente inteiro: ${quociente}`);
alert(`Resto da divisão: ${resto}`);
alert(`O primeiro número é ${relacao} que o segundo número`);
alert(`O primeiro número elevado à potência do segundo número: ${potencia}`);

//Escrevendo

document.write(`Soma: ${soma}<br>`);
document.write(`Subtração do primeiro pelo segundo: ${subtracao1}<br>`);
document.write(`Subtração do segundo pelo primeiro: ${subtracao2}<br>`);
document.write(`Produto: ${produto}<br>`);
document.write(`Divisão: ${divisao}<br>`);
document.write(`Quociente inteiro: ${quociente}<br>`);
document.write(`Resto da divisão: ${resto}<br>`);
document.write(`O primeiro número é ${relacao} que o segundo número<br>`);
document.write(`O primeiro número elevado à potência do segundo número: ${potencia}`);

// Interpolação de string é uma maneira de inserir valores de variáveis dentro de uma string,
// tornando o código mais fácil de ler e escrever. Em JavaScript, você usa o caractere ` `
// para indicar o início e o fim da interpolação. 
// Dentro da interpolação, você pode usar expressões JavaScript, 
// como variáveis, operações matemáticas e até mesmo chamadas de função. 
// Por exemplo, em vez de escrever:
// 
//     let nome = "João";
//     let mensagem = "Olá, " + nome + "!";
//
// Você pode usar a interpolação de string:
// 
//     let nome = "João";
//     let mensagem = `Olá, ${nome}!`;
//
// 
// O símbolo `$` dentro de uma string em JavaScript é usado para interpolação de string. 
// A interpolação de string é uma maneira de inserir valores de variáveis diretamente dentro de uma string, 
// tornando o código mais fácil de ler e escrever.
//
// Em JavaScript, a interpolação de string é feita usando crase (` `) para delimitar a string. 
// Dentro da string, você pode usar `${variável}` para inserir o valor de uma variável. 
// Por exemplo:
// 
//     let nome = "João";
//     let mensagem = `Olá, ${nome}!`; // A string "Olá, João!" será exibida
//
// Sem a interpolação de string, você teria que usar o operador de concatenação (+) para unir as partes da string:
// 
//     let nome = "João";
//     let mensagem = "Olá, " + nome + "!"; // A string "Olá, João!" será exibida
//
// A interpolação de string é uma característica moderna do JavaScript que torna o código mais limpo e fácil de entender. 
// Ela também oferece mais flexibilidade, pois você pode usar expressões JavaScript dentro da interpolação. 
// Por exemplo:
// 
//     let idade = 25;
//     let mensagem = `Você tem ${idade} anos.`; // A string "Você tem 25 anos." será exibida
// 
// A interpolação de string é uma ótima maneira de tornar seu código mais legível e fácil de manter. 
// O resultado é o mesmo, mas a interpolação de string torna o código mais limpo 
// e fácil de entender.