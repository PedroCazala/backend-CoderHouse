import { newId } from "../../../funciones.js";
import { MemoryContainer, Products} from "../../MemoryContainer.js";

class ProductsDaoMemory extends MemoryContainer{
    //Si id existe, el producto con dicho id se mostrará, sino se mostraran todos
    static async getProducts(req,res){
        const id = req.params.id 
        if(id){
            let finded = Products.find(prod=>prod.id == id)
            console.log(Products[id].id);
            console.log(finded);
            finded ?
                res.send(finded)
            :
                res.send(`El producto con el id número: ${id}, no existe`)
        } else {
            const allProducts  = Products;
            if(allProducts[0]){

                res.send(`${JSON.stringify(allProducts)}`)
            }else{
                res.send(`No hay productos cargados`) 
            }
        }
    }
    static async pushProduct(req,res){
        try {
            const id = newId(Products)
            const date = Date.now() 
            const newProduct =req.body
            const addProduct=Products.push({id,date,...newProduct})
            res.send({addProduct})
        } catch (error) {
            console.log('entro al catch pushProduct Memory');
            console.log(error.message);
        }
    }

    // static async updateProduct(req,res){
    //     try {
    //         connectMongoDB()
    //         const id = req.params.id
    //         const date = Date.now() 
    //         try{
    //             const modifiedProduct = {id,date,...req.body}
    //             await Product.updateOne({_id:id},modifiedProduct)
    //             res.send(modifiedProduct)
    //         }catch(err){
    //             res.send(`No existe ningún porducto con el id: ${id}`)
    //         }

    //     } catch (error) {
    //         console.log('entro al catch "updateProduct"');
    //         console.log(error.message);
    //     }
    // }
    // static async delateProduct(req,res){
    //     try {
    //         connectMongoDB()
    //         const id = req.params.id 
    //         try{
    //             const deleteProduct = await Product.deleteOne({_id:id})
    //             res.send(deleteProduct)
    //         }catch{
    //             res.send(`No existe ningún porducto con el id: ${id}`)
    //         }
    //     } catch (error) {
    //         console.log('entro al catch "deleteProduct"');
    //         console.log(error.message);
    //     }
    // }
}
export default ProductsDaoMemory