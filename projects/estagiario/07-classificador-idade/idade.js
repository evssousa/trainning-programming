function faixaEtaria(idade) {
    if (idade >= 0 && idade <= 11) {
        return 'crianca'
    } else if (idade >= 12 && idade <= 17) {
        return 'adolescente'
    } else if (idade >= 18 && idade <= 59) {
        return 'adulto'
    } else if (idade >= 60) {
        return 'idoso'
    }
}

function precoIngresso(idade) {
    if (faixaEtaria(idade) === 'crianca' || faixaEtaria(idade) === 'idoso') {
        return 10
    } else if (faixaEtaria(idade) === 'adolescente') {
        return 16
    } else if (faixaEtaria(idade) === 'adulto') {
        return 24
    }
}

function podeAssistir(idade, classificacao) {
    if (idade >= classificacao) {
        return true
    } else {
        return false
    }
}

module.exports = { faixaEtaria, precoIngresso, podeAssistir }