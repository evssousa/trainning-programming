function tipoDe(valor) {
    return typeof valor
}

function nomeValido(nome) {
    if (typeof nome === 'string' && nome !== '') {
        return true
    } else {
        return false
    }
}

function idadeValida(idade) {
    if (typeof idade === 'number' && idade >= 18 && idade < 120) {
        return true
    } else {
        return false
    }
}

function cadastroValido(nome, idade, ativo) {
    if (nomeValido(nome) && idadeValida(idade) && ativo === true) {
        return true
    } else {
        return false
    }
}

const cadastro = cadastroValido('Ana', 30, true)
console.log(cadastro)

module.exports = { tipoDe, nomeValido, idadeValida, cadastroValido }