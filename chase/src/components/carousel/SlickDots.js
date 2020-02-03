import React, { Component } from 'react';

export default class SlickDots extends Component {
  //   state = { current };
  render() {
    const children = this.props.children;
    console.log(children);
    return (
      <div id='slick_dots' style={{ width: '100%', height: '40px' }}>
        <ul
          style={{
            display: 'flex',
            // width: '100px',
            marginLeft: '43%',
            marginTop: '-3.002%',
            align: 'center'
          }}
        >
          {Array.apply(null, { length: 10 }).map((e, i) => (
            <li key={i}>
              <button className='slick_dot--button'></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
