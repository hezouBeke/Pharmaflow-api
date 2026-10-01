const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const registerValidator = require("../validators/registerValidator");
const loginValidator = require("../validators/loginValidator");
const validate = require("../middleware/validate");

router.post("/register", validate(registerValidator), authController.register);
router.post("/login", validate(loginValidator), authController.login);

module.exports = router;