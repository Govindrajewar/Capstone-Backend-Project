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
  },
  salary: {
    type: String,
    required: true,
  },
    skills: [{
      type: String,
    }]
});

module.exports = JobData;
