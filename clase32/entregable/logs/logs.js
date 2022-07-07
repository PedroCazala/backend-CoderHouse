
import { app } from '../server.js'
import { loggerWarn, logger } from './log4js.js'

export const logs = ()=>{
    app.get('*',(req,res)=>{
        const ruta = req.path
        const metodo = req.method

        loggerWarn.warn(`Intento de ingreso a ruta inexistente ${ruta} y el metodo es: ${metodo}`)
        res.send(`ruta inexistente ${ruta}`)
    })
    app.post('*',(req,res)=>{
        const ruta = req.path
        const metodo = req.method

        loggerWarn.warn(`Intento de ingreso a ruta inexistente ${ruta} y el metodo es: ${metodo}`)
        res.send(`ruta inexistente ${ruta}`)
    })
}

//middelware
export const allRoutes = (req,res,next)=>{
    const ruta = req.path
    const metodo = req.method
    logger.info(`Ingreso a ruta: ${ruta} y el metodo es: ${metodo}`)
    next()
}

