# Intelligent Interview Scheduler & Skill Matcher

An end-to-end full-stack system that intelligently matches candidates with interviewers and schedules interviews based on skill overlap and availability.

This project demonstrates practical use of **greedy algorithms**, **hash-based skill matching**, and **full-stack integration** using Java, Express.js, MongoDB, and Next.js.

---

## 🚀 Features

- Skill-based candidate–interviewer matching using hash sets
- Greedy algorithm for conflict-free interview scheduling
- MongoDB for flexible storage of candidates and interviewers
- Express.js backend exposing REST APIs
- Java-based scheduling and matching logic
- Next.js frontend dashboard for viewing interview schedules
- Clean, recruiter-friendly UI with status indicators

---

## 🛠 Tech Stack

| Layer        | Technology |
|-------------|------------|
| Algorithm   | Java |
| Backend     | Node.js, Express.js |
| Database    | MongoDB |
| Frontend    | Next.js (React), Tailwind CSS |

---

## 🧠 System Architecture

1. **MongoDB** stores candidates, interviewers, skills, and availability  
2. **Express.js** exposes REST APIs to fetch scheduling data  
3. **Java** processes data using:
   - Hash-based skill scoring
   - Greedy scheduling algorithm
4. **Next.js** fetches the schedule and displays it in a dashboard

This separation ensures scalability and clean architecture.

---

## ⚙️ Algorithm Design

### Skill Matching
- Uses `HashSet` for O(1) skill lookup
- Score = number of common skills between candidate and interviewer

### Scheduling Strategy
- Greedy approach
- Prioritizes:
  1. Maximum skill overlap
  2. Availability compatibility
- Assigns the best available interviewer per candidate

### Time Complexity
- Skill matching: **O(S)**
- Scheduling: **O(C × I × S)**  
  where:
  - C = candidates
  - I = interviewers
  - S = skills per candidate

---

project_structure:
  algorithm_java:
    - SkillMatcher.java
    - Scheduler.java
    - DataLoader.java
    - data.json
  backend_express:
    - index.js
    - models:
        - Candidate.js
        - Interviewer.js
  frontend_next:
    - src/app/schedule/page.js
  root:
    - README.md

how_to_run:
  step_1_start_mongodb:
    description: Ensure MongoDB is running locally
    url: mongodb://localhost:27017

  step_2_start_backend:
    commands:
      - cd backend-express
      - node index.js
    runs_on: http://localhost:5000

  step_3_start_frontend:
    commands:
      - cd frontend-next
      - npm run dev
    runs_on: http://localhost:3000/schedule

sample_output:
  - candidate: C101
    interviewer: I201
    slot: "10:00 AM"
    status: Scheduled
  - candidate: C102
    interviewer: I202
    slot: "11:00 AM"
    status: Scheduled

key_learnings:
  - Applied greedy algorithms to real-world scheduling problems
  - Used hash-based skill matching for efficient comparisons
  - Designed clean separation between algorithm, backend, and UI layers
  - Built a complete full-stack system using Java and JavaScript

future_improvements:
  - Automate Java scheduler execution from Express backend
  - Add interviewer capacity and priority constraints
  - Improve scheduling fairness and conflict resolution
  - Add authentication and role-based access
  - Deploy using Docker and cloud services

author:
  name: Rajyaguru Hir
  degree: Bachelor of Engineering in Information Technology
  github: https://github.com/H-1709
  linkedin: https://linkedin.com/in/hir-rajyaguru

note:
  purpose: Internship and learning demonstration
  focus:
    - algorithmic clarity
    - system design
    - clean full-stack integration
