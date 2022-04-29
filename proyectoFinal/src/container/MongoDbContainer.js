import mongoose  from 'mongoose'
// export let products =[]

export class MongoDbContainer{
    // static  getProducts(){   
    //     try{
    //         await connectMongoDB()
    //         // let archivo = fs.readFileSync(fileProducts, 'utf-8');
    //         // products = JSON.parse(archivo)
    //     }catch{

    //     }
    // }
}
export async function connectMongoDB(){
    //conectar a la base de datos
    mongoose.connect("mongodb+srv://pedro:pedrito13@cluster0.tugf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"/*"mongodb://localhost:27017/colegio"*/, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado a MongoDB");
}