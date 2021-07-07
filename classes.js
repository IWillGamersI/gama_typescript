"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2020);
var datas = new Data(1, 1);
console.log(data);
console.log(datas);
