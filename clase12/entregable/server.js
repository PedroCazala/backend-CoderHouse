const express = require('express')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const fs =require('fs')


const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const PORT = 8080
const server = httpServer.listen(PORT,()=>{console.log(`Escuchando puerto ${server.address().port}`)})
server.on('error', error => console.log(`Error en el servidor ${error}`))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('index',{products})
})

app.use(express.static(__dirname + '/public'));

const fileProducts = './productos.txt'
let products;
const getProducts = ()=>{
    try{
        products = fs.readFileSync(fileProducts,'utf-8')
        products = JSON.parse(products)
    }catch{
        fs.writeFileSync(fileProducts,'[]')
    }
}
getProducts()

const update = ()=>{
    products = JSON.stringify(products)
    fs.writeFileSync(fileProducts,products)

}



console.log(products);


io.on("connection", function (socket) {
    console.log("Un cliente se ha conectado");
    socket.on("newProduct", (newProducto) => {
        const id = products.length + 1
        products.push({id,...newProducto})
        console.log(products);
        update()
        io.sockets.emit("products", products);
    });
})
