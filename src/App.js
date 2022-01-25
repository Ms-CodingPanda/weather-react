import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Ms-CodingPanda/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>{" "}
          Coded by{" "}
          <a
            href="https://zen-jackson-19bdb6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Vanessa Fadase
          </a>
        </footer>
      </div>
    </div>
  );
}
