const validateNewJob = (req, res, next) => {
  const { companyName, jobTitle, location, salary } = req.body;

  if (!companyName) {
    return res.status(400).json({
      message: "Company Name is required",
    });
  }

  if (!jobTitle) {
    return res.status(400).json({
      message: "Job Title is required",
    });
  }

  if (!location) {
    return res.status(400).json({
      message: "Location is required",
    });
  }

  if (!salary) {
    return res.status(400).json({
      message: "Salary is required",
    });
  }

  next();
};

module.exports = validateNewJob;
