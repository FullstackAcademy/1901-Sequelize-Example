const Sequelize = require('sequelize');
const { Projects, Tasks, Users } = require('./models');
const db = require('./connection');

const initDb = (force = false) => new Promise((resolve, reject) => {
    db.connection.authenticate()
        .then(() => {
            Users.belongsTo(Projects);
            Tasks.belongsTo(Users);
            Tasks.belongsTo(Projects);
            Projects.hasMany(Users);
            Projects.hasMany(Tasks);
            Users.hasMany(Tasks);

            return db.connection.sync({ force });
        })
        .then(() => {
            console.log('Successfully connected to DB.');
            resolve();
        })
        .catch((e) => {
            console.error('Failure connecting to DB.');
            reject(e);
        });
});

module.exports = initDb;
