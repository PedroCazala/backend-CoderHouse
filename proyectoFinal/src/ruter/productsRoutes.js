import express from 'express'
import { adminPermission } from '../middlewares.js'
import { products } from '../updateFiles.js'
import { newId } from '../funciones.js'
import ProductsDaoMongoDB from '../container/daos/productos/ProductsDaoMongoDB.js'

const {Router} = express
const productsRouter = Router()
//MONGO
productsRouter.get('/:id?',(req,res)=>{
    const id = req.params.id
    ProductsDaoMongoDB.getProducts(id,res)
})
productsRouter.post('/', adminPermission,(req,res)=>{
    ProductsDaoMongoDB.pushProduct(req,res)
})
//FILESYSTEM
// //devolver todos los productos, si tiene id el prod epecifico
// productsRouter.get('/:id?',(req,res)=>{
//     const id = req.params.id
//     if(id){
//         let finded =products.find(prod=> prod.id == id)
//         finded ?
//             res.send(finded)
//         :
//             res.send(`El producto con el id número: ${id}, no existe`)
//     } else {
//         res.send(`${JSON.stringify(products)}`)
//     }
// })



// productsRouter.post('/', adminPermission,(req,res)=>{
//         const id = newId(products)
//         const date = Date.now() 
//         const newProduct =req.body
//         products.push({id,date,...newProduct})
//         updateProducts()
//         res.send({newProduct,products})
// })
productsRouter.put('/:id',adminPermission,(req,res)=>{
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
productsRouter.delete('/:id',adminPermission,(req,res)=>{
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


export {productsRouter}