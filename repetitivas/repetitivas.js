function ej1() {
    let num = parseInt(prompt("ingrese un numero"));
    let suma = 0;
    while (num > 0) {
        suma = suma + num;
        num = parseInt(prompt("ingrese el siguiente numero"));
    }
    console.log("total " + suma)
}

function ej2() {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt("ingrese un numero"));
        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }
    console.log("numeros positivos: " + positivos + ", numeros negativos: " + negativos + ", ceros: " + ceros)
}

function ej3() {
    let num = parseInt(prompt("ingrese un numero"));
    let suma = 0;
    let contador = 0;
    while (num > 0) {
        suma = suma + num;
        contador++
        num = parseInt(prompt("ingrese el siguiente numero"));
    }
    let prom = suma / contador;
    console.log("promedio: " + prom);
}

function ej4() {
    let mayoresEdad = 0;
    let mayores65 = 0;
    for (let i = 1; i <= 5; i++) {

        let edad = parseInt(prompt("Ingrese una edad"));
        if (edad >= 18) {
            mayoresEdad++;
        }
        if (edad > 65) {
            mayores65++;
        }
    }
    console.log("mayores de edad: " + mayoresEdad + ", mayores de 65: " + mayores65)
}

function ej5() {
    let multiplos3 = 0;
    let multiplos5 = 0;
    for (let i = 1; i <= 50; i++) {
        console.log(i)
        if (i % 3 === 0) {
            multiplos3++
        }
        if (i % 5 === 0) {
            multiplos5++
        }
    }
    console.log("Mmultiplos de 3: " + multiplos3)
    console.log("multiplos de 5: " + multiplos5)
}

function ej6() {
    let num;
    let suma = 0;
    let contador = 0;
    do {
        num = parseInt(prompt("ingrese un numero"));
        suma = suma + num;
        conador++;
    } while (num <= 100);
}

function ej7() {
    let mayor;
    let menor;
    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt("ingrese un num:"));
        if (i == 1) {
            mayor = num;
            menor = num;
        }
        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num;
        }
        console.log("numeros menores: " + menor)
        console.log("numeros mayores: " + mayor)
    }
}

function ej8() {
    let num;
    let pares = 0;
    let impares = 0;
    num = parseInt(prompt("ingrese un numero:"));
    while (num >= 0) {
        if (num % 2 == 0) {
            pares++;
        } else {
            impares++
        }
        num = parseInt(prompt("ingrese otro numero:"));
    }
    console.log("cantidad de pares: " + pares);
    console.log("cantidad de impares: " + impares);
}

function ej9(){
    let suma=0;
    let aprobados=0;
    let desaprobados=0;
    for(let i=1; i<=15; i++){
        let nota=parseFloat(prompt("ingrese la nota:"));
        suma=suma+nota;
        
    }
}

