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

## 📂 Project Structure

interview-scheduler/
│
├── algorithm-java/
│ ├── SkillMatcher.java
│ ├── Scheduler.java
│ ├── DataLoader.java
│ └── data.json
│
├── backend-express/
│ ├── index.js
│ └── models/
│ ├── Candidate.js
│ └── Interviewer.js
│
├── frontend-next/
│ └── src/app/schedule/page.js
│
└── README.md


---

## ▶️ How to Run the Project

### 1️⃣ Start MongoDB
Ensure MongoDB is running locally on port `27017`.

---

### 2️⃣ Start Backend
```bash
cd backend-express
node index.js


Backend runs on:

http://localhost:5000


3️⃣ Start Frontend
cd frontend-next
npm run dev


Frontend runs on:

http://localhost:3000/schedule


🎯 Key Learnings

Applying greedy algorithms to real-world scheduling problems

Designing clean separation between algorithm and backend layers

Handling real-world constraints like availability conflicts

Building a complete full-stack application from scratch

🔮 Future Improvements

Automate Java scheduler execution from Express backend

Add interviewer capacity constraints

Improve scheduling fairness

Deploy using Docker and cloud services

👤 Author

Rajyaguru Hir
Bachelor of Engineering – IT
GitHub: https://github.com/H-1709

LinkedIn: https://linkedin.com/in/hir-rajyaguru