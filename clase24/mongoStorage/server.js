import express  from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import connectMongo from "connect-mongo"
 
const MongoStore = connectMongo.create({
    mongoUrl:'mongodb://localhost:27017/sesiones', //Servidor mongo local
    ttl:60
})

 
const app = express()

app.use(cookieParser())
app.use(session({
    store: MongoStore,
    secret: 'dfafasf',
    resave: false,
    saveUninitialized:false
}))

app.get('/', (req,res)=>{
    res.send(`Todo funcionando OK`)
})
app.get('/con-session', (req,res)=>{
    if(req.session.contador){
        req.session.contador++
        res.send(`Esta es la vez número ${req.session.contador} que te conectas`)
    }else{
        req.session.contador = 1
        res.send(`Bienvenido!!`)
    } 
})
app.get('/logout', (req,res)=>{
    req.session.destroy()
    res.send(`Se han eliminado todos los datos de session`) 
}) 
app.get('/info', (req,res)=>{
    res.send({
        cookie:req.cookies,
        session:req.session
    })
})

const PORT = 8484
app.listen(PORT,()=>console.log(`🔥 Corriendo en puerto http://localhost:${PORT}`)) 