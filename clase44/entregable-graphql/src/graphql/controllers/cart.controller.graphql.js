import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { CartsServices } from "../../services/carts.services.js";
import { CartType } from "../models/Carts.modelGraphql.js";

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