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
            Memoria_total_reservada_rss: process.memoryUsage()
        }
        res.send(info)
    }

    randoms(req,res){
        let number = req.query.number || 1e8
        const generatedNumber = []
        for(let i =1; i < number;i++){
            let aleatorio =parseInt( Math.random() * (1000 - 1) + 1);
            generatedNumber.push(aleatorio);
        }

        res.send({number})
    }
}