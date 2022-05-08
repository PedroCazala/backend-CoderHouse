import { FirebaseContainer } from '../../FirebaseContainer.js';
import { db } from '../firebaseConfing/confing.js';
import {collection, getDocs} from 'firebase/firestore/lite';
import { doc, setDoc,getDoc } from "firebase/firestore";


const productsCollection = collection(db,'products')
 
class ProductsDaoFirebase extends FirebaseContainer{
    //Si id existe, el producto con dicho id se mostrará, sino se mostraran todos
    static async getProducts(req,res){
        const id = req.params.id 

        if(id){
            let finded;
            try {
                const cityRef = db.collection('cities').doc('SF');
                const doc = await cityRef.get();
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    console.log('Document data:', doc.data());
                }
                // const docRef = doc(db, "products", id);
                // finded = await getDoc(docRef);
            } catch (error) {
                console.log(error.message);
            } 
            finded ?
                res.send(finded)
            :
                res.send(`El producto con el id número: ${id}, no existe`)
        } else {
            const allProductsSnapshot = await getDocs(productsCollection)
            const allProducts = allProductsSnapshot.docs.map(doc => doc.data());
            res.send(`${JSON.stringify(allProducts)}`) ||res.send(`No hay productos cargados`) 
        }
    }
    static async pushProduct(req,res){
        try {
            const date = Date.now() 
            const newProduct =req.body
            const data = ([{date,...newProduct}])
            // const res = await productsCollection.set(data);
            // const res=await setDoc(doc(db, "products"), data);
            await setDoc(doc(productsCollection), {
                name: "Los Angeles",
                state: "CA",
                country: "USA"
              });
            // res.send({res})
        } catch (error) {
            console.log('entro al catch');
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
export default ProductsDaoFirebase