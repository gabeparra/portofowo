import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Gabriel Parra's Portfolio</h1>
        <h2>Computer Science Student & IT Graduate</h2>

        <div>
          <button onClick={() => setActiveTab('About')}>About Me</button>
          <button onClick={() => setActiveTab('Projects')}>Projects</button>
        </div>
      </header>

      {activeTab === 'About' && 
      <section className="App-intro">
        <h2>About Me</h2>
        <p>
          Hi, I'm Gabriel, a Computer Science student and IT graduate.
          <p>
            I have a passion for solving problems and creating solutions through
            coding and technology.
          </p>
        </p>
      </section>
      }

      {activeTab === 'Projects' && 
      <section className="App-projects">
        <h2>Projects</h2>
        <p>Stay tuned for my exciting projects!</p>
      </section>
      }

      <footer className="App-footer">
        <p>
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/gabeparra/" 
            className="mailto-link"
          >
            LinkedIn
          </a>{" "}
          and <a href="https://github.com/gabeparra" className="mailto-link">GitHub</a>, or{" "}
          <a href="mailto:gabpar49@gmail.com" className="mailto-link">
            send me an email
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;