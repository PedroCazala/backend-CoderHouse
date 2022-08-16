import { Context, Router } from "../../deps.ts"

export const productsRouter = new Router()
.get("/api/productos",(ctx:Context)=>{
    ctx.response.body ={hola:'mundo de productos'}
})