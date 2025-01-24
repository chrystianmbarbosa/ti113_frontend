function calcularIMC() {
    let pessoa = {
        nome: document.querySelector('#txtNome').value,
        altura: document.querySelector('#txtAltura').value,
        peso: document.querySelector('#txtPeso').value
    }
    let resultado = parseFloat(pessoa.peso) / Math.pow(pessoa.altura, 2);
    let paragrafo = document.querySelector('#mostrarIMC');
    paragrafo.innerHTML =
        ` O IMC de ${pessoa.nome} é igual a ${resultado.toFixed(2)}`;
}

let botao = document.querySelector('#btnCalcular');
botao.addEventListener("click", calcularIMC);