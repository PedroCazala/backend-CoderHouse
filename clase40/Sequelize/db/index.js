const Sequelize = require('sequelize')
const db = new Sequelize('twitterdb','root',null,{
    host:'localhost',
    dialect: 'mysql',
    logging:false
})

module.exports = db