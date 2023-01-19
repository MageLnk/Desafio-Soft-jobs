const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "password",
  database: "vida_sana",
  allowExitOnIdle: true,
});

const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1 AND password = $2";
  const values = [email, password];
  const { rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "No se encontró ningún usuario con estas credenciales" };
};

const getEventos = async () => {
  const { rows: eventos } = await pool.query("SELECT * FROM eventos");
  return eventos;
};

const deleteEvento = async (id) => {
  const consulta = "DELETE FROM eventos WHERE id = $1";
  const values = [id];
  const { rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "No se encontró ningún evento con este ID" };
};

module.exports = { getEventos, deleteEvento, verificarCredenciales };
