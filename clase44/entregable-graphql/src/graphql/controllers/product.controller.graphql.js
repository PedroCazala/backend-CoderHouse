import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";
import { ProductsService } from "../../services/products.services.js";
import { ProductType } from "../models/Products.modelGraphql.js";
const Productos = [
    { name: "prod1", price: 23 },
    { name: "prod2", price: 34 },
];
const devolverProductos = () => {
    return Productos;
};

const getProducts = {
    type: new GraphQLList(ProductType),
    description: "return a list of products",
    resolve: async () => {
        const productos = await ProductsService.getAllProducts();
        return productos;
    },
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
        const product = await ProductsService.pushProduct({
            name,
            description,
            código:codigo,
            img,
            price,
            stock,
        });
        return product;
    },
};
const ProductController = {
    mutations: {
        saveProduct,
    },
    queries: {
        getProducts,
    },
};

export { ProductController };
