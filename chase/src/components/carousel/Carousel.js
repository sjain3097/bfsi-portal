import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

const imgUrls = [
  'carousel-img/car.png',
  'carousel-img/credit-card.png',
  'carousel-img/home.png',
  'carousel-img/piggy-bank.png',
  'carousel-img/suitcase.png',
  'carousel-img/tachometer.png',
  'carousel-img/user.png',
  'carousel-img/chart.png'
];
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
      fifth: 4
    };
  }
  //working
  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { first, second, third, fourth, fifth } = this.state;
    const n_first = first === 0 ? lastIndex : first - 1;
    // console.log(n_first);
    this.setState({
      first: n_first
    });
    const n_second = second === 0 ? lastIndex : second - 1;
    this.setState({
      second: n_second
    });
    const n_third = third === 0 ? lastIndex : third - 1;
    this.setState({
      third: n_third
    });
    const n_fourth = fourth === 0 ? lastIndex : fourth - 1;
    this.setState({
      fourth: n_fourth
    });
    const n_fifth = fifth === 0 ? lastIndex : fifth - 1;
    this.setState({
      fifth: n_fifth
    });
    console.log(this.state);
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { first, second, third, fourth, fifth } = this.state;
    const n_first = first === lastIndex ? 0 : first + 1;
    this.setState({
      first: n_first
    });
    const n_second = second === lastIndex ? 0 : second + 1;
    this.setState({
      second: n_second
    });
    const n_third = third === lastIndex ? 0 : third + 1;
    this.setState({
      third: n_third
    });
    const n_fourth = fourth === lastIndex ? 0 : fourth + 1;
    this.setState({
      fourth: n_fourth
    });
    const n_fifth = fifth === lastIndex ? 0 : fifth + 1;
    this.setState({
      fifth: n_fifth
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className='carousel'>
        <Arrow
          direction='left'
          clickFunction={this.previousSlide}
          glyph={<i class='fa fa-angle-left'></i>}
        />
        <ImageSlide url={imgUrls[this.state.first]} />
        <ImageSlide url={imgUrls[this.state.second]} />
        <ImageSlide url={imgUrls[this.state.third]} />
        <ImageSlide url={imgUrls[this.state.fourth]} />
        <ImageSlide url={imgUrls[this.state.fifth]} />
        <Arrow
          direction='right'
          clickFunction={this.nextSlide}
          glyph={<i class='fa fa-angle-right'></i>}
        />
      </div>
    );
  }
}

export default Carousel;
