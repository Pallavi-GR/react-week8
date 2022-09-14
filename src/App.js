import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <img
        src="https://www.shecodes.io/assets/stickers/Dictionary%20App-ab7351320bdebf1442ddd66bc0258459a2cb6eb11cd72b20de4628505a0e34de.gif"
        className="App-logo"
        alt="logo"
      />
      <h1>Dictionary App</h1>

      <Dictionary />
      <footer className="FooterName">
        This page is code by
        <a
          href="https://www.linkedin.com/in/pallavi-gutta-ravi"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Pallavi GR
        </a>{" "}
        with
        <a href="https://shecodes.io" target="_blank" rel="noopener noreferrer">
          {" "}
          SheCodes{" "}
        </a>
        and is Open-sourded on{" "}
        <a
          href="https://github.com/Pallavi-GR/react-week8.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"  "} GITHUB
        </a>{" "}
        and
        <a
          href="https://glowing-cheesecake-bf396c.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
