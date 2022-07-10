import mongoose  from 'mongoose'

export class MongoDbContainer{
}
export async function connectMongoDB(){
    //conectar a la base de datos
    try {
        mongoose.connect(`mongodb+srv://pedro:${process.env.MONGO_PASSWORD}@cluster0.tugf9.mongodb.net/proyectoFinal?retryWrites=true&w=majority`/*"mongodb://localhost:27017/colegio"*/, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log(error);
    }
}