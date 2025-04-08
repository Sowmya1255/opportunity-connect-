const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let opportunities = [
  {
    id: 1,
    title: "Internship - Web Developer",
    source: "Local NGO",
    deadline: "2025-04-30",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Govt Job - Junior Data Analyst",
    source: "Gov Portal",
    deadline: "2025-05-15",
    skills: ["Python", "Excel"]
  }
];

app.get("/api/opportunities", (req, res) => {
  res.json(opportunities);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));