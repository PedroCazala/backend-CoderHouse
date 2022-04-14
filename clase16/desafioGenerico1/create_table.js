const { options } = require('./options/mariaDB.js');
const knex = require('knex')(options);

(async () => {
    try {
        await knex.schema.createTable('articulos', table => {
            table.increments('id');
            table.string('nombre',15);
            table.string('codigo',10);
            table.float('precio');
            table.integer('stock');
        });
        console.log('Table articulos created');
    } catch (err) {
        console.log('entro al catch');
        console.log(err);
    } finally {()=>{
        knex.destroy();
    }
    }
})();