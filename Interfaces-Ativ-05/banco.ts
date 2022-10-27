interface Tributavel {
    calculaTributos(): number;
}

class Conta {
    nome: string
    saldo: number

    constructor(nome: string, saldo: number) {
        this.nome = nome
        this.saldo = saldo
    }

    getNome(): string {
        return this.nome
    }

    getSaldo(): number {
        return this.saldo
    }

    setNome(valor: string): void {
        this.nome = valor
    }

    setSaldo(valor: number): void {
        this.saldo = valor
    }

}

class ContaCorrente extends Conta implements Tributavel {

    calculaTributos(): number {
        return this.saldo * 0.1
    }

}

class Seguro implements Tributavel {

    calculaTributos(): number {
        return 50.00
    }

}

class AuditoriaInterna {
    tributavel: Tributavel[] = [];

    listarTributaveis() {

    }
    adicionar(valor: Tributavel) {
        this.tributavel.push(valor)
    }
    calcularTributos() {
        var total: number = 0;
        this.tributavel.forEach(function (trib) {
            total = total + trib.calculaTributos()
        });
        return total
    }
}

class Teste3 {
    testAll() {
        let auditoria = new AuditoriaInterna()
        auditoria.adicionar(new ContaCorrente('Testo', 12475))
        auditoria.adicionar(new Seguro())
        auditoria.adicionar(new ContaCorrente('Pedro', 1029))
        console.log(auditoria.calcularTributos())
    }
}

let teste3 = new Teste3
teste3.testAll()

