import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { openNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
import { ReactComponent as MoneyCheck } from '../../svgs/money-check.svg';
import { ReactComponent as PiggyBank } from '../../svgs/piggy-bank.svg';
import { ReactComponent as Car } from '../../svgs/car-side.svg';
import { ReactComponent as Wallet } from '../../svgs/wallet.svg';
import { ReactComponent as Home } from '../../svgs/home.svg';
import { ReactComponent as Briefcase } from '../../svgs/briefcase.svg';
import { ReactComponent as City } from '../../svgs/city.svg';
import { ReactComponent as More } from '../../svgs/more.svg';
import { ReactComponent as CreditCard } from '../../svgs/credit-card.svg';
import HeaderDropDown from './HeaderDropDown';
import {
  showHeaderDropDown,
  hideHeaderDropDown
} from '../../actions/HeaderActions';
class Header extends Component {
  state = {
    headerDropDown: 'd_block_drop_down',
    headerColor: this.props.color
  };

  hideHeaderDropDown = e => {
    this.setState({ headerDropDown: 'd_block_drop_down' });
  };
  showHeaderDropDown = e => {
    this.setState({ headerDropDown: '' });
  };
  render() {
    return (
      // background image at the start
      <header>
        <div
          className='container-fluid'
          className='header'
          style={{
            'background-color': this.props.color
          }}
        >
          {/* left header block */}
          <div className='row'>
            <div
              className=' col-2 col-md-4'
              // style={{
              //    'background-color': 'green',
              //   height: '70px',
              //   border: '2px solid red'
              // }}
            >
              <div className='row'>
                <div
                  className='col-6 col-md-4'
                  //className='header-vertical-align'
                  // style={{ 'background-color': 'yellow', height: '70px' }}
                >
                  <a className='btn'>
                    <i
                      className='fa fa-bars fa-2x '
                      aria-hidden='true'
                      onClick={this.props.openNav}
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </div>
                <div
                  className='col-md-8 d-s-block d-xs-block'
                  onMouseOver={this.props.showHeaderDropDown}
                  onMouseOut={this.props.hideHeaderDropDown}
                  // style={{ 'background-color': 'violet', height: '70px' }}
                >
                  <a id='track_link' className='track_link' href=''>
                    Open an account<i class='fa fa-chevron-down'></i>
                  </a>
                </div>
              </div>
            </div>

            {/* CENTER HEADER BLOCK */}
            <div
              className='col-6 col-md-4'
              // style={{
              //   'background-color': 'blue',
              //   height: '70px',
              //   border: '2px solid red'
              // }}
            >
              <div className='row'>
                <div
                  className='col-6 col-md-6 title'
                  // style={{
                  //   'background-color': 'red',
                  //   height: '70px'
                  // }}
                >
                  <img className='chase_text' src='chase_text_white.png' />
                </div>
                <div
                  className='col-3 col-md-6'
                  // style={{ 'background-color': 'violet', height: '70px' }}
                >
                  <span>
                    <a href='index.html'>
                      <img className='logo' src='hexa_white.png' />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* right header block */}
            <div
              className='col-4 col-md-4'
              // style={{
              //   'background-color': 'red',
              //   height: '70px',
              //   border: '2px solid red'
              // }}
            >
              <div className='row'>
                <div
                  className='col-md-4 d-s-block d-xs-block'
                  //style={{ 'background-color': 'yellow', height: '70px' }}
                >
                  <a className='track_link' href=''>
                    ATM & branch
                  </a>
                </div>
                <div
                  className='col-md-3 d-s-block d-xs-block'
                  // style={{ 'background-color': 'violet', height: '70px' }}
                >
                  <a className='track_link' href=''>
                    Español
                  </a>
                </div>
                <div
                  className='column-ipad'
                  style={
                    {
                      //'margin-left': '0%', //in Iphone-x
                      //'background-color': 'indigo'
                    }
                  }
                >
                  <a className='sign_in button' href=''>
                    Sign in
                  </a>
                </div>
                <div
                  className='col-md-2 d-xs-block'
                  // style={{ 'background-color': 'blue', height: '70px' }}
                >
                  <a href=''>
                    <i
                      className='fa fa-search fa-lg'
                      aria-hidden='true'
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  openNav: PropTypes.func.isRequired
};
export default connect(null, {
  openNav,
  showHeaderDropDown,
  hideHeaderDropDown
})(Header);
