const express =require('express')
const app =express()

const PORT =8080
const server =app.listen(PORT,()=>{console.log(`El servidor escuchando el puerto n° ${server.address().port}`)})
server.on('error', error => console.log(`Error en el servidor ${error}`))

app.use('/static',express.static(__dirname+'/public'))

//ya ví la primera hora