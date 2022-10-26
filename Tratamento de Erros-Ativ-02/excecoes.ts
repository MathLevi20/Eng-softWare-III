class AplicacaoError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class ContaInexistenteError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class SaldoInsuficienteError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}


class ContaJaCadastradaError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
class ValorInvalidoError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class PoupancaInvalidaError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

export {PoupancaInvalidaError,ValorInvalidoError, ContaJaCadastradaError, AplicacaoError, SaldoInsuficienteError, ContaInexistenteError}