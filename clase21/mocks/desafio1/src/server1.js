import fs from 'fs'
import { faker } from '@faker-js/faker';
import express,{ json,urlencoded } from 'express';

const app = express()
app.use(json())
app.use(urlencoded({extended:true}))

const PORT =3002
const server = app.listen(PORT,()=>{
    console.log(`🥳 Corriendo en localhost:/${PORT}`)
})

server.on('error',(err)=>{console.log(err);})

app.get('/',(req,res)=>{
    const users = []
    const count = req.query.count
    for(let i=0 ; i<count  ; i++){
        const user = {
            nombre:faker.name.firstName(), 
            apellido:faker.name.lastName(),
            color:faker.commerce.color()
        }
        users.push(user)
    }
    res.send(users)
})