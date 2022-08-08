import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { CartsServices } from "../../services/carts.services.js";
import { CartType } from "../models/Carts.modelGraphql.js";
const Productos = [{name:'prod1',price:23},{name:'prod2',price:34}]
const devolverProductos = () => { return Productos }

const getACart = {
    type: CartType,
    description: "return a list of carts",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (_,{id}) =>{
        const cart = await CartsServices.getACart(id)
        return cart
    }
}

const CartController = {
    mutations:{
    },
    queries:{
        getACart,
    }
}

export {CartController};