const express = require('express')
const app =express()
const {Router} =express
const router = Router
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT =8080
const server = app.listen(PORT,()=>{
    console.log(`Escuchando al servidor en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
app.use('/api/productos', router)
const productos=[
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

app.route('/productos')
    .get((req,res)=>{
        res.send(productos)
    })
    .post((req,res)=>{
        const nuevoProducto = req.body
        const id = productos.length + 1
        productos.push({id,...nuevoProducto})
        res.send({
            nuevoProducto,
            productos
        })
    }) 

app.route('/productos/:id')
    .get((req,res)=>{
        const id = req.params.id
        const producto = productos.find(prod =>prod.id == id)
        !producto ? 
        res.send({ error : 'producto no encontrado' })
        :
        res.send(producto)
    })