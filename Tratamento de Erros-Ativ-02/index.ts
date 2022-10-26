import prompt from "prompt-sync";
import { Conta, Banco, Poupanca, ContaImposto } from "./Banco";
import { ValorInvalidoError, SaldoInsuficienteError, ContaInexistenteError, AplicacaoError } from "./excecoes";


let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';

do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar       2 - Consultar saldo       3 - Sacar\n' +
        '4 - Depositar       5 - Excluir               6 - Transferir\n' +
        '7 - render juros    9 - Sair\n');
    try {
        opcao = input("Opção:");
        switch (opcao) {
            case "1":
                inserir();
                break
            case "2":
                consultar();
                break
            case "3":
                sacar();
                break;
            case "4":
                depositar();
                break;
            case "5":
                excluir();
                break;
            case "6":
                transferir();
                break;
            case "7":
                renderJuros();
                break;
        }
    } catch (e: any) {
        if (e instanceof AplicacaoError) {
            console.log(e.message);
        } else {
            if (e instanceof Error) {
                console.log("Erro no sistema. Contate o administrador.");
            }
        }
    } finally {
        input("Operação finalizada. Digite <enter>");

    }
} while (opcao != "9");
console.log("Aplicação encerrada");


function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    console.log('Insira o timpo de conta:\n Poupanca - p \n Conta Comum - c \n ContaImposto - ci')
    let isPoupanca: string = input('A conta é poupança (s ou n)? ');
    let conta!: Conta;

    if (isPoupanca == 'c') {
        conta = new Conta(numero, 0);
    } else if (isPoupanca == 'p') {
        conta = new Poupanca(numero, 0, 1);
    } else if (isPoupanca == 'ci') {
        conta = new ContaImposto(numero, 0, 0.5)
    } else {
        throw new ValorInvalidoError('Valor inválido:' + numero);
    }

    b.inserir(conta);
}

function consultar() {
    console.log("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta: Conta = b.consultar(numero);
    exibirConta(numero);
}

function sacar() {
    console.log("\nSacar\n");
    let numero: string = input('Digite o número da conta:');
    let valorStr: string = input('Digite o valor do saque:');
    let valor: number = parseFloat(valorStr);
    b.sacar(numero, valor);
    exibirConta(numero);
}
function depositar() {
    console.log("\nDepositar\n");
    let numero: string = input('Digite o número da conta:');
    let valorStr: string = input('Digite o valor do depósito:');
    let valor: number = parseFloat(valorStr);
    b.depositar(numero, valor);
    exibirConta(numero);
}

function excluir() {
    console.log("\nExcluir conta\n");
    let numero: string = input('Digite o número da conta:');
    b.excluir(numero);
}

function transferir() {
    console.log("\nTransferir\n");
    let numeroDebito: string = input('Digite o número da conta de origem:');
    let numeroCredito: string = input('Digite o número da conta de destino:');
    let valorStr: string = input('Digite o valor do depósito:');
    let valor: number = parseFloat(valorStr);
    b.transferir(numeroDebito, numeroCredito, valor);
    exibirConta(numeroDebito);
    exibirConta(numeroCredito);
}

function renderJuros() {
    console.log("\nRender juros\n");
    let numero: string = input('Digite o número:');
    b.renderJuros(numero);
    exibirConta(numero);
}

function exibirConta(numero: String): void {
    console.log(`Número: ${b.consultar(numero).numero} - Saldo: ${b.consultar(numero).saldo}`);
}