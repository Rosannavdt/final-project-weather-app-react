import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Rosannavdt/final-project-weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced code
          </a>
          , by{" "}
          <a
            href="https://www.linkedin.com/in/rosannavandentillaar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rosanna van den Tillaar
          </a>
        </footer>
      </div>
    </div>
  );
}
