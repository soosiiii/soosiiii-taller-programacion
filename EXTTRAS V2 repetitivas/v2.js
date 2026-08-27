function ej9(){
    let sumaPositivos=0;
    let cantidadPositivos=0;
    let cantidadTotal=0;
    let mayores100=0;
    let num=parseInt(prompt("ingrese un numero"));
    if(isNaN(num)){
        console.log("dato invalido");
        return;
    }
    while(num>=0){
        cantidadTotal++;
        if(num>0){
            sumaPositivos=sumaPositivos+num;
            cantidadPositivos++;
        }
        if(num>100){
            mayores100++;
        }
        num=parseInt(prompt("ingrese otro numero"));
        if(isNaN(num)){
            console.log("dato invalido")
            return;
        }
    }
    let promedio
    promedio=sumaPositivos/cantidadPositivos;
    console.log("promedio positivos " + promedio);
    console.log("cantidad total " + cantidadTotal);
    console.log("mayores a 100 " + mayores100);
}

function ej10(){
    let mayor5=0;
    let menor3=0;
    let ninguno=0;
    for(let i=1; i<=12; i++){
        let num=parseInt(prompt("ingrese un numero"));
        if(isNaN(num)){
            console.log("dato invalido");
            return;
        }
        if(num%5===0){
            if(mayor5===undefined||num>mayor5){
                mayor5=num;
            }
        }
        if(num%3===0){
            if(menor3===undefined||num<menor3){
                menor3=num;
            }
        }
        if(num%5!==0 && num%3!==0){
            ninguno++;
        }
    }
    console.log("mayor multiplo de 5 " + mayor5);
    console.log("menor multiplo de 3 " + menor3);
    console.log("ninguno " + ninguno);
}

function ej11(){
    let menores=0;
    let adultos=0;
    let suma=0;
    let mayor;
    let cantidad=0;
    let edad=parseInt(prompt("ingrese una edad"));
    if(isNaN(edad)){
        console.log("dato invalido");
        return;
    }
    while(edad!==0){
        cantidad++;
        suma=suma+edad;
        if(edad<18);{
            menores++;
        } else {
            adultos++;
        }
        if(mayor===undefined||edad>mayor){
            mayor=edad;
        }
        edad=parseInt(prompt("ingrese otra edad"));
        if(isNaN(edad)){
            console.log("datos invalidos");
            return;
        }
    }
    let promedio
    promedio=suma/cantidad;

    console.log("menores " + menores);
    console.log("adultos " + adultos);
    console.log("promedio " + promedio);
    console.log("edad mayor " + mayor);
}

function ej12(){
    let n
}