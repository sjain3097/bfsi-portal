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
import { TodoApp } from './Dots';
const imgUrls = [
  { index: 0, icon: Tachometer, subtitle: 'Free Credit Score' },
  { index: 1, icon: MoneyCheck, subtitle: 'Schedule a meeting' },
  { index: 2, icon: CreditCard, subtitle: 'Find a credit card' },
  { index: 3, icon: Home, subtitle: 'Home Lending' },
  { index: 4, icon: Car, subtitle: 'Car Buying & Loans' },
  { index: 5, icon: PiggyBank, subtitle: 'Savings Accounts & CDs' },
  { index: 6, icon: Briefcase, subtitle: 'Chase for Business' },
  { index: 7, icon: PrivateClient, subtitle: 'Chase Private Client' },
  { index: 8, icon: Invest, subtitle: 'Invest' }
];
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 4,
      properties: imgUrls,
      property: imgUrls[0]
      // transition:
    };
  }
  //working
  previousSlide = () => {
    const newIndex = this.state.property.index - 1;
    // console.log(newIndex);
    if (newIndex >= 0) {
      this.setState({
        property: this.state.properties[newIndex],
        start: this.state.start - 1,
        end: this.state.end - 1
      });
    } else {
      this.setState({
        property: this.state.properties[this.state.properties.length - 5],
        start: 4,
        end: 8
      });
    }
  };

  nextSlide = () => {
    const newIndex = this.state.property.index + 1;
    if (newIndex < this.state.properties.length - 4)
      this.setState({
        property: this.state.properties[newIndex],
        start: this.state.start + 1,
        end: this.state.end + 1
      });
    else {
      this.setState({
        property: this.state.properties[0],
        start: 0,
        end: 4
      });
    }
    // console.log(newIndex);
  };

  render() {
    const { properties, property } = this.state;
    const carouselItems = this.state.properties.map(imageSlide => {
      return this.state.start <= imageSlide.index &&
        this.state.end >= imageSlide.index ? (
        <ImageSlide
          id={`slick-${imageSlide.index}-active`}
          Icon={imageSlide.icon}
          subtitle={imageSlide.subtitle}
        />
      ) : (
        <ImageSlide
          id={`slick-${imageSlide.index}`}
          Icon={imageSlide.icon}
          subtitle={imageSlide.subtitle}
        />
      );
    });
    return (
      <div>
        <div className='carousel__heading--container'>
          <span className='carousel__heading'>Choose what's right for you</span>
        </div>
        <div
          className='carousel_container'
          //style={{ height: '148px', width: '100%', backgroundColor: 'yellow' }}
        >
          <div className='slide_arrow--left'>
            <Arrow
              direction='left'
              clickFunction={this.previousSlide}
              glyph={<i class='fa fa-angle-left'></i>}
            />
          </div>
          <div
            style={{
              // overflow: 'hidden',
              position: 'relative',
              width: '80%',
              // marginLeft: '9%',
              margin: 'auto',
              backgroundColor: 'yellow'
              // textAlign: 'center'
            }}
          >
            <div
              style={{
                marginLeft: '5%',
                // margin: 'auto',
                display: 'flex',
                backgroundColor: 'blue',
                transition:
                  'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),visibility 0s, opacity 0.5s linear',
                transform: `translate3d(-${property.index *
                  (100 / properties.length)}%, 0px, 0px)`
              }}
            >
              {carouselItems}
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
        <SlickDots currentPage={this.state.property.index + 1} />
        {/* <TodoApp /> */}
      </div>
    );
  }
}

export default Carousel;
