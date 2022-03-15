const http = require('http')
const moment = require('moment')

const server = http.createServer((peticion,respuesta)=>{
    respuesta.end('hola mundo')
})
const connectedServer =server.listen(8080,()=>{
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port} ${buenas()}`);
})

const horaActual = moment().format('HH')

const buenas =()=>{
    if(horaActual >=6 && horaActual<=12){
        return('Buenos días')
    }else if(horaActual >=13 && horaActual<=19){
        return('Buenas tardes!')
    }else{
        return('Buenas noches!')
    }
}
console.log(horaActual);
//minuto 26