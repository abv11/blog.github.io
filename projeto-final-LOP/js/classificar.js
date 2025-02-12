// Entrada de dados
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoAtual = new Date().getFullYear();
// 
// new Date() cria um novo objeto Date que representa o momento atual.
// .getFullYear() é um método do objeto Date que retorna o ano atual como um número inteiro.
// Por exemplo:
//
// let anoAtual = new Date().getFullYear();
// console.log(anoAtual); // Saída: 2025 (ou o ano atual)

let idade = anoAtual - anoNascimento;

// Processamento de dados
let classificacao;
if (idade <= 11) {
  classificacao = "criança";
} else if (idade < 18) {
  classificacao = "adolescente";
} else if (idade < 60) {
  classificacao = "adulto";
} else {
  classificacao = "idoso";
}

// Verificar se pode votar e obter a Carteira de Habilitação
let podeVotar = idade >= 16 ? "Sim, você pode votar" : "Não, você não pode votar";
let podeHabilitacao = idade >= 18 ? "Sim, você pode tirar a carteira de habilitação" : "Não, você não pode tirar a carteira de habilitação";

//Saída de dados
document.write("Você é " + classificacao + ".<br>" + podeVotar + ".<br>" + podeHabilitacao +  ".<br>")