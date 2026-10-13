function ej1(){
    class CuentaBancaria{
        constructor(titular, numeroCuenta, saldo){
            this.titular=titular;
            this.numeroCuenta=numeroCuenta;
            this.saldo=saldo;
            this.cuentaActiva=true;
            this.movimientos=[];
        }
        mostrarInfo(){
            console.log("titular " + this.titular);
            console.log("numero de cuenta " + this.numeroCuenta);
            console.log("saldo " + this.saldo);
            console.log("cuenta activa " + this.cuentaActiva);
        }
        depositar(monto){
            if (this.cuentaActiva){
                    this.saldo=this.saldo+monto
                    this.movimientos.push("deposito +$" + monto);
                } else {
                    console.log("la cuenta esta bloqueada");
            }
        }
        extraer(monto){
            if(this.cuentaActiva){
                if(monto<=this.saldo){
                    this.saldo=this.saldo-monto
                    this.movimientos.push("extraccion -$" + monto);
                } else {
                    console.log("no hay saldo suficiente");
                }
            } else {
                console.log("cuenta bloqueada");
            }
        }
        bloquearCuenta(){
            this.cuentaActiva=false;
            console.log("cuenta bloqueada")
        }
    }
    historial(){
        console.log("historial de " + this.titular + " ");
        console.log(this.movimientos);
    }
    transferir(cuentaDestino, monto){
        if(this.cuentaActiva && cuentaDestino.cuentaActiva){
            if(monto<=this.saldo){
                this.saldo=this.saldo-monto
                cuentaDestino=cuentaDestino+monto
                this.movimientos.push("transferencia enviada -$" + monto);
                cuentaDestino.movimientos.push("transferencia recibida +$" + monto);
            } else {
                console.log("saldo insuficiente");
            }
        } else {
            console.log("una de las cuentas esta bloqueada");
        }
    }

    const cuenta1=new CuentaBancaria("sabrina", 1001, 50000);
    const cuenta2=new CuentaBancaria("samira", 1002, 120000);
    cuenta1.mostrarInfo();
    cuenta2.mostrarInfo();
    cuenta1.depositar(10000);
    cuenta2.extraer(50000);
    cuenta1.bloquearCuenta();
    cuenta1.historial();
    cuenta2.historial();
    cuenta1.mostrarInfo();
    cuenta2.mostrarInfo();
}