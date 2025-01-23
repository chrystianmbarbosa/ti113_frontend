let pessoa = {};
pessoa.nome = prompt("Informe Nome");
pessoa.altura = parseFloat(prompt("Informe Altura:"));
pessoa.idade = parseInt(prompt("Informe Idade:"));
pessoa.dataNascimento = prompt(
    "Informe Data Nascimento (dd/MM/yyyy)");

console.log(pessoa);
alert(
    `O nome digitado é ${pessoa.nome}
    A altura informada é ${pessoa.altura.toFixed(2)}
    A idade informada é ${pessoa.idade}
    A data de nascimento informada é ${pessoa.dataNascimento} `
);