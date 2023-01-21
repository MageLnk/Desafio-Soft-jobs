const express = require("express");
const cors = require("cors");
require("dotenv").config();
// Import Middlewares
const { morganHechizo } = require("./middlewares");
// Basic starting points
const app = express();
const PORT = process.env.PORT;
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morganHechizo);
// Routes
const routing = require("./routes/index.routes");
// App
app.use(routing);
// Catcher
app.get("*", (req, res) => {
  res.status(404).send({ msg: "Ruta not found" });
});
// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}. Everything is fine`);
});
