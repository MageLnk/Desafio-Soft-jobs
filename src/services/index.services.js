const bcrypt = require("bcryptjs");
// DB's
const pool = require("../database");
// Querys
const createNewUser = async ({ email, password, rol, lenguage }) => {
  try {
    const hashPass = bcrypt.hashSync(password);
    const values = [email, hashPass, rol, lenguage];
    const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
    const { rowCount } = await pool.query(query, values);
    if (rowCount != 1) throw { msg: "No se pudo crear el usuario. Inténtelo nuevamente" };
    return rowCount;
  } catch (error) {
    throw { msg: "Algo inesperado ha ocurrido", error };
  }
};

const checkUserInfoForLogIn = async ({ email, password }) => {
  try {
    const values = [email];
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const {
      rows: [user],
      rowCount,
    } = await pool.query(query, values);
    const { password: passSaved } = user;
    const checkPassword = bcrypt.compareSync(password, passSaved);

    if (!checkPassword || !rowCount) throw { msg: "Email o contraseña incorrectos" };
  } catch (error) {
    throw { msg: "Algo inesperado ha ocurrido", error };
  }
};

const getUserData = async (email) => {
  const values = [email];
  const query = "SELECT * FROM usuarios WHERE email = $1";
  const {
    rows: [user],
    rowCount,
  } = await pool.query(query, values);
  if (!rowCount) throw { msg: "No se encontró ningún usuario con este email" };
  delete user.password;
  return user;
};

module.exports = { createNewUser, checkUserInfoForLogIn, getUserData };
