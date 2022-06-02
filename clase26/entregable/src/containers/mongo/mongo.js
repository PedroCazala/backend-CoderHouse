import mongoose from "mongoose";
import { claveMongo } from "../../../claves.js";

mongoose.connect(`mongodb+srv://pedro:${claveMongo}@cluster0.tugf9.mongodb.net/entregables` || 'mongodb://localhost:27017/entregables') //Servidor mongo local

const Schema = mongoose.Schema
//creamos el esquema de usuario y luego el modelo
const usersSchema = new Schema({
    mail:String,
    password:String
})
export const UserModel = mongoose.model("Users", usersSchema)