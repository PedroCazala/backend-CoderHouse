//----- Manejo de archivos -----

const fs =require('fs')

try{
    const ruta = './fyh.txt'
    fs.writeFileSync(ruta,Date().toString())
    const datosArchivo = fs.readFileSync(ruta, 'utf-8')
    console.log(datosArchivo);
}
catch(err){
    throw new Error(`Recorcholis, hubo un error: ${err.message}`)
}

//voy por una hora 43' de clase