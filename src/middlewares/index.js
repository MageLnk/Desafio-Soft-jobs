const checkEssentialInformation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).send({ msg: "Debe ingresar al menos el usuario y la contraseña" });
    return;
  }
  next();
};

module.exports = { checkEssentialInformation };
