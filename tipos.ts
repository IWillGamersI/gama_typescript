
//boolean
const conta_paga: boolean = false

//number
const idade:number = 23
const avaliacao: number = 4.5

//String
const nome: string = "WIllian Camargo"

//Array
const idades: number[] = [23,28,45,8]
const idades2: Array<number> = [1,2,3,4,5,6,7,8,0]

//Tuple
let jogadores: [string,number,string];

jogadores = ['Willian',38,'Atacante']

//Enum
enum status_aprovacao{
    Aprovado  = '001',
    Pendente  = '002',
    Rejeitado = '003'
}

const status_da_aprovacao: status_aprovacao = status_aprovacao.Aprovado;


//Any
const rentorno_da_api: any[] = [123,'willian',false]
const rentorno_da_api2: any = {
    //...informar uma propriedade
};


//void
function printa_na_tela(msg:string): void{
    msg = 'Estou na Jornada'
    console.log(msg)
}

//Null e Underfined
const u: undefined = undefined
const n: null = null


//Object
function criar(Object:object){
    //...
}
criar({})//tem que apontar um objeto


//Never
function loop_infinito(): never{
    while(true){

    }
}

function erro(mensagem:string): never{
    throw new Error(mensagem)
}

function falha(): never{
    return erro('Algo Falhou')
}

//Union Types
function exibir_nota(nota:number | string | boolean){
    console.log(`A nota é ${nota}`)
}

exibir_nota('10')
exibir_nota(10)
exibir_nota(false)

//Alias
type Funcionarios = {
    nome:string
    sobrenome:string
    data_nascimento:Date
}

//type Funcionarios = Array<string>
//type Funcionarios1 = string[]
const funcionarios: Funcionarios[] = [{
    nome:'Willian',
    sobrenome:'Camargo',
    data_nascimento:new Date()
}]

function tratar_funcionarios(funcionarios: Funcionarios[]){
    for (let funcionario of funcionarios){
        console.log('Nome do funcionário: ',funcionario.nome)
    }
}


//null oou opcionais => '?' quer dizer campo opcional
let altura: number | null = 1.6
altura = null

type Contato ={
    nome:string
    telefone1:string
    telefone2?:string
}

const contato: Contato = {
    nome: 'Willian',
    telefone1:'123456789',
    
}

//tipo Assertion
const minha_idade: any = 23;
//2formas
//(minha_idade as number).toString()
<number>minha_idade.toString()

//2 formas
//const input = document.getElementById('numero1') as HTMLInputElement
const input = <HTMLInputElement>document.getElementById('numero1')
console.log(input.value)


