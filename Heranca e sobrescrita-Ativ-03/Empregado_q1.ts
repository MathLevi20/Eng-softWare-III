import { InputError } from './excecoes/excecoes';

class Empregado {
    salario: number = 500;
    calcularSalario(): number {
        return this.salario
    }
}

class Diarista extends Empregado {
    
    calcularSalario(): number {
        
        const divide = 30
        let result = this.salario / divide
        return result
    }
}

class Horista extends Diarista {
    calcularSalario(): number {
        const divide = 24
        let result = this.salario / divide

        return result
    }
}

let empregado = new Empregado()
let diarista = new Diarista()
let horista = new Horista()

console.log(empregado.calcularSalario())
console.log(diarista.calcularSalario())
console.log(horista.calcularSalario())