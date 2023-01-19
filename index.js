const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const cors = require("cors");
const { verificarCredenciales, getEventos, deleteEvento } = require("./consultas");

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await verificarCredenciales(email, password);
    const token = jwt.sign({ email }, "az_AZ");
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});

app.get("/eventos", async (req, res) => {
  try {
    const eventos = await getEventos();
    res.json(eventos);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, console.log("SERVER ON"));
