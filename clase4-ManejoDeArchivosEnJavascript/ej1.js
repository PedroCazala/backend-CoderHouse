//Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
// Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
// Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

//----Como lo hice yo----
// const fin = () => console.log('terminé')
// function mostrarLetras (string,demora,funcion){
//     for(let i =0; i < string.length ; i++){
//         setTimeout(()=>{console.log(string[i])},demora*i) 
//     }
//     funcion()
// }

// mostrarLetras('¡hola!',0,fin)
// mostrarLetras('¡hola!',250,fin)
// mostrarLetras('¡hola!',500,fin)

//Voy 50 min de clase
//----como lo hizo el prof---
const fin = () => console.log('terminé')

function mostrarLetras (string,funcionFinal){
    for(let i =0; i < string.length ; i++){
        setTimeout(letra=>console.log(letra),1000*i,string[i]) 
    }
    funcionFinal()
}

setTimeout(mostrarLetras,0,'¡hola!',fin)
setTimeout(mostrarLetras,250,'¡hola!',fin)
setTimeout(mostrarLetras,500,'¡hola!',fin)
