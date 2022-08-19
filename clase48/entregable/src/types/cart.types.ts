import { Product } from "./product.types.ts"
export interface Cart {
    uuid: string,
    products: Product[],
    date: string
}   