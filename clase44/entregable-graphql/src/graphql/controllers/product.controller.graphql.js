import {
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";
import { ProductsService } from "../../services/products.services.js";
import { ProductType } from "../models/Products.modelGraphql.js";


const getProducts = {
    type: new GraphQLList(ProductType),
    description: "return a list of products",
    resolve: async () => {
        const productos = await ProductsService.getAllProducts();
        return productos;
    },
};
const getOneProduct = {
    type: ProductType,
    description: "return a list of products",
    args:{
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (_,{id}) => {
        const product = await ProductsService.getOneProductsById(id)
        return product;
    }
};
const saveProduct = {
    type: ProductType,
    description: "Create a new product",
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        codigo: { type: new GraphQLNonNull(GraphQLString) },
        img: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        stock: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: async (_, { name, description, codigo, img, price, stock }) => {
        const date = new Date();
        const product = await ProductsService.pushProduct({
            name,
            description,
            código:codigo,
            img,
            price,
            stock,
            date,
        });
        return product;
    },
};
const updateProduct = {
    type: ProductType,
    description: "Create a new product",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        codigo: { type: new GraphQLNonNull(GraphQLString) },
        img: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        stock: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: async (_, { id, name, description, codigo, img, price, stock }) => {
        const date = new Date();
        const product = await ProductsService.updateProduct(id,date,{
            name, description, código:codigo, img, price, stock,
        })
        return product;
    },
}

const deleteProduct = {
    type: ProductType,
    description: "Delate a product",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: async (_, { id }) => {
        const product = await ProductsService.delateProduct(id);
        return product;
    }
}
const ProductController = {
    mutations: {
        saveProduct,
        updateProduct,
        deleteProduct,
    },
    queries: {
        getProducts,
        getOneProduct,
    },
};

export { ProductController };
