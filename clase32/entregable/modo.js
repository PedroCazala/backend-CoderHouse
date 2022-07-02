import {args} from './server.js'
import {fork} from 'child_process'
import cluster from 'cluster'
import { cpus } from 'os'
export const mode = () => {
    console.log('args : ',args);
    console.log('args modo: ',args.modo);
    const modo = args.modo/* .toUpperCase() */|| false
    if (modo == 'CLUSTER') {
        const numCPUs = cpus().length

        if(cluster.isMaster){
            console.log('es master');
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork()
            }
            cluster.on('exit',(worker,code,signal) => {
                console.log(`Worker is died ${worker.process.pid}`);
            })
        }else{
            console.log('NO es master',process.pid);
        }

        // console.log({numCPUs});
        // console.log({modo, mensaje:'entro a modo cluster'});

    } else if(modo == 'FORK'|| !modo){
        console.log({modo, mensaje:'entro a modo fork'});
        const forked = fork('proceso_hijo.js')
        forked.on('message',msg=>{
            console.log(`Ejecutando en FORK desde un child-process el mensaje que llega ${msg.mensaje}, mientras que el pid de mi padre es ${process.pid}`);
        })
    }else{
        console.log(`El valor de modo debe ser cluster o fork ${modo}, no es válido`);
    }
}