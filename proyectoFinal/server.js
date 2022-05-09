import express from 'express'
import { cartRouter } from './src/ruter/cartRoutes.js'
import { productsRouter } from './src/ruter/productsRoutes.js'

export const app = express()
const PORT = 8080

//Ruteo
const {Router} = express
export const router = Router()

//Servidor en marcha
const server = app.listen(PORT,()=>{
    console.log(`🔥Escuchando el puerto ${server.address().port}`);
})
server.on('error', error  => console.log(`Error en el servidor ${error}`))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)
app.use('/api/productos',productsRouter)
app.use('/api/carrito',cartRouter)

app.get('*',(req,res)=>{
    const ruta =req.url
    res.send({error:2, ruta,mensaje:`La ruta ${ruta}, no fué encontrada`})
})




