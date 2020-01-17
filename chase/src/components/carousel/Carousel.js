import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  render() {
    return (
      <div className='carousel'>
        <Arrow
          direction='left'
          clickFunction={this.previousSlide}
          glyph='&#9664;'
        />
        <ImageSlide url={'header-back.jpg'} />
        <Arrow
          direction='right'
          clickFunction={this.nextSlide}
          glyph='&#9654;'
        />
      </div>
    );
  }
}

export default Carousel;
