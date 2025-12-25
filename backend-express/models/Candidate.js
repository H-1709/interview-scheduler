const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  candidateId: String,
  name: String,
  skills: [String],
  availability: [String]
});

module.exports = mongoose.model("Candidate", CandidateSchema);
