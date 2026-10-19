function ej1(){
    class SocioGimnasio{
        constructor(nombre, idSocio, paseDisponible, aptoMedico){
            this.nombre=nombre;
            this.idSocio=idSocio
            this.paseDisponible=paseDisponible;
            this.aptoMedico=aptoMedico;
            this.asistencias=[];
        }
        mostrarPerfil(){
            console.log("nombre " + this.nombre);
            console.log("id del socio " + this.idSocio);
            console.log("pases disponibles " + this.paseDisponible);
            console.log("apto medico " + this.aptoMedico);
        }
        comprarPases(cantidad){
            this.paseDisponible=this.paseDisponible+cantidad;
        }
        ingresarAlGym(){
            if(this.aptoMedico&&this.paseDisponible>0){
                this.paseDisponible=this.paseDisponible-1;
                this.asistencias.push("ingreso al gym");
                console.log("ingreso permitido");
            } else {
                console.assert.log("no puede ingresar");
            }
        }
        vencerAptoMedico(){
            this.aptoMedico=false;
            console.log("el apto medico vencio");
        }
        verHistorial(){
            console.log("ver historial de " + this.nombre);
            console.log(this.asistencias);
        }
    }
    const socio1=new SocioGimnasio("Samira", 1001, 5, true);
    const socio2=new SocioGimnasio("Sabrina", 1002, 3, true);
    socio1.mostrarPerfil();
    socio2.mostrarPerfil();
    socio1.comprarPases(2);
    socio1.ingresarAlGym();
    socio1.ingresarAlGym();
    socio1.vencerAptoMedico();
    socio1.ingresarAlGym();
    socio1.verHistorial();
    socio2.verHistorial();
    socio1.mostrarPerfil();
    socio2.mostrarPerfil();
}


function ej2(){
    class PerfilGamer{
        constructor(usuario, creditos, suscripcionActiva){
            this.usuario=usuario;
            this.creditos=creditos;
            this.suscripcionActiva=suscripcionActiva;
            this.juegosAlquilados=[];
        }
        verPerfil(){
            console.log("usuario " + this.usuario);
            console.log("creditos " + this.creditos);
            console.log("suscripcion activa " + this.suscripcionActiva);
            console.log("juegos alquilados ");
            console.log(this.juegosAlquilados);
        }
        cargarCreditos(monto){
            this.creditos=this.creditos+monto;
        }
        alquilarJuego(nombreJuego, costoCredito){
            if(this.suscripcionActiva && this.creditos>=costoCredito){
                this.creditos=this.creditos-costoCredito;
                this.juegosAlquilados.push(nombreJuego);
                console.log("juego alquilado correctamente");
            } else {
                console.log("no se puede alquilar el juego");
            }
        }
        pausarSuscripcion(){
            this.suscripcionActiva=false;
            console.log("la suscripcion fue pausada");
        }
        historialJuegos(){
            console.log("historial de juegos de " + this.usuario);
            console.log(this.juegosAlquilados);
        }
    }
    const perfil1=new PerfilGamer("nicolas", 1000, true);
    const perfil2=new PerfilGamer("sabrina", 500, true);
    perfil1.verPerfil();
    perfil2.verPerfil();
    perfil1.alquilarJuego("minecraft", 200);
    perfil1.alquilarJuego("fifa", 300);
    perfil2.cargarCreditos(200);
    perfil2.alquilarJuego("fortnite", 400);
    perfil1.pausarSuscripcion();
    perfil1.alquilarJuego("among us", 100);
    perfil1.historialJuegos();
    perfil2.historialJuegos();
    perfil1.verPerfil();
    perfil2.verPerfil();
}


function ej3(){
    class TarjetaTransporte{
        constructor(idTarjeta, propietario, saldo, tarjetaBloqueada){
            this.idTarjeta=idTarjeta;
            this.propietario=propietario;
            this.saldo=saldo;
            this.tarjetaBloqueada=tarjetaBloqueada;
            this.viajes=[];
        }
        mostrarDetalles(){
            console.log("id de tarrjetas " + this.idTarjeta);
            console.log("propietario " + this.propietario);
            console.log("saldo $" + this.saldo);
            console.log("tarjeta bloqueada " + this.tarjetaBloqueada);
        }
        recargarTarjeta(monto){
            if(!this.tarjetaBloqueada){
                this.saldo=this.saldo+monto;
                console.log("recarga realizada");
            } else {
                console.log("la tarjeta esta rechzada");
            }
        }
        pagarViaje(costoViaje, lineaColectivo){
            if(!this.tarjetaBloqueada && this.saldo){
                this.saldo=this.saldo-costoViaje;
                this.viajes.push(lineaColectivo);
                console.log("viaje pagado correctamente");
            } else {
                console.log("no se puede realizar el viaje");
            }
        }
        reportarPerdida(){
            this.tarjetaBloqueada=true;
            console.log("la tarjeta fue bloqueada");
        }
        HistorialViajes(){
            console.log("historial de viajes de " + this.propietario);
            console.log(this.viajes);
        }
    }
    const tarjeta1=new TarjetaTransporte(1001, "sabrina", 5000, false);
    const tarjeta2=new TarjetaTransporte(1002, "samira", 3000, false);
    tarjeta1.mostrarDetalles();
    tarjeta2.mostrarDetalles();
    tarjeta1.recargarTarjeta(2000);
    tarjeta1.pagarViaje(1000, "linea 9");
    tarjeta2.pagarViaje(1000, "linea 12");
    tarjeta2.pagarViaje(3000, "linea 15");
    tarjeta1.reportarPerdida();
    tarjeta1.recargarTarjeta(5000);
    tarjeta1.pagarViaje(50, "linea 20");
    tarjeta1.HistorialViajes();
    tarjeta2.HistorialViajes();
    tarjeta1.mostrarDetalles();
    tarjeta2.mostrarDetalles();
}
ej3();