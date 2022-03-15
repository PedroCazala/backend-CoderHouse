const productos = [
    { id: 1, nombre: "Escuadra", precio: 323.45 },
    { id: 2, nombre: "Calculadora", precio: 234.56 },
    { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
    { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
    { id: 5, nombre: "Reloj", precio: 67.89 },
    { id: 6, nombre: "Agenda", precio: 78.9 },
];
let nombresProductos=[]
let precioTotal= 0
let precios =[]
productos.forEach(prod => {
    nombresProductos= [...nombresProductos,prod.nombre]
    precioTotal= precioTotal + prod.precio
    precios = [...precios, prod.precio]
})
let promedio= Math.floor(precioTotal/productos.length)

let menorPrecio = Math.min(...precios)
const productoConMenorPrecio = productos.find(producto=>producto.precio === menorPrecio)
let mayorPrecio = Math.max(...precios)
const productoConMayorPrecio = productos.find(producto=>producto.precio === mayorPrecio)

// console.log(JSON.stringify(nombresProductos))
// console.log(`Precio total: ${precioTotal}`)
// console.log(`Promedio: ${promedio}`)
// console.log(Math.min(...precios));
// console.log(productoConMenorPrecio)
// console.log(productoConMayorPrecio)

const objetoConInfo ={
    productosDisponobles :JSON.stringify(nombresProductos),
    precioTotal,
    promedio,
    productoConMenorPrecio,
    productoConMayorPrecio
}
console.log(objetoConInfo);

