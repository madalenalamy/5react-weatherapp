import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/madalenalamy"
            target="_blank"
            rel="noreferrer">
            Madalena Lamy 
          </a>
          {" "}it's open-sourced on{" "}
          <a
            href="https://github.com/madalenalamy/5react-weatherapp.git"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>
          {" "}and hosted on{" "}
          <a
            href="https://5react-weatherapp.netlify.app/"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
