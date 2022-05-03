import { admin, connectFirebase, FirebaseContainer } from '../../FirebaseContainer.js';
// import { Product } from './models/products.js'
const db =  admin.firestore()
const query =db.collection('products')
class ProductsDaoFirebase extends FirebaseContainer{
    //Si id existe, el producto con dicho id se mostrará, sino se mostraran todos
    static async getProducts(req,res){
        const id = req.params.id 
        connectFirebase()

        if(id){
            let finded;
            try {
                // query.get()
                // .then((snapshot)=>{
                //     snapshot.forEach((doc)=>{
                //         console.log()
                //     })
                // })

            } catch (error) {
                console.log(error.message);
            } 
            finded ?
                res.send(finded)
            :
                res.send(`El producto con el id número: ${id}, no existe`)
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

    static async updateProduct(req,res){
        try {
            connectMongoDB()
            const id = req.params.id
            const date = Date.now() 
            try{
                const modifiedProduct = {id,date,...req.body}
                await Product.updateOne({_id:id},modifiedProduct)
                res.send(modifiedProduct)
            }catch(err){
                res.send(`No existe ningún porducto con el id: ${id}`)
            }

        } catch (error) {
            console.log('entro al catch "updateProduct"');
            console.log(error.message);
        }
    }
    static async delateProduct(req,res){
        try {
            connectMongoDB()
            const id = req.params.id 
            try{
                const deleteProduct = await Product.deleteOne({_id:id})
                res.send(deleteProduct)
            }catch{
                res.send(`No existe ningún porducto con el id: ${id}`)
            }
        } catch (error) {
            console.log('entro al catch "deleteProduct"');
            console.log(error.message);
        }
    }
}
export default ProductsDaoMongoDB