const bcrypt = require("bcrypt");
const User = require("../model/user");
const authController = {};

authController.loginWithEmail = async (req, res, next) => {
  try {
    // login process
    // 1. get the email and password from body
    const { email, password } = req.body;
    // 2. check that email is existent in database
    const user = await User.findOne({ username: email });
    if (!user) {
      throw new Error("This email is not existent");
    }
    // 3. check whether the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Wrong password");
    }
    // 4. generate token
    const token = await user.generateToken();
    console.log("token?", token);

    // 5. response
    res.status(200).json({
      status: "Succeed in logging in with email",
      data: { user, token },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failt to log in with email",
      error: error.message,
    });
  }
};

module.exports = authController;
