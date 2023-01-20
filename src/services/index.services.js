const bcrypt = require("bcryptjs");
// DB's
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

const newUser = async ({ email, password, rol, lenguage }) => {
  try {
    const hashPass = bcrypt.hashSync(password);
    const values = [email, hashPass, rol, lenguage];
    const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
    const { rowCount } = await pool.query(query, values);
    if (rowCount != 1) throw { msg: "No se pudo crear el usuario. Inténtelo nuevamente" };
    return rowCount;
  } catch (error) {
    throw { msg: "Algo ha ocurrido", error };
  }
};

module.exports = { testFunc, newUser };
