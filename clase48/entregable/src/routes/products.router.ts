import { Router } from "../../deps.ts"
import { ProductsHandlers } from "../handlers/products.handlers.ts"

export const productsRouter = new Router()
.get("/api/productos", ProductsHandlers.getAll)
.get("/api/productos/:productId", ProductsHandlers.getOneProductsById)
.post("/api/productos", ProductsHandlers.pushProduct)
// (ctx:Context)=>{
//     ctx.response.body ={hola:'mundo de productos'}
// }
// )