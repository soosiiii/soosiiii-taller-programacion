//1) ingresar precios de productos hasta que se ingrese 0.
// mostrar total vendido, cantidad de productos y promedio de precios.
function ej1(){
    let total=0;
    let cantidad=0;
    let precio=parseInt(prompt("ingrese un precio"));
if(isNaN(precio)){
    console.log("dato invalido");
    return;
}
while(precio!==0){
total=total+precio;
cantidad++;
precio=parseInt(prompt("ingrese otro precio"));
if(isNaN(precio)){
    console.log("dato invalido");
    return;
}
}
let promedio;
promedio=total/cantidad;
console.log("total vedido " + total);
console.log("promedio de precios " + promedio);
console.log("cantidad de productos " + cantidad);
}

//2) durante la carga de prodctos, mostrar c¿precio más caro, precio más barato 
//y cantidadees de productos que costaron más de 5000.
function ej2(){
    let mayor;
    let menor;
    let mayor5000=0;
    let precio=parseInt(prompt("ingrese un precio"));
    if(isNaN(precio)){
        console.log("dato invalido");
        return;
    }
    while(precio!==0){
        if(mayor===undefined || precio<menor){
            menor=precio;
        }
        if(precio>5000){
            mayor5000++;
        }
        precio=parseInt(prompt("ingrese otro precio"));
        if(isNaN(precio)){
            console.log("datos invalidos");
            return;
        }
    }
    console.log("precio mas caro " + mayor);
    console.log("precio mas barato " + menor);
    console.log("mayor a 5000" + mayor5000);
}

//3) clasificar productos según su precio: economico (<=2000),
// intermedios(2001-5000) y caros (>5000). mostrar las cantidades.
function ej3(){
    let economicos;
    let intermedios;
    let caros;
    let precio=parseInt(prompt("ingrese un precio"));
    if(isNaN(precio)){
        console.log("datos invalidos");
        return;
    }
    while(precio!==0){
        if(precio<=2000){
            economicos++;
        } else if(precio<=5000) {
            intermedios++;
        } else {
            caros++;
        }
        precio=parseInt(prompt("ingrese otro precio"));
        if(isNaN(precio)){
        console.log("datos invalidos");
        return;
        }
    }
    console.log("precios economicos " + economicos);
    console.log("precios intermedios " + intermedios);
    console.log("precios caros " + caros);
}

//4) al finalizar la carga, aplicar deescuento sefun su total: más de 10000-->5%,
// más de 20000-->10%, más de 50000-->15%. mostrar total, descuento y total final.
function ej4(){
    let total=0;
    let descuento=0;
    let precio=parseInt(prompt("ingrese un precio"));
    if(isNaN(precio)){
        console.log("datos invalidos");
        return;
    }
    while(precio!==0){
        if(total>50000){
        descuento=total*0.15;
        } else if (total>20000){
            descuento=total*0.10;
        } else if (total>10000){
            descuento=total*0.05;
        }
    }
    let totalFinal;
    totalFinal=total-descuento;
    console.log("precio total " + total);
    console.log("descuento " + descuento);
    console.log("precio total final " + totalFinal);
}
//5) conar cuantos productos tienen precio par y cuantos tienen precio impar.
function ej5(){
    let pares=0;
    let impares=0;
    let precio=parseInt(prompt("ingrese un precio"));
    if(isNaN(precio)){
        console,log("datos invalidos");
        return;
    }
    while(precio!==0){
        if(precio%2===0){
            pares++;
        }else{
            impares++;
        }
        precio=parseInt(prompt("ingrese otro precio"));
        if(isNaN(precio)){
            console.log("datos invalidos");
            return;
        }
    }
    console.log("precios pares " + pares);
    console.log("precios impares " + impares);
}