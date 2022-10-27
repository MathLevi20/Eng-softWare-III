var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    Conta.prototype.getNome = function () {
        return this.nome;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.setNome = function (valor) {
        this.nome = valor;
    };
    Conta.prototype.setSaldo = function (valor) {
        this.saldo = valor;
    };
    return Conta;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.calculaTributos = function () {
        return this.saldo * 0.1;
    };
    return ContaCorrente;
}(Conta));
var Seguro = /** @class */ (function () {
    function Seguro() {
    }
    Seguro.prototype.calculaTributos = function () {
        return 50.00;
    };
    return Seguro;
}());
var AuditoriaInterna = /** @class */ (function () {
    function AuditoriaInterna() {
        this.tributavel = [];
    }
    AuditoriaInterna.prototype.listarTributaveis = function () {
    };
    AuditoriaInterna.prototype.adicionar = function (valor) {
        this.tributavel.push(valor);
    };
    AuditoriaInterna.prototype.calcularTributos = function () {
        var total = 0;
        this.tributavel.forEach(function (trib) {
            total = total + trib.calculaTributos();
        });
        return total;
    };
    return AuditoriaInterna;
}());
var Teste3 = /** @class */ (function () {
    function Teste3() {
    }
    Teste3.prototype.testAll = function () {
        var auditoria = new AuditoriaInterna();
        auditoria.adicionar(new ContaCorrente('Testo', 12475));
        auditoria.adicionar(new Seguro());
        auditoria.adicionar(new ContaCorrente('Pedro', 1029));
        console.log(auditoria.calcularTributos());
    };
    return Teste3;
}());
var teste3 = new Teste3;
teste3.testAll();
