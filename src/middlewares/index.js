const jwt = require("jsonwebtoken");
const { validateToken } = require("../utilities/validateToken");
//
const checkEssentialInformation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).send({ msg: "Debe ingresar al menos el usuario y la contraseña" });
    return;
  }
  next();
};

const tokenVerification = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split("Bearer ")[1];
    if (!token) {
      res.status(401).send({ msg: "Se necesita un token para continuar" });
      return;
    }
    const validToken = await validateToken(token, res);
    if (!validToken) {
      res.status(401).send({ msg: "Token ingresado no es válido" });
      return;
    }
    next();
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

// Cómo manejar esto?

const morganHechizo = (req, res, next) => {
  const parametros = req.params;
  const url = req.url;
  console.log(
    `
    Hoy ${new Date()}
    Se ha recibido una consulta en la ruta ${url}
    acompañado de los parámetros: `,
    parametros
  );
  return next();
};

// Cómo manejar esto?

module.exports = { tokenVerification, checkEssentialInformation, morganHechizo };
