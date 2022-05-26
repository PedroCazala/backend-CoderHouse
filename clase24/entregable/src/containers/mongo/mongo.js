import mongoose from "mongoose";
import { claveMongo } from "../../../claves";

mongoose.connect(`mongodb+srv://pedro:${claveMongo}@cluster0.tugf9.mongodb.net/entregables` || 'mongodb://localhost:27017/entregables') //Servidor mongo local
class productSave{
    addProduct(){
        const product
    }
}
class messageSave{}