import {MongoDbContainer, connectMongoDB } from '../../MongoDbContainer.js'
import { Carts } from './models/carts.js'
class CartsDaoMongoDB extends MongoDbContainer{
    //crear carrito y devolver su id
    static async create(req,res){
        connectMongoDB()
        const date = Date.now() 
        const cart = {date,products:[]}
        try {
            // const mongoCart = await Carts.insertOne({...cart}) //Nose porque no funciona
            const mongoCart = await Carts.insertMany([cart])
            
            // res.send(mongoCart._id)
            res.send(mongoCart[0]._id)
        } catch (error) {
            console.log(`Entró al catch create cart`);
            console.log(error.message);
        }
    }
    //Eliminar un carrito
    static async deleteOne(req,res){
        connectMongoDB()
        const id = req.params.id
        try {
            const mongoCart = await Carts.findOne(({_id:id}))
            await Carts.deleteOne({_id:id})
            mongoCart?
                res.send(`Se borró el carrito con el id: ${id}.`)
            :
                res.send({mensaje:`No se puede borrar carrito con id: ${id}, porque no existe`})
        } catch (error) {
            console.log(`Entró al catch deleteOne cart`);
            console.log(error.message);
        }
    } 
}
export default CartsDaoMongoDB