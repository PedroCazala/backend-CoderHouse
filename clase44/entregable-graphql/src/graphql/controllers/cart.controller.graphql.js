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

const createACart ={
    type: CartType,
    description: "Create a cart",
    resolve: async () =>{
        const create = await CartsServices.create()
        return create 
    }
}
const deleteACart ={
    type: CartType,
    description: "delete a cart",
    args:{
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (_,{id}) =>{
        const deleteACart = await CartsServices.delateCart(id)
        return deleteACart
    }
}

const addProductToCart ={
    type: CartType,
    description: "add a product to cart",
    args:{
        idCart: { type: new GraphQLNonNull(GraphQLID) },
        idProduct: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_,{idCart,idProduct}) =>{
        const addProductToCart = await CartsServices.addProductToCart(idCart,idProduct)
        const getACart = await CartsServices.getACart(idCart)
        return getACart
    }
}
const deleteAProductToCart ={
    type: CartType,
    description: "Delete a product from a cart",
    args:{
        idCart: { type: new GraphQLNonNull(GraphQLID) },
        idProduct: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_,{idCart,idProduct}) =>{
        await CartsServices.deleteAProducts(idCart,idProduct)
        const getACart = await CartsServices.getACart(idCart)
        return getACart
    }
}
const CartController = {
    mutations:{
        createACart,
        deleteACart,
        addProductToCart,
        deleteAProductToCart
    },
    queries:{
        getACart,
    }
}

export {CartController};