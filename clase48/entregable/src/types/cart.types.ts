import { Product } from "./product.types.ts"
export interface Cart {
    id: number,
    products: Product[],
    date: string
}   