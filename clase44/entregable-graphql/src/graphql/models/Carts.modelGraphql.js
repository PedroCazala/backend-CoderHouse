import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from "graphql";
import { ProductType } from "./Products.modelGraphql.js";

const CartType = new GraphQLObjectType({
    name: "Cart",
    description: "Cart type",
    fields: () => ({
        _id: { type: GraphQLID },
        id: { type: GraphQLID },
        products: { type: new GraphQLList(ProductType)},
        date: { type: GraphQLString },
    }),
});

export{CartType}