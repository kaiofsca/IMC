/* Puxando dados */
const calcular = document.getElementById("calcular")

/* Eventos e Manipulação de dados */

function imc() {
    /* puxando dados dentro da funçaõ */
    const nome = document.getElementById("nome")
    const altura = document.getElementById("altura")
    const peso = document.getElementById("peso")
    const resultado = document.getElementById("resultado")

    if (nome.value === '') {
        alert('nome')
    }

}

calcular.addEventListener('click', imc) // quando o calcular for clickado faça a funçao imc
