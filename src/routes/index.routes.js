const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification, checkEssentialInformation } = require("../middlewares");
// Controllers
const { createNewUser, loginUser, bringUserData } = require("../controllers/index.controllers");
// Routes
router.post("/usuarios", checkEssentialInformation, createNewUser);
router.post("/login", loginUser);

router.get("/usuarios", tokenVerification, bringUserData);

module.exports = router;
