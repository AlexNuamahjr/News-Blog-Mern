const { Sequelize } = require('sequelize');
require ('dotenv').config()

// retrieve db connection details
const DATABASENAME = process.env.DB_NAME;
const DBUSER = process.env.DB_USER;
const DBPASS = process.env.DB_PASS;
const DBTYPE = process.env.DB_TYPE;
const DBHOST = process.env.DB_HOST;

// creating sequelize instance
const dbConnection = new Sequelize(DATABASENAME, DBUSER, DBPASS, {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = dbConnection;