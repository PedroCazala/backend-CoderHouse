import express from "express";
import productController from '../controllers/products.controller.js'


export class Routes extends express.Router{
    constructor(){
        super()
        this.productController = new productController();
        
        //muestra la vista login
        this.get('/login',this.productController.loginView)

        // this.get('/',this.productController.login)
        //cuando va desde login a index 
        this.post('/',this.productController.login)
        //cuando abro sin logueo
        this.get('/',this.productController.index)
        //eliminar la session
        this.get('/logout',this.productController.logout)
        //faker que genera productos
        this.get("/api/productos-test/:cant?", this.productController.createProducts);
    }
}