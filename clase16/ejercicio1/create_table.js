const { options } = require('./options/mariaDB.js');
const knex = require('knex')(options);

(async () => {
    try {
        
        await knex.schema.createTable('cars', table => {
            table.increments('id');
            table.string('name');
            table.integer('price');
        });
        console.log('Table cars created');
    } catch (err) {
        console.log('entro al catch');
        console.log(err);
    } finally {
        knex.destroy();
    }
})();