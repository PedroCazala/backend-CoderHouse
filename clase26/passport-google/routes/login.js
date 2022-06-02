import {Router} from 'express'

const loginRouter = Router()

loginRouter.get('/google',(req,res)=>res.send(`
    <h1>Hola ${req.user.displayName}</h1>
    <img src=${req.user.photos[0].value}>
    <div>${JSON.stringify(req.user)}</div>
`))

export {loginRouter}