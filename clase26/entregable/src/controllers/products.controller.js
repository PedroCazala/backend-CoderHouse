import productService from "../services/products.service.js";
import { products,messages } from "../../server.js";
import { UserModel } from "../containers/mongo/mongo.js";

export default class productController{
    constructor(){
      this.productService= new productService()
        
      this.index = this.index.bind(this)
      this.createProducts =this.createProducts.bind(this)
    }
    
    async loginView(req,res){
      try {
        res.render('login')
      } catch (error) {
        console.log(error, 'loginView en product controller')
      }
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
    async login(req,res){
      try {
        // const products = this.productService.products
        // console.log(this.productService.products)
        req.session.nameUser = req.body.nameUser

        const name = req.session.nameUser
        res.render('index',{products, messages,name})
      } catch (error) {
        console.log(error, 'index en product controller')
      }
    }
    async index(req,res){
      try {
        const products = this.productService.products

        const name =req.session.nameUser || '😁'
        res.render('index',{products, messages,name})
      } catch (error) {
        console.log(error, 'index en product controller')
      }
    }
    async logout(req,res){
      try {
        const userName = req.session.nameUser
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