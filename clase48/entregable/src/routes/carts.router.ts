import { Router } from "../../deps.ts"
import { CartsHandlers } from "../handlers/carts.handlers.ts"

export const cartsRouter = new Router()
    .post("/api/carrito",CartsHandlers.createCart)
    .delete("/api/carrito/:id",CartsHandlers.deleteCart)
    .get("/api/carrito/:id",CartsHandlers.getACart)
    .get("/api/carrito/:id/productos",CartsHandlers.getProductsOfACart)