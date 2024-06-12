const UserData = require("../modules/User");
const jwt = require("jsonwebtoken");

// get Users
const getUsers = async (req, res) => {
  const users = await UserData.find();

  res.json({
    status: "SUCCESS",
    user: users,
  });
};

// register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await UserData.findOne({ email: email });

  if (!existingUser) {
    await UserData.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "User Registered Successfully",
    });
  } else {
    res.status(400).json({
      message: "User Already Exists",
    });
  }
};

// login User
const loginUser = async (req, res) => {
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
      email: existingUser.email,
      name: existingUser.name,
    },
    "secketkey",
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "User Logged In Successfully",
    token: token,
  });
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
};
