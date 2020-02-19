import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { openNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
import {
  showHeaderDropDown,
  hideHeaderDropDown
} from '../../actions/HeaderActions';
class Header extends Component {
  state = {
    headerColor: this.props.color
  };

  render() {
    return (
      // background image at the start
      <div>
        <header
          className='header'
          style={{
            backgroundColor: this.props.headerColor
          }}
        >
          <div
            className=' '
            style={{
              margin: 'auto',
              width: '93%',
              marginTop: '10px'
            }}
          >
            <div className='row ' style={{ height: '65px' }}>
              {/* Right block */}
              <div className='col-2 col-sm-2 col-md-4 '>
                <nav>
                  <ul className='row '>
                    <li className='col-12 col-sm-5 col-md-3 ' id='bars'>
                      <a className='btn'>
                        <i
                          className='fa fa-bars fa-2x header--link'
                          aria-hidden='true'
                          onClick={this.props.openNav}
                          // style={link}
                        ></i>
                      </a>
                    </li>
                    <li
                      className='col-md-6  d-m-block  header--link'
                      onMouseOver={this.props.showHeaderDropDown}
                      onMouseOut={this.props.hideHeaderDropDown}
                    >
                      <a className='header--link' href=''>
                        Open an account<i class='fa fa-chevron-down'></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Center block */}
              <div className='col-7 col-sm-6 col-md-4 '>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <div className='' style={{ position: 'relative' }}>
                    <div
                      className=''
                      style={{
                        position: 'absolute',
                        overflowX: 'hidden',
                        right: '-53px'
                      }}
                    >
                      <img
                        className='chase_text'
                        style={{
                          'margin-left': this.props.titleMargin,
                          opacity: this.props.titleOpacity
                        }}
                        src='chase_text_white.png'
                      />
                    </div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div
                      className=' '
                      style={{
                        position: 'absolute',
                        left: this.props.logoShift
                      }}
                    >
                      <img
                        className=''
                        style={{
                          height: '50px',
                          width: '50px',
                          marginTop: '-3%'
                        }}
                        src='hexa_white.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Left block */}
              <div className='col-3 col-sm-4 col-md-4 '>
                {/* <div className='row' style={{ float: 'right' }}> */}
                <nav className=''>
                  <ul className='row justify-content-end'>
                    <li className='col-md-4 d-m-block header--link'>
                      <a className='header--link' href=''>
                        ATM & Branch
                      </a>
                    </li>
                    <li className='col-md-3 d-m-block header--link'>
                      <a className='header--link' href=''>
                        Español
                      </a>
                    </li>
                    <li className='col-12 col-sm-7 col-md-3  '>
                      <a className='sign_in button' href=''>
                        Sign in
                      </a>
                    </li>
                    <li className='col-2 col-sm-2 col-md-2 d-s-block header--link'>
                      <a className='header--link' href=''>
                        <i
                          className='fa fa-search fa-lg'
                          aria-hidden='true'
                          // className='header--link'
                        ></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
Header.propTypes = {
  openNav: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    headerColor: state.header.headerColor,
    titleMargin: state.header.titleMargin,
    titleOpacity: state.header.titleOpacity,
    logoShift: state.header.logoShift
  };
};
export default connect(mapStateToProps, {
  openNav,
  showHeaderDropDown,
  hideHeaderDropDown
})(Header);
