/* Imports */
import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'
import path from 'path'
const app = express()

/* Session */
app.use(cookieParser())
app.use(session({
    secret:'1234567890!@#$%^&*()',
    resave:false,
    saveUninitialized:false,
    cookie: {
        maxAge:60000 
    }
}))

/* motor de plantillas */
app.set('view',path.join(path.dirname(''),'.src/views'))
app.engine('hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

/////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended:true}))
app.use(express. json())

/* middlewares */


/* Rutas */
app.get('/',(req,res)=>{
    res.send('function 👩‍🎓')
})
app.get('/login',(req,res)=>{
    res.render ('login')
})

 
/* Levantamos servidor */
const PORT = 3030
const server= app.listen(PORT, ()=>console.log(`👽 Corriendo en http://localhost:${PORT}`))
server.on('error',error=>console.log(`Error en el servidor ${error}`))
