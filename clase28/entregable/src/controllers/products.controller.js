import productService from "../services/products.service.js";
import { products,messages } from "../../server.js";
import { UserModel  } from "../containers/mongo/models/user.js";
import passport from "passport";

export default class productController{
    constructor(){
      this.productService= new productService()
        
      this.index = this.index.bind(this)
      this.createProducts =this.createProducts.bind(this)
    }
    
    registerView(req,res){
      try {
        res.render('register')
      } catch (error) {
        console.log(error, 'loginView en product controller')
      }
    }
    async register(req,res){
      try {
        const data = req.body
        console.log(data);
        UserModel.insertMany([data])
        res.send('se cargaron los datos de usuario')
      } catch (error) {
        console.log(error, 'loginView en product controller')
      }
    }

    async loginView(req,res){
      try {
        res.render('login')
      } catch (error) {
        console.log(error, 'loginView en product controller')
      }
    }
    async login(req,res){
      try {
        passport.authenticate('local', { failureRedirect: '/login' }),
        res.redirect('/');
        
      } catch (error) {
        console.log(error, 'index en product controller')
      }
    }
    async index(req,res){
      try {
        const products = this.productService.products

        let email = /* passport.deserializeUser()|| */ '😁'
        if(req.session.passport){
          email = await UserModel.find({_id:req.session.passport.user},{email:1})
          email=email[0].email
        }
        res.render('index',{products, messages,email})
      } catch (error) {
        console.log(error, 'index en product controller')
      }
    }
    async logout(req,res){
      try {
        const userName = req.session.nameUser
        // req.logout()
        req.session.destroy()
        res.render('logout',{userName})
      } catch (error) {
        console.log(error.message); 
      }
    }
    async redirectLogin(req,res){
      setTimeout(()=>res.redirect('/login'),5000)
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