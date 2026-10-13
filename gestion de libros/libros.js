function ej1() {
    class Libro {
        constructor(titulo, autor, cantidadPaginas, disponible){
            this.titulo=titulo;
            this.autor=autor;
            this.cantidadPaginas=cantidadPaginas;
            this.disponible=disponible;
        }
        mostrarDatos(){
            console.log("titulo " + this.titulo);
            console.log("autor " + this.autor);
            console.log("cantidad de paginas " + this.cantidadPaginas);
            console.log("disponibilidad " + this.disponible);
        }
        prestarLibro(){
            this.disponible=false;
            console.log("el libro fue prestado");
        }
        devolverLibro(){
            this.disponible=true;
            console.log("el libro fue devuelto");
        }
    }
    const libro1=new Libro("The Way I Used to Be", "Amber Smith", 384, true);
    const libro2=new Libro("All About Love: New Visions", "bell hooks", 272, true);
    const libro3=new Libro("En agosto nos vemos", "Gabriel García Márquez", 144, true);
    libro1.mostrarDatos();
    libro2.mostrarDatos();
    libro3.mostrarDatos();
    libro1.prestarLibro();
    libro1.mostrarDatos();
    libro1.devolverLibro();
    libro1.mostrarDatos();
}