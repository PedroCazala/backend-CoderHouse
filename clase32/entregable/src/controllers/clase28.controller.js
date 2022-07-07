import {fork} from 'child_process'
import {cpus} from 'os'

const numCPUs = cpus().length

export default class {
    constructor(){

    }
     info(req,res){
        const info ={
            Argumentos_de_entrada:'NO ENTIENDO A QUE SE REFIERE',
            Path_de_ejecución:process.execPath,
            Nombre_de_la_plataforma_sistema_operativo: process.platform,    
            Process_id:process.pid,
            Versión_de_nodejs: process.version,
            Carpeta_del_proyecto: process.cwd(),
            Memoria_total_reservada_rss: process.memoryUsage(),
            numeros_de_procesadores:numCPUs
        }
        console.log(info)
        res.send(info)
    }

    randoms(req,res){
        const forked = fork('./src/controllers/subproceso.clase28.js')
        // forked.send('message',{number:req.query.number})
        forked.send(req.query.number||1e8)
        // forked.se 
        // console.log(sp1);

        forked.on('message',mens=>{
            res.send(mens)
        })
    }
}