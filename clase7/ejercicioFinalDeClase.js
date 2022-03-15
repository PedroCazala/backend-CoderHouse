const express =require('express')
const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8081

const server = app.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))

// Considere la siguiente frase: ‘Frase inicial’
// Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
// 1) GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
const frase ='Frase Inicial'
app.get('/api/frase',(req,res)=>{
    res.send({
        frase:frase
    })
})

// 2) GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1).
app.get('/api/palabras/:pos',(req,res)=>{
    const position = req.params.pos
    const arrayFrase = frase.split(' ')
    const buscada = arrayFrase[position-1]
    if(position>arrayFrase.length){
        res.send({
            error:'La posición indicada esta fuera de rango',
            posiciónMaxima:arrayFrase.length 
        })
    }
    res.send({
        frase:frase,
        posición:position,
        buscada:buscada
    })
})
// 3) POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
app.post('/api/palabras',(req,res)=>{
    const palabra =req.body.palabra
    const palabras =frase.split(' ')
    palabras.push(palabra)
    frase = palabras.join(' ')
    res.send({
        agregada:palabra,
        posición:palabras.length
        // nuevaFrase:frase
    })
})
// 4) PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
