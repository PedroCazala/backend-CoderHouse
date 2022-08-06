import { GraphQLList } from "graphql";
import { ProductsService } from "../../services/products.services.js";
import { ProductType } from "../models/Products.modelGraphql.js";
const Productos = [{name:'prod1',price:23},{name:'prod2',price:34}]
const devolverProductos = () => { return Productos }

const getProducts ={
    type: new GraphQLList(ProductType),
    description: "return a list of products",
    resolve: async () =>{
        const productos = ProductsService.getAllProducts()
        // await devolverProductos()
        return productos
    }
}

const ProductController = {
    mutation:{},
    queries:{
        getProducts,
    }
}

export {ProductController};