const fs = require('fs')

try {
    const ruta= './package.json'
    fs.readFile()
} catch (error) {
    throw new Error (`Problemas! ${error.message}`)
}
//No dio el tiempo de la clase