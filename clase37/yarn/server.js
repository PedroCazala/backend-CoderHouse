const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Yarn')
})

app.listen(3000,()=>{console.log('Corriendo en http://localhost:3000');})