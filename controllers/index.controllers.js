const { bringEverythingFunc } = require("../recordarnombre/index.recordarnombre");
//
const controller = {};

controller.bringAllTest = async (req, res) => {
  try {
    const bringEverythingTest = await bringEverythingFunc();
    res.status(200).send(bringEverythingTest);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.log(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
