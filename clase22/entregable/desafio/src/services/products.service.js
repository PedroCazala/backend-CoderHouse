import generateProduct from "../utils/products.utils.js";
import { products } from "../../server.js";

export default class productService{
    constructor(){
        this.products =[]
    }
    async createProducts(cant = 5) {
        try {
            this.products = []; // Esto me rompe el código
            for (let i = 0; i < Number(cant); i++) {
              let product = generateProduct();
              product.id = i + 1;
              this.products.push(product);
            }
            this.lastId = cant;
            return this.products;
        } catch (error) {
            console.log(error,'entro al catch en products.service');
        }
    }
}