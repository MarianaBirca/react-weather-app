import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Coded by{" "}
          <a
            href="https://mariana-birca.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Mariana Birca,
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://github.com/MarianaBirca/react-weather-app"
            target="_blank"
            className="footer-link"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weather-app-mb.netlify.appp"
            target="_blank"
            className="footer-link"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
