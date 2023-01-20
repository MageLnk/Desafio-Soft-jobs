const express = require("express");
const router = express.Router();
// Middlewares
const { checkEssentialInformation } = require("../middlewares");
// Controllers
const { createNewUser, loginUser } = require("../controllers/index.controllers");
// Routes
router.post("/usuarios", checkEssentialInformation, createNewUser);

router.post("/login", loginUser);

module.exports = router;
