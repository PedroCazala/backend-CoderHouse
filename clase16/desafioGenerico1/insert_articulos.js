const {options} = require('./options/mariaDB.js');
const knex = require('knex')(options)

const articulos=[
    {nombre:'tijera',codigo:'tijera',precio:'230', stock:'5'},
    {nombre:'plasticola',codigo:'plasticola',precio:'124', stock:'65'},
    {nombre:'sacapuntas',codigo:'sacapuntas',precio:'57.6', stock:'3'},
    {nombre:'goma',codigo:'goma',precio:'67.5', stock:'15'},
    {nombre:'regla',codigo:'regla',precio:'58.5', stock:'24'}
];
(async () => {
    try {
        await knex('articulos').insert(articulos)
        console.log('Articulos inserted');
    } catch (err) {
        console.log('entro al catch');
        console.log(err);
    }finally{()=>{
        knex.destroy();
    }}
})();
