const express = require("express");
const router = express.Router();
const secondRouter = require("./second");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ data: "Weather data is here" });
});

/*  */
router.get("/second", secondRouter);

module.exports = router;
