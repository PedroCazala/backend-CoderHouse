import express from 'express';
import { Server as HttpServer} from 'http' 
import {Server as IOServer} from 'socket.io'
import { Routes } from './src/routes/routes.js';
import './src/containers/mongo/mongo.js'
// const { Server: HttpServer } = require("http");
// const { Server: IOServer } = require("socket.io");

import cookieParser from 'cookie-parser';
import session from 'express-session';

import passport from 'passport';
import {configuration} from './config.js'
// import { options } from './options/mariaDB.js';
// import {knex} from knex
// knex(options)

// const { options } = require("./options/mariaDB.js")
// const  knex  = require('knex')(options)


export const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//pasar por argumento el puerto
import parseArgs from 'minimist';
export const args = parseArgs(process.argv.slice(2))

//Modo cluster o fork
import {mode} from './modo.js'
mode()

//Server
const PORT = args.port ||8080 /* configuration.PORT */
const server = httpServer.listen(PORT,()=>{console.log(`🔥Escuchando puerto http://localhost:${server.address().port}`)})
server.on('error', error => console.log(`Error en el servidor ${error}`))

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
    // store: MongoStore,
    secret: 'dfafasf',
    resave: false,
    saveUninitialized:false
}))
app.use(passport.initialize())                              
app.use(passport.session())
import './src/passport/passport-local.js'
app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static('./public'));
export let products = [];

//gzip
import compression from 'compression'
app.use(compression())


//routes
app.use('/',allRoutes,new Routes())

// logs
import { allRoutes, logs } from './logs/logs.js';
logs()

// const getProducts = async ()=>{
//     try{
//         products = 
//         await knex
//             .from('products')
//             .select('id', 'title', 'price','img')
//     }catch{
//         await knex.schema.createTable('products', (table) => {
//             table.increments('id')
//             table.string('title')
//             table.float('price')
//             table.string('img')
//             })
//         console.log('la tabla no existía, asi que se creó');
//     }
// }
// getProducts()

// const updateProducts = async()=>{
//     try{
//         await knex('products').del();
//         await knex('products').insert(products)

//         console.log('Se actualizó la tabla "products" ');
//     }catch(err){
//         console.log('entro al catch');
//         console.log(err);
//     }
// }

export let messages = [];
// const getMessages = async ()=>{
//     try{
//         messages = 
//         await knex
//             .from('messages')
//             .select('id', 'mail', 'text','date')
//     }catch{
//         await knex.schema.createTable('messages', (table) => {
//             table.increments('id')
//             table.string('mail')
//             table.string('text')
//             table.string('date')
//             })
//         console.log('la tabla "messages" no existía, asi que se creó');
//     }
// }
// getMessages()

// const updateMessages = async()=>{
//     try{
//         await knex('messages').del();
//         await knex('messages').insert(messages)

//         console.log('Se actualizó la tabla "messages" ');
//     }catch(err){
//         console.log('entro al catch "messages" ');
//         console.log(err);
//     }
// }


io.on("connection", function (socket) {
    socket.on("newProduct", (newProducto) => {
        const id = products.length + 1
        products.push({id,...newProducto})
        io.sockets.emit("products", products);
    });
    socket.on('newMessage',(newMessage)=>{
        const id = messages.length + 1
        messages.push({id,...newMessage})
        io.sockets.emit("chat", messages);
    })
})
