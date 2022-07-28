const express = require('express')
const db = require('./db');

const models = require('./models')

const app = express()

db.sync({ force:true })
.then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3000, () => console.log(
        "Servidor escuchando en el puerto 3000"
        )
    );
})
.catch(console.error);