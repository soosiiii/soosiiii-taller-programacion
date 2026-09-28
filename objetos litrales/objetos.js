function ej1(){
    const auto ={
        marca: "toyota",
        modelo: "hilux",
        anio: 2000,
        color: "rojo"
    }
    console.log(auto.marca);
    console.log(auto.modelo);
    console.log(auto.anio);
    console.log(auto.color)
}

function ej2(){
    const persona={
        nombre: "sabrina",
        edad: 18,
        ciudad: "cipolletti"
    }
    console.log(persona.nombre + " tiene " + persona.edad + " y vive en " + persona.ciudad);
}

function ej3(){
    const producto={
        nombre: "manzana",
        precio: 1000,
        cantidad: 5
    }
    let total=producto;
    total=producto.precio*producto.cantidad;
    console.log("dinero obtenido " + total);
}

function ej4(){
    const alumno={
        nombre: "sofia",
        nota1: 8,
        nota2: 7,
        notas3: 7
    }
    let suma;
    suma=nota1+nota2+notas3;
    let promedio;
    promedio=suma/3;
    if(promedio>=6){
        console.log("aprobado")
    } else {
        console.log("deesaprobado")
    }
}

function ej5(){
    const celular={
        marca: "samsung",
        modelo: "A15",
        precio: 250000,
        stock: 2
    }
    if(celular.stock>0){
        console.log("stock disponible");
    } else {
        console.log("stock agotado");
    }
}

function ej6(){
    const empleado={
        nombre: "sofia",
        sueldo: 500000,
        antiguedad: 7
    }
    let sueldoOriginal=empleado.sueldo;
    let sueldoNuevo=empleado.sueldo;
    if(empleado.antiguedad>5){
        sueldoNuevo=empleado.sueldo*1.20;
    }
    console.log("sueldo original " + sueldoOriginal);
    console.log("sueldo nuevo " + sueldoNuevo);
}

function ej7(){
    const pelicula={
        titulo: "spider-man: brand new day",
        director: "destin daniel cretton",
        anio: 2026,
        duracion: 150
    }
    console.log(pelicula.titulo);
    console.log(pelicula.director);
    console.log(pelicula.anio);
    console.log(pelicula.duracion);
    if(pelicula.duracion>120){
        console.log("la pelicula dura más de 2 horas");
    } else {
        console.log("la pelicula dura 2 horas o menos");
    }
}
function ej8(){
    const libro={
        titulo: "the way i used to be",
        director: "amber smith",
        anio: 2016,
        paginas: 384
    }
    if(libro.paginas<200){
        console.log("corto");
    } else if(libro.paginas<400){
        console.log("mediano");
    } else {
        console.log("largo");
    }
}

function ej9(){
    const producto={
        nombre:"disco",
        precio: 63.590,
        descuento: 20
    }
    let precioFinal
    precioFinal=producto.precio-(producto.precio*producto.descuento/100);
    console.log("precio final " + precioFinal);
    producto.categoria="vinilo";
    console.log(producto)
}

function ej10(){
    const persona={
        nombre: "roberta",
        edad: 58,
        altura: 1.68,
        peso: 60
    }
    let imc=persona.peso/(persona.altura*persona.altura);
    persona.imc=imc;
    console.log(persona);
}