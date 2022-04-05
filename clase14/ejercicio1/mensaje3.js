import { mensaje1 } from "./mensaje1.js"
import { mensaje2 } from "./mensaje2.js"

const mensaje3 = 'Este es el tercer mensaje'

function mostrarMensaje(mensaje,tiempo){
    setTimeout(()=>console.log(mensaje),tiempo)
}

mostrarMensaje(mensaje1,1000)
mostrarMensaje(mensaje2,2000)
mostrarMensaje(mensaje3,3000)