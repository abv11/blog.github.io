
//Entrada de dados
let contador = 1; //contador

while (contador == 1) {
  //Entrada e Armazenamento
  let nome = prompt("digite o nome do(a) aluno(a):");
  let nota1 = parseFloat(prompt("digite a nota do(a) aluno(a):"));
  let nota2 = parseFloat(prompt("digite a nota do(a) aluno(a):"));

  //Processar
  let media = (nota1 + nota2) / 2;

  //Saída
  document.write("Nome do(a) aluno(a):" + nome + "<br>");
  document.write("Média do(a) aluno(a):" + media + "<br>");

  //Processamento e Saída de Dados
  if (media >= 6) {
    document.write("Aprovado(a)!" + "<br>");
  } else {
    document.write("Reprovado(a)!" + "<br>");
  }

  //Entrada e Armazenamento de Dados - Verificar se continua pedindo dados do usuário ou não
  let contador = parseInt(
    prompt(
      "Deseja inserir dados de outro aluno? Se sim digite 1, se não digite 0"
    )
  );
  if (contador == 0) {
    break;
  }
}
