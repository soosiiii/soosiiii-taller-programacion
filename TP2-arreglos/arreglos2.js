function ej1(){
    let notas=[];
    for(let i=1; i<=10; i++){
        let num=parseInt(prompt("ingrese un numero"));
        notas.push(num);
    }
    console.log(notas);
    let suma=0;
    for(let i=0; i<notas.length; i++){
        suma=suma+notas[i];
    }
    let promedio;
    promedio=suma/notas.length;
    console.log("promedio de notas " + promedio);
    let mayor=Math.max(...notas);
    let menor=Math.min(...notas);
    console.log("nota mas alta " + mayor);
    console.log("nota mas baja " + menor);
    let aprobados=0;
    let desaprobados=0;
    for(let i=0; i<notas.length; i++){
        if(notas[i]>=6){
            aprobados++;
        } else {
            desaprobados++;
        }
    }
    console.log("desaprobados " + desaprobados);
    console.log("aprobados " + aprobados);
}

function ej2(){
    let numeros=[];
    for(let i=1; i<=15; i++){
        let num=parseInt(prompt("ingrese un numero"));
        numeros.push(num);
    }
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2===0){
            console.log("pares " + numeros[i]);
        }
    }
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2!==0){
            console.log("impares " + numeros[i]);
        }   
    }
    let positivos=0;
    let negativos=0;
    for(let i=1; i<numeros.length; i++){
        if(numeros[i]>0){
            positivos++;
        }
        if(numeros[i]<0){
            negativos++;
        }
    }
    console.log("cantidad de positivos " + positivos);
    console.log("cantidad de negativos " + negativos);
    let suma=0;
    for(let i=1; i<numeros.length; i++){
        suma=suma+numeros[i];
    }
    console.log("suma total " + suma);
    let mayor=Math.max(...numeros);
    console.log("numero mayor " + mayor);
}

function ej3(){
    let nombres=[];
    for(let i=1; i<=8; i++){
        let nombre=prompt("ingrese un nombre");
        nombres.push(nombre);
    }
    console.log(nombres);
    let buscar=prompt("ingrese un nombre para buscar");
    if(nombres.includes(buscar)){
        console.log("el nombre existe");
    } else {
        console.log("el nombre no existe");
    }
    let posicion=
    console.log(nombres.indexOf(buscar));
    console.log("posicion " + posicion);
    for(let i=0; i<nombres.length; i++){
        console.log(nombres[i] + " tiene " + nombres[i].length + " letras");
    }
}

function ej4(){
    let productos=[];
    for(let i=1; i<=5; i++){
        let producto=prompt("ingrese un producto");
        productos.push(producto);
    }
    console.log(producto)
    
}
ej4();