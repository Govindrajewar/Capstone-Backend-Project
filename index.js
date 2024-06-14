// packages:
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes:
const userRouter = require("./src/routes/User");
const jobRouter = require("./src/routes/Job");

// middlewares:
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/job", jobRouter);
app.use(errorHandler);


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

// Invalid Page
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Invalid Page",
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
