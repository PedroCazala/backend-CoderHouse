import mongoose from "mongoose"
import bcrypt from "bcrypt-nodejs"

const Schema = mongoose.Schema
//creamos el esquema de usuario y luego el modelo
const usersSchema = new Schema({
    email:String,
    password:String
})
usersSchema.methods.encryptPassword =(password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

usersSchema.methods.comparePassword = function (password) {
    return  bcrypt.compareSync(password,this.password)
}
const UserModel = mongoose.model("Users", usersSchema)
export {UserModel}