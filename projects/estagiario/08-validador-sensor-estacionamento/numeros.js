function ehParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

function sinalDoNumero(numero) {
    if (numero > 0) {
        return 'positivo'
    } else if (numero < 0) {
        return 'negativo'
    } else {
        return 'zero'
    }
}

function maiorEntre(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    } else {
        return a
    }
}

function estaNoIntervalo(numero, min, max) {
    if (numero >= min && numero <= max) {
        return true
    } else {
        return false
    }
}

module.exports = { 
    ehParOuImpar,
    sinalDoNumero,
    maiorEntre,
    estaNoIntervalo
}