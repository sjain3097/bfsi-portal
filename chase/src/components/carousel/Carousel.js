import React, { Component } from "react";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";

const imgUrls = ["carousel-img/1.jpg", "carousel-img/2.jpg"];
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetImageIndex = currentImageIndex === 0;
    const index = shouldResetImageIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetImageIndex = currentImageIndex === lastIndex;
    const index = shouldResetImageIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    return (
      <div className='carousel'>
        <Arrow
          direction='left'
          clickFunction={this.previousSlide}
          glyph='&#9664;'
        />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
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
