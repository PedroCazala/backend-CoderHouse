import {args} from './server.js'
import {fork} from 'child_process'

export const mode = () => {
    const modo = args.modo.toUpperCase()|| false
    if (modo == 'CLUSTER') {
        console.log({modo, mensaje:'entro a modo cluster'});
    } else if(modo == 'FORK'|| !modo){
        console.log({modo, mensaje:'entro a modo fork'});
        const forked = fork('proceso_hijo.js')
        forked.on('message',msg=>{
            console.log(`Ejecutando en FORK desde un child-process el mensaje que llega ${msg.mensaje}`);
            // console.log(msg.msg);
        })
        // forked.send({mensaje:'Ejecutando en FORK desde un child-process'})
        // console.log(forked);
    }else{
        console.log(`El valor de modo debe ser cluster o fork ${modo}, no es válido`);
    }
}