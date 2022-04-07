import express from 'express'
import { newId } from './src/funciones.js'
import { products, getProducts, updateProducts } from './src/updateFiles.js'

export const app = express()
const PORT = 8080

//Ruteo
const {Router} = express
const router = Router()

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

router.post('/productos',(req,res)=>{
    const id = newId(products)
    // products.length + 1
    const date = Date.now() 
    const newProduct =req.body
    products.push({id,date,...newProduct})
    updateProducts()
    res.send({newProduct,products})
})
router.put('/productos/:id',(req,res)=>{
    const id = req.params.id
    const date = Date.now() 
    const modifiedProduct = {id,date,...req.body}
    let index = products.map(products=>parseInt(products.id)).indexOf(parseInt(id))

    products[index] = modifiedProduct
    updateProducts()
    res.send({index, products})
})
router.delete('/productos/:id',(req,res)=>{
    const id = req.params.id
    let index = products.map(products=>parseInt(products.id)).indexOf(parseInt(id))

    products.splice(index,1)
    updateProducts()
    res.send({index, products})
})



app.get('*',(req,res)=>{
    const ruta =req.url
    res.send({error:2, ruta,mensaje:`La ruta ${ruta}, no fué encontrada`})
})