import React from "react";
import profile from "./profile.png";
import "./App.css";

function App() {
  const detectLegs = () => {
    alert("One leg detected: \\brgg/!!!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://github.com/Timothy-Liuxf">
          <img src={profile} className="App-logo" alt="profile" />
        </a>
        <p>Timothy Liu's Home Page (Deprecated)</p>
        <a
          className="App-link"
          href="https://github.com/Timothy-Liuxf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
        <br />
        <p>NOTE: This page has been deprecated, only used for testing.</p>
        <button className="App-button" onClick={detectLegs}>👉 Detect Legs</button>
      </header>
    </div>
  );
}

export default App;
