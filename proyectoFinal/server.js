import express from 'express'
import fs  from 'fs'

export const app = express()
const PORT = 8080

//Ruteo
const {Router} = express
const router = Router()


//Servidor en marcha
const server = app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${server.address().port}`);
})
server.on('error', error  => console.log(`Error en el servidor ${error}`))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)

//Productos
let products=[]
const fileProducts = './productos.txt'
const getProducts = ()=>{
    try{
        // Intento de hacerlo asincrono!
        // fs.readFile(fileProducts, 'utf-8', async (err, data) => {
        //     if(err) {
        //         console.log('error: ', err);
        //     } else {
        //         products= JSON.parse(data)
        //     }
        //     console.log(products);
        // });
        let archivo = fs.readFileSync(fileProducts, 'utf-8');
        products = JSON.parse(archivo)
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
    const id = products.length + 1
    const newProduct =req.body
    console.log(req.body);
    products.push({id,...newProduct})
    updateProducts()
    res.send({newProduct,products})
})
router.put('/productos/:id',(req,res)=>{
    const id = req.params.id
    const modifiProduct =req.body
    console.log(req.body);
    products.push({id,...newProduct})
    updateProducts()
    res.send({newProduct,products})
})

