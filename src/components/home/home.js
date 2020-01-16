import React from 'react';
import './home.css';

class Home extends React.Component {

  render() {
    return(
      <div className="home">
        <div className="home-content">
          <h3>Pierre-Anthony Eid</h3>
          <div className="nav-container">
            <table className="nav-table">
              <th>|About</th>
              <th>|Personal Blog</th>
              <th>|Resume</th>
              <th>|Github</th>
              <th>|Contact Me</th>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
