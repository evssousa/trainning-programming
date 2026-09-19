function paraNumero(texto) {
    let num = Number(texto)
    if (Number.isNaN(num)) {
        return null
    } else {
        return num
    }
}

function paraTexto(valor) {
    return String(valor)
}

function paraBooleano(valor) {

    if (valor === 0 || 
        valor === '' || 
        valor === null ||
        valor === undefined ||
        Number.isNaN(valor)
    ) {
        return false
    } else {
        return true
    }
}

function saoIguais(a, b) {
    if (a == b) {
        return true
    } else {
        return false
    }
}

function saoIdenticos(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}

module.exports = {
    paraNumero,
    paraTexto,
    paraBooleano,
    saoIguais,
    saoIdenticos
}