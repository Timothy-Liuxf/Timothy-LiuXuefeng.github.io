import React from "react";
import profile from "./profile.jpg";
import "./App.css";

function App() {
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
      </header>
    </div>
  );
}

export default App;
