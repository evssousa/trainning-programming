function precoLanche(tamanho) {
    switch (tamanho) {
        case 'pequeno':
            return 12
        
        case 'medio':
            return 18

        case 'grande':
            return 24

        default:
            return 0
    }
}

function precoBebida(tipo) {
    switch (tipo) {
        case 'suco':
            return 7

        case 'refrigerante':
            return 6

        case 'agua':
            return 4

        default:
            return 0
    }
}

function precoTotal(tamanhoLanche, tipoBebida) {
    return precoLanche(tamanhoLanche) + precoBebida(tipoBebida)
}

module.exports = {
    precoLanche,
    precoBebida,
    precoTotal
}