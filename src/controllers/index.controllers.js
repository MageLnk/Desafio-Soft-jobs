const jwt = require("jsonwebtoken");
// Services
const { createNewUser, checkUserInfoForLogIn, getUserData } = require("../services/index.services");
//
const controller = {};

controller.createNewUser = async (req, res) => {
  try {
    const userInfo = req.body;
    await createNewUser(userInfo);
    res.status(200).send({ msg: "Usuario creado con éxito" });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};
controller.loginUser = async (req, res) => {
  try {
    const userInfo = req.body;
    await checkUserInfoForLogIn(userInfo);
    const token = jwt.sign(userInfo.email, process.env.SECRET_KEY);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.bringUserData = async (req, res) => {
  try {
    const token = req.header("Authorization").split("Bearer ")[1];
    const email = jwt.decode(token);
    const userData = await getUserData(email);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
