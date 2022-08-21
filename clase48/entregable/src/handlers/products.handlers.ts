import { helpers } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { Context } from "../../deps.ts";
import { newId } from "../newId.ts";
import { Product } from "../types/product.types.ts";
const Products: Product[] = [
    {
        date: "21/8/2022, 10:13:27",
        name: "Cuadernillo",
        description: "Puedes escribir en mí",
        código: "123456789",
        img: "https://cdn1.iconfinder.com/data/icons/space-flat-galaxy-radio/512/meteorite-256.png",
        price: 65000,
        stock: 155,
        id: 1,
    },
    {
        id: 0,
        date: "21/8/2022, 10:13:27",
        name: "Goma",
        description: "Es para escribir",
        código: "123456789",
        img: "https://abanicobazar.com/wp-content/uploads/2018/01/74d33e80-1c82-4e80-aab3-c56a5f675485.jpg",
        price: 45000,
        stock: 30,
    },
    {
        id: 2,
        date: "21/8/2022, 10:13:27",
        name: "Lapicera",
        description: "Es para escribir",
        código: "123456789",
        img: "https://abanicobazar.com/wp-content/uploads/2018/01/74d33e80-1c82-4e80-aab3-c56a5f675485.jpg",
        price: 34,
        stock: 30,
    },
];

export class ProductsHandlers {
    static async getAll(ctx: Context) {
        ctx.response.body = await Products;
        // return Products
    }

    static async getOneProductsById(ctx: Context) {
        const { productId } = helpers.getQuery(ctx, { mergeParams: true });
        console.log(productId);
        const product = await Products.find(
            (prod: Product) => prod.id == parseInt(productId)
        );
        ctx.response.body = product;
        // return product
    }

    static async pushProduct(ctx: Context) {
        const idProd: number = newId(Products);
        const newProduct = await ctx.request.body().value;
        const date = new Date().toLocaleString();
        const product: Product = { id: idProd, ...newProduct, date };
        console.log("product", product);

        Products.push(product);
        ctx.response.body = {
            message: "Producto agregado",
            productoAgregado: product,
        }
    }
    static async updateProduct(ctx: Context) {
        const { productId } = helpers.getQuery(ctx, { mergeParams: true });
        const oldProduct: Product = Products.find(
                (prod: Product) => prod.id == parseInt(productId)
            );
            console.log("oldProduct", oldProduct);
            
        const newProduct: Product = {...await ctx.request.body().value, date: oldProduct.date};
        const index = Products.indexOf(oldProduct);

        Products[index] = { ...newProduct, id: parseInt(productId) };
        ctx.response.body = {
            message: "Producto actualizado",
            antes: oldProduct,
            después: Products[index],
        };
    }
    static async delateProduct(ctx: Context) {
        const { productId } = helpers.getQuery(ctx, { mergeParams: true });
        const product: Product = Products.find(
            (prod) => prod.id == parseInt(productId)
        );
        const index = Products.indexOf(product);
        await Products.splice(index, 1);
        ctx.response.body = {
            message: "Producto eliminado",
            elProductoEliminadoFue: product,
        };
    }
}
