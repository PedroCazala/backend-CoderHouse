//vi hasta 1,40
const express =require('express')
const app =express()
//cargamos handlebars
const handlebars = require('express-handlebars')

app.engine('hbs',handlebars.engine({
    extname:'.hbs',
    defaultLayout:'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine','hbs')
app.set('views','./views')

app.use(express.static('public'))


app.get('/',(req,res)=>{
    const datos={
        titulo:'Prueba de plantilla',
        mensaje:'Este es un mensaje',
        autor:'Pedro Cazalá',
        version:'1.1'
    }
    res.render('main',datos)
})

app.listen(8090,()=>console.log('corriendo'))