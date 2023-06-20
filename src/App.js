import React from "react";
import "./App.css";
//import  from "./travis.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Gabriel Parra's Portfolio</h1>
        <h2>Computer Science Student & IT Graduate</h2>
      </header>

      <section className="App-intro">
        <h2>About Me</h2>
        <p>
          Hi, I'm Gabriel, a Computer Science student and IT graduate. I have a
          passion for solving problems and creating solutions through coding and
          technology.
        </p>
      </section>

      <section className="App-projects">
        <h2>Projects</h2>
        <p>Stay tuned for my exciting projects!</p>
      </section>

      <footer className="App-footer">
        <p>
          Connect with me on LinkedIn and GitHub, or{" "}
          <a href="mailto:gabpar49@gmail.com">send me an email</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
