const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.db = new Sequelize('multilevel_marketing', 'root', '', {
    host: 'localhost',
    port: 3306, 
    dialect: 'mysql',
    operatorsAliases: Op,
});
    
if(exports.db){
    console.log("Database connection done successfully!!!");
}