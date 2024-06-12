// packages:
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes:
const userRouter = require("./src/routes/User");

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/user", userRouter);


// default route:
app.get("/", (req, res) => {
  res.json({
    message: "Server is live",
    date: new Date(),
  });
});

// health route:
app.get("/health", (req, res) => {
  res.json({
    message: "API is healthy",
    date: new Date(),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App Running at http://localhost:${process.env.PORT}`);

  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => console.log("Server Connected to MongoDB"))
    .catch((err) => console.log(err));
});
