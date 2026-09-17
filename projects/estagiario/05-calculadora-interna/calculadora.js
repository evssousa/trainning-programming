function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero"
    } else {
        return a / b
    }
}

function resto(a, b) {
    return a % b
}

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

module.exports = { 
    somar,
    subtrair,
    multiplicar,
    dividir,
    resto,
    ehPar 
}