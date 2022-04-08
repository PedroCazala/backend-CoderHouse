import express from 'express'
// import { app } from "../../server"

const {Router} = express
const router2 = Router()

router2.get('/lala',(req,res)=>{
    res.send(`ENTRO A ROUTER`)
})

module.exports = router2;
// app.use('/api', router)

// app.get('*',(req,res)=>{
//         const ruta =req.url
//         res.send({error:2, ruta,mensaje:`La ruta ${ruta}, no fué encontrada`})
//     })
