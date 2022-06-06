import express from "express";
import passport from "passport";
import { UserModel } from "../containers/mongo/models/user.js";
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

        this.get('/register',this.productController.registerView)

        this.post('/login',passport.authenticate('local-login',{
            successRedirect:'/',
            failureRedirect:'/login',
            passReqToCallback:true
        }) )
        this.post('/register', passport.authenticate('local-signup',{
            successRedirect:'/profile',
            failureRedirect:'/register',
            passReqToCallback:true
        }))

        this.get("/profile",async(req,res)=>{
            let user = '😁'
            if(req.session.passport){
                user = await UserModel.find({_id:req.session.passport.user},{email:1})
            }
            
            res.send({profile:user})
        })
    }
}