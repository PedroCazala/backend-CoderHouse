import { helpers } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { Context } from "../../deps.ts"
import { newId } from "../newId.ts";
import { Product } from "../types/product.types.ts"
const Products: Product[] =[
    {
        "date": 1659125104010,
        "name": "Cuadernillo",
        "description": "Puedes escribir en mí",
        "código": "123456789",
        "img": "https://cdn1.iconfinder.com/data/icons/space-flat-galaxy-radio/512/meteorite-256.png",
        "price": 65000,
        "stock": 155,
        "id": 1
    },
    {
        "id": 0,
        "date": 1659125091278,
        "name": "Goma",
        "description": "Es para escribir",
        "código": "123456789",
        "img": "https://abanicobazar.com/wp-content/uploads/2018/01/74d33e80-1c82-4e80-aab3-c56a5f675485.jpg",
        "price": 45000,
        "stock": 30
    },
    {
        "id": 2,
        "date": 1659125096749,
        "name": "Lapicera",
        "description": "Es para escribir",
        "código": "123456789",
        "img": "https://abanicobazar.com/wp-content/uploads/2018/01/74d33e80-1c82-4e80-aab3-c56a5f675485.jpg",
        "price": 34,
        "stock": 30
    }
]

export class ProductsHandlers{
    static async getAll(ctx: Context){
        ctx.response.body = await Products
        // return Products
    }

    static async getOneProductsById(ctx: Context){
        const {productId} = (helpers.getQuery(ctx, { mergeParams: true }));
        console.log(productId);
        const product = await Products.find((prod:Product) =>prod.id == parseInt(productId))
        ctx.response.body = product
        // return product
    }

    static async pushProduct(ctx: Context){
        const idProd:number = newId(Products)
        const newProduct:Product = await ctx.request.body().value;
        const product = {id:idProd,...newProduct}
        console.log('product',product);
        
        Products.push(product)
        return product
    }
    // static async updateProduct(id, newProduct){
    //     const oldProduct = Products.find(prod=>prod.id ==id)
    //     const index = Products.indexOf(oldProduct)
    //     Products[index] = {...newProduct,id}
    // }
    // static async delateProduct(id){
    //     const product = Products.find(prod=>prod.id ==id)
    //     const index=Products.indexOf(product)
    //     Products.splice(index,1)
    // }
}