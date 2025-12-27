## Interview Scheduler System

Interview Scheduler is a full-stack application that automates interview scheduling by matching candidates and interviewers based on skill compatibility and availability. The project demonstrates clean separation of algorithmic logic, backend services, and frontend presentation, making it suitable for scalable real-world systems and technical interviews.

TECH STACK
Java (Core Java, OOP, Collections)
Node.js
Express.js
MongoDB
Mongoose
Next.js (React, App Router)
REST APIs
```
PROJECT STRUCTURE
interview-scheduler/
├── algorithm-java/
│   ├── SkillMatcher.java
│   ├── Scheduler.java
│   ├── DataLoader.java
│   └── data.json
├── backend-express/
│   ├── index.js
│   └── models/
│       ├── Candidate.js
│       └── Interviewer.js
├── frontend-next/
│   └── src/app/schedule/page.js
└── README.md
```

# SYSTEM DESIGN OVERVIEW
The system is divided into three independent layers. The Java algorithm layer handles skill matching and scheduling logic. The backend layer manages data persistence and API exposure. The frontend layer visualizes the generated interview schedule. This separation improves maintainability, scalability, and testability.

ALGORITHM LAYER (JAVA)
DataLoader.java reads structured input data from data.json.
SkillMatcher.java compares candidate skills with interviewer skills using collection-based matching logic.
Scheduler.java assigns interview slots by validating skill compatibility and overlapping availability.
The algorithm layer is modular and can be extended with priority scoring, optimization strategies, or conflict resolution.

BACKEND (NODE.JS + EXPRESS)
MongoDB is used to store candidate and interviewer data.
Candidate.js and Interviewer.js define the database schemas.
index.js initializes the Express server, connects MongoDB, and exposes REST endpoints.
GET /data returns all candidates and interviewers.
GET /schedule returns the generated interview schedule.
The backend acts as the integration layer between the Java algorithm and the frontend UI.

FRONTEND (NEXT.JS)
The frontend is built using Next.js App Router.
The schedule page fetches interview data from the backend using REST APIs.
It displays the interview schedule in a clean dashboard with loading and error handling.
Client-side rendering ensures responsiveness and smooth user interaction.

## HOW TO RUN THE PROJECT

1. START MONGODB
Ensure MongoDB is running locally on:
mongodb://localhost:27017/interview_scheduler

2. RUN BACKEND
cd backend-express
npm install
node index.js
Server runs on http://localhost:5000

3. RUN FRONTEND
cd frontend-next
npm install
npm run dev
Open http://localhost:3000/schedule

4. RUN JAVA ALGORITHM (OPTIONAL)
cd algorithm-java
javac *.java
java Scheduler

KEY FEATURES
Skill-based candidate and interviewer matching
Availability-aware interview scheduling
Java algorithm separated from backend logic
REST API driven architecture
Scalable and interview-ready system design

RESUME HIGHLIGHTS
Built a Java-based interview scheduling algorithm using skill matching and availability constraints.
Developed a Node.js and Express backend integrated with MongoDB for data persistence.
Created a Next.js dashboard to visualize interview schedules using REST APIs.
Designed a modular, scalable architecture separating algorithms, backend services, and frontend UI.

FUTURE ENHANCEMENTS
Priority-based scheduling using weighted scoring
Conflict resolution for overlapping interviews
Real-time schedule updates
Advanced optimization or ML-based matching

AUTHOR
Rajyaguru Hir
GitHub: https://github.com/H-1709
