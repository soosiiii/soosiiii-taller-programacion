//mostrar numeros dl 1 al 50. ademas mostrar:cuantos son
// pares, cuantos son impares y la suma de todos los numeros.
function ej1(){
    let pares=0;
    let impares=0;
    let suma=0;
    for(let i=1; i<=50; i++){
        suma=suma+i;
        if(i%2==0){
            pares++;
        }else{
            impares++;
        }
        console.log(i);
    }
    console.log("pares " + pares);
    console.log("impares " + impares);
    console.log("suma " + suma);
}

//solicitar numeros al usuario hasta que ingrese 0.
// validar que el dato ingresado sea numerico al finalizar
// mostrar: cantidad de numeros ingresados, suma total y
// promedio (el 0 no debe contarse).
function ej2(){
    let cantidad=0;
    let suma=0;
    let num=0;
    num=parseInt(prompt("ingrese un numero"));
        if(isNaN(num)){
            console.log("dato invalido");
            return;
        }
    while(num!==0){
        if(num!==0){
            cantidad++;
            suma=suma+num;
        }
        num=parseInt(prompt("ingrese un numero"));
    }
    let promedio;
    promedio=suma/cantidad;
    console.log("cantidad de numeros ingresados " + cantidad);
    console.log("suma total " + suma);
    console.log("promedio " + promedio);
}

//solicitar numeros positivos hasta que el usuario ingrese 0.
//mostrar: numero mayor, numero menor, cantidad de numeros
// mayores a 100. (validar los numeros ingresados)
function ej3(){
    let num;
    let mayor=0;
    let menor=0;
    let mayor100=0;
    num=parseInt(prompt("ingrese un numero positivo"));
    if(isNaN(num) || num<0){
        console.log("dato invalido");
        return;
    }
    while(num!==0){
        if(num>mayor){
            mayor=num;
        }
        if(menor===0 || num<menor){
            menor=num;
        }
        if(num>100){
            mayor100++;
        }
        num=parseInt(prompt("ingrese un numero positivo"));
    }
    console.log("numero mayor " + mayor);
    console.log("numero menor " + menor);
    console.log("mayores a 100 " + mayor100);
}

//solicitar las notas de 10 alumnos. validar que las notas esten entre 1 y 10.
// mostrar: promedio, nota mas alta, nota mas baja, cantidad de aprobados y
// desaprobados.
function ej4(){
    let nota;
    let suma=0;
    let mayor=0;
    let menor=0;
    let aprobados=0;
    let desaprobados=0;
    nota=parseInt(prompt("ingrese nota del alumno"))
        if(isNaN(nota) || nota<1 || nota>10){
            console.log("dato invalido");
            return;
        }
    for(let i=1; i<=10; i++){
        if(nota>mayor){
            mayor=nota;
        }
        if(menor===0 || nota<menor){
            menor=nota;
        }
        if(nota>=7){
            aprobados++;
        }else{
            desaprobados++;
        }
        nota=parseInt(prompt("ingrese nota del alumno"))
    }
    suma=suma+nota;
    let promedio;
    promedio=suma/10;
    console.log("promedio " + promedio);
    console.log("nota mas alta " + mayor);
    console.log("nota mas baja " + menor);
    console.log("aprobados " + aprobados);
    console.log("desaprobados " + desaprobados);
}

//crear un menu con las siguientes opciones: 1.mostrar numeros del 1 al 10,
// 2.mostrar numeros pares del 1 al 10, 3.mostrar tablas de multiplicar,
// 4.salir (el menu debe repetirse hasa que el usuario seleccione
// 4. para la opcion 3, solicitar un numero y mostrar su tabla del 1 al 10.)
function ej5(){
    //dijo q no lo hagamos
}

//ingresar precios de productos hasta ingresar 0. mostrar:
//cantidad de productos, total vendido, promedio, precio mas caro,
// precio mas barato, cantidad de productos que cuestan mas de $5,000
function ej6(){
    let precio;
    let cantidad=0;
    let total=0;
    let caro=0;
    let barato=0;
    let mas5000=0;
    precio=parseInt(prompt("ingrese precio del producto"));
    if(isNaN(precio) || precio<0){
        console.log("dato invalido");
        return;
    }
    while(precio!==0){
        cantidad++;
        total=total+precio;
        if(precio>caro){
            caro=precio;
        }
        if(barato===0 || precio<barato){
            barato=precio;
        }
        if(precio>5000){
            mas5000++;
        }
        precio=parseInt(prompt("ingrese precio del producto"));
    }
    let promedio;
    promedio=total/cantidad;
    console.log("cantidad de productos " + cantidad);
    console.log("total vendido " + total);
    console.log("promedio " + promedio);
    console.log("precio mas caro " + caro);
    console.log("precio mas barato " + barato);
    console.log("productos q cuestan mas de $5,000 " + mas5000);
}

//ingresar numeros hasta 0. contar: cantidad de pares, cantidad de impares,
// cantidad de multiplos de 3, cantidad de multiplos de 5.
function ej7(){
    let numero;
    let pares=0;
    let impares=0;
    let mult3=0;
    let mult5=0;
    numero=parseInt(prompt("ingrese un  numero"));
    if(isNaN(numero)){
        console.log("dato invalido");
        return;
    }
    while(numero!==0){
        if(numero%2==0){
            pares++;
        }else if(numero%2!==0){
            impares++;
        }
        if(numero%3==0){
            mult3++;
        }
        if(numero%5==0){
            mult5++;
        }
        numero=parseInt(prompt("ingrese un  numero"));
    }
    console.log("pares " + pares);
    console.log("impares " + impares);
    console.log("multiplos de 3 " + mult3);
    console.log("multiplos de 5 " + mult5);
}

//ingresar precios de productos hasta 0. calcular el total vendido.
// aplicar descuento segun el total: mas de $10.000-->5%, mas de $20.000-->10%,
// mas de $50.000-->15% (mostrar: total, descuento y total final)

// continuando con el ejercicio anterior, solicitar el dinero recibido:
// si el dinero es menor total--> mostrar "dinero insuficiente", si es suficiente-->
// mostrar el vuelto: "vuelto:$xxxx", (validar que el dinero sea numerico).
function ej8y9(){
    let precio;
    let total=0;
    let descuento=0;
    precio=parseInt(prompt("ingrese precio del producto"));
    if(isNaN(precio) || precio<0){
        console.log("dato invalido");
        return;
    }
    while(precio!==0){
        total=total+precio;
        precio=parseInt(prompt("ingrese precio del producto"));
        if(total>50000){
            descuento=total*0.15;
        }else if(total>20000){
            descuento=total*0.10;
        }else if(total>10000){
            descuento=total*0.05;
        }
    }
    let totalFinal;
    totalFinal=total-descuento;
    console.log("total " + total);
    console.log("descuento " + descuento);
    console.log("total final " + totalFinal);
    //9
    let dinero;
    dinero=parseInt(prompt("ingrese el dinero recibido"));
    if(isNaN(dinero)){
        console.log("dato invalido");
        return;
    }
    if(dinero<totalFinal){
        console.log("dinero insuficiente");
    }else{
        let vuelto;
        vuelto=dinero-totalFinal;
        console.log("vuelto $" + vuelto);
    }
}