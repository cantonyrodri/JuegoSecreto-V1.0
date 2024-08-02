//1
function mostrarSaludo(){
    console.log("¡Hola, mundo!");
    return;
}

mostrarSaludo();

//2
function mostrarSaludoNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

mostrarSaludoNombre('Cristian');

//3 
function calcularDoble(numero){
    return numero * 2;
}

let resultadoDoble = calcularDoble(2);
console.log(resultadoDoble);

//4 
function calcularPromedio (x,y,z){
    return (x+y+z) / 3;  
}

let promedio = calcularPromedio(1,2,4);
console.log(promedio);

//5 
function encontrarNumeroMayor(x,y){
    let numeroMayor = 0;
    if (x > y){
        numeroMayor = x;
    } else {
        numeroMayor = y;
    }
    return numeroMayor;
    // return x > y ? x : y;
}

//6 
function numeroAlCuadrado (numero){
    return numero * numero;
}

