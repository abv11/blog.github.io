// Função principal para calcular o IMC (Índice de Massa Corporal).
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    // Captura o valor do peso inserido e o converte para número decimal.

    const altura = parseFloat(document.getElementById('altura').value);
    // Captura o valor da altura inserido e o converte para número decimal.

    let resultado;
    // Declara a variável onde o resultado será armazenado.

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        // Valida se os valores inseridos são números válidos e maiores que zero.
        resultado = 'Por favor, insira valores válidos para peso e altura.';
    } else {
        // Calcula o IMC usando a fórmula: peso / (altura * altura).
        const imc = peso / (altura * altura);

        let classificacao;
        // Declara a variável para a classificação do IMC.

        // Classifica o IMC com base nos valores padrão.
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso. Você está abaixo do peso ideal, cuide-se para alcançar um peso saudável';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal. Parabéns! Você está no peso ideal.';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso. Cuidado! Você está acima do peso ideal, cuide-se para atingir um peso saudável.';
        } else {
            classificacao = 'Obesidade. Cuidado! Você está acima do peso ideal, cuide-se para atingir um peso saudável.';
        }

        // Formata o resultado com o IMC calculado e sua classificação.
        resultado = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
    }

    // Exibe o resultado no elemento com ID "resultadoIMC".
    document.getElementById('resultadoIMC').textContent = resultado;
}
//Função calcularIMC:
//Essa função realiza o cálculo do IMC (Índice de Massa Corporal).
//O IMC é calculado utilizando a fórmula: IMC=peso/(altura*altura).

//Entrada de Dados:
//Os valores de peso e altura são capturados utilizando document.getElementById.
//O método parseFloat é usado para converter os valores de texto para números com casas decimais.

//Validação:
//A função verifica se os valores inseridos são válidos (não vazios, numéricos e positivos).
//Caso os valores não sejam válidos, uma mensagem de erro é exibida.
//Cálculo do IMC:

//Se os valores forem válidos, o IMC é calculado.
//O método toFixed(2) é utilizado para formatar o resultado com 2 casas decimais.

//Classificação:
//O IMC é classificado em categorias:
//Abaixo de 18.5: "Abaixo do peso".
//Entre 18.5 e 24.9: "Peso normal".
//Entre 25 e 29.9: "Sobrepeso".
//Acima de 30: "Obesidade".
//Exibição do Resultado:

//O texto formatado com o IMC e sua classificação é exibido no elemento com ID resultadoIMC.
// A função 'calcularIMC' é responsável por realizar o cálculo do IMC (Índice de Massa Corporal) com base nos valores de peso e altura inseridos pelo usuário.

// Entrada de Dados:
// - `document.getElementById('peso').value`: Captura o valor do peso inserido no campo de texto com ID 'peso' e o converte para um número decimal utilizando a função `parseFloat()`.
// - `document.getElementById('altura').value`: Captura o valor da altura inserido no campo de texto com ID 'altura' e o converte para um número decimal utilizando a função `parseFloat()`.

// Validação:
// - `isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0`: Verifica se os valores inseridos para peso e altura são números válidos (não são NaN, ou seja, não são "Not a Number") e são maiores que zero.
// - Caso os valores não sejam válidos, a variável `resultado` recebe a mensagem de erro: "Por favor, insira valores válidos para peso e altura."

// Cálculo do IMC:
// - `const imc = peso / (altura * altura);`: Calcula o IMC utilizando a fórmula padrão: peso dividido pela altura ao quadrado.
// - `imc.toFixed(2)`: Formata o resultado do IMC com duas casas decimais após o ponto decimal.

// Classificação do IMC:
// - A variável `classificacao` recebe uma string que define a classificação do IMC com base nos valores padrão:
//     - `imc < 18.5`: "Abaixo do peso"
//     - `imc >= 18.5 && imc < 24.9`: "Peso normal"
//     - `imc >= 25 && imc < 29.9`: "Sobrepeso"
//     - `imc >= 30`: "Obesidade"

// Exibição do Resultado:
// - `resultado = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;`: Constrói a mensagem final com o IMC e sua classificação.
// - `document.getElementById('resultadoIMC').textContent = resultado;`: Exibe o resultado calculado no elemento com ID 'resultadoIMC' na página HTML.
    // A string `resultado` é construída para exibir o resultado do cálculo do IMC, contendo duas partes principais:
    // 1. `Seu IMC é ${imc.toFixed(2)}`:
    //     - `Seu IMC é`: Uma frase fixa que introduz o resultado do cálculo.
    //     - `${imc.toFixed(2)}`: Interpolação de string que insere o valor do IMC calculado, formatado com duas casas decimais usando o método `toFixed(2)`.
    // 2. `(${classificacao}).`:
    //     - `(` e `)`: Parênteses que delimitam a classificação do IMC.
    //     - `${classificacao}`: Interpolação de string que insere a classificação do IMC, que foi determinada anteriormente com base no valor calculado de `imc`.
    //     - `.`: Um ponto final para finalizar a frase.
    
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
    // O resultado é o mesmo, mas a interpolação de string torna o código mais limpo 
    // e fácil de entender.