const { DataTypes, Model } = require('sequelize')
const db = require('../db')

//-- Modelo Tweet
class Tweet extends Model {}
Tweet.init(
 {
   message: {
     type: DataTypes.STRING,
   },
 },
 {
     sequelize: db,
     tableName: "tweets"
 }
);
module.exports = Tweet