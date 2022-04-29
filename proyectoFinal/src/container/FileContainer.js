import fs  from 'fs'
export let products =[]
const fileProducts = '../../productos.txt'
class FileContainer{
    static getProducts(){   
        try{
            let archivo = fs.readFileSync(fileProducts, 'utf-8');
            products = JSON.parse(archivo)
        }catch{
            fs.writeFileSync(fileProducts,'[]')
            console.log('entro al catch y borro')
        }
    }
}