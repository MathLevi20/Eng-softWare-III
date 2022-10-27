"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.ContaImposto = exports.Poupanca = exports.Conta = void 0;
var excecoes_1 = require("./excecoes");
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor);
        if (this._saldo < valor) {
            throw new excecoes_1.SaldoInsuficienteError('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor);
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Conta.prototype.validarValor = function (valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new excecoes_1.ValorInvalidoError('Valor inválido:' + valor);
        }
    };
    return Conta;
}());
exports.Conta = Conta;
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaJuros = taxaJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.saldo * this._taxaJuros / 100);
    };
    Object.defineProperty(Poupanca.prototype, "taxaJuros", {
        get: function () {
            return this._taxaJuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(Conta));
exports.Poupanca = Poupanca;
var ContaImposto = /** @class */ (function (_super) {
    __extends(ContaImposto, _super);
    function ContaImposto(numero, saldo, taxaDeDesconto) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaDesconto = taxaDeDesconto;
        return _this;
    }
    ContaImposto.prototype.debitar = function (valor) {
        var total = valor + valor * (this._taxaDesconto / 100);
        _super.prototype.sacar.call(this, total);
    };
    return ContaImposto;
}(Conta));
exports.ContaImposto = ContaImposto;
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        try {
            this.consultar(conta.numero);
            //throw new ContaJaCadastradaError('Conta já cadastrada');
        }
        catch (e) {
            if (e instanceof excecoes_1.ContaInexistenteError) {
                this._contas.push(conta);
            }
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        if (!contaConsultada) {
            throw new excecoes_1.ContaInexistenteError('Conta inexistente. Numero: ' + numero);
        }
        return contaConsultada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        if (indice == -1) {
            throw new excecoes_1.ContaInexistenteError('Conta inexistente. Numero: ' + numero);
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        for (var i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada instanceof ContaImposto) {
            contaConsultada.debitar(valor);
            return; //alterei isso aqui
        }
        else {
            contaConsultada.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada instanceof ContaImposto) {
            contaConsultada.debitar(valor);
            return;
        }
        contaConsultada.sacar(valor);
    };
    Banco.prototype.transferir = function (numeroDebito, numeroCredito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    };
    Banco.prototype.calcularQuantidadeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.calcularTotalSaldos = function () {
        var totalSaldo = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            totalSaldo += conta.saldo;
        }
        return totalSaldo;
    };
    Banco.prototype.calcularMediaSaldos = function () {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    };
    Banco.prototype.renderJuros = function (numero) {
        var contaConsultada = this.consultar(numero);
        if (!(contaConsultada instanceof Poupanca)) {
            throw new excecoes_1.PoupancaInvalidaError('Não é uma poupança:' + numero);
        }
        var poupanca = contaConsultada;
        poupanca.renderJuros();
    };
    return Banco;
}());
exports.Banco = Banco;
