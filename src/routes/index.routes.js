const express = require("express");
const router = express.Router();
// Middlewares
const { checkEssentialInformation } = require("../middlewares");
// Controllers
const { createNewUser } = require("../controllers/index.controllers");
// Routes
router.post("/usuarios", checkEssentialInformation, createNewUser);

module.exports = router;
