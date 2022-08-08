import { graphql,buildSchema, GraphQLObjectType, GraphQLSchema } from 'graphql'
import { CartController } from './controllers/cart.controller.graphql.js';
import {ProductController} from './controllers/product.controller.graphql.js'

// const schema = buildSchema(`
//     type Product {
//         name: String,
//         price: Int
//     }
//     type Query {
//         hello: String,
//         bye:String,
//         getProducts(campo: String, valor: String): [Product],
//     }
// `);

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        ...ProductController.mutations,
        ...CartController.mutations
    }
})
const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: "Queries",
    fields: {
        ...ProductController.queries,
        ...CartController.queries
    }
})
const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

export{schema}