import React, { Component } from 'react';
import $ from 'jquery';
export default class SlickDots extends Component {
  //   state = { current };
  componentDidUpdate() {
    $('button.active').removeClass('active');
    $('#' + this.props.currentCard).addClass('active');
  }
  render() {
    // const children = this.props.children;
    console.log(this.props.currentCard);
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(i);
    }
    const renderDots = dots.map(number => {
      if (number === 1) {
        return (
          <li key={number}>
            <button id={number} className='slick_dot--button active'></button>
          </li>
        );
      } else {
        return (
          <li key={number}>
            <button id={number} className='slick_dot--button'></button>
          </li>
        );
      }
    });
    // console.log(this.props.currentPage);
    return (
      <div id='slick_dots' style={{ width: '100%', height: '40px' }}>
        <ul
          style={{
            display: 'flex',
            marginLeft: '43%',
            marginTop: '-3.002%',
            align: 'center'
          }}
        >
          {renderDots}
        </ul>
      </div>
    );
  }
}
