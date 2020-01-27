import React, { Component } from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/layout/Sidebar';
import Carousel from './components/carousel/Carousel';
import HeaderBackground from './components/layout/HeaderBackground';
import PropTypes from 'prop-types';
import { changeHeaderBlue, changeHeaderBlack } from './actions/HeaderActions';
import { connect } from 'react-redux';
// import Trial from './components/transitions/trial';
class App extends Component {
  state = { headerColor: 'rgba(0, 0, 0, 0.7)' };
  listenScrollEvent = e => {
    if (window.scrollY > 384) {
      this.props.changeHeaderBlue();
    } else {
      this.props.changeHeaderBlack();
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenScrollEvent);
  };

  render() {
    return (
      <div style={{ height: '2000px' }}>
        <Sidebar />
        <HeaderBackground />
        {/* <Carousel /> */}
        {/* <Trial /> */}
      </div>
    );
  }
}
App.propTypes = {
  changeHeaderBlue: PropTypes.func.isRequired,
  changeHeaderBlack: PropTypes.func.isRequired
};
export default connect(null, { changeHeaderBlue, changeHeaderBlack })(App);
