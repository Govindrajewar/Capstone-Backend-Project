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

module.exports = {
  getJob,
  createJob,
};
