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

}

function processarFila(fila) {

}

module.exports = {
    contarAteLimite,
    fatorial,
    processarFila
}