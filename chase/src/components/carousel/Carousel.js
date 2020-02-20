import React, { Component } from 'react';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';
import MoneyCheck from '../../svgs/money-check.svg';
import PiggyBank from '../../svgs/piggy-bank.svg';
import Car from '../../svgs/car-side.svg';
import Home from '../../svgs/home.svg';
import Briefcase from '../../svgs/briefcase.svg';
import CreditCard from '../../svgs/credit-card.svg';
import Tachometer from '../../svgs/tachometer.svg';
import PrivateClient from '../../svgs/private-clients.svg';
import Invest from '../../svgs/invest.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../';
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { icon: Tachometer, subtitle: 'Free Credit Score' },
        { icon: CreditCard, subtitle: 'Find a credit card' },
        { icon: Home, subtitle: 'Home Lending' },
        { icon: Car, subtitle: 'Car Buying & Loans' },
        { icon: PiggyBank, subtitle: 'Savings Accounts & CDs' },
        { icon: Briefcase, subtitle: 'Chase for Business' },
        { icon: PrivateClient, subtitle: 'Chase Private Client' },
        { icon: Invest, subtitle: 'Invest' },
        { icon: MoneyCheck, subtitle: 'Schedule a meeting' },
        { icon: Tachometer, subtitle: 'Free Credit Score' },
        { icon: CreditCard, subtitle: 'Find a credit card' },
        { icon: Home, subtitle: 'Home Lending' },
        { icon: Car, subtitle: 'Car Buying & Loans' },
        { icon: PiggyBank, subtitle: 'Savings Accounts & CDs' },
        { icon: Briefcase, subtitle: 'Chase for Business' },
        { icon: PrivateClient, subtitle: 'Chase Private Client' },
        { icon: Invest, subtitle: 'Invest' },
        { icon: MoneyCheck, subtitle: 'Schedule a meeting' }
      ],
      active: this.props.active,
      direction: '',
      transitionX: 0
    };
  }
  generateItems = () => {
    var items = [];
    var level;
    console.log(this.state.active);
    for (var i = this.state.active - 3; i < this.state.active + 4; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <ImageSlide
          key={index}
          id={i}
          level={level}
          Icon={this.state.items[index].icon}
          subtitle={this.state.items[index].subtitle}
        />
      );
    }

    console.log(items);
    return items;
  };

  moveLeft = () => {
    var newActive = this.state.active;
    newActive--;
    this.setState({ transitionX: '-200' });
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive
      // direction: 'left',
    });
    this.setState({ transitionX: '0' });
  };

  moveRight = () => {
    var newActive = this.state.active;
    this.setState({ transitionX: this.state.transitionX - 200 });
    // this.setState({});
    // this.setState({
    //   active: (newActive + 1) % this.state.items.length,
    //   direction: 'right',
    //   transitionX: '0'
    // });
    setTimeout(() => {
      this.setState({
        active: (newActive + 1) % this.state.items.length,
        direction: 'right'
        // transitionX: '0'
      });
    }, 300);
  };
  render() {
    console.log(this.state.transitionX);
    return (
      <div>
        <div className='carousel-grid'>
          <div class='carousel-grid-1'>
            <p>Choose what's right for you</p>
          </div>
          <div class='carousel-grid-2'>
            <Arrow
              direction='left'
              clickFunction={this.moveLeft}
              glyph={<i class='fa fa-angle-left'></i>}
            />
          </div>

          <div class='carousel-grid-3'>
            <div
              id='slide-container'
              style={
                {
                  // transform: `translate3d(${this.state.transitionX}px, 0px, 0px)`
                }
              }
            >
              {/* <ReactCSSTransitionGroup transitionName={this.state.direction}> */}
              {this.generateItems()}
              {/* </ReactCSSTransitionGroup> */}
            </div>
          </div>
          <div class='carousel-grid-4'>
            <Arrow
              direction='right'
              clickFunction={this.moveRight}
              glyph={<i class='fa fa-angle-right'></i>}
            />{' '}
          </div>
        </div>
      </div>
    );
  }
}
