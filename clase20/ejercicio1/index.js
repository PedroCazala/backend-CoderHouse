import mongoose from "mongoose";
const { Schema } = mongoose;

crud()
async function crud(){
    try {
        //conectar a la base de datos
        mongoose.connect("mongodb+srv://pedro:pedrito13@cluster0.tugf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"/*"mongodb://localhost:27017/colegio"*/, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
        const schema = new Schema({})
        const Usuarios = mongoose.model('Estudiantes',schema);

        // //ver los estudiantes en consola
        // console.log('read');
        // const users = await Usuarios.find()
        // console.log(users);

        // agragar un estudiante
        console.log('agragar un estudANTE');
        const userData = {nombre:'Federico',apellido:'Perez',dni:'320118321'}
        const usuarioSaveModel = new Usuarios(userData)
        let usuarioSave = await usuarioSaveModel.save()
        console.log(usuarioSave);
    } catch (error) {
        console.log(error);
    }
}