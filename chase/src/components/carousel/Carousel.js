import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import MoneyCheck from '../../svgs/money-check.svg';
import PiggyBank from '../../svgs/piggy-bank.svg';
import Car from '../../svgs/car-side.svg';
import Home from '../../svgs/home.svg';
import Briefcase from '../../svgs/briefcase.svg';
import CreditCard from '../../svgs/credit-card.svg';
import Tachometer from '../../svgs/tachometer.svg';
import PrivateClient from '../../svgs/private-clients.svg';
import Invest from '../../svgs/invest.svg';
import SlickDots from './SlickDots';
import $ from 'jquery';
const imgUrls = [
  // { index: 8, icon: Invest, subtitle: 'Invest' },
  // { index: 7, icon: PrivateClient, subtitle: 'Chase Private Client' },
  // { index: 6, icon: Briefcase, subtitle: 'Chase for Business' },
  { index: 0, icon: Tachometer, subtitle: 'Free Credit Score' },
  { index: 1, icon: MoneyCheck, subtitle: 'Schedule a meeting' },
  { index: 2, icon: CreditCard, subtitle: 'Find a credit card' },
  { index: 3, icon: Home, subtitle: 'Home Lending' },
  { index: 4, icon: Car, subtitle: 'Car Buying & Loans' },
  { index: 5, icon: PiggyBank, subtitle: 'Savings Accounts & CDs' },
  { index: 6, icon: Briefcase, subtitle: 'Chase for Business' },
  { index: 7, icon: PrivateClient, subtitle: 'Chase Private Client' },
  { index: 8, icon: Invest, subtitle: 'Invest' }
  // { index: 0, icon: Tachometer, subtitle: 'Free Credit Score' },
  // { index: 1, icon: MoneyCheck, subtitle: 'Schedule a meeting' },
  // { index: 2, icon: CreditCard, subtitle: 'Find a credit card' },
  // { index: 3, icon: Home, subtitle: 'Home Lending' }
  // { index: 0, icon: Tachometer, subtitle: 'Free Credit Score' }
];
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: imgUrls,
      card: imgUrls[0],
      transition: 0
      // first: 0,
      // second: 1,
      // third: 2,
      // fourth: 3,
      // current: 4
    };
  }

  componentDidUpdate() {}
  //working
  previousSlide = () => {
    console.log(this.state.card);
    const oldIndex = this.state.card.index;
    if (oldIndex != 0) {
      const newIndex = oldIndex - 1;
      this.setState({
        card: this.state.cards[newIndex],
        //cards: cards
        transition: this.state.transition - 10 - newIndex
      });
    } else {
      this.setState({
        card: this.state.cards[4]
      });
    }
  };

  nextSlide = () => {
    const oldIndex = this.state.card.index;
    if (oldIndex != this.state.cards.length - 5) {
      const newIndex = oldIndex + 1;
      this.setState({
        card: this.state.cards[newIndex],
        //cards: cards
        transition: this.state.transition + 10 + newIndex
      });
    } else {
      this.setState({
        card: this.state.cards[0]
      });
    }
  };

  render() {
    const { card, cards, current, first, second, third, fourth } = this.state;
    return (
      <div className='container-fluid'>
        <span className='carousel__heading'>Choose what's right for you</span>
        <div style={{ position: 'relative', display: 'flex' }}>
          <div className='slide_arrow--left'>
            <Arrow
              direction='left'
              clickFunction={this.previousSlide}
              glyph={<i class='fa fa-angle-left'></i>}
            />
          </div>
          <div
            style={{
              // backgroundColor: 'yellow',
              display: 'flex',
              position: 'relative',
              width: '70%',
              overflow: 'hidden'
            }}
          >
            <div
              className=''
              style={{
                // backgroundColor: 'yellow',
                display: 'flex',
                position: 'absolute',
                transition:
                  'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),visibility 0s, opacity 0.5s linear',
                transform: `translate3d(-${card.index *
                  (100 / cards.length)}%, 0px, 0px)`
              }}
            >
              {this.state.cards.map((card, i) => (
                <ImageSlide
                  transition={this.state.transition}
                  id={`slick-${i}-active`}
                  Icon={card.icon}
                  subtitle={card.subtitle}
                />
              ))}
            </div>
          </div>
          <div className='slide_arrow--right'>
            <Arrow
              direction='right'
              clickFunction={this.nextSlide}
              glyph={<i class='fa fa-angle-right'></i>}
            />
          </div>
        </div>

        <SlickDots currentCard={this.state.card.index + 1} />
      </div>
    );
  }
}

export default Carousel;
