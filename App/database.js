 // database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "testWad",
    host: "localhost",
    port: "5433"
});

module.exports = pool;