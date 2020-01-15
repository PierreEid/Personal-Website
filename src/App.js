import React from 'react';
import './App.css';
//import Test from './components/test.js';
import Home from './components/home/home.js';
//import Blog from './components/blog/blog.js';

function printURL() {
  console.log(window.location.hostname, " :: ", window.location.pathname);
}

function App() {
  printURL();
  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
