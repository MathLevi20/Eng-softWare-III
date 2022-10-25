import { InputError } from './excecoes/excecoes';

// Questão 02
class Pessoa {
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this._nome = nome
        this._sobrenome = sobrenome
    }

    getNome(): string {
        return this._nome
    }

    getSobrenome(): string {
        return this._sobrenome
    }

    getNomeCompleto() {
        const NomeCompleto = `${this._nome} ${this._sobrenome}`
        return NomeCompleto
    }
}

class Funcionario extends Pessoa {
    private _matricula: string
    protected salario: number

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        if (salario < 0 || matricula.length < 1 || nome.length < 2) {
            throw new InputError('Error').message;
        }
        super(nome, sobrenome)
        this._matricula = matricula
        this.salario = salario

    }

    getMatricula() {
        return this._matricula
    }

    getSalario() {
        return this.salario
    }

    calcularSalarioPrimeiraParcela() {
        const porcentagem = 0.6
        return this.salario * porcentagem
    }

    calcularSalarioSegundaParcela() {
        const porcentagem = 0.4
        return this.salario * porcentagem
    }
}

class Professor extends Funcionario {
    private _titulacao: string

    constructor(nome: string, sobrenome: string, salario: number, matricula: string, titulacao: string) {
        super(nome, sobrenome, matricula, salario)
        this._titulacao = titulacao
    }

    getTitulacao() {
        return this._titulacao
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario
    }

    calcularSalarioSegundaParcela(): number {
        return 0
    }
}
function main() {
    let pessoa = new Pessoa('Daniela', 'Ferreira')
    console.log(pessoa.getNomeCompleto())

    let funcionario = new Funcionario('Bryan', 'Oliveira', '6969', 100)
    console.log(funcionario.getMatricula())
    console.log(funcionario.getSalario())
    console.log(funcionario.calcularSalarioPrimeiraParcela())
    console.log(funcionario.calcularSalarioSegundaParcela())

    let professor = new Professor('Bruno', 'Castro', 1000, '123', 'doutor')

    console.log(professor)
}

main()