const Sequelize = require('sequelize');

let dbConnection = null;

class SequelizeSingleton {
    constructor () {
        if (dbConnection) this.connection = dbConnection;
        else {
            dbConnection = new Sequelize('sqltest', 'eszwajkowski', '', {
                host: 'localhost',
                dialect: 'postgres',
                logging: false,
            });
            this.connection = dbConnection;
        }
    }
}

module.exports = new SequelizeSingleton();
