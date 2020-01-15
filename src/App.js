import React from 'react';
import './App.css';
//import Test from './components/test.js';
import Home from './components/home/home.js';
import Blog from './components/blog/blog.js';

function log() {
  let url = window.location.hostname + window.location.pathname;
  console.log(url);
}

function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
}

export default App;
