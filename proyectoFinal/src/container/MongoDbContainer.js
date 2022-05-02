import mongoose  from 'mongoose'

export class MongoDbContainer{
}
export async function connectMongoDB(){
    //conectar a la base de datos
    mongoose.connect("mongodb+srv://pedro:pedrito13@cluster0.tugf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"/*"mongodb://localhost:27017/colegio"*/, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado a MongoDB");
}