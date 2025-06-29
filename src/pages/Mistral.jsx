import React from "react";
import { Link } from "react-router-dom";


function FollowUpQuestions() {
  return (
    <div className="container">
      <h1>🔍 Follow-up Questions</h1>
      <p className="subtitle">💬 Let’s Chat About Your Health!</p>

      <div className="question-box">
        <p>Question:</p>
        <span>
          "Have you encountered any difficulties in understanding how to adjust
          your medication doses according to your blood sugar readings? I’d be
          happy to offer guidance on that if needed."
        </span>
      </div>

      <input type="text" placeholder="🖊️ Your Answer:" />

      <button className="btn">Next</button>

      <select className="dropdown">
        <option>⬇️ Question &amp; Answer History</option>
      </select>

      <button className="analyze-btn">
        🧠 Analyze Answers and Get Advice
      </button>

      <div className="nav-buttons">
        <Link to="/prediction"><button>⬅️ Back to Prediction Page</button></Link>
        <Link to="/"><button>🏠 Go To Home Page</button></Link>
      </div>
    </div>
  );
}

export default FollowUpQuestions;
