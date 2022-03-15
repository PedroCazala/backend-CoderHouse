//vi 28 minutoss
const express = require('express')
const {Router} = express()

const app =express()
const router = Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT =8080
const server = app.listen(PORT,()=>{
    console.log(`Escuchando al servidor en el puerto ${server.adress().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))

//Ejercicio1
// - Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
// 	GET: devolverá la lista requerida en formato objeto.
// POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
// Persona -> { "nombre": ..., "apellido": ..., "edad":... }
// Mascota -> { "nombre":..., "raza":..., "edad":... }
// - Utilizar el Router de express para definir las rutas base, implementando las subrutas en los métodos correspondientes.
// - Probar la funcionalidad con Postman.
// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

class Mascota{
    constructor(nombre,raza,edad){
        nombre=this.nombre
        raza=this.raza
        edad=this.edad
    }
}

class Persona{
    constructor(nombre,apellido,edad){
        nombre=this.nombre
        apellido=this.apellido
        edad=this.edad
    }
}

const mascota1 = new Mascota('Chicho','Rotwailer',6)
const mascota2 = new Mascota('Titi','Caniche',10)
const persona1 = new Persona('Luis','Castro',26)
const persona2 = new Persona('Maria','Gomes',65)

const mascotas = [mascota1,mascota2]
const personas = [persona1,persona2]

router.get('/mascotas',(req,res)=>{
    res.send(mascotas)
})
router.get('/mascotas',(req,res)=>{

})