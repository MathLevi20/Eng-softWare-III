/*
1- Sim, classes abstratas surgem do desconhecimento da implementação de um trecho específico de uma classe, de modo que ao instanciá-las, deve-se especificar o comportamento do trecho abstrato.
2- É necessário que o método ImprimaAlgo() da superclasse seja declarado.
3- A subclasse é obrigada a sobrescrever o método da superclasse abstrata.
*/

/*
5- porquê o vetor não precisa inicializar a classe
*/


//6------------------
abstract class Funcionario {
    abstract getbonificacao(): void;
}

class Gerente extends Funcionario {
    salario: number
    constructor(salario: number) {
        super()
        this.salario = salario;
    }
    getbonificacao(): number {
        return this.salario * 0.4
    }
}
class Diretor extends Funcionario {
    salario: number
    constructor(salario: number) {
        super()
        this.salario = salario;
    }
    getbonificacao(): number {
        return this.salario * 0.6
    }
}

class Presidente extends Funcionario {
    salario: number
    constructor(salario: number) {
        super()
        this.salario = salario;
    }
    getbonificacao(): number {
        return this.salario * 1
    }
}
