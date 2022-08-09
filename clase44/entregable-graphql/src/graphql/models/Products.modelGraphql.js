// import { buildSchema } from "graphql";

// class Product {
//     constructor(id, { name, description,código, img,price,stock,date }) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.código = código;
//     this.img = img;
//     this.price = price;
//     this.stock = stock;
//     this.date = date;
//     }
// }

// const schema = buildSchema(`
//     type Product {
//         id: ID!
//         name: String,
//         description: String,
//         código: String,
//         img: String,
//         price: Float,
//         stock: Int
//     }
//     input ProductInput {
//         name: String,
//         description: String,
//         código: String,
//         img: String,
//         price: Float,
//         stock: Int
//     }
//     type Query {
//         getProduct(id: ID!): Product,
//         getProducts(campo: String, valor: String): [Products],
//     }
//     type Mutation {
//         createProduct(datos: ProductInput): Product
//         updateProduct(id: ID!, datos: ProductInput): Product,
//         deleteProduct(id: ID!): Product,
//     }
// `)  ;
// 
// export { Product, schema };
import {
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
  
  
  const ProductType = new GraphQLObjectType({
    name: "Product",
    description: "Product type",
    fields: () => ({
        _id: { type: GraphQLID },
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        img: { type: GraphQLString },
        price: { type: GraphQLFloat },
        stock: { type: GraphQLInt },
        codigo: { type: GraphQLString },
        date: { type: GraphQLString },
    }),
  });
  
  export { ProductType };