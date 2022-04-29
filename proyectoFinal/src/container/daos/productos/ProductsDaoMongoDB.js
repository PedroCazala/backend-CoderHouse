import {MongoDbContainer, connectMongoDB } from '../../MongoDbContainer.js'
import { Product } from './models/products.js'
class ProductsDaoMongoDB extends MongoDbContainer{
    //Si id existe, el producto con dicho id se mostrará, sino se mostraran todos
    static async getProducts(idReq,res){
        await connectMongoDB()
        if(idReq){
            let finded = await Product.findOne({_id:idReq})
            finded._id==idReq ?
                res.send(finded)
            :
                res.send(`El producto con el id número: ${idReq}, no existe`)
        } else {
            const allProducts  = await Product.find()
            res.send(`${allProducts}`) ||res.send(`No hay productos cargados`) 
        }
    }
    static async pushProduct(req,res){
        try {
            await connectMongoDB()
            const date = Date.now() 
            const newProduct =req.body
            await Product.insertMany([{date,...newProduct}])

            res.send({newProduct})
        } catch (error) {
            console.log('entro al catch');
            console.log(error.message);
        }
    }
}
export default ProductsDaoMongoDB