const User = require("../model/user");

const userController = {};

userController.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "Succeed in getting users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get users",
      error: error.message,
    });
  }
};

userController.getSingleUser = async (req, res, next) => {
  try {
    const singleUser = await User.findById(req.params.id);

    res.status(200).json({
      status: "Succeed in getting single user",
      data: singleUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get single user",
      error: error.message,
    });
  }
};

userController.getCurrentUser = async (req, res, next) => {
  try {
    const userId = req.userId;
    const currentUser = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json({
      status: "Succeed in getting current user",
      data: currentUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to get current user",
      error: error.message,
    });
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // password encryption
    const salt = await bcrypt.genSalt(10);
    const encodedPassword = await bcrypt.hash(password, salt);
    console.log("What is", encodedPassword);

    // Save the encrypted password
    const user = new User({
      username: username,
      email: email,
      password: encodedPassword,
    });
    await user.save();

    res.status(200).json({
      status: "Succeed in creating user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to create user",
      error: error.message,
    });
  }
};

userController.updateUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // password encryption
    const salt = await bcrypt.genSalt(10);
    const encodedPassword = await bcrypt.hash(password, salt);

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username: username, email: email, password: encodedPassword },
      { new: true }
    );

    res.status(200).json({
      status: "Succeed in updating user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to update user",
      error: error.message,
    });
  }
};

userController.updateCurrentUser = async (req, res, next) => {
  try {
    const userId = req.userId;
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      throw new Error("User not found");
    }

    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encodedPassword = await bcrypt.hash(password, salt);

    const updatedCurrentUser = await User.findByIdAndUpdate(
      userId,
      { username: username, email: email, password: encodedPassword },
      { new: true }
    );

    res.status(200).json({
      status: "Succeed in updating current user",
      data: updatedCurrentUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to update current user",
      error: error.message,
    });
  }
};

userController.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Succeed in deleting user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail to delete user",
      error: error.message,
    });
  }
};

module.exports = userController;
