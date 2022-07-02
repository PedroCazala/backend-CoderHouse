import express from 'express'
import { logger } from './log4js.js'


const app = express()
app.listen(9090,()=>console.log(`corriendo en http://localhost:9090`))

const myLogger =(req,res,next)=>{

}

app.get('/sumar',(req,res)=>{
    const {num1,num2} =req.query
    const suma = parseInt(num1) +parseInt(num2) 
    if(isNum(num1) || insNum(num2)){
        logger.error('query no ingresada')
    }else if(suma){
        logger.info(suma)
    }
    res.send(`Hola, ${suma}`)
})

app.get('*',(req,res) => { 
    logger.warn('ruta no encontrada')
    res.send('ruta no encontrada')
})
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");
