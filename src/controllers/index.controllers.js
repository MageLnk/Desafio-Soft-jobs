const { testFunc } = require("../services/index.services");
//
const controller = {};

controller.test = async (req, res) => {
  try {
    const bringEverythingTest = await testFunc();
    res.status(200).send(bringEverythingTest);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.log(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
