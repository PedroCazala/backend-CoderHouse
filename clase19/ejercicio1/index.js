import mongoose from "mongoose";
import { Estudiante} from "./models/estudiante.js";

crud()
async function crud(){
    try {
        //conectar a la base de datos
        mongoose.connect("mongodb+srv://pedro:pedrito13@cluster0.tugf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"/*"mongodb://localhost:27017/colegio"*/, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
        
        //crear Estudiante
        console.log('Create');
        const estudiantesData=[
            { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
            { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
            { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
            { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
            { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
            { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
            { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
            { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
            { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
            { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
        ]

        //ingresando varios
        // // Opción1
        // estudiantesData.forEach(estudiante=>{
        //     const estudianteNuevo= new Estudiante(estudiante)
        //     await estudianteNuevo.save();
        //     console.log(estudiantesNuevo);
        //     console.log("Estudiante creado");
        // })
        // Opción2
        Estudiante.insertMany(estudiantesData,(err,docs)=>{
            if(err){
                console.log(err);
            }else{
                console.log(docs);
            }
        })
    } catch (error) {
        console.log(error);
    }
}