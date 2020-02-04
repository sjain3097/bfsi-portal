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
    this.state = { cards: imgUrls };
  }

  componentDidUpdate() {
    $('#myCarousel').on('slide.bs.carousel', function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == 'left') {
            $('.carousel-item')
              .eq(i)
              .appendTo('.carousel-inner');
          } else {
            $('.carousel-item')
              .eq(0)
              .appendTo($(this).find('.carousel-inner'));
          }
        }
      }
    });
  }
  //working
  previousSlide = () => {};

  nextSlide = () => {};

  render() {
    return (
      <div className='container-fluid'>
        <span className='carousel__heading'>Choose what's right for you</span>
        <div style={{}}>
          <div
            className=''
            style={{
              backgroundColor: 'yellow',
              display: 'flex',
              width: '70%'
            }}
          >
            {this.state.cards.map(card => (
              <ImageSlide
                id={`slick-${card.index}-active`}
                Icon={card.icon}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
