const checkEssentialInformation = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).send({ msg: "Debe ingresar al menos el usuario y la contraseña" });
    }
    next();
  } catch (error) {
    throw { msg: "Ha ocurrido un error", error };
  }
};

module.exports = { checkEssentialInformation };
