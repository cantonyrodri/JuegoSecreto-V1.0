//1 
function indiceMasaCorporal(altura,peso){
    var imc = peso / (altura * altura)
    return imc;
}
//2 
function factorialNumero (numero){
    let factorial = 1;
    for (var i = 1; i <= numero ; i++){
        factorial = factorial * i; 
        
    }
    return factorial;
}

    // otra forma
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

//3
function conversorDolarReal(dolares){
    var cotizacion = 4.8;
    var reales = dolares * cotizacion;
    return reales;
}

//4 
function areaSalaRectangular(altura,anchura){
    return altura * anchura;
}
function perimetroSalaRectangular(altura,anchura){
    return (altura + anchura) * 2;
}

function areaPerimetroSalaRectangular(altura, anchura){
    var area = areaSalaRectangular(altura,anchura); 
    var perimetro = perimetroSalaRectangular(altura,anchura);
    console.log(`El área de la sala rectangular es ${area} y el perimetro es ${perimetro}`);
}

    // forma corta
function calcularAreaYPerimetroRectangular(altura,anchura){
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log(`El área es ${area} y el perimetro es ${anchura}.`);
}

//5 
function areaSalaCircular(radio){
    var valorPi = 3.14;
    return (radio * radio) * valorPi;
}
function perimetroSalaCircular(radio){
    var valorPi = 3.14;
    return 2 * radio * valorPi;
}

function areaPerimetroSalaCircular(radio){
    const area = areaSalaCircular(radio);
    const perimetro = perimetroSalaCircular(radio);
    return alert(`El área de la sala circular es ${area} y el perimetro es ${perimetro}`);
}

    // forma corta
function calcularAreaYPerimetroCircular(radio){
    var pi = 3.14;
    var area = radio * radio * pi;
    var perimetro = 2 * radio * pi;
    console.log(`El area es ${area} y el perimetro es ${perimetro}.`);
}

//6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero){
    for (var i = 1; i <= 10 ; i++ ){
        var resultado = numero * i;
        console.log(numero + "x" + i + "=" + resultado);
    }
}
