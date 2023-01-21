const jwt = require("jsonwebtoken");
//
const checkEssentialInformation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).send({ msg: "Debe ingresar al menos el usuario y la contraseña" });
    return;
  }
  next();
};

const tokenVerification = (req, res, next) => {
  const token = req.header("Authorization").split("Bearer ")[1];
  if (!token) {
    res.status(401).send({ msg: "Se necesita un token para continuar" });
    return;
  }
  const validToken = jwt.verify(token, process.env.SECRET_KEY);
  if (!validToken) {
    res.status(401).send({ msg: "Token ingresado no es válido" });
    return;
  }
  next();
};

// Cómo manejar esto?

module.exports = { tokenVerification, checkEssentialInformation };
