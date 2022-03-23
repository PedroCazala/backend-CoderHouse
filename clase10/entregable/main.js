const express = require('express')
const app =express()
const {Router} =express
const router = Router

const handlebars = require('express-handlebars')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('hbs',handlebars.engine({
    extname:'.hbs',
    defaultLayout:'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

const PORT =8080
const server = app.listen(PORT,()=>{
    console.log(`Escuchando al servidor en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
app.use('/api/productos', router)
let productos=[
    {
        id:1,
        title:'plasticola',
        price:123,
        thumbnail: 'imagen'
    },
    {
        id:2,
        title:'Goma',
        price:123,
        thumbnail: 'imagen'
    },
    {
        id:3,
        title:'Tijera',
        price:123,
        thumbnail: 'imagen'
    },
]

app.set('view engine','hbs')
app.set('views','./views')

app.route('/productos')
    //TRAER TODOS LOS PRODUCTOS
    .get((req,res)=>{
        res.render('form',productos)
    })
    //AGREGAR UN NUEVO PRODUCTO
    .post((req,res)=>{
        const nuevoProducto = req.body
        const id = productos.length + 1
        // la idea es que si por ej se borra el prod con id 2 se le asigne ese id al proximo prod a agragar
        // for(let i = 1;i < productos.length;i++){
            
        //     const idOpcionB = i
        // }
        productos.push({id,...nuevoProducto})
        res.render('form',productos)
        // res.send({
        //     nuevoProducto,
        //     productos
        // })
    }) 

app.route('/producto')
    //BUSCAR PRODUCTO POR ID
    .get((req,res)=>{
        const id = req.query.id
        const producto = productos.find(prod =>prod.id == id)
        !producto ? 
        res.send({ error : 'producto no encontrado' })
        :
        res.send(producto)

    })
    //modificar, ta funciona en postman
    .put((req,res)=>{
        const id = req.query.id
        const productoModificado = req.body
        const producto = productos.find(prod =>prod.id == id)
        const indice = productos.indexOf(producto) 
        productos[indice] = productoModificado
        console.log('id',id);
        console.log('indice',indice);

        !producto ? 
            res.send({ error : 'producto no encontrado' })
        :
            res.send({producto,productos})
    })
    // Borrar, ya funciona en postman
    .delete((req,res)=>{
        const id = parseInt(req.query.id)
        const producto = productos.find(prod =>prod.id == id)
        productos = productos.filter(prod => prod.id !== id)
        console.log(productos)
        !producto ? 
        res.send({ error : 'producto no encontrado' })
        :
        res.send({
            productoBorrado:producto,
            productos
        })
    })

