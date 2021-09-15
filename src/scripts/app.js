/* Variáveis Globais */

const msgRange = document.getElementById("range");
const resultado = document.getElementById("resultado");
const elementoChute = document.getElementById("valor");
const minNum = 0;
const maxNum = 100;
var numeroInicial = 0;
var numeroFinal = 10;
var numeroSecreto = (numeroSecreto = parseInt(
    Math.random() * (numeroFinal - numeroInicial + 1) + numeroInicial
));

var numerosValidos = true;

/* Checa se não tem valores inválidos como campo vazio */
function checaValorValido(valor) {
    numerosValidos = !(valor === "" || isNaN(valor));
    console.log(numerosValidos);
    return numerosValidos;
}

function checaRange() {
    if (!checaValorValido(numeroInicial) || !checaValorValido(numeroFinal)) {
        resultado.innerHTML = "range inválido";
    } else if (
        numeroInicial < minNum ||
        numeroFinal > maxNum ||
        numeroInicial > numeroFinal
    ) {
        msgRange.innerHTML = "range inválido";
        numerosValidos = false;
    } else {
        msgRange.innerHTML = `Digite um número de ${numeroInicial} a ${numeroFinal}`;
        numerosValidos = true;
    }
}

function calcNumSecreto() {
    resultado.innerHTML = "";
    numeroInicial = parseInt(document.getElementById("numInicial").value);
    numeroFinal = parseInt(document.getElementById("numFinal").value);
    console.log(numeroInicial);
    console.log(numeroFinal);
    checaRange();
    if (numerosValidos) {
        numeroSecreto = parseInt(
            Math.random() * (numeroFinal - numeroInicial + 1) + numeroInicial
        );
    }
}

function chutar() {
    resultado.innerHTML = " ";
    console.log("iniciando chutar");
    checaRange();
    if (numerosValidos) {
        const chute = parseInt(elementoChute.value);
        console.log(chute);
        console.log(numeroSecreto);
        checaValorValido(chute);
        if (!numerosValidos || chute < numeroInicial || chute > numeroFinal) {
            resultado.innerHTML = "número inválido";
        } else if (chute == numeroSecreto) {
            resultado.innerHTML = "acertou";
        } else {
            resultado.innerHTML = "errou";
        }
    }
}
