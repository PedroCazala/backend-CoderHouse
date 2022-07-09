import express from 'express'
import { allRoutes } from './src/routes/allRoutes.js'

export const app = express()
const PORT = 8080

//Servidor en marcha
const server = app.listen(PORT,()=>{
    console.log(`🔥Escuchando en http://localhost:${server.address().port}`);
})
server.on('error', error  => console.log(`Error en el servidor ${error}`))

//poder enviar json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// -------- ACCESO A ARCHIVOS PUBLICOS -------
app.use(express.static('public'))

// -------- ROUTES -------
app.use('/',allRoutes)


// -------- VISTAS CON EJS -------
app.set('view engine','ejs')
app.set('views','./src/views')
