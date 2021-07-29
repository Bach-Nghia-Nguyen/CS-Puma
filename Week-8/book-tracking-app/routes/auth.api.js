const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");
const validators = require("../middleware/validators");
const authController = require("../controller/authController");

router.post(
  "/login",
  validators.validate([
    body("email", "Invalid email").exists().isEmail(),
    body("password", "Invalid password").exists().notEmpty(),
  ]),
  authController.loginWithEmail
);

module.exports = router;
