const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const UserData = new mongoose.model("UserData", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


app.get("/", (req, res) => {
  res.json({
    message: "Server is live",
  });
});

app.get("/health", (req, res) => {
  res.json({
    message: "API is healthy",
  });
});

// get User data from server
app.get("/user", async (req, res) => {
  const users = await UserData.find();

  res.json({
    message: "User data list",
    users: users,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App Running at http://localhost:${process.env.PORT}`);

  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => console.log("Server Connected to MongoDB"))
    .catch((err) => console.log(err));
});
