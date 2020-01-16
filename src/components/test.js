import React from 'react';
import './test.css';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      className: 'no'
    }
    this.clickHandler = this.clickHandler.bind(this);
    //console.log(this.state);
  }

  clickHandler() {
    this.state.clicked = !this.state.clicked;
    let tempClass = this.state.clicked ? 'yes' : 'no';
    this.setState({
      className: tempClass
    });
  }

  render() {
    return <p className={this.state.className} onClick={this.clickHandler}>Component imports work.</p>;
  }
}

export default Test;
