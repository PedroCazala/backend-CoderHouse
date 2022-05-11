import productService from "../services/products.service.js";
import { products,messages } from "../../server.js";

export default class productController{
    constructor(){
      this.productService= new productService()
        
      this.index = this.index.bind(this)
      this.createProducts =this.createProducts.bind(this)
    }

    async index(req,res){
      try {
        const products = this.productService.products
        console.log(this.productService.products)
        res.render('index',{products, messages})
      } catch (error) {
        console.log(error, 'index en product controller')
      }
    }
    async createProducts(req,res){
        const {cant} = req.query
        try {
            const response = await this.productService.createProducts(cant);
            res.status(200).json({ products: response });
          } catch (error) {
            console.log(error);
          }
    }
}