require('dotenv').config();
const pg = require("pg-promise")();
const db = pg({process.env.DATABASE_URL,ssl: true,});
module.exports = db;
