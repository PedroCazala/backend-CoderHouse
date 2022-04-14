const { options } = require("./options/mariaDB.js")
const  knex  = require('knex')(options)
//Equivalente a SELECT * FROM cars
knex.from('cars').select('*').whereIn('name',['Audi','Volkswagen']) //.where('price', '<', 100000) //.orderBy('price','asc')
    .then(rows=>{
        console.log(rows);
    })
    .catch(err=>{
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });