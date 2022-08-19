import { Router } from "../../deps.ts"
import { ProductsHandlers } from "../handlers/products.handlers.ts"

export const productsRouter = new Router()
.get("/api/productos", ProductsHandlers.getAll)
.get("/api/productos/:productId", ProductsHandlers.getOneProductsById)
.post("/api/productos", ProductsHandlers.pushProduct)
.put("/api/productos/:productId", ProductsHandlers.updateProduct)
.delete("/api/productos/:productId", ProductsHandlers.delateProduct)
// (ctx:Context)=>{
//     ctx.response.body ={hola:'mundo de productos'}
// }
// )