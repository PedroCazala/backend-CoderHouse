const socket = io()

socket.on('mi mensaje', data=>{
    console.log(data)
    socket.emit('notification','Mensaje recibido exitosamente')
})

const inputText = document.getElementById('inputText')
const realTimeText = document.getElementById('realTimeText')
const btnSend = document.getElementById('btnSend')

// inputText.addEventListener('keyup', e => {
//     socket.emit('inputText', e.target.value)
// })

btnSend.addEventListener('click',()=>{
    socket.emit('saveMessaje',{
        socketId:socket.id, mensaje:inputText.value
    })
    inputText.value=''
})


// socket.on('newText',text=>{
//     realTimeText.innerText=text
// })
socket.on('newMessaje',mensajes=>{
    realTimeText.innerText=''
    mensajes.forEach(text => {
        realTimeText.innerHTML += `<p>ShokedId:${text.socketId} => ${text.mensaje}</p>`
    })
})