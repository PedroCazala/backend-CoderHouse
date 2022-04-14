const {options} = require('./options/mariaDB.js');
const knex = require('knex')(options);

(async()=>{
    try {
        const articulos= await knex('articulos').select('*')
        console.log(articulos)
    } catch (error) {
        console.log(error)
    }finally{
        ()=>knex.destroy()
    }
})();