import express from 'express'
import { loginRouter } from './routes/login.js'
import passport from 'passport'
import './middlewares/google.js'

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use('/auth',passport.authenticate("auth-google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
    session:false
}),loginRouter )

const PORT = 3000
const server = app.listen(PORT,()=>console.log(`🔥 Corriendo en el puerto http://localhost:${PORT}`))
server.on('error',()=>console.log('error'))

app.get('/',(req,res)=>{
    res.send('Servidor corriendo')
})