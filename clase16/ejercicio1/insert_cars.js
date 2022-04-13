const { options } = require("./options/mariaDB.js")
const  knex  = require('knex')(options)

const cars =[
    {name:'lamborgini', price:326442},
    {name:'ferrari', price:90000},
    {name:'fort', price:800000},
    {name:'chevrolet', price:800000},
]

//insert cars to DB
knex('cars').insert(cars)
    .then(()=>{
        console.log('Cars insterted');
    })
    .catch(err=>{
        console.log('entro al catch');
        console.log(err);
    })
    .finally(
        knex.destroy()
    )