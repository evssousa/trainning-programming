function tabelaDePrecos(precoUnitario) {
    const arr = []

    for (let i = 1; i <= 10; i++) {
        arr.push(i * precoUnitario)
    }

    return arr
}

function somaDe1Ate(n) {
    let sum = 0

    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            sum = sum + i
        }

        return sum
    } else {
        return sum
    }
}

function primeirosMultiplos(base, quantidade) {
    const arr = []

    for (let i = 1; i <= quantidade; i++) {
        arr.push(i * base)
    }

    return arr
}

module.exports = {
    tabelaDePrecos,
    somaDe1Ate,
    primeirosMultiplos
}