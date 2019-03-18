const Sequelize = require('sequelize');
const { db } = require('../config/database');

const Marketing = db.define('marketing', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comission: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parentId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Marketing.sync({ force: false }).then((res) => {
    console.log("Marketing Table created");
}).catch((err) => {
    console.log("Error while creating Marketing table");
})

module.exports = Marketing;