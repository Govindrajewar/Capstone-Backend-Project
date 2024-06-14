const express = require("express");
const router = express.Router();

// controllers:
const {
    getJob,
    createJob,
} = require("../controllers/Job");

// middlewares:
const validateNewJob = require("../middleware/validateNewJob");

// get Job
router.get("/", getJob);

// create Job
router.post("/create", validateNewJob, createJob);

// export router
module.exports = router;
