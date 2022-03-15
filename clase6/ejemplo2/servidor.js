const express = require('express')
const moment = require('moment')
const app = express()
const PORT = 8080
const server = app.listen(PORT,()=>{
    console.log(`Servidor Http  escuchando en el puerto ${server.address().port}`)
})
server.on('error',error=>{console.log(`Error en el servidor ${error}`)})

app.get('/',((solicitud,respuesta)=>{
    respuesta.send('<h1 style="color:blue"> Bienvenidos al servidor express</h1>')
}))
let contadorVisitas = 0
app.get('/visitas',((solicitud,respuesta)=>{
    respuesta.send({titulo:`cantidad de visitas realizadas a este endpoint ${contadorVisitas}`})
    contadorVisitas ++
    console.log('Ingresaste a visitas: ',contadorVisitas)
}))
const fecha = moment().format('DD/MM/YYYY')
const hora = moment().format('h:mm:ss')
app.get('/fyh',((solicitud,respuesta)=>{
    respuesta.send(`Hoy es ${fecha} y la hora actual es ${hora}`)
    // console.log('Ingresaste a visitas: ',contadorVisitas)
}))