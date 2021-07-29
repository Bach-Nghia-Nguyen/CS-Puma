const express = require("express");
const router = express.Router();

const genreController = require("../controller/genreController");

router.post("/", genreController.createGenre);
router.get("/", genreController.getGenres);

module.exports = router;
