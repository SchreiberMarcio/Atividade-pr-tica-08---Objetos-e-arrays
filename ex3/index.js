/*
Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.
*/

let aluno1 = {
    nome: "Pedro",
    nota1: 9.5,
    nota2: 8.5,
}; 

let aluno2 = {
    nome: "Joao",
    nota1: 7.5,
    nota2: 5.5,
};

let mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2;

let mediaAluno2 = (aluno2.nota1 + aluno2.nota2) / 2;

console.log("Informações do Aluno 1:");
console.log("Nome:", aluno1.nome);
console.log("Nota 1:", aluno1.nota1);
console.log("Nota 2:", aluno1.nota2);
console.log("Média:", mediaAluno1);

console.log("\nInformações do Aluno 2:");
console.log("Nome:", aluno2.nome);
console.log("Nota 1:", aluno2.nota1);
console.log("Nota 2:", aluno2.nota2);
console.log("Média:", mediaAluno2);

let mediaTurma = (mediaAluno1 + mediaAluno2) / 2;
console.log("\nMédia da Turma:", mediaTurma);
