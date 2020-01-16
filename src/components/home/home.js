import React from 'react';
import './home.css';

class Home extends React.Component {
  
  render() {
    return(
      <div className="home">
        <div className="home-content">
          <h3>Pierre-Anthony Eid</h3>
          <ul className="nav">
            <li onClick={this.changeView}>About |</li>
            <li> Personal Blog |</li>
            <li> Resume |</li>
            <li> Github |</li>
            <li> Contact Me</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;