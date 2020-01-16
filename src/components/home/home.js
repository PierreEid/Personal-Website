import React from 'react';
import './home.css';
//import '../../../public/wip.png' as wip;

class Home extends React.Component {

  render() {
    return(
      <div className="home">
        <div className="home-content">
          <h3>Pierre-Anthony Eid</h3>
          <table className="nav-container">
            <tbody className="nav-table">
              <td>| About</td>
              <td>| Personal Blog</td>
              <td>| Resume</td>
              <td>| Github</td>
              <td>| Contact Me</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
