const express = require('express')
const app = express()
const db = require('./db');
const models = require('./models');
const routes = require('./routes');

app.use(express.json())
app.use('/api',routes)

db.sync()// si incluyo'-  { force:true }  -' dentro del paréntesis esto resetea a 0 las tablas 
.then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3000, () => console.log(
        "Servidor escuchando en el puerto 3000"
        )
    );
})
.catch(console.error);