const {options} = require('./options/mariaDB.js');
const knex = require('knex')(options);

(async()=>{
    try {
        await knex('articulos').where('id',2).update({stock:0})

        const articulos =await knex('articulos').select('*')
        console.log(articulos)
    } catch (error) {
        console.log('entro al catch');
        console.log(error)
    }finally{
        ()=>knex.destroy()
    }
})();