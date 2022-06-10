export default class infoController{
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
        res.send(info/* ,process.env */)
      }
}