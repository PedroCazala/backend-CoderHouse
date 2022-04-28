import mongoose from "mongoose";
import { Usuario } from "./models/usuario.js";

crud()
async function  crud(){
    try {
        mongoose.connect("mongodb://localhost:27017/mibase", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
        // //----------------- CREATE ------------------
        // console.log('Create');
        // const usuarioData ={
        //     nombre:'Juan',
        //     apellido:'Perez',
        //     email:'jp@gc.com',
        //     password:'123456'
        // }
        
        // const usuarioNuevo = new Usuario(usuarioData);
        // await usuarioNuevo.save();
        // console.log(usuarioNuevo);
        // console.log("Usuario creado");
        //----------------- READ ------------------
        // console.log('read');
        // const usuarios = await Usuario.find()
        // console.log(usuarios);

        //----------------- UPDATE ------------------
        console.log('UPDATE');
        const usuarioUpdate = await Usuario.findOneAndUpdate({email:'jp@gc.com'},{nombre:'Juancito'})
        console.log(usuarioUpdate);
        //----------------- DELETE ------------------
        // console.log('DELETE');
        // const usuarioDelete = await Usuario.findOneAndDelete({email:'jp@gc.com'})
        // console.log(usuarioDelete);
    } catch (error) {
        console.log('ocurrió un problema al conectar con mongodb');
    }

}