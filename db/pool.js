const {
    Pool
} = require("pg");
require('dotenv').config();

module.exports = new Pool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    database: process.env.DB,
    password: process.env.DBPASS,
    port: process.env.DBPORT
});