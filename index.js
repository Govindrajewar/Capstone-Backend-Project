const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

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

app.listen(process.env.PORT, () => {
  console.log(`App Running at http://localhost:${process.env.PORT}`);

  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => console.log("Server Connected to MongoDB"))
    .catch((err) => console.log(err));
});
