import fs  from 'fs'

export let products =[]
const fileProducts = '../productos.txt'

export const getProducts = ()=>{
    try{
        // Intento de hacerlo asincrono!
        // fs.readFile(fileProducts, 'utf-8', async (err, data) => {
        //     if(err) {
        //         console.log('error: ', err);
        //     } else {
        //         products= JSON.parse(data)
        //     }
        //     console.log(products);
        // });
        let archivo = fs.readFileSync(fileProducts, 'utf-8');
        products = JSON.parse(archivo)
    }catch{
        fs.writeFileSync(fileProducts,'[]')
        console.log('entro al catch y borro')
    }
}

export const updateProducts = ()=>{
    const adsProducts = JSON.stringify(products)
    fs.writeFileSync(fileProducts,adsProducts)
}
getProducts()