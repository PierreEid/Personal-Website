import React from 'react';
import logo from './logo.svg';
import './App.css';

function log() {
  let url = window.location.hostname + window.location.pathname;
  console.log(url);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under construction...
          <br/><br/>
          <span className="test" onClick={log}>Pierre-Anthony Eid</span>
        </p>
        <div className="contact-info">
          <a href="./resume.pdf" download>My Resume</a>
          <span>  |  </span>
          <a href="mailto:pierre.eid2@gmail.com">E-Mail Me</a>
        </div>
      </header>
    </div>
  );
}

export default App;
