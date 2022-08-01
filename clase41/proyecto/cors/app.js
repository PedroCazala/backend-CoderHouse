const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/messages',(req,res)=>{
    res.json({message:"hola mundo"})
}) 

app.listen(3000,()=>console.log('Server app'))