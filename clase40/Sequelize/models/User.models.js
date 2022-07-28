const { DataTypes, Model } = require('sequelize')
const db = require('../db')

//-- Modelo User
class User extends Model {}
User.init(
 {
   username: {
     type: DataTypes.STRING,
   },
 },
 {
     sequelize: db,
     tableName: "users"
 }
);
module.exports = User