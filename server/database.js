const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  database: "STACK-HR",
  port: 5432,
});

module.exports = pool;
