const express = require('express')
const compression = require('compression')
const app = express()
app.use(compression())

let frase =''

app.get('/saludo',(req,res) => {
    for(let i =0; i<1000;i++){
        frase =frase.concat('Hola que tal')
    }
    res.send(frase)
})
app.get('/',(req,res) => {
    for(let i =0; i<1000;i++){
        frase =frase.concat('Hola que tal')
    }
})

const PORT = 8181
const server = app.listen(PORT,()=>console.log(`escuchando en http://localhost:${PORT}`))