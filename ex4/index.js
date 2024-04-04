/*
Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando

pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

let pessoasDesempregadas = [];
let pessoasEmpregadasMenor2500 = [];
let pessoasEmpregadasMaior2500 = [];

function cadastrarPessoa() {
  let nome = prompt("Digite o nome da pessoa:");
  let idade = parseInt(prompt("Digite a idade da pessoa:"));
  let estaTrabalhando = confirm("Esta pessoa está trabalhando?");
  let salario;
  let pessoa = {
    nome:nome,
    idade:idade,
    salario:salario,
    trabalhando:estaTrabalhando
  }
  if (estaTrabalhando) {
    let salarioStr = prompt("Digite o salário da pessoa:");
    salario = parseFloat(salarioStr);
    if (salario < 2500) {
      pessoasEmpregadasMenor2500.push(pessoa);
    } else {
      pessoasEmpregadasMaior2500.push(pessoa);
    }
  } else {
    salario = undefined;
    pessoasDesempregadas.push(pessoa);
  }
}

let continuarCadastrando = true;
while (continuarCadastrando) {
  cadastrarPessoa();
  continuarCadastrando = confirm("Deseja continuar cadastrando?");
}

console.log("Pessoas desempregadas:");
pessoasDesempregadas.forEach((pessoa) => {
  console.log("Nome:", pessoa.nome + ",", "Idade:", pessoa.idade);
});

console.log("\nPessoas empregadas com salários menores que 2500:");
pessoasEmpregadasMenor2500.forEach((pessoa) => {
  console.log(
    "Nome:",
    pessoa.nome + ",",
    "Idade:",
    pessoa.idade + ",",
    "Salário:",
    pessoa.salario
  );
});

console.log("\nPessoas empregadas com salários maiores que 2500:");
pessoasEmpregadasMaior2500.forEach((pessoa) => {
  console.log(
    "Nome:",
    pessoa.nome + ",",
    "Idade:",
    pessoa.idade + ",",
    "Salário:",
    pessoa.salario
  );
});
