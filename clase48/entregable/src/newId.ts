import { Cart } from "./types/cart.types.ts";
import { Product } from "./types/product.types.ts";

export const newId= (products:Product[]):number =>{
    const arraysIds = products.map(prod =>prod.id).sort((a,b)=>a-b)
    let generatedId=0;
    for(let i=1 ; i <= products.length; i++){
        const id = arraysIds.find(element => element == i)
        if(!id){
            generatedId =i
        }
    }
    return generatedId
}
export const newIdCart= (carts:Cart[]):number =>{
    const arraysIds = carts.map(prod =>prod.id).sort((a,b)=>a-b)
    let generatedId=0;
    for(let i=1 ; i <= carts.length; i++){
        const id = arraysIds.find(element => element == i)
        if(!id){
            generatedId =i
        }
    }
    return generatedId
}