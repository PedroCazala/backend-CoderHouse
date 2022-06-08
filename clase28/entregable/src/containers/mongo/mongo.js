import mongoose from "mongoose";
import { claveMongo } from "../../../claves.js";
try {
    mongoose.connect(`mongodb+srv://pedro:${claveMongo}@cluster0.tugf9.mongodb.net/entregables` || 'mongodb://localhost:27017/entregables') //Servidor mongo local
    console.log('Database is connected');
} catch (error) {
    console.log(error);
}