interface Calculo {
    calculaArea(): number;
    calculaPerimetro(): number;
}

interface IComparavel {
    compare(forma: Calculo, area: number): number;
}

let fcompare = (areaSubmetida: Calculo, areaAtual: Calculo) => {
    if (areaAtual.calculaArea < areaSubmetida.calculaArea) {
        return -1
    } else if (areaAtual == areaSubmetida) {
        return 0
    } else {
        return 1
    }
}

class Retangulo implements Calculo, IComparavel {
    l1: number
    l2: number
    constructor(l1: number, l2: number) {
        this.l1 = l1
        this.l2 = l2
    }
    compare(forma: Calculo): number {
        return fcompare(forma, this)
    }

    calculaArea(): number {
        return this.l1 * this.l2;
    }
    calculaPerimetro(): number {
        return this.l1 * 2 + this.l2 * 2
    }
}
class Quadrado implements Calculo, IComparavel {
    l1: number
    constructor(l1: number) {
        this.l1 = l1
    }
    compare(forma: Calculo): number {
        return fcompare(forma, this)
    }

    calculaArea(): number {
        return this.l1 ** 2;
    }
    calculaPerimetro(): number {
        return this.l1 * 4
    }
}


class Triangulo implements Calculo, IComparavel {
    base: number
    altura: number
    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    compare(forma: Calculo): number {
        return fcompare(forma, this)
    }

    calculaArea(): number {
        return (this.base * this.altura) / 2;
    }
    calculaPerimetro(): number {
        return this.base * 3
    }
}


class Circulo implements Calculo, IComparavel {
    raio: number
    constructor(raio: number) {
        this.raio = raio
    }
    compare(forma: Calculo): number {
        return fcompare(forma, this)
    }

    calculaArea(): number {
        return 3.14 * this.raio ** 2
    }
    calculaPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

class Teste {
    testAll() {
        let c = new Circulo(1.5)//7,...
        let q = new Quadrado(1.5)//7,...
        let t = new Triangulo(3, 4)//6
        let r = new Retangulo(3, 4)//12
        console.log("Area:", c.calculaArea(), t.calculaArea(), r.calculaArea(), q.calculaArea())
        console.log("Perímetro:", c.calculaPerimetro(), t.calculaPerimetro(), r.calculaPerimetro(), q.calculaPerimetro())
    }
}

class Teste2 {
    testAll() {
        let c = new Circulo(1.5)//7,...
        let t = new Triangulo(3, 4)//6
        let r = new Retangulo(3, 4)//12
        let q = new Quadrado(3)//12
        console.log('=== Triangulo ===')
        console.log(t.compare(r))
        console.log(t.compare(c))
        console.log(t.compare(t))
        console.log(t.compare(q))

        console.log('=== Retangulo ===')
        console.log(r.compare(r))
        console.log(r.compare(c))
        console.log(r.compare(t))
        console.log(r.compare(q))

        console.log('=== Círculo ===')
        console.log(c.compare(r))
        console.log(c.compare(c))
        console.log(c.compare(t))
        console.log(c.compare(q))


        console.log('=== Quadrado ===')
        console.log(q.compare(r))
        console.log(q.compare(c))
        console.log(q.compare(t))
        console.log(q.compare(q))

    }
}

let teste = new Teste
teste.testAll()
let teste2 = new Teste2
teste2.testAll()