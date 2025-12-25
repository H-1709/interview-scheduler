

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/interview_scheduler")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


const Candidate = require("./models/Candidate");
const Interviewer = require("./models/Interviewer");

app.get("/data", async (req, res) => {
  const candidates = await Candidate.find();
  const interviewers = await Interviewer.find();

  res.json({
    candidates,
    interviewers
  });
});



app.get("/schedule", (req, res) => {
  const schedule = [
    { candidate: "C101", interviewer: "I201", slot: "10:00 AM", status: "Scheduled" },
    { candidate: "C102", interviewer: "I202", slot: "11:00 AM", status: "Scheduled" }
  ];

  res.json(schedule);
});
