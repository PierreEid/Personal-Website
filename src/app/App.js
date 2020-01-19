import React from 'react';
import './App.css';

function printURL() {
  console.log(window.location.hostname, " :: ", window.location.pathname);
}

function App() {
  printURL();
  return (
    <div className="mainContainer">
      <div className="nameHeader">
        Pierre-Anthony Eid
      </div>
      <div className="linkBox">
        <a href="resume.pdf" download>Resume</a>
        <a href="https://www.github.com/pierreeid/" target="_blank" >Github</a>
        <a href="mailto:pierre.eid2@gmail.com">Contact Me</a>
      </div>
    </div>
  );
}

export default App;
