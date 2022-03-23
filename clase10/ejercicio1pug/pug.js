const express=require('express')
const app =express()
const server = app.listen(8080,()=>console.log(`Escuchando puerto ${server.address().port}`))
server.on('error',err=>console.log(`error en el servidor ${err}`))
app.set('views','./views')
app.set('view engine', 'pug')

app.get('/datos',(req,res)=>{
    const {min,nivel, max, titulo} = req.query

    res.render('hello',{min,nivel,max,titulo})
})