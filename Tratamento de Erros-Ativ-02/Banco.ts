import { PoupancaInvalidaError, ContaJaCadastradaError, SaldoInsuficienteError, ContaInexistenteError, AplicacaoError, ValorInvalidoError } from "./excecoes";

export class Conta {
	private _numero: String;
	private _saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

	get numero(): String {
		return this._numero;
	}

	get saldo(): number {
		return this._saldo;
	}

	sacar(valor: number): void {
		this.validarValor(valor);
		if (this._saldo < valor) {
			throw new SaldoInsuficienteError('Saldo insuficiente.');
		}
		this._saldo = this._saldo - valor;
	}

	depositar(valor: number): void {
		this.validarValor(valor);
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

	private validarValor(valor: number) {
		if (isNaN(valor) || valor <= 0) {
			throw new ValorInvalidoError('Valor inválido:' + valor);
		}
	}
}

export class Poupanca extends Conta {
	private _taxaJuros: number;

	constructor(numero: String, saldo: number, taxaJuros: number) {
		super(numero, saldo);
		this._taxaJuros = taxaJuros;
	}

	public renderJuros(): void {
		this.depositar(this.saldo * this._taxaJuros / 100);
	}

	get taxaJuros(): number {
		return this._taxaJuros
	}
}

export class ContaImposto extends Conta {
	private _taxaDesconto: number;
	constructor(numero: string, saldo: number, taxaDeDesconto: number) {
		super(numero, saldo);
		this._taxaDesconto = taxaDeDesconto;
	}

	debitar(valor: number): void {
		let total = valor + valor * (this._taxaDesconto / 100)
		super.sacar(total);
	}
}


export class Banco {
	private _contas: Conta[] = [];

	inserir(conta: Conta): void {
		try {
			this.consultar(conta.numero);
			//throw new ContaJaCadastradaError('Conta já cadastrada');
		} catch (e: any) {
			if (e instanceof ContaInexistenteError) {
				this._contas.push(conta);
			}
		}
	}

	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		if (!contaConsultada) {
			throw new ContaInexistenteError('Conta inexistente. Numero: ' + numero);
		}

		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		if (indice == -1) {
			throw new ContaInexistenteError('Conta inexistente. Numero: ' + numero);
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		this._contas[indice] = conta;
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		for (let i: number = indice; i < this._contas.length; i++) {
			this._contas[i] = this._contas[i + 1];
		}

		this._contas.pop();
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);
		if(contaConsultada instanceof ContaImposto){
			contaConsultada.debitar(valor)
			return //alterei isso aqui
		}else{
			contaConsultada.depositar(valor);
		}
	}

	sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);
		if (contaConsultada instanceof ContaImposto){
			contaConsultada.debitar(valor)
			return;
		}
		contaConsultada.sacar(valor);
	}

	transferir(numeroDebito: string, numeroCredito: string, valor: number) {
		let contaCredito: Conta = this.consultar(numeroCredito);
		let contaDebito: Conta = this.consultar(numeroDebito);
		contaDebito.transferir(contaCredito, valor);
	}

	calcularQuantidadeContas(): number {
		return this._contas.length;
	}

	calcularTotalSaldos(): number {
		let totalSaldo: number = 0;
		for (let conta of this._contas) {
			totalSaldo += conta.saldo;
		}

		return totalSaldo;
	}

	calcularMediaSaldos() {
		return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
	}

	renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);

		if (!(contaConsultada instanceof Poupanca)) {
			throw new PoupancaInvalidaError('Não é uma poupança:' + numero);
		}
		let poupanca: Poupanca = <Poupanca>contaConsultada;
		poupanca.renderJuros();
	}
}
