import express from 'express'

const app = express()

app.listen(3000, ()=> console.log(`🔥Corriendo en http://localhost:3000`))

app.get( '/',(req,res) => {
    res.send(`Hello world!`)
})