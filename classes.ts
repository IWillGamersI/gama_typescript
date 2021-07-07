import { DiagnosticCategory } from "typescript"

/*
class Data {
    dia: number
    mes:number
    ano:number

    constructor(dia:number,mes:number,ano:number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
*/
class Data {
    
    constructor(public dia:number,public mes:number,public ano:number = 1970){
        
    }
}

const data = new Data(1,1,2020)

const datas = new Data(1,1)

console.log(data)
console.log(datas)

class Carro{
    private velocidade_atual: number = 0
    constructor(
        public marca:string,
        public modelo:string,
        private velocidade_maxima:number = 220
    ){}

    private altera_velocidade(delta:number){
        //cria as altenativas de mundaça
        const nova_velocidade = this.velocidade_atual + delta

        //condição de aceleração
        if(nova_velocidade >= 0 && nova_velocidade <= this.velocidade_maxima){
            this.velocidade_atual = nova_velocidade
        }
        else
        {
            this.velocidade_atual = delta > 0 ? this.velocidade_maxima : 0
        }

    }
    
    acelerar(){
        this.altera_velocidade(5)
    }
    frear(){
        this.altera_velocidade(-5)
    }
}

const carro = new Carro('chevrolet','Prisma',250)
carro.acelerar();
carro.frear();

//HERANÇA
class Camaro extends Carro{

    private turbo = false

    constructor(){
        super('Chevrolet','Camaro',500)
    }
    ligar_turbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro()
camaro.acelerar()
camaro.ligar_turbo()

