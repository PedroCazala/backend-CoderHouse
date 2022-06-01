/* Imports */
import express, { query } from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'
import path from 'path'

import passport from 'passport'
import  {Strategy } from 'passport-local' 
const L ocalStrategy =Strategy 

const app = express()


/* Passport */
passport.use(new LocalStrategy(
    function(username, password, done) {
        // Validae ai existe el usurario 
        const usuario = usuariosDB.find(usuario=>usuario.nombre == username )
        if(!usuario){
            console.log('Usuario no existe');
            return done(null,false)
       }else{
           if (usuario.password != password) {
               console.log('Credenciales incorrectas')
               return done(null,false) 
           }else{
               return done(null,usuario)
           }
       }
    }
));
passport.serializeUser(function(usuario, done) {
        done(null, usuario.nombre );
    });
  
passport.deserializeUser(function(nombre , done) {
    const usuario = usuariosDB.find(usuario=>usuario.nombre == username )
    done(null,usuario )
});

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
app.set('views',path.join(path.dirname(''),'./src/views'))
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

/* Bases de datos */
 const usuariosDB = []
/* Rutas */
app.get('/',(req,res)=>{
    res.redirect('/login')
})
app.get('/login',(req,res)=>{
    res.render ('login')
})
app.get('/registro',(req,res)=>{
    res.render ('registro')
})
app.get('/login-error',(req,res)=>{
    console.log('Usuario ne existe');
     res.render('login-error')
})
app.post('/login',/* esta parte falta llenar como el profe */)
 
app.post('/registro',(req,res)=>{
    const {nombre,password,direccion} =req.body
    const usuario = usuariosDB.find(usuario=>usuario.nombre == nombre)
    if(usuario){
        res.render('registro-error')
    }else{
        usuariosDB.push({nombre,password,direccion} )
        console.log(usuariosDB );
        res.redirect('/login')
    }

})

app.get('/logout', (req,res)=>{
    req.session.destroy()
    res.redirect('/')
})
app.get('/datos', (req,res)=>{
    if(req.session.nombre){
        req.session.contador++
        const usuario  = usuariosDB.find(usuario=>usuario.nombre == req.session.nombre )
        res.render('datos',{datos:usuario,contador:req.session.contador})
    }else{
        res.redirect('/login')
    }
})

 
/* Levantamos servidor */
const PORT = 3030
const server= app.listen(PORT, ()=>console.log(`👽 Corriendo en http://localhost:${PORT} 🔥`))
server.on('error',error=>console.log(`Error en el servidor ${error}`))
