import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/opportunities")
      .then(res => setOpportunities(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Opportunity Connect</h1>
      <p>Find local jobs, internships, and skill programs tailored to you.</p>
      <div className="opportunity-list">
        {opportunities.map(opp => (
          <div key={opp.id} className="opportunity-card">
            <h2>{opp.title}</h2>
            <p><strong>Source:</strong> {opp.source}</p>
            <p><strong>Deadline:</strong> {opp.deadline}</p>
            <p><strong>Skills:</strong> {opp.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
