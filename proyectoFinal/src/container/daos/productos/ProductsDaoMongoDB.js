import {MongoDbContainer, connectMongoDB } from '../../MongoDbContainer.js'
import { Product } from './models/products.js'
class ProductsDaoMongoDB extends MongoDbContainer{
    //Si id existe, el producto con dicho id se mostrará, sino se mostraran todos
    static async getProducts(id,res){
        await connectMongoDB()
        if(id){
            let finded = await Product.find({id:id})
            finded.id==id ?
                res.send(finded)
            :res.send(`El producto con el id número: ${id}, no existe`)
        } else {
            const allProducts  = 'All products'//await Product.find()
            res.send(`${allProducts}`) ||res.send(`No hay productos cargados`) 
        }
    }
    static async pushProduct(req,res){
        const date = Date.now() 
        const newProduct =req.body
        await Product.insertMany({date,...newProduct})

        res.send({newProduct})
    }
}
export default ProductsDaoMongoDB