const Sequelize = require('sequelize');
const db = require('../connection');

const Tasks = db.connection.define('task', {
    name: {
        type: Sequelize.STRING,
    }
});

module.exports = Tasks;
