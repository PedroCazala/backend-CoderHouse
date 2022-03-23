//1,32
const express = require('express')
const app = express()
app.listen(8080,()=>console.log('corriendo programa'))

app.set('views','./views')
app.set('view engine','ejs')

const historial = []
app.get('/',(req,res)=>{
    // const {nombre,apellido, edad} = req.body

    res.render('form',{historial})
})
app.post('/personas',(req,res)=>{
    const {nombre,apellido, edad} = req.body
    const persona = {nombre,apellido, edad}
    historial.push(persona)
    // console.log(req.body)
    // console.log(historial)
    res.render('form',{nombre,apellido, edad})
})

// <%= historial[0].nombre %>
//     <% historial.forEach(persona=><li>persona.nombre</li>) %> 