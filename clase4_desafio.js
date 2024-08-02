//1
let listaGenerica = [];

//2
let lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];

//3

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");

//4
function mostrarListaSeparada() {
    for (let i = 0; i <listaDeProgramacion.length; i++) {
        console.log(listaDeProgramacion[i]);
    }
    
}
//5
function mostrarListaInvertida(lista) {
    let listaInvertida = [];
    for (let i = 0; i <= lista.length - 1; i++) {
        listaInvertida.push(lista[lista.length-1 - i]);
    }
    console.log(listaInvertida);

}
    //solución2
function mostrarListaInvertida2(lista) {
    let listaInvertida = [];
    for (i = lista.length - 1; i>=0;i--){
        listaInvertida.push(lista[i]);
    }
    console.log(listaInvertida);
}

//6
function promedioElementosLista(lista) {
    let numeroElementos = lista.length;
    let suma = 0;
    for (let i = 0; i < numeroElementos; i++){
        suma += lista[i];
    }
    let promedio = suma/numeroElementos;
    return promedio; 
}

     //solución2

function promedioElementosLista2(lista) {
    let suma = lista.reduce((acumulador,valorActual) => acumulador + valorActual, 0);
    let promedio = suma / lista.length;
    return promedio;
}

//7
function numeroMayorMenor(lista) {
    let numeroMenor = Infinity;
    let numeroMayor = -Infinity;
    for (let i = 0; i< lista.length; i++){
        if (lista[i] > numeroMayor){
            numeroMayor = lista[i];
        } 
        if (lista[i] < numeroMenor) {
            numeroMenor = lista[i];
        }
    }
    return [numeroMayor, numeroMenor];
}

    //otra solucion

function numeroMayorMenor2(lista) {
    const numeroMayor = Math.max(...lista);
    const numeroMenor = Math.min(...lista);

    return [numeroMayor,numeroMenor];
}

    //solucion propuesta

function numeroMayorMenor3(lista) {
    let numeroMenor = lista[0];
    let numeroMayor = lista [0];

    for (let i = 1; i < lista.length; i++) {
        if (numeroMenor > lista[i]) {
            numeroMenor = lista[i];
        }
        if (numeroMayor < lista[i]) {
            numeroMayor = lista[i];
        }
    }
}

//8
function sumaElementosLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

//9
function busquedaLista(lista,parametro) {
    let sinResultado = -1;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == parametro) {
            return i;
        }
    }
    return sinResultado;
}

//10
function sumaElementosDosListas(lista1,lista2) {
    let listaSuma = [];

    if (lista1.length == lista2.length) {
        for (let i = 0; i < lista1.length; i++) {
            listaSuma.push(lista1[i] + lista2[i]);
        }
        return listaSuma;
    } else {
        throw new Error('Las listas no tienen la misma cantidad de elementos');
    }
}

//11

function listaNumerosCuadrados (lista) {
    let listaNueva = [];
    for (let i = 0; i < lista.length; i++) {
        listaNueva.push(lista[i] ** 2);
    }
    return listaNueva;
}

    //otra solución

function listaNumerosCuadrados2(lista) {
    return lista.map(numero => numero ** 2);
}

