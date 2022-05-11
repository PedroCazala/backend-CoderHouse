import express from "express";
import productController from '../controllers/products.controller.js'


export class Routes extends express.Router{
    constructor(){
        super()
        this.productController = new productController();
        

        this.get('/',this.productController.index)
        this.get("/api/productos-test/:cant?", this.productController.createProducts);
    }
}