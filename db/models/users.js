const Sequelize = require('sequelize');
const db = require('../connection');

const Users = db.connection.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
    }
});

module.exports = Users;
