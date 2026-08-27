function ej1(){
    let rango1=0;
    let rango2=0;
    let rango3=0;
    let num=parseInt(prompt("ingrese un numero"));

    if(isNaN(num)){
        console.log("dato invalido");
        return;
    }
    while(num!==0){
        if(isNaN(num)){
            console.log("dato invalido");
            return;
        }
        if(num>=1 && num<=50){
            rango1++;
        } else if(num>=51 && num<=100){
            rango2++;
        } else {
            rango3++;
        }
        num=parseInt(prompt("ingrese otro numero"));
    }
    console.log("de 1 a 50: " + rango1)
    console.log("de 51 a 100: " + rango2)
    console.log("mayores de 100: " + rango3)
}

function ej2(){
    let sumaPares=0;
    let contadorPares=0;
    let impares=0;

    for(let i=1; i<=10; i++){
        let num=parseInt(prompt("ingrese un numero"));
        if(isNaN(num)){
            console.log("datos invalidos");
            return;
        }
        if(num%2===0){
            sumaPares=sumaPares+num;
            contadorPares++;
        } else {
            impares++;
        }
    }
    let promedio=sumaPares/contadorPares;
    console.log("promedio pares: " + promedio)
    console.log("cantidades de impares: " + impares)
}

function ej3(){
    let mayorNegativo;
    let positivos=0;
    let num=parseInt(prompt("ingrese un numero"));

    if(isNaN(num)){
        console.log("dato invalido");
        return;
    }
    while(num!==0){
        if(num>0){
            positivos++;
        } else if (num<0){
            if(mayorNegativo===undefined || num>mayorNegativo){
                mayorNegativo=num;
            }
        }
        num = parseInt(prompt("Ingrese otro número"));
        if(isNaN(num)){
            console.log("Dato inválido");
            return;
        }
    }
    console.log("Cantidad de positivos: " + positivos);
    console.log("Mayor negativo: " + mayorNegativo);
}

function ej4(){
    let num=parseInt(prompt("ingrese un numero"));
    if(isNaN(num)){
        console.log("dato invalido");
        return;
    }
    let mayores50=0;
    for(let i=1; i<=10; i++){
        let resultado=num*i
        console.log(num + " x " + i + " = " + resultado);
        if(resultado>50){
        mayores50++;
        }
    }
    console.log("resultados mayores a 50: " + mayores50);
}

function ej5(){
    let suma=0;
    let mayor;
    let menor;
    let aprobados=0;
    for(let i=1; i<=10; i++){
        let nota=parseFloat(prompt("ingrese una nota"));
        if(isNaN(nota) || nota<0 || nota>10){
            console.log("dato invalido");
            return;
        }
        suma=suma+nota;
        if(nota>mayor){
        mayor=nota
        }
        if(nota<menor){
        nota=menor
        }
        if(nota>7){
        aprobados++;
        }
    }
    let promedio=suma/10;
    console.log("promedio: " + promedio);
    console.log("nota mayor: " + mayor);
    console.log("nota menor: " + menor);
    console.log("aprobados: " + aprobados);
}

function ej6(){
    let precio;
    let total=0;
    precio=parseFloat(prompt("ingrese el precio:"));
    if(isNaN(precio)){
        console.log("dato invalido")
        return;
    }
    while(precio!==0){
        total=total+precio;
        precio=parseFloat(prompt("ingrese otro precio"));
        if(isNaN(precio)){
        console.log("dato invalido")
        return;
        }
    }
    if(total>20000){
        total=total*0.85;
    } else if (total>10000){
        total=total*0.90;
    }else if(total>5000){
        total=total*0.95;
    }
    console.log("total final: " + total);
}

function ej7(){
    
}