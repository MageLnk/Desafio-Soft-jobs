const { Pool } = require("pg");
//const format = require("pg-format");
//
const credentials = {
  host: "localhost",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "password",
  database: "softjobs",
  allowExitOnIdle: true,
};
const pool = new Pool(credentials);
// Querys
const bringEverythingFunc = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM usuarios");
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { bringEverythingFunc };
