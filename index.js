const express = require("express");
const cors = require("cors");
require("dotenv").config();
// Basic starting points
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
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
});
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
