import express from 'express'
import { adminPermission } from '../middlewares.js'

// //Mongo
// import ProductsDaoMongoDB from '../container/daos/productos/ProductsDaoMongoDB.js'
// const Products = ProductsDaoMongoDB
// //Memory
// import ProductsDaoMemory from '../container/daos/productos/ProductsDaoMemory.js'
// const Products = ProductsDaoMemory
//FileSystem
import ProductsDaoFileSystem from '../container/daos/productos/ProductsDaoFileSystem.js'
const Products = ProductsDaoFileSystem

const {Router} = express
const productsRouter = Router()

productsRouter.get('/:id?',(req,res)=>{
    Products.getProducts(req,res)
})
productsRouter.post('/', adminPermission,(req,res)=>{
    Products.pushProduct(req,res)
})
productsRouter.put('/:id',adminPermission,(req,res)=>{
    Products.updateProduct(req,res)
})
productsRouter.delete('/:id',adminPermission,(req,res)=>{
    Products.delateProduct(req,res)
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
// productsRouter.put('/:id',adminPermission,(req,res)=>{
//     const id = req.params.id
//     const date = Date.now() 
//     const modifiedProduct = {id,date,...req.body}
//     let index = products.map(products=>parseInt(products.id)).indexOf(parseInt(id))
//     if(index!=-1){
//         products[index] = modifiedProduct
//         updateProducts()
//         res.send({index, products})
//     }else{
//         res.send({mensaje:`No se puede modificar producto con id: ${id}, porque no existe`})
//     }
// })
// productsRouter.delete('/:id',adminPermission,(req,res)=>{
//     const id = req.params.id
//     let index = products.map(products=>parseInt(products.id)).indexOf(parseInt(id))
//     if(index!=-1){
//         products.splice(index,1)
//         updateProducts()
//         res.send({index, products})
//     }else{
//         res.send({mensaje:`No se puede borrar producto con id: ${id}, porque no existe`})
//     }
// })


export {productsRouter}