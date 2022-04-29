import express from 'express'
import { products,carts} from '../updateFiles.js'
import { newId } from '../funciones.js'

const {Router} = express
const cartRouter = Router()

//Crear carrito
cartRouter.post('/',(req,res)=>{
    const id = newId(carts)
    const date = Date.now() 
    const cart = {id,date,products:[]}
    carts.push(cart)
    updateCarts()
    res.send({id,cart})
})
//Eliminar carrito
cartRouter.delete('/:id',(req,res)=>{
    const id = req.params.id
    let index = carts.map(cart=>parseInt(cart.id)).indexOf(parseInt(id))
    if(index!=-1){
        carts.splice(index,1)
        updateCarts()
        res.send({index, carts})
    }else{
        res.send({mensaje:`No se puede borrar carrito con id: ${id}, porque no existe`})
    }
})
//Obtener productos de un carrito

cartRouter.get('/:id/productos',(req,res)=>{
    const id = req.params.id
    let cart =carts.find(cart=> cart.id == id)

    if(cart){
        res.send(cart)
    }else{
        res.send(`El carrito con el id número: ${id}, no existe`)
    }
})
//Agregar producto al carrito en proceso
    //el id del producto se manda por un json
cartRouter.post('/:id/productos',(req,res)=>{
    const id = req.params.id
    let cart =carts.find(cart=> cart.id == id)
    const idProduct = req.body.id
    let product = products.find(product=>product.id == idProduct)

    cart?.products.push(product)

    if(cart && product){
        res.send(cart)
        updateCarts()
    }else{
        if(cart){
            res.send(`El producto con el id número: ${idProduct}, no existe`)
        }else{
            res.send({
                error1:`El carrito con el id número: ${id}, no existe`,
                error2:`Por lo tanto el producto con el id número: ${idProduct}, tampoco existe`
            })
        }
    }
})
//eliminar un producto de un carrito determinado
cartRouter.delete('/:id/productos',(req,res)=>{
    const id = req.params.id
    let cart =carts.find(cart=> cart.id == id)
    const idProduct = req.body.id
    let index = cart.products.map(product=>product.id).indexOf(idProduct)
    let product = products.find(product=>product.id == idProduct)
    console.log(index);
    cart.products.splice(index,1)

    if(cart && product){
        res.send({'producto eliminado':product,cart})
        updateCarts()
    }else{
        if(cart){
            res.send(`El producto con el id número: ${idProduct}, no existe`)
        }else{
            res.send({
                error1:`El carrito con el id número: ${id}, no existe`,
                error2:`Por lo tanto el producto con el id número: ${idProduct}, tampoco existe`
            })
        }
    }
})

export {cartRouter}