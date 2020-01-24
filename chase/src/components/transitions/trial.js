import React, { Component } from 'react';
class trial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>The Transition Property</h1>
        <p>Hover over the div element below to see the transition</p>
        <div className='box '></div>
        <div className='transform__box'></div>
      </div>
    );
  }
}

export default trial;
