const Pool = require('pg').Pool;

const pool = new Pool ({
    user:"postgres",
    password:"harrybing16",
    host:"localhost",
    database:"hr_db",
    port:5432
});

module.exports = pool;