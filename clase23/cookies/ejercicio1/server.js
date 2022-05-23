import express from "express";
import cookieParser from "cookie-parser";
import { Rutas } from "./src/routes.js";

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/cookies',new Rutas)
// app.use('/')
// const file = './src/index.html'
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.render('index.html');
    // res.cookie('index','nana')
})
// app.get('/',(req,res)=>{
//     console.log('entro');
//     res.send('lalal')
// })
    


const PORT = 3000
const server = app.listen(PORT,()=>{
    console.log(`🔥 Corriendo en http://localhost:${server.address().port}`);
})
server.on('error',err=> console.log(err.message,'🤯Fallo el servidor'))