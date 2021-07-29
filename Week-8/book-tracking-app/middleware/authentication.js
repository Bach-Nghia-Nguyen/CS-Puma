const authMiddleware = {};
const jwt = require("jsonwebtoken");
require("dotenv").config();

authMiddleware.loginRequired = async (req, res, next) => {
  try {
    // 1. get the token from request
    const tokenString = req.headers.authorization;
    if (!tokenString) {
      throw new Error("Token not found");
    }
    const token = tokenString.replace("Bearer ", "");

    // 2. check the token is existent
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          throw new Error("Token Expired");
        } else {
          throw new Error("Token is invalid");
        }
      }
      req.userId = payload._id;
    });

    // 3. next step (add book)
    next();
  } catch (error) {
    res.status(400).json({
      status: "Failed login required",
      error: error.message,
    });
  }
};

module.exports = authMiddleware;
