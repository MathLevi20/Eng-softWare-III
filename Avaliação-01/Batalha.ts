import { JaEliminadoException } from "./excecoes";


interface Defensivel {
    estaEliminado(): boolean;
    defenderAtaque(valorAtaque: number);
    }

class guerreiro implements Defensivel{

    id:string
    descricao:string
    forca_de_ataque:number
    life:number
    quantidade : number
    

    constructor(id : string, descricao: string , forca_de_ataque:number,life :number) {
        this.id = id
        this.descricao = descricao
        this.forca_de_ataque = forca_de_ataque
        this.life = life
    }
    estaEliminado(): boolean {
        let result = true
            if (this.life >= 0){
                const result = false 
                return result
            }
        return result 
    }

    defenderAtaque(valorAtaque: number) {
        this.life = this.forca_de_ataque -  valorAtaque
        return this.life
}
    defensivel(){
       let defesa = this.defenderAtaque(this.forca_de_ataque)
   
        if (defesa == 0 ) {
            throw new JaEliminadoException('O Guerreiro Já foi eliminado').message;
        }
        
    }
}


class base  implements Defensivel {

    id:string
    localizacao_x: string
    localizacao_y: string
    dano: number

    constructor(id : string,localizacao_x: string,localizacao_y: string,dano: number ) {
        this.id = id
        this.localizacao_x =   localizacao_x
        this.localizacao_y =   localizacao_y
        this.dano = dano
    }

    estaEliminado(): boolean {
        let result = true
            if (this.dano >= 100){
                const result = false 
                return result
            }
        return result 
    }
    defenderAtaque(valorAtaque: number) {
        this.dano = this.dano - valorAtaque
        return this.dano
    }   

}
class cenariodebatalha <T>  {
    Defesa_1: Array<T>;
    Defesa_2: Array<T>;

    constructor() {
        this.Defesa_1 = [];
        this.Defesa_2= [];
    }

    Add_Defesa_1(value: T): void {
        this.Defesa_1.push(value);
    }
    Add_Defesa(value: T): void {
        this.Defesa_2.push(value);
    }
    get(index: number): T {
        return this.Defesa_1[index];
    }

}
class Teste {
    testAll() {
    let CenarioDeBatalha = new cenariodebatalha()
    let Guerreiro = new guerreiro("Bar","Atirador",10,100)
        
    let Base = new base("Bar","L-2","N-2",100)

    CenarioDeBatalha.Add_Defesa_1(new guerreiro("Bar","Atirador",10,100))
    
    }
}
let teste = new Teste
console.log(teste.testAll())