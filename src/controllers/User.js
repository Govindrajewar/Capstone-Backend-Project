const UserData = require("../modules/User");
const jwt = require("jsonwebtoken");

// get Users
const getUsers = async (req, res, next) => {
  try {
    const users = await UserData.find();

    res.json({
      status: "SUCCESS",
      user: users,
    });
  } catch (error) {
    res.json({
      message: "Get Users Error: ",
      error: error,
    });
  }
};

// register User
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserData.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    await UserData.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    res.json({
      message: "Register User Error: ",
      error: error,
    });
  }
};

// login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserData.findOne({ email: email });

    if (!existingUser) {
      return res.status(400).json({
        message: "User Does Not Exists",
      });
    }

    if (existingUser.password !== password) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    const token = jwt.sign(
      {
        userID: existingUser._id,
      },
      process.env.TokenKey,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "User Logged In Successfully",
      email: existingUser.email,
      token: token,
    });
  } catch (error) {
    res.json({
      message: "Login User Error: ",
      error: error,
    });
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
};
