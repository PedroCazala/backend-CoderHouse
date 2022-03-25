// Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
// Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
// Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
// Ambas páginas contarán con un botón que redirija a la otra.

//express
const express = require('express')
const app =express()
const PORT =8080
const server = app.listen(PORT,()=>{
    console.log(`Escuchando al servidor en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))

const {Router} =express
const router = Router
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Configuración de handlebars
const handlebars = require('express-handlebars')

app.engine('hbs',handlebars.engine({
    extname:'.hbs',
    defaultLayout:'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine','hbs')
app.set('views','./views')

// app.use(express.static('public'))

let productos=[
    // {
    //     id:1,
    //     title:'plasticola',
    //     price:123,
    //     img: 'https://www.libreriasullivan.com.ar/thumb/000000000008-01232890008-012_800x800.jpg'
    // },
    // {
    //     id:2,
    //     title:'Goma',
    //     price:123,
    //     img: 'https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/moon-256.png'
    // },
    // {
    //     id:3,
    //     title:'Tijera',
    //     price:123,
    //     img: 'https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/rain-cloud-256.png'
    // },
]

app.get('/',(req,res)=>{
    res.render('form')
    // res.sendFile(__dirname + '/public/index.html')
})
app.route('/productos')
    //TRAER TODOS LOS PRODUCTOS
    .get((req,res)=>{
        productos[0] ?
            res.render('table',{productos})
        :
            res.send('No hay productos cargados <a href="/">Ir al formulario</a>')
    })
    //AGREGAR UN NUEVO PRODUCTO
    .post((req,res)=>{
        const nuevoProducto = req.body
        const id = productos.length + 1
        productos.push({id,...nuevoProducto})
        res.render('form',{productos})
        // res.send({
        //     nuevoProducto,
        //     productos
        // })
    }) 

// app.use('/api/productos', router)
// 


// app.route('/producto')
//     //BUSCAR PRODUCTO POR ID
//     .get((req,res)=>{
//         const id = req.query.id
//         const producto = productos.find(prod =>prod.id == id)
//         !producto ? 
//         res.send({ error : 'producto no encontrado' })
//         :
//         res.send(producto)

//     })
//     //modificar, ta funciona en postman
//     .put((req,res)=>{
//         const id = req.query.id
//         const productoModificado = req.body
//         const producto = productos.find(prod =>prod.id == id)
//         const indice = productos.indexOf(producto) 
//         productos[indice] = productoModificado
//         console.log('id',id);
//         console.log('indice',indice);

//         !producto ? 
//             res.send({ error : 'producto no encontrado' })
//         :
//             res.send({producto,productos})
//     })
//     // Borrar, ya funciona en postman
//     .delete((req,res)=>{
//         const id = parseInt(req.query.id)
//         const producto = productos.find(prod =>prod.id == id)
//         productos = productos.filter(prod => prod.id !== id)
//         console.log(productos)
//         !producto ? 
//         res.send({ error : 'producto no encontrado' })
//         :
//         res.send({
//             productoBorrado:producto,
//             productos
//         })
//     })

