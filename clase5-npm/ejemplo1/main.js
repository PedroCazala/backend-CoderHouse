// const min =1
// const max =20

// let arrayDeNumeros = []
// let obj = {}
// //15min
// for(let i = 1;i<=10;i++){
//     let numero =parseInt( Math.random() * (max-min) + min)
//     arrayDeNumeros = [...arrayDeNumeros, numero]
// }

// // for(numero of arrayDeNumeros){
// //     if(numero )
// // }
// arrayDeNumeros.map(nro=>{
//     obj = {...obj, obj[nro]:3 }
// })
// console.log(arrayDeNumeros)
// console.log(obj)


// //Otro intento con una clase
// // class Objeto{
// //     constructor(cant){
// //         this.cant = cant
// //     }
// // }

// // const lala = new Objeto(1);

// // console.log(lala);

//Como el profe!!!

const min =1
const max =20

let output = {}
//15min
for(let i = 1;i<=10000;i++){
    let numero =parseInt( Math.random() * (max-min) + min)
    if(output[numero]){
        output[numero]++
    }else{
        output[numero]=1
    }
}
console.log(output)