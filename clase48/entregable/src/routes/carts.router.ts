import { Context, Router } from "../../deps.ts"

export const cartsRouter = new Router()
    .get("/api/carritos",(ctx:Context)=>{
        ctx.response.body ={hola:'mundo de carritos'}
    })