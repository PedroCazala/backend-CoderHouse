const { options } = require("./options/mariaDB.js")
const  knex  = require('knex')(options)

let products = [];

class Contenedor{
    static async getProducts(){
        try{
            products = 
            await knex
                .from('products')
                .select('id', 'title', 'price','img')
        }catch{
            await knex.schema.createTable('products', (table) => {
                table.increments('id')
                table.string('title')
                table.float('price')
                table.string('img')
                })
            console.log('la tabla no existia, asi que se creó');
        }
    }
}
module.exports = {Contenedor,products};