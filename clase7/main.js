//Usaré este proyecto para los ejercicios en clase
const express = require('express')
const app = express()

const PORT =8080
const server = app.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))

app.get('/usuarios',(req,res)=>{
    const nombre =req.query.nombre;
    
    res.send(`Hola ${nombre}`)
    // res.send(req.query)
})
app.get('/usuarios/:id',(req,res)=>{
    const id =req.params.id;
    
    res.send(`ID: ${id}`)
    // res.send(req.query)
})


const frase = 'Hola mundo cómo están'
app.get('/api/frase',(req,res)=>{
    res.send(`${frase}`)
})
app.get('/api/letras/:num',(req,res)=>{
    const num = req.params.num
    const typeOfNum =typeof(parseInt(num))
    const letra = frase[num-1]
    
    if(letra){
        res.send(`La letra encontrada ubicada en la posición numero ${num} de la frase, es: "${letra}"`)
    }else{
        if(typeOfNum =='number'){
            res.send({
                'error':'el parametro es un numero, pero está fuera de rango',
                'num':num}
            )
        }else{
            res.send({
                'error':'el parametro no es un número',
                'caracter':num}
            )
        }
    }
})
app.get('/api/palabras/:num',(req,res)=>{
    const num = req.params.num
    const typeOfNum =typeof(parseInt(num))
    const palabras = frase.split(' ')
    const palabra = palabras[num-1]
    
    if(palabra){
        res.send(`La palabra encontrada ubicada en la posición numero ${num} de la frase, es "${palabra}" `)
    }else{
        if(typeOfNum ==='number'){
            res.send({
                'error':'el parametro es un numero, pero está fuera de rango',
                'num':num}
            )
        }else{
            res.send({
                'error':'el parametro no es un número',
                'caracter':num}
            )
        }
    }
})
