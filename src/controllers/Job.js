const JobData = require("../modules/Job");

const getJob = async (req, res) => {
  try {
    const jobs = await JobData.find();

    res.json({
      message: "Fetched all jobs successfully",
      jobs: jobs,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong while fetching all jobs",
      error: error,
    });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await JobData.findOne({ _id: req.params.id });

    if (!job) {
      return res.json({
        message: "Job not found",
      });
    }

    res.json({
      message: "Fetched job successfully",
      job: job,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong while fetching job",
      error: error,
    });
  }
};

const createJob = async (req, res) => {
  try {
    const { companyName, jobTitle, location, salary } = req.body;

    const newJob = new JobData({
      companyName,
      jobTitle,
      location,
      salary,
    });

    await newJob.save();

    res.status(201).json({
      message: "Job created successfully",
      job: newJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while creating job",
      error: error,
    });
  }
};

// Update job
const updateJob = async (req, res) => {
  try {
    const { companyName, jobTitle, location, salary } = req.body;

    const updatedJob = await JobData.findOneAndUpdate(
      { _id: req.params.id },
      {
        companyName,
        jobTitle,
        location,
        salary,
      }
    );

    res.status(200).json({
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while updating job",
      error: error,
    });
  }
};

module.exports = {
  getJob,
  createJob,
  getJobById,
  updateJob,
};
