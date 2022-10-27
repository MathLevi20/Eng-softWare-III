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
exports.ContaInexistenteError = exports.SaldoInsuficienteError = exports.AplicacaoError = exports.ContaJaCadastradaError = exports.ValorInvalidoError = exports.PoupancaInvalidaError = void 0;
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return AplicacaoError;
}(Error));
exports.AplicacaoError = AplicacaoError;
var ContaInexistenteError = /** @class */ (function (_super) {
    __extends(ContaInexistenteError, _super);
    function ContaInexistenteError(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return ContaInexistenteError;
}(AplicacaoError));
exports.ContaInexistenteError = ContaInexistenteError;
var SaldoInsuficienteError = /** @class */ (function (_super) {
    __extends(SaldoInsuficienteError, _super);
    function SaldoInsuficienteError(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return SaldoInsuficienteError;
}(AplicacaoError));
exports.SaldoInsuficienteError = SaldoInsuficienteError;
var ContaJaCadastradaError = /** @class */ (function (_super) {
    __extends(ContaJaCadastradaError, _super);
    function ContaJaCadastradaError(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return ContaJaCadastradaError;
}(AplicacaoError));
exports.ContaJaCadastradaError = ContaJaCadastradaError;
var ValorInvalidoError = /** @class */ (function (_super) {
    __extends(ValorInvalidoError, _super);
    function ValorInvalidoError(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return ValorInvalidoError;
}(AplicacaoError));
exports.ValorInvalidoError = ValorInvalidoError;
var PoupancaInvalidaError = /** @class */ (function (_super) {
    __extends(PoupancaInvalidaError, _super);
    function PoupancaInvalidaError(mensagem) {
        return _super.call(this, mensagem) || this;
    }
    return PoupancaInvalidaError;
}(AplicacaoError));
exports.PoupancaInvalidaError = PoupancaInvalidaError;
