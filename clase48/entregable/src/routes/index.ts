import { Router,Context} from "../../deps.ts";
import { productsRouter } from "./products.router.ts";
import { cartsRouter } from "./carts.router.ts";

const router = new Router()
    .get("/",(ctx:Context)=>{
        ctx.response.body ={hola:'mundo'}
    })
    // .get("*",(ctx:Context)=>{
    //     ctx.response.body ={message:'Esta pagina no existe'}
    // })


export {router,productsRouter,cartsRouter}