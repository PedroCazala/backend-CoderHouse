import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret:'secreto',
    resave:true,
    saveUninitialized:true
}))

app.get('/con-session',(req,res)=>{
     if(req.session.contador){
         req.session.contador++;
         res.send(`Usted ha visitado el sitio ${req.session.contador} veces.`)
     }else{
         req.session.contador = 1
        res.send(`Bienvenido`)
     }
})
app.delete('/logout',(req,res)=>{
     req.session.destroy(err=>{
         if(!err){
             res.send('Logout OK')
         }else{
             res.send({status:'logout filed',body:err})
         }
     })
})








const PORT = 3000
const server = app.listen(PORT,()=>{
    console.log(`🔥 Corriendo en http://localhost:${server.address().port}`);
})
server.on('error',err=> console.log(err.message,'🤯Fallo el servidor'))