abstract class FiguraGeometrica {
    abstract calcula_Area(): void;
    abstract calcula_Perimetro(): void;
}
class Quadrado extends FiguraGeometrica {
    l1: number
    l2: number
    constructor(base: number, altura: number) {
        super()
        this.l1 = base
        this.l2 = altura
    }
    calcula_Area(): number {
        return this.l1 * this.l2;
    }
    calcula_Perimetro(): void {
        this.l1 * 2 + this.l2 * 2
    }
}

class Triangulo extends FiguraGeometrica {
    base: number
    altura: number
    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura
    }
    calcula_Area(): number {
        return this.base * this.altura;
    }
    calcula_Perimetro(): number {
        return this.base * 3
    }
}


class Circulo extends FiguraGeometrica {
    raio: number
    constructor(raio: number) {
        super()
        this.raio = raio
    }
    calcula_Area(): number {
        return 3.14 * this.raio ** 2
    }
    calcula_Perimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

