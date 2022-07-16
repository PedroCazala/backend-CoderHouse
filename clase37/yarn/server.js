const express = require('express')
const app = express()
const {suma,resta,mul ,div} =require('funcionesmatematicasbasicas')

app.get('/', function (req, res) {
  res.send(`Hello Yarn`)
})
app.get('/operaciones', function (req, res) {
  const {num1,num2} = (req.query)
  res.send(`
  ${num1} + ${num2} = ${suma(parseInt(num1),parseInt(num2))}  ||  
  ${num1} - ${num2} = ${resta(parseInt(num1),parseInt(num2))}  ||  
  ${num1} * ${num2} = ${mul(parseInt(num1),parseInt(num2))}  ||  
  ${num1} / ${num2} = ${div(parseInt(num1),parseInt(num2))}
  `)
})

app.listen(3000,()=>{console.log('Corriendo en http://localhost:3000');})