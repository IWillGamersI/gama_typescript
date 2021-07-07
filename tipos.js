"use strict";
//boolean
var conta_paga = false;
//number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = "WIllian Camargo";
//Array
var idades = [23, 28, 45, 8];
var idades2 = [1, 2, 3, 4, 5, 6, 7, 8, 0];
//Tuple
var jogadores;
jogadores = ['Willian', 38, 'Atacante'];
//Enum
var status_aprovacao;
(function (status_aprovacao) {
    status_aprovacao["Aprovado"] = "001";
    status_aprovacao["Pendente"] = "002";
    status_aprovacao["Rejeitado"] = "003";
})(status_aprovacao || (status_aprovacao = {}));
var status_da_aprovacao = status_aprovacao.Aprovado;
//Any
var rentorno_da_api = [123, 'willian', false];
var rentorno_da_api2 = {
//...informar uma propriedade
};
//void
function printa_na_tela(msg) {
    msg = 'Estou na Jornada';
    console.log(msg);
}
//Null e Underfined
var u = undefined;
var n = null;
//Object
function criar(Object) {
    //...
}
criar({}); //tem que apontar um objeto
//Never
function loop_infinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo Falhou');
}
//Union Types
function exibir_nota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibir_nota('10');
exibir_nota(10);
exibir_nota(false);
//type Funcionarios = Array<string>
//type Funcionarios1 = string[]
var funcionarios = [{
        nome: 'Willian',
        sobrenome: 'Camargo',
        data_nascimento: new Date()
    }];
function tratar_funcionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
//null oou opcionais => '?' quer dizer campo opcional
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Willian',
    telefone1: '123456789',
};
//tipo Assertion
var minha_idade = 23;
//2formas
//(minha_idade as number).toString()
minha_idade.toString();
//2 formas
//const input = document.getElementById('numero1') as HTMLInputElement
var input = document.getElementById('numero1');
console.log(input.value);
