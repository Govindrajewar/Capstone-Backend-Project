const express = require("express");
const router = express.Router();

// controllers:
const {
    getJob,
    createJob,
    getJobById,
    updateJob,
} = require("../controllers/Job");

// middlewares:
const validateNewJob = require("../middleware/validateNewJob");

// get Job
router.get("/", getJob);

// get Job by id
router.get("/:id", getJobById);

// create Job
router.post("/create", validateNewJob, createJob);

// update Job
router.patch("/update/:id", updateJob);

// export router
module.exports = router;
