/* Puxando dados */
const calcular = document.getElementById("calcular")

/* Eventos e Manipulação de dados */

function imc() {
    /* puxando dados dentro da funçaõ */
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1) // to fixed arredonda o numero

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso ideal.'
        } else if (valorIMC > 27.1) {
            classificacao = 'com sobre peso.'
        }  else {
            classificacao ='com o peso ideal.'
        }

        resultado.innerText = `${nome}, seu IMC é de ${valorIMC}. E esta ${classificacao}`
    } else {
        resultado.innerText = 'Preencha todos os campos!'
    }

}

calcular.addEventListener('click', imc) // quando o calcular for clickado faça a funçao imc
