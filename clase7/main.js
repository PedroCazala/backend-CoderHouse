//Usaré este proyecto para los ejercicios en clase
const express = require('express')
const app = express()

const PORT =8081
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
/*********************Ejercicio Operaciones con el servidor*************************/

// Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
// a) Ruta get '/api/sumar/5/6
// b) Ruta get '/api/sumar?num1=5&num2=62) 
// c) Ruta get '/api/operacion/5+6
// No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.

// a)
app.get('/api/sumar/:num1/:num2',(req, res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)

    const suma = num1 + num2

    res.send({
        num1:num1,
        num2:num2,
        suma:suma
    })
})
// b)
app.get('/api/sumar',(req, res)=>{
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)
    const suma = num1 + num2
    res.send({
        num1:num1,
        num2:num2,
        suma: suma
    })
})
// c) Ruta get '/api/operacion/5+6
app.get('/api/operacion/:datos',(req,res)=>{
    const datos =req.params.datos.split('+')
    const suma = datos.reduce((a,b)=>{return parseInt(a)+parseInt(b)})
    res.send({
        datos:datos,
        suma: suma
    })
})
// Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
app.post('/api',(req,res)=>{
    res.send({Dato:'ok POST'})
})
app.put('/api',(req,res)=>{
    res.send({Dato:'ok PUT'})
})
app.delete('/api',(req,res)=>{
    res.send({Dato:'ok DELETE'})
})