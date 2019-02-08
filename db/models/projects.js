const Sequelize = require('sequelize');
const db = require('../connection');

const Projects = db.connection.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Projects;
