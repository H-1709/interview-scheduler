const mongoose = require("mongoose");
const Candidate = require("./models/Candidate");
const Interviewer = require("./models/Interviewer");

mongoose
  .connect("mongodb://localhost:27017/interview_scheduler")
  .then(async () => {
    console.log("MongoDB connected");

    // Clear old data
    await Candidate.deleteMany({});
    await Interviewer.deleteMany({});

    // Insert candidates
    await Candidate.insertMany([
      {
        candidateId: "C101",
        name: "Amit Sharma",
        skills: ["Java", "DSA", "SQL"],
        availability: ["2025-01-10T10:00", "2025-01-10T11:00"]
      },
      {
        candidateId: "C102",
        name: "Neha Verma",
        skills: ["JavaScript", "React", "HTML", "CSS"],
        availability: ["2025-01-10T11:00", "2025-01-10T12:00"]
      },
      {
        candidateId: "C103",
        name: "Rahul Patel",
        skills: ["Java", "Spring", "System Design"],
        availability: ["2025-01-10T10:00", "2025-01-10T12:00"]
      },
      {
        candidateId: "C104",
        name: "Sneha Iyer",
        skills: ["Python", "DSA", "Machine Learning"],
        availability: ["2025-01-10T11:00"]
      },
      {
        candidateId: "C105",
        name: "Arjun Mehta",
        skills: ["Node.js", "MongoDB", "Express"],
        availability: ["2025-01-10T10:00", "2025-01-10T11:00"]
      }
    ]);

    // Insert interviewers
    await Interviewer.insertMany([
      {
        interviewerId: "I201",
        name: "Rahul Mehta",
        skills: ["Java", "System Design"],
        availability: ["2025-01-10T10:00"]
      },
      {
        interviewerId: "I202",
        name: "Pooja Kulkarni",
        skills: ["React", "JavaScript"],
        availability: ["2025-01-10T11:00"]
      },
      {
        interviewerId: "I203",
        name: "Suresh Nair",
        skills: ["Node.js", "MongoDB"],
        availability: ["2025-01-10T10:00", "2025-01-10T11:00"]
      },
      {
        interviewerId: "I204",
        name: "Anita Deshpande",
        skills: ["Python", "Machine Learning"],
        availability: ["2025-01-10T11:00"]
      }
    ]);

    console.log("Database seeded successfully");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
