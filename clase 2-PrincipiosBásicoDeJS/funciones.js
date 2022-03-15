//Funciones y Closures
//---ejercicio1---

const lista = ['Juan','Maca','Pepe', 'Valen']
const listaVacia = []

function mostrarLista(alumnos){
    (alumnos?.length >0) ? 
        console.log(`Los alumnos son ${alumnos}`)
    :
        console.log(`Lista vacia`)
}

// mostrarLista(lista)
// mostrarLista(listaVacia)

// ---ejercicio 2---
const listaNros = [3, 10, 25]
const listaNrosVacia = []
const mostrarNumeros = function(numeros){
    numeros.length !== 0 ?
        console.log(`Los numeros del array son: ${numeros}`)
    :
    console.log(`Lista vacia`);
}
// mostrarNumeros(listaNros)
// mostrarNumeros(listaNrosVacia)

//---IIFE ejercicio dos bien hecho---
// (function(numeros){
//     numeros.length !== 0 ?
//         console.log(`Los numeros del array son: ${numeros}`)
//     :
//     console.log(`Lista vacia`)
// })([1,6,89])

//---ejercicio 3---
function crearmultiplicador(multiplicador){
    return function(numero) {
        console.log(numero*multiplicador)
    }
}
const duplicar = crearmultiplicador(2)
const triplicar = crearmultiplicador(3)

duplicar(2)
duplicar(10)
triplicar(3)
triplicar(10)