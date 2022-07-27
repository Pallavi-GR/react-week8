import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <img
        src="https://www.shecodes.io/assets/stickers/logo%20text-08ef42643842d30d15f4ce9a81017aeb7a89fe90bac1210665f44373d4807003.gif"
        className="App-logo"
        alt="logo"
      />
      <h1>Dictionary</h1>
      What would you like to search?
      <Dictionary />
      <footer className="FooterName">
        This page is code by Pallavi GR with SheCodes and is Open-sourded on
        GITHUB @{" "}
        <a
          href="https://github.com/Pallavi-GR/react-week7.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"  "} PALLAVI GR
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
