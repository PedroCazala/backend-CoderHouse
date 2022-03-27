const socket = io()

socket.on('mi mensaje', data=>{
    alert(data)
    socket.emit('notification','Mensaje recibido exitosamente')
})