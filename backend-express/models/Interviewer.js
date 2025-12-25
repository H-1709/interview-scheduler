const mongoose = require("mongoose");

const InterviewerSchema = new mongoose.Schema({
  interviewerId: String,
  name: String,
  skills: [String],
  availability: [String]
});

module.exports = mongoose.model("Interviewer", InterviewerSchema);
