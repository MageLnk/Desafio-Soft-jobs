const express = require("express");
const router = express.Router();
// Middlewares
const { checkEssentialInformation } = require("../middlewares");
// Controllers
const { test, createNewUser } = require("../controllers/index.controllers");
// Routes
router.get("/test", test);

router.post("/usuarios", checkEssentialInformation, createNewUser);

module.exports = router;
