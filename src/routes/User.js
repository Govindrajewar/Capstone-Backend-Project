const express = require("express");
const router = express.Router();

// controllers:
const {
    getUsers,
    registerUser,
    loginUser
} = require("../controllers/User");

// get user route
router.post("/", getUsers);

// register route
router.post("/register", registerUser);

// login route
router.post("/login", loginUser);

module.exports = router;
