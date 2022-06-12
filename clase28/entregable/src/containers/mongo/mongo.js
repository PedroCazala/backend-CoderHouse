import mongoose from "mongoose";
import { mongoConfig } from "../../../config.js";

try {
    mongoose.connect(`mongodb+srv://pedro:${mongoConfig.PASSWORD}@cluster0.tugf9.mongodb.net/entregables` || 'mongodb://localhost:27017/entregables') //Servidor mongo local
    console.log('Database is connected');
} catch (error) {
    console.log(error);
}
