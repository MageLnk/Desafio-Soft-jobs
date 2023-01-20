const pool = require("../database");
// Querys
const testFunc = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM usuarios");
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { testFunc };
