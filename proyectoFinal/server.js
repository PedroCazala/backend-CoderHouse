import express from 'express'
import { newId } from './src/funciones.js'
import { products, getProducts, updateProducts } from './src/updateFiles.js'

//intento de pasar las rutas a otro archivo
// import {router2} from './src/ruter/routes.js'
// const routes = require('./src/ruter/routes.js')
// console.log(typeof(routes));

export const app = express()
const PORT = 8080
const admin =true
const adminPermission =(req,res,next)=>{
    admin ?
        next()
    :
        res.send('Se necesitan permisos de administrador')
}

//intento de pasar las rutas a otro archivo
// app.use('/', routes);
// app.use('/api', lala)

//Ruteo
const {Router} = express
export const router = Router()

getProducts()

//Servidor en marcha
const server = app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${server.address().port}`);
})
server.on('error', error  => console.log(`Error en el servidor ${error}`))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)

//Productos
// export let products=[]
// export const fileProducts = './productos.txt'


//devolver todos los productos, si tiene id el prod epecifico
router.get('/productos/:id?',(req,res)=>{
    const id = req.params.id
    if(id){
        let finded =products.find(prod=> prod.id == id)
        finded ?
            res.send(finded)
        :
            res.send(`El producto con el id número: ${id}, no existe`)
    } else {
        res.send(`${JSON.stringify(products)}`)
    }
})



router.post('/productos', adminPermission,(req,res)=>{
        const id = newId(products)
        const date = Date.now() 
        const newProduct =req.body
        products.push({id,date,...newProduct})
        updateProducts()
        res.send({newProduct,products})
})
router.put('/productos/:id',adminPermission,(req,res)=>{
    const id = req.params.id
    const date = Date.now() 
    const modifiedProduct = {id,date,...req.body}
    let index = products.map(products=>parseInt(products.id)).indexOf(parseInt(id))
    if(index!=-1){
        products[index] = modifiedProduct
        updateProducts()
        res.send({index, products})
    }else{
        res.send({mensaje:`No se puede modificar producto con id: ${id}, porque no existe`})
    }
})
router.delete('/productos/:id',adminPermission,(req,res)=>{
    const id = req.params.id
    let index = products.map(products=>parseInt(products.id)).indexOf(parseInt(id))
    if(index!=-1){
        products.splice(index,1)
        updateProducts()
        res.send({index, products})
    }else{
        res.send({mensaje:`No se puede borrar producto con id: ${id}, porque no existe`})
    }
})



app.get('*',(req,res)=>{
    const ruta =req.url
    res.send({error:2, ruta,mensaje:`La ruta ${ruta}, no fué encontrada`})
})