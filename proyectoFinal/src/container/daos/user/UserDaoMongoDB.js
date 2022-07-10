import { connectMongoDB, MongoDbContainer } from "../../MongoDbContainer.js";
import { User } from "./userModel";

// export class UserDaoMongoDB extends MongoDbContainer{
//     static async newUser (user, done){
//         await connectMongoDB()

//         User.findOne({ email: user.email }, function (err, user) {
//             const user = await User.findOne({email:user.email})
//             if (err) { return done(err); }
//             if (user) {  
//                 const messageSingUpError =`El usuario con mail ${email}, ya existe, por favor ingresar un nuevo mail, ...ver como enviar una respuesta`
//                 console.log(messageSingUpError);
//                 // return done(null,messageSingUpError)
//                 done(null,false)
//             }else{
//                 const newUser = new User();
//                 newUser.email = email;
//                 newUser.password = password;
//                 await newUser.save();
//                 return done(null, user)
//             }
            
//         });
//     }
// }