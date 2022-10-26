class Conta {

private long numero;

private double saldo;

void debito (double valor) {

saldo = saldo - valor;

}

...

}
class Conta {
private long numero;
private double saldo;

void debito (double valor) {
if (valor <= saldo)
saldo = saldo - valor;
else
System.out.print("Saldo Insuficiente!");
}

...

}
class Conta {

private long numero;
private double saldo;

boolean debito (double valor) {
if (valor <= saldo) {
saldo = saldo - valor;
return true;
} else
return false;
}

...

}