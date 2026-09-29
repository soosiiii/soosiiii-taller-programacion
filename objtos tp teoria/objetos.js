function ejIntegrador(){
class Videojuego {
 constructor(titulo, genero, precio) {
    this.titulo=titulo
    this.genero=genero
    this.precio=precio
 }
 mostrarInfo() {
    console.log(this.titulo);
    console.log(this.genero);
    console.log(this.precio);
 }
 aplicarDescuento(porcentaje) {
    this.precio=this.precio-(this.precio*porcentaje);
 }
}
const juego1 = new Videojuego('minecraft', 'aventra', 10000);
const juego2 = new Videojuego('uncharted', 'aventura', 50000);
juego1.mostrarInfo()
juego2.aplicarDescuento(0.20)
juego2.mostrarInfo()
}
ejIntegrador();