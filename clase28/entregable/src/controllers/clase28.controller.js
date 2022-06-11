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
        let objetoNumeros ={}
        //generar numeros
        for(let i =1; i < number;i++){
            let aleatorio =parseInt( Math.random() * (1000 - 1) + 1);
            generatedNumber.push(aleatorio);
        }
        //que numeros existe en el arreglo
        for(let i=1; i <=1000;i++){
            const numero = generatedNumber.filter((number == i)).length
            if(numero){
                objetoNumeros = {...objetoNumeros,i,numero} //{...objetoNumeros,numero:`${numero[0]} se repite ${numero.length()}`}
            }
        }

        res.send({number,objetoNumeros})
    }
}