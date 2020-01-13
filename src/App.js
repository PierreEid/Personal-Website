import React from 'react';
import logo from './logo.svg';
import './App.css';

function log() {
  console.log('worked');
  alert('Nice click, bro!');
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
      </header>
    </div>
  );
}

export default App;
