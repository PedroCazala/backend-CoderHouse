import { Context, helpers } from "../../deps.ts";
import { newIdCart } from "../newId.ts";
import {Cart} from "../types/cart.types.ts"
const Carts: Cart[] = []

export class CartsHandlers {
    static createCart(ctx: Context) {
        const cart = {products:[], date: new Date().toLocaleString()}
        const newCart: Cart = {...cart,id:newIdCart(Carts)}
        Carts.push(newCart)
        ctx.response.body = {
            message: "Carrito creado",
            cart: newCart,
        };
    }
    static deleteCart(ctx: Context) {
        const { id } = helpers.getQuery(ctx, { mergeParams: true });
        const cart :Cart = Carts.find(cart=>cart.id ==parseInt(id))
        const index=Carts.indexOf(cart)
        Carts.splice(index,1)
        ctx.response.body = {
            message: "Carrito eliminado",
            cart: cart,
        };
    }
    static async getACart(ctx: Context) {
        const { id} = helpers.getQuery(ctx, { mergeParams: true });
        const cart: Cart = await Carts.find(cart=>cart.id == parseInt(id))
        if (cart) {
            ctx.response.body = {
                message: "Productos encontrados",
                products: cart,
            }
        } else {
            ctx.response.body = {
                message: "Carrito no encontrado",
            };
        }
    }
    static async getProductsOfACart(ctx: Context) {
        const { id} = helpers.getQuery(ctx, { mergeParams: true });
        const cart: Cart = await Carts.find(cart=>cart.id == parseInt(id))
        if (cart) {
            ctx.response.body = {
                message: "Productos encontrados",
                products: cart.products,
            }
        } else {
            ctx.response.body = {
                message: "Carrito no encontrado",
            };
        }

    }

    // static async addProductToCart(product,idCart){
    //     try {
    //         const cart = await this.getACart(idCart)
    //         const update = cart.products.push(product)
    //         return update
    //     } catch (error) {
    //         logger.info('entro al catch');
    //         logger.info(error);
    //     }
    // }
    // static async deleteAProduct(idCart,idProduct){
    //     const cart = await this.getACart(idCart)
        
    //     let indexCart = Carts.indexOf(cart)
    //     let product = Carts[indexCart].products.find(prod =>prod.id ==idProduct)
    //     let indexProduct = cart.products.indexOf(product)

    //     const deleted = await Carts[indexCart].products.splice(indexProduct,1)
    //     return deleted
    // }
}