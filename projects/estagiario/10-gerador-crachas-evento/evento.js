function numerosDosCrachas(quantidade) {
    let arr = []

    if (quantidade > 0 && quantidade <= 4) {
        for (let i = 1; i < quantidade; i++) {
            arr.push(i)
        }
        
        return arr
    } else {
        return arr
    }
}

function repetirMensagem(mensagem, vezes) {
    let arr = []

    if (vezes > 0) {
        for (let i = 1; i <= vezes; i++) {
            arr.push(mensagem)
        }

        return arr
    } else {
        return arr
    }
}

module.exports = { numerosDosCrachas, repetirMensagem }