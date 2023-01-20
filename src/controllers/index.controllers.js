const { newUser } = require("../services/index.services");
//
const controller = {};

controller.createNewUser = async (req, res) => {
  try {
    const userInfo = req.body;
    await newUser(userInfo);
    res.status(200).send({ msg: "Usuario creado con éxito" });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.log(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
