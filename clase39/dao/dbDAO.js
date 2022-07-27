// const { default: knex } = require("knex");
const {options} = require('./options/mariaDB')
const knex = require('knex')(options)
class dbDAO{
    static findAll(table){
        knex.from(table)
        .select('*')
        .then(rows =>{
            console.log(rows);
        })
        .catch(err=>{
            console.log(err);
        })
        .finally(
            knex.destroy()
        )
    }
}

 (dbDAO)