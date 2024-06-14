const express = require("express");
const router = express.Router();

// controllers:
const {
    getJob,
    createJob,
} = require("../controllers/Job");

// get Job
router.get("/", getJob);

// create Job
router.post("/create", createJob);


// export router
module.exports = router;
