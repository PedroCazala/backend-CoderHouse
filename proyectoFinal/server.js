import express from 'express'
import fs  from 'fs'



export const app = express()
const PORT = 8080

//Ruteo
const {Router} = express
const router = Router()
app.use('/api', router)

//Servidor en marcha
const server = app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${server.address().port}`);
})
server.on('error', error  => console.log(`Error en el servidor ${error}`))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Productos
const products=[]
const fileProducts = './productos.txt'
const getProducts = ()=>{
    try{
        products = fs.readFileSync(fileProducts,'utf-8')
        products = JSON.parse(products)
    }catch{
        fs.writeFileSync(fileProducts,'[]')
        console.log('entro al catch y borro')
    }
}
getProducts()

const updateProducts = ()=>{
    const adsProducts = JSON.stringify(products)
    fs.writeFileSync(fileProducts,adsProducts)

}

//devolver todos los productos, si tiene id el prod epecifico
router.get('/productos/:id?',(req,res)=>{
    const id = req.params.id
    id ? 
    res.send(id)
    :
    res.send(`todos los productos`)
})
router.post('/productos',(req,res)=>{
    const id = products.length + 1
    const newProduct =req.body
    products.push({...newProduct,id})
    updateProducts()
    res.send(products)
})

