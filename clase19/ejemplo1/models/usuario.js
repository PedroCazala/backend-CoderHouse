import mongoose from "mongoose";

const usuarioCollection = 'Usuarios';

const usuarioSchema = new mongoose.Schema({
    nombre:{type:String, required:true,max:100},
    apellido:{type:String, required:true,max:100},
    email:{type:String, required:true,max:100},
    password:{type:String, required:true,max:100},
})

export const Usuario = mongoose.model(usuarioCollection,usuarioSchema)