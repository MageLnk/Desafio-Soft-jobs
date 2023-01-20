const express = require("express");
const router = express.Router();
// Controllers
const { bringAllTest } = require("../controllers/index.controllers");
// Routes
router.get("/test", bringAllTest);

module.exports = router;
