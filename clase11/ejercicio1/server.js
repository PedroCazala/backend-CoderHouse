const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))
// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

// El servidor funcionando en el puerto 3000
httpServer.listen(3000, () => console.log('SERVER ON'))
const mensajes = []
io.on('connection',(socket)=>{
    //"conection" se ejecuta la primera vez qie se abre una nueva conección
    console.log('!Nuevo cliente conectado!')
    //Se implementará solo la primera vez que se ha abierto la conección
    socket.emit('mi mensaje','Este es mi mensaje desde el servidor')
    socket.on('notification',data=> console.log(data))

    // socket.on('inputText',text=>{
    //     // console.log(text)
    //     io.sockets.emit('newText',text)
    // })
    socket.on('saveMessaje',text=>{
        mensajes.push(text)
        io.sockets.emit('newMessaje', mensajes)
        console.log(mensajes)
    })
})

//1:51
