function ej1(){
    let numeros=[5, 8, 12, 3];
    console.log(numeros[0]);
    console.log(numeros[3]);
    numeros[2]=20;
    console.log(numeros)
}

function ej2(){
    let numeros=[];
    for(i=1; i<=5; i++){
    let num=parseInt(prompt("ingrese un numero"));
    numeros.push(num);
    }
    console.log(numeros[0]);
    console.log(numeros[4]);
}

function ej3(){
    let numeros=[5, 3, 8, 12, 6];
    console.log(numeros);
    numeros.reverse();
    console.log(numeros)
    for(let i=0; i=numeros.length; i++){
        if(numeros[i]%2===0){
        console.log(numeros[i])
        }
    }
}

function ej4(){
    let numeros=[];
    for(let i=0; i<=5; i++){
        let num=parseInt(prompt("Ingrese un número:"));
        numeros.push(num);
    }
    let suma=0;
    let mayores10=0;
    for(let i=0; i<numeros.length; i++){
        suma=suma+numeros[i]
        if(numeros[i]>10){
            mayores10++;
        }
    }
    let promedio=suma/numeros.length;
    console.log("suma " + suma);
    console.log("promedio " + promedio);
    console.log("mayores a 10 " + mayores10);
}

function ej5(){
    let numeros=[];
    for(let i=1; i<=5; i++){
        let num=parseInt(prompt("ingrese un numero"));
        numeros.push(num);
    }
    let mayor=numeros[0];
    let menor=numeros[0];
    for(let i=1; i<numeros.length; i++){
        if(numeros[i]>mayor){
            mayor=numeros[i];
        }
        if(numeros[i]<menor){
            menor=numeros[i];
        }
    }
    let buscar=parseInt(prompt("ingrese un numero para"));
    if(numeros.includes(buscar)){
        console.log("el numero existe");
    } else {
        console.log("el numero no existe");
    }
    console.log("mayor " + mayor);
    console.log("menor " + menor);
}

function ej6(){
    let numeros=[5, 8, 12];
    let buscar=parseInt(prompt("ingrese un numero para buscar"));
    if(numeros.includes(buscar)){
        console.log("el numero existe");
        let posicion=numeros.indexOf(buscar);
        console.log("la posicion es " + posicion);
    }else{
        console.log("el numero no existe");
    }
    numeros.pop();
    console.log("numeros " + numeros);
}

function ejFinal(){
    let numero=[];
    for(let i=1; i<=10; i++){
        let num=parseInt(prompt("ingrese un numero:"));
        numeros.push(num);
    }
    console.log(numeros);
    let suma=0;
    for(let i=0; i<numeros.length; i++){
        suma=suma+numeros[i];
    }
    let promedio
    promedio=suma/numeros.length;
    let notaMayor=numeros[0];
    let notaMenor=numeros[0];
    let desaprobados=0;
    for(let i=1; i<numeros.length; i++){
        if(numeros[i]>notaMayor){
            mayor=numeros[i];
        }
        if(numero[i]<notaMenor){
            menor=numeros[i];
        }
        if(numeros[i]<6){
            desaprobados++;
        }
    }
    console.log("promedio notas " + promedio);
    console.log("nota mayor " + notaMayor);
    console.log("nota menor " + notaMenor);
    console.log("desaprobados " + desaprobados);
}