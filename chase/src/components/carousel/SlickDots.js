import React, { Component } from 'react';
import $ from 'jquery';
export default class SlickDots extends Component {
  //   state = { current };
  componentDidUpdate() {
    $('button.active').removeClass('active');
    $('#' + (this.props.currentCard % 9)).addClass('active');
  }
  render() {
    // const children = this.props.children;
    // console.log(this.props.currentCard);
    const dots = [];
    for (let i = 0; i < 9; i++) {
      dots.push(i);
    }
    const renderDots = dots.map(number => {
      if (number === 2) {
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
      <div id='slick_dots'>
        <ul className='slick_dots--container'>{renderDots}</ul>
      </div>
    );
  }
}
