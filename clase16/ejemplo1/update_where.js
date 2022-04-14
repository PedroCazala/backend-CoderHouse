const { options } = require("./options/mariaDB.js")
const  knex  = require('knex')(options)
//Equivalente a SELECT * FROM cars
knex.from('cars').where({name:'Volkswagen'}).update({price:'5000'})
    .then(()=>console.log('Car update'))
    .catch(err=>{
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });