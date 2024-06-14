const mongoose = require("mongoose");

const JobData = new mongoose.model("JobData", {
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

module.exports = JobData;
