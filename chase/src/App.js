import React, { Component } from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/layout/Sidebar';
import Carousel from './components/carousel/Carousel';
import HeaderBackground from './components/layout/HeaderBackground';
import PropTypes from 'prop-types';
import MosaicContainer from './components/mosaic/MosaicContainer';
import NewsMosaicContainer from './components/mosaic/NewsAndStoriesMosaic/NewsMosaicContainer';
// import './carousel.scss';
import {
  changeHeaderBlue,
  changeHeaderBlack,
  animateTitle
} from './actions/HeaderActions';
import { connect } from 'react-redux';
import AdsContainer from './components/Ads/AdsContainer';
import FooterContainer from './components/layout/footer/FooterContainer';
// import Trial from './components/transitions/trial';
class App extends Component {
  state = { headerColor: 'rgba(0, 0, 0, 0.7)' };
  listenScrollEvent = e => {
    //console.log(window.scrollY);
    if (window.scrollY > 384) {
      this.props.changeHeaderBlue();
    } else {
      this.props.changeHeaderBlack();
    }
  };

  titleAnimate = e => {
    // console.log(window.scrollY);
    // if (window.scrollY <= 200) {
    // console.log('title');
    this.props.animateTitle(window.scrollY);
    // }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener('scroll', this.titleAnimate);
  };

  render() {
    // var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div style={{ height: '5000px' }}>
        <Sidebar />
        <HeaderBackground />
        {/* <Carousel items={items} active={0} />, */}
        <Carousel active={0} />
        />
        {/* <MosaicContainer />
        <AdsContainer />
        <NewsMosaicContainer />
        <FooterContainer /> */}
        {/* <Trial /> */}
      </div>
    );
  }
}
App.propTypes = {
  changeHeaderBlue: PropTypes.func.isRequired,
  changeHeaderBlack: PropTypes.func.isRequired
};
export default connect(null, {
  changeHeaderBlue,
  changeHeaderBlack,
  animateTitle
})(App);
