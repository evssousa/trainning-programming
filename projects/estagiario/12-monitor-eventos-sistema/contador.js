function contarAteLimite(limite) {
    const arr = []
    let num = 1

    if (limite >= 0) {
        while (num <= limite) {
            arr.push(num++)
        }
        return arr
    } else {
        return arr
    }
}

function fatorial(n) {
    let resultado = 1
    let contador = 1

    while (contador <= n) {
        resultado = resultado * contador
        contador++
    }
    return resultado
}

function processarFila(fila) {
    const arr = []
    let contador = 0

    while (contador < fila.length) {
        arr.push(`processado: ${fila[contador]}`)
        contador++
    }
    return arr
}

module.exports = {
    contarAteLimite,
    fatorial,
    processarFila
}