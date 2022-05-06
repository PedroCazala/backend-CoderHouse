import express,{json,urlencoded}from "express";
const app= express()

app.use(json())
app.use(urlencoded({extended:true}))

const PORT =3002
const server = app.listen(PORT,()=>{
    console.log(`🥳 Corriendo en localhost:/${PORT}`)
})

server.on('error',(err)=>{console.log(err);})

const nombres = ['Pedro','Marcos','Ema','Albert']
const apellidos = ['Jimenez','Gomes','Garros']
const colores = ['azul','verde','celeste','azul']

app.get('/',(req,res)=>{
    res.send('Holis')
})