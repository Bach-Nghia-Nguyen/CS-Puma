const express = require("express");
const router = express.Router();

const authorApi = require("./author.api");
const bookApi = require("./book.api");
const genreApi = require("./genre.api");
const authApi = require("./auth.api");

/* GET home page. */
router.use("/author", authorApi);
router.use("/book", bookApi);
router.use("/genre", genreApi);
router.use("/auth", authApi);

module.exports = router;
