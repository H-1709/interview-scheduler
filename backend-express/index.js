

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

app.get("/schedule", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    const interviewers = await Interviewer.find();

    const usedSlots = new Set();
    const interviewerLoad = {}; // tracks number of interviews per interviewer
    const schedule = [];

    const MAX_INTERVIEWS_PER_INTERVIEWER = 2;

    for (const interviewer of interviewers) {
      interviewerLoad[interviewer.name] = 0;
    }

    for (const candidate of candidates) {
      for (const interviewer of interviewers) {

        // ❌ Skip if interviewer already overloaded
        if (interviewerLoad[interviewer.name] >= MAX_INTERVIEWS_PER_INTERVIEWER) {
          continue;
        }

        // ✅ Skill match check
        const skillMatch = candidate.skills.some(skill =>
          interviewer.skills.includes(skill)
        );
        if (!skillMatch) continue;

        // ✅ Availability match
        const commonSlot = candidate.availability.find(slot =>
          interviewer.availability.includes(slot) && !usedSlots.has(slot)
        );
        if (!commonSlot) continue;

        // Assign interview
        usedSlots.add(commonSlot);
        interviewerLoad[interviewer.name]++;

        schedule.push({
          candidate: candidate.name,
          interviewer: interviewer.name,
          slot: commonSlot,
          status: "Scheduled"
        });

        break; // move to next candidate
      }
    }

    res.json(schedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate schedule" });
  }
});
