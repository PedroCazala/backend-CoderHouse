import express from 'express'
import ProductsDaoMongoDB from './src/container/daos/productos/ProductsDaoMongoDB.js'
import { adminPermission } from './src/middlewares.js'
import { cartRouter } from './src/ruter/cartRoutes.js'
import { productsRouter } from './src/ruter/productsRoutes.js'
import { products, getProducts, updateProducts, carts, updateCarts, getCarts } from './src/updateFiles.js'

export const app = express()
const PORT = 8080

//Ruteo
const {Router} = express
export const router = Router()

getProducts()
getCarts()

//Servidor en marcha
const server = app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${server.address().port}`);
})
server.on('error', error  => console.log(`Error en el servidor ${error}`))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)

//With mongo
router.get('/productos/:id?',(req,res)=>{
    const id = req.params.id
    ProductsDaoMongoDB.getProducts(id,res)
})
router.post('/productos', adminPermission,(req,res)=>{
    ProductsDaoMongoDB.pushProduct(req,res)
})

app.get('*',(req,res)=>{
    const ruta =req.url
    res.send({error:2, ruta,mensaje:`La ruta ${ruta}, no fué encontrada`})
})




