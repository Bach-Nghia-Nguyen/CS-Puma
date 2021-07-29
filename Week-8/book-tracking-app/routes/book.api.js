const express = require("express");
const router = express.Router();

const bookController = require("../controller/bookController");
const authMiddleware = require("../middleware/authentication");

router.post("/", authMiddleware.loginRequired, bookController.createBook);
router.get("/", bookController.getBooks);

module.exports = router;
